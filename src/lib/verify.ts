import {
  verificationRegistry,
  type VerificationRecord,
} from "@/data/verification";

export function normalizeVerificationCode(raw: string): string {
  return raw.trim().replace(/\s+/g, "").toUpperCase();
}

export function lookupVerificationCode(
  raw: string
): VerificationRecord | null {
  const code = normalizeVerificationCode(raw);
  if (!code) return null;
  return verificationRegistry[code] ?? null;
}
