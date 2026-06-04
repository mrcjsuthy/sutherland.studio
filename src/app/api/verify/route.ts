import { lookupVerificationCode } from "@/lib/verify";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const code = new URL(req.url).searchParams.get("code") ?? "";
  const record = lookupVerificationCode(code);

  if (!record) {
    return NextResponse.json(
      { ok: false, error: "No piece registered to this code." },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, record });
}

export async function POST(req: Request) {
  let body: { code?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }

  const record = lookupVerificationCode(body.code ?? "");
  if (!record) {
    return NextResponse.json(
      { ok: false, error: "No piece registered to this code." },
      { status: 404 }
    );
  }

  return NextResponse.json({ ok: true, record });
}
