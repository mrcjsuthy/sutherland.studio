import { NextResponse } from "next/server";
import { site, vacancies } from "@/data/site";
import { emailShell, NOTIFY_TO, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

type ApplyPayload = {
  name?: string;
  email?: string;
  role?: string;
  link?: string;
  message?: string;
};

function ref(): string {
  return `APP-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(req: Request) {
  let body: ApplyPayload;
  try {
    body = (await req.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, link, message } = body;
  const roleCode = body.role ?? "speculative";

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const v = vacancies.find((x) => x.code === roleCode);
  const roleLabel = v
    ? `${v.code} · ${v.title} (${v.kind} · ${v.location})`
    : "Speculative — open application";

  const appRef = ref();
  const submittedAt = new Date().toISOString();

  const rows: Array<[string, string]> = [
    ["Reference", `#${appRef}`],
    ["Role", roleLabel],
    ["Name", name],
    ["Email", email],
  ];
  if (link && link.trim()) rows.push(["Link", link.trim()]);
  rows.push(["Message", message.trim()]);

  const adminHtml = emailShell({
    preheader: `New application · ${name} · ${roleLabel}`,
    title: `New application — ${name}`,
    intro: `Reply directly to this email to reach ${name}.`,
    rows,
    footer: `Submitted ${submittedAt} · Sutherland Studio`,
  });
  const adminText = ["New application", "", ...rows.map(([k, v]) => `${k}: ${v}`), "", `Submitted ${submittedAt}`].join("\n");

  const userHtml = emailShell({
    preheader: `Application received · ${roleLabel}`,
    title: `Thanks, ${name.split(" ")[0] || name}.`,
    intro: `We've received your application. We'll reply within five working days.`,
    rows: [
      ["Reference", `#${appRef}`],
      ["Role", roleLabel],
    ],
    cta: { label: "Sutherland Studio", href: `https://${site.domain}` },
    footer: `${site.name} · ${site.email}`,
  });
  const userText = [
    `Thanks, ${name.split(" ")[0] || name}.`,
    ``,
    `We've received your application.`,
    `Reference: #${appRef}`,
    `Role: ${roleLabel}`,
    ``,
    `We'll reply within five working days.`,
    `${site.name} · ${site.email}`,
  ].join("\n");

  const mailerConfigured = Boolean(process.env.RESEND_API_KEY);

  if (!mailerConfigured) {
    console.warn("[api/apply] RESEND_API_KEY not set; application logged:", {
      ref: appRef, name, email, role: roleCode, at: submittedAt,
    });
    return NextResponse.json({ ok: true, ref: appRef, mailer: "disabled" });
  }

  const adminResult = await sendMail({
    to: NOTIFY_TO,
    subject: `Application · ${roleLabel} · ${name}`,
    html: adminHtml,
    text: adminText,
    replyTo: email,
  });
  const userResult = await sendMail({
    to: email,
    subject: `Application received — ${site.name}`,
    html: userHtml,
    text: userText,
    replyTo: NOTIFY_TO,
  });

  if (!adminResult.ok) {
    console.error("[api/apply] Studio notification failed:", adminResult.error);
    return NextResponse.json(
      { ok: false, error: `Couldn't send application — please email ${site.email}` },
      { status: 502 },
    );
  }
  if (!userResult.ok) {
    console.warn("[api/apply] Applicant confirmation failed:", userResult.error);
  }

  return NextResponse.json({ ok: true, ref: appRef });
}
