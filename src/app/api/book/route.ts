import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { emailShell, NOTIFY_TO, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

type BookingPayload = {
  name?: string;
  email?: string;
  type?: string;
  budget?: string;
  date?: string;
  time?: string;
  brief?: string;
};

function makeRef(): string {
  return `SS-${Math.floor(1000 + Math.random() * 9000)}`;
}

function formatDate(iso: string): string {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("en-NZ", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export async function POST(req: Request) {
  let body: BookingPayload;
  try {
    body = (await req.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, type, budget, date, time, brief } = body;

  if (!name || !email || !date || !time) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  const emailOk = /.+@.+\..+/.test(email);
  if (!emailOk) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }

  const ref = makeRef();
  const niceDate = formatDate(date);

  const rows: Array<[string, string]> = [
    ["Reference", `#${ref}`],
    ["When", `${niceDate} · ${time} NZT`],
    ["Project", type ?? "—"],
    ["Budget", budget ? `NZD ${budget}` : "Open"],
    ["Name", name],
    ["Email", email],
  ];
  if (brief && brief.trim()) rows.push(["Brief", brief.trim()]);

  const submittedAt = new Date().toISOString();

  // ---- 1. Notify the studio ------------------------------------------------
  const adminHtml = emailShell({
    preheader: `New consultation booking · ${name} · ${niceDate} ${time}`,
    title: `New booking — ${name}`,
    intro: `A consultation has been requested. Reply directly to this email to reach ${name}.`,
    rows,
    footer: `Submitted ${submittedAt} · Sutherland Studio`,
  });

  const adminText = [
    `New consultation booking`,
    ``,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ``,
    `Submitted ${submittedAt}`,
  ].join("\n");

  const adminResult = await sendMail({
    to: NOTIFY_TO,
    subject: `Booking · ${name} · ${niceDate} ${time}`,
    html: adminHtml,
    text: adminText,
    replyTo: email,
  });

  // ---- 2. Confirm to the booker -------------------------------------------
  const userHtml = emailShell({
    preheader: `Booking confirmed for ${niceDate} at ${time}.`,
    title: `Grazie, ${name.split(" ")[0] || name}.`,
    intro:
      `You're booked in for a 60-minute consultation. We'll be in touch the day before with the workshop address (or a video link). If you need to reschedule, just reply to this email.`,
    rows: [
      ["Reference", `#${ref}`],
      ["When", `${niceDate} · ${time} NZT`],
      ["Where", "Workshop · Milford, Auckland (or Zoom)"],
      ["Fee", "NZD 180 — invoiced after the session, applied to your build if you commission."],
    ],
    cta: { label: "Sutherland Studio", href: `https://${site.domain}` },
    footer: `${site.name} · ${site.email}`,
  });

  const userText = [
    `Grazie, ${name.split(" ")[0] || name}.`,
    ``,
    `You're booked in for a 60-minute consultation.`,
    ``,
    `Reference: #${ref}`,
    `When: ${niceDate} · ${time} NZT`,
    `Where: Workshop · Milford, Auckland (or Zoom)`,
    `Fee: NZD 180 — invoiced after the session.`,
    ``,
    `If you need to reschedule, just reply to this email.`,
    ``,
    `${site.name}`,
    `${site.email} · https://${site.domain}`,
  ].join("\n");

  const userResult = await sendMail({
    to: email,
    subject: `Booking confirmed — ${niceDate} at ${time}`,
    html: userHtml,
    text: userText,
    replyTo: NOTIFY_TO,
  });

  // Booking success criteria:
  // - Mailer not configured → log full booking server-side and still return ok
  //   so the form doesn't break before RESEND_API_KEY is set in env. The
  //   warning in console makes this obvious in dev/CI logs.
  // - Mailer configured but admin email failed → return 502 (real failure).
  // - Mailer configured, admin email sent, user confirmation failed →
  //   still success (admin has the booking and can follow up).
  const mailerConfigured = Boolean(process.env.RESEND_API_KEY);

  if (!mailerConfigured) {
    console.warn("[api/book] RESEND_API_KEY not set; booking logged but no email sent:", {
      ref,
      name,
      email,
      type,
      budget,
      date,
      time,
      brief: brief?.slice(0, 280),
      at: submittedAt,
    });
    return NextResponse.json({ ok: true, ref, mailer: "disabled" });
  }

  if (!adminResult.ok) {
    console.error("[api/book] Studio notification failed:", adminResult.error);
    return NextResponse.json(
      { ok: false, error: `Couldn't send booking — please try again or email ${site.email}` },
      { status: 502 },
    );
  }

  if (!userResult.ok) {
    console.warn("[api/book] User confirmation failed:", userResult.error);
  }

  return NextResponse.json({ ok: true, ref });
}
