# Sutherland Studio

The single-page site for **Sutherland Studio** — an industrial design & build practice based in Tāmaki Makaurau (Auckland), New Zealand.

Florence-trained sensibility, South Pacific texture, considered objects made by hand.

---

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** + **Tailwind v4**
- **next/font** loading [Fraunces](https://fonts.google.com/specimen/Fraunces) (display), [Inter](https://fonts.google.com/specimen/Inter) (body), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (technical labels)
- No image dependencies — work-portfolio plates are rendered as inline SVG so the site ships fast on day one and is easy to swap for real photography later

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve production build
```

## Project structure

```
src/
  app/
    layout.tsx           Root layout — fonts, metadata, SEO
    page.tsx             Single-page composition
    globals.css          Design tokens, utilities, animations
    api/book/route.ts        Booking POST endpoint (Resend)
    api/subscribe/route.ts   Newsletter POST endpoint (Resend)
  components/
    Nav.tsx              Sticky header + mobile menu
    Hero.tsx             Editorial hero with index, big wordmark, locations
    Ticker.tsx           Marquee ticker (3 variants)
    Manifesto.tsx        About / manifesto / studio principles
    Work.tsx             Asymmetric portfolio grid with SVG plates
    Services.tsx         Services table + Shop list + pre-order CTA
    Process.tsx          Dark "From sketch to delivery" five-step
    Booking.tsx          Interactive consultation booking form
    Footer.tsx           Big wordmark, contact, index, newsletter
    Newsletter.tsx       Newsletter signup client form
  data/
    site.ts              All editable copy: services, products, work, process
  lib/
    mailer.ts            Resend client + shared HTML email template
```

## Editing content

Almost all copy lives in `src/data/site.ts`. To add a new piece of work, a new service, a new product or change the process steps, edit that file — components read from it. Prices, lead times, materials and Italian product names are all there.

## Email — booking + newsletter

Two API routes power the site’s contact paths:

- `POST /api/book` — consultation booking. Sends a notification to the studio inbox **and** a styled confirmation to the booker.
- `POST /api/subscribe` — newsletter signup. Sends a notification to the studio inbox.

Both use [Resend](https://resend.com). Setup:

1. Sign up at https://resend.com and create an API key.
2. Add the `sutherland.studio` domain in Resend → **Domains** and add the DNS records they show you at your registrar. Sending from a verified domain is required for delivery to real inboxes — until verification finishes, you can only send test mail to the email tied to your Resend account.
3. Copy `.env.example` → `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Then in Vercel: **Project → Settings → Environment Variables**, add the same `RESEND_API_KEY`, `MAIL_FROM`, and `MAIL_NOTIFY` values for Production (and Preview if you want to test).

The two routes degrade gracefully — if `RESEND_API_KEY` isn’t set the request still returns `ok` and logs to the server console, so the form doesn’t break on first deploy. Once the key is set, real email starts flowing.

To swap to a hosted calendar instead, drop in a [Cal.com](https://cal.com) embed in `Booking.tsx`.

## Design system

Colours (defined in `globals.css`):

| Token       | Value     | Use                                |
|-------------|-----------|------------------------------------|
| `--bone`    | `#ece6d8` | Page background                    |
| `--paper`   | `#f3eee2` | Slightly warmer panel background   |
| `--chalk`   | `#d9d1bc` | Soft surfaces, dividers            |
| `--ink`     | `#14130f` | Body text, dark sections           |
| `--graphite`| `#2a2823` | Secondary text                     |
| `--concrete`| `#8b8579` | Tertiary text, metadata            |
| `--rust`    | `#c2410c` | Primary accent (pops of colour)    |
| `--signal`  | `#e94e1b` | Brighter accent on dark surfaces   |
| `--moss`    | `#4a5d3a` | Secondary accent — used sparingly  |
| `--copper`  | `#b66d3a` | Tertiary accent                    |

Typography:

- `font-display` — Fraunces (variable, opsz + SOFT axes). Used for all editorial type.
- `font-sans` — Inter. Body copy.
- `font-mono` — JetBrains Mono. Section markers, labels, tags, codes (S/01, P/001).

Reusable patterns:

- `.label` / `.label-ink` — small caps mono "tag" text
- `.hairline` / `.hairline-strong` — section dividers in two intensities
- `.grit` / `.grit-light` — subtle film-grain texture overlay
- `.btn-primary` / `.btn-ghost` — call-to-action styles
- `.field` — minimal underline form input

## Deployment

This is a stock Next.js 16 project. Easiest path:

1. Push to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Point `sutherland.studio` at it via DNS (CNAME `@` → `cname.vercel-dns.com`)

That's it. No environment variables required to ship the site as-is.

---

© Sutherland Studio. All work hand-built in Aotearoa.
