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
    api/book/route.ts    Booking POST endpoint
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
  data/
    site.ts              All editable copy: services, products, work, process
```

## Editing content

Almost all copy lives in `src/data/site.ts`. To add a new piece of work, a new service, a new product or change the process steps, edit that file — components read from it. Prices, lead times, materials and Italian product names are all there.

## Booking API

The booking form posts to `POST /api/book`. The current implementation logs to the server console. To wire up real email confirmations, add one of these in `src/app/api/book/route.ts`:

- [Resend](https://resend.com) — recommended, ~5 lines of code
- [Postmark](https://postmarkapp.com), [SendGrid](https://sendgrid.com), or AWS SES

Add the API key to `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxx
```

If you want a real calendar with availability, swap the form for a [Cal.com](https://cal.com) embed and keep the rest of the page as-is.

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
