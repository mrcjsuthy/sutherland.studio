import { NextResponse } from "next/server";
import { release, site } from "@/data/site";
import { emailShell, NOTIFY_TO, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

type OrderPayload = {
  name?: string;
  email?: string;
  qty?: number;
  address?: string;
  note?: string;
};

function ref(): string {
  return `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
}

export async function POST(req: Request) {
  // Gate: refuse orders before unlockAt or after closesAt / soldOut.
  const now = Date.now();
  const unlocksAt = new Date(release.unlockAt).getTime();
  const closesAt = new Date(release.closesAt).getTime();
  if (release.soldOut) {
    return NextResponse.json(
      { ok: false, error: "Edition is sold out." },
      { status: 410 },
    );
  }
  if (now < unlocksAt) {
    return NextResponse.json(
      { ok: false, error: "Release is not unlocked yet." },
      { status: 423 },
    );
  }
  if (now > closesAt) {
    return NextResponse.json(
      { ok: false, error: "Release has closed." },
      { status: 410 },
    );
  }

  let body: OrderPayload;
  try {
    body = (await req.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, address, note } = body;
  const qty = Math.max(1, Math.min(3, Number(body.qty) || 1));

  if (!name || !email || !address) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }
  if (!/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const orderRef = ref();
  const total = release.price * qty;
  const submittedAt = new Date().toISOString();

  const rows: Array<[string, string]> = [
    ["Reference", `#${orderRef}`],
    ["Release", `${release.code} — ${release.title}`],
    ["Quantity", String(qty)],
    ["Unit price", `${release.currency} ${release.price.toLocaleString("en-NZ")} ex GST`],
    ["Total", `${release.currency} ${total.toLocaleString("en-NZ")} ex GST`],
    ["Name", name],
    ["Email", email],
    ["Ship to", address],
  ];
  if (note && note.trim()) rows.push(["Note", note.trim()]);

  const adminHtml = emailShell({
    preheader: `New release order · ${name} · ${release.code} ×${qty}`,
    title: `New order — ${release.title}`,
    intro: `${name} has reserved ${qty} piece${qty > 1 ? "s" : ""}. Reply directly to confirm and invoice.`,
    rows,
    footer: `Submitted ${submittedAt} · Sutherland Studio`,
  });
  const adminText = ["New release order", "", ...rows.map(([k, v]) => `${k}: ${v}`), "", `Submitted ${submittedAt}`].join("\n");

  const userHtml = emailShell({
    preheader: `Reserved · ${release.title}`,
    title: `Reserved, ${name.split(" ")[0] || name}.`,
    intro: `Your ${release.title} ${qty > 1 ? `(× ${qty})` : ""} is reserved. We'll be in touch within 24h to confirm stock and arrange payment.`,
    rows: [
      ["Reference", `#${orderRef}`],
      ["Total", `${release.currency} ${total.toLocaleString("en-NZ")} ex GST`],
      ["Ship to", address],
      ["Lead time", "Ships within 4 weeks of payment."],
    ],
    cta: { label: "Sutherland Studio", href: `https://${site.domain}` },
    footer: `${site.name} · ${site.email}`,
  });
  const userText = [
    `Reserved, ${name.split(" ")[0] || name}.`,
    ``,
    `Your ${release.title} ${qty > 1 ? `(× ${qty})` : ""} is reserved.`,
    `Reference: #${orderRef}`,
    `Total: ${release.currency} ${total.toLocaleString("en-NZ")} ex GST`,
    `Ship to: ${address}`,
    ``,
    `We'll be in touch within 24h to confirm stock and arrange payment.`,
    `${site.name} · ${site.email}`,
  ].join("\n");

  const mailerConfigured = Boolean(process.env.RESEND_API_KEY);

  if (!mailerConfigured) {
    console.warn("[api/order] RESEND_API_KEY not set; order logged but no email sent:", {
      ref: orderRef, name, email, qty, address, at: submittedAt,
    });
    return NextResponse.json({ ok: true, ref: orderRef, mailer: "disabled" });
  }

  const adminResult = await sendMail({
    to: NOTIFY_TO,
    subject: `Order · ${release.code} · ${name} ×${qty}`,
    html: adminHtml,
    text: adminText,
    replyTo: email,
  });

  const userResult = await sendMail({
    to: email,
    subject: `Reserved — ${release.title} (#${orderRef})`,
    html: userHtml,
    text: userText,
    replyTo: NOTIFY_TO,
  });

  if (!adminResult.ok) {
    console.error("[api/order] Studio notification failed:", adminResult.error);
    return NextResponse.json(
      { ok: false, error: `Couldn't place order — please email ${site.email}` },
      { status: 502 },
    );
  }
  if (!userResult.ok) {
    console.warn("[api/order] Buyer confirmation failed:", userResult.error);
  }

  return NextResponse.json({ ok: true, ref: orderRef });
}
