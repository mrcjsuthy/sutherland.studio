import { NextResponse } from "next/server";

type BookingPayload = {
  name?: string;
  email?: string;
  type?: string;
  budget?: string;
  date?: string;
  time?: string;
  brief?: string;
};

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

  // For now we just log to the server. Wire up Resend/SendGrid/Postmark/etc.
  // in production by reading process.env.RESEND_API_KEY (or similar) and
  // sending a confirmation email here.
  console.log("[Sutherland Studio] New booking:", {
    name,
    email,
    type,
    budget,
    date,
    time,
    brief: brief?.slice(0, 280),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
