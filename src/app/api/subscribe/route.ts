import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { emailShell, NOTIFY_TO, sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

type SubscribePayload = {
  email?: string;
};

export async function POST(req: Request) {
  let body: SubscribePayload;
  try {
    body = (await req.json()) as SubscribePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim();
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  const at = new Date().toISOString();
  const mailerConfigured = Boolean(process.env.RESEND_API_KEY);

  if (!mailerConfigured) {
    console.warn("[api/subscribe] RESEND_API_KEY not set; subscriber logged only:", { email, at });
    return NextResponse.json({ ok: true, mailer: "disabled" });
  }

  const html = emailShell({
    preheader: `New newsletter subscriber: ${email}`,
    title: `New subscriber`,
    intro: `Someone just signed up to the Sutherland Studio newsletter.`,
    rows: [
      ["Email", email],
      ["At", at],
    ],
    footer: `Sutherland Studio · ${site.email}`,
  });

  const text = `New subscriber\n\nEmail: ${email}\nAt: ${at}\n`;

  const result = await sendMail({
    to: NOTIFY_TO,
    subject: `Newsletter — ${email}`,
    html,
    text,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("[api/subscribe] notify failed:", result.error);
    return NextResponse.json(
      { ok: false, error: `Couldn't subscribe — please email ${site.email}` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
