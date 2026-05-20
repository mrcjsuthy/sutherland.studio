import { Resend } from "resend";
import { site } from "@/data/site";

// Lazily construct the client so that builds don't fail when the API key
// is missing (e.g. during local builds before the secret is configured).
let _resend: Resend | null | undefined;

function getResend(): Resend | null {
  if (_resend !== undefined) return _resend;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    _resend = null;
    return null;
  }
  _resend = new Resend(key);
  return _resend;
}

/**
 * Default outbound address. Must be on a Resend-verified domain.
 * Override with MAIL_FROM in env (e.g. while you’re still on resend.dev for testing).
 */
const FROM = process.env.MAIL_FROM ?? `Sutherland Studio <bookings@${site.domain}>`;

/** Internal address that receives notifications. */
const NOTIFY_TO = process.env.MAIL_NOTIFY ?? site.email;

export type MailMessage = {
  to: string | string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail(msg: MailMessage): Promise<{ ok: true } | { ok: false; error: string }> {
  const resend = getResend();
  if (!resend) {
    // Don’t crash the request path in dev / before the key is wired up — just log.
    console.warn(
      "[mailer] RESEND_API_KEY not set; would have sent:",
      { to: msg.to, subject: msg.subject },
    );
    return { ok: false, error: "Mail service not configured" };
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: msg.to,
    subject: msg.subject,
    html: msg.html,
    text: msg.text,
    replyTo: msg.replyTo,
  });

  if (error) {
    console.error("[mailer] send failed:", error);
    return { ok: false, error: error.message ?? "Send failed" };
  }
  return { ok: true };
}

export { FROM as MAIL_FROM, NOTIFY_TO };

// ---------------------------------------------------------------------------
// Shared HTML chrome — bone background, ink type, Fraunces / mono accents.
// Keeps inbound email visually consistent with the site without needing assets.
// ---------------------------------------------------------------------------

export function emailShell({
  preheader,
  title,
  intro,
  rows,
  cta,
  footer,
}: {
  preheader: string;
  title: string;
  intro?: string;
  rows?: Array<[string, string]>;
  cta?: { label: string; href: string };
  footer?: string;
}): string {
  const rowsHtml = rows
    ? rows
        .map(
          ([k, v]) => `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid rgba(20,19,15,0.12);width:38%;vertical-align:top;">
                <span style="font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#8b8579;">${escape(k)}</span>
              </td>
              <td style="padding:10px 0;border-bottom:1px solid rgba(20,19,15,0.12);font-family:Georgia,'Times New Roman',serif;font-size:16px;color:#14130f;">${escape(v)}</td>
            </tr>`,
        )
        .join("")
    : "";

  const ctaHtml = cta
    ? `<a href="${escapeAttr(cta.href)}" style="display:inline-block;margin-top:24px;padding:14px 20px;background:#14130f;color:#ece6d8;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:11px;letter-spacing:0.18em;text-transform:uppercase;text-decoration:none;">${escape(cta.label)} →</a>`
    : "";

  return `<!doctype html><html><body style="margin:0;padding:0;background:#ece6d8;">
    <span style="display:none;visibility:hidden;opacity:0;color:transparent;height:0;width:0;font-size:1px;line-height:1px;mso-hide:all;">${escape(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ece6d8;padding:40px 16px;">
      <tr><td align="center">
        <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#f3eee2;border:1px solid rgba(20,19,15,0.32);">
          <tr><td style="padding:32px 36px 8px;">
            <p style="margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8b8579;">${escape(site.domain)}</p>
            <h1 style="margin:18px 0 0;font-family:Georgia,'Times New Roman',serif;font-weight:300;font-size:36px;line-height:1.05;letter-spacing:-0.02em;color:#14130f;">${escape(title)}</h1>
          </td></tr>
          ${
            intro
              ? `<tr><td style="padding:14px 36px 0;"><p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.6;color:#2a2823;">${escape(intro)}</p></td></tr>`
              : ""
          }
          ${
            rowsHtml
              ? `<tr><td style="padding:18px 36px 8px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table></td></tr>`
              : ""
          }
          ${ctaHtml ? `<tr><td style="padding:4px 36px 28px;">${ctaHtml}</td></tr>` : ""}
          <tr><td style="padding:20px 36px 28px;border-top:1px solid rgba(20,19,15,0.12);">
            <p style="margin:0;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#8b8579;">
              ${escape(footer ?? "Sutherland Studio · Milford, Auckland · Aotearoa New Zealand")}
            </p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s: string): string {
  return escape(s);
}
