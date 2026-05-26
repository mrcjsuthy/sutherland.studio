import { NextResponse } from "next/server";
import { release, site } from "@/data/site";

export const runtime = "nodejs";

type OrderPayload = {
  name?: string;
  email?: string;
  qty?: number;
  address?: string;
  note?: string;
};

export async function POST() {
  if (!release.available) {
    return NextResponse.json(
      { ok: false, error: "No release is available to order yet." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { ok: false, error: `Register interest via the booking form or email ${site.email}.` },
    { status: 503 },
  );
}
