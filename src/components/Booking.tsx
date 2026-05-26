"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

type ProjectType =
  | "Furniture / Product"
  | "Small Installation"
  | "Lighting / Object"
  | "Product / Industrial"
  | "Graphic Design"
  | "Web / App"
  | "AI Strategy"
  | "Partnership"
  | "Other";
type Budget = "< 5k" | "5–15k" | "15–40k" | "40k+" | "Open";

const projectTypes: ProjectType[] = [
  "Furniture / Product",
  "Small Installation",
  "Lighting / Object",
  "Product / Industrial",
  "Graphic Design",
  "Web / App",
  "AI Strategy",
  "Partnership",
  "Other",
];

const budgets: Budget[] = ["< 5k", "5–15k", "15–40k", "40k+", "Open"];

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];

function getUpcomingDates(count = 14) {
  const out: { iso: string; day: string; date: string; month: string; weekday: string }[] = [];
  const now = new Date();
  let added = 0;
  let i = 1;
  while (added < count && i < 60) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      out.push({
        iso: d.toISOString().slice(0, 10),
        weekday: d.toLocaleDateString("en-NZ", { weekday: "short" }),
        day: String(d.getDate()).padStart(2, "0"),
        month: d.toLocaleDateString("en-NZ", { month: "short" }),
        date: d.toLocaleDateString("en-NZ", { day: "2-digit", month: "short" }),
      });
      added++;
    }
    i++;
  }
  return out;
}

export function Booking() {
  const dates = useMemo(() => getUpcomingDates(12), []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState<ProjectType>("Furniture / Product");
  const [budget, setBudget] = useState<Budget>("5–15k");
  const [date, setDate] = useState(dates[0]?.iso ?? "");
  const [time, setTime] = useState(slots[1]);
  const [brief, setBrief] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, type, budget, date, time, brief }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(`Couldn’t send that. Try again, or email ${site.email}.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="book" className="relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        {/* Left column: pitch */}
        <div className="col-span-12 lg:col-span-5">
          <p className="label-ink">§ 09 — Consultation</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[0.92] tracking-tight mt-3">
            Book a <em className="text-rust">free</em> 60-minute studio session.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-graphite max-w-[44ch]">
            In person at the workshop in Auckland, or by video. Bring references,
            rough dimensions and a clear brief. You leave with sketches, material
            options and a costing direction — no fee, no obligation.
          </p>

          <dl className="mt-8 border-t hairline-strong">
            {[
              ["Where", "Workshop · Milford, Auckland (or Zoom)"],
              ["Duration", "60 minutes"],
              ["Outcome", "Sketches · Materials · Indicative quote"],
              ["Languages", "English · Italiano"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-12 gap-2 border-b hairline py-3"
              >
                <dt className="col-span-4 label">{k}</dt>
                <dd className="col-span-8 font-display text-base leading-tight">
                  {v}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 p-5 border hairline-strong bg-paper relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grit-light" />
            <p className="relative label-ink">Not ready to book?</p>
            <p className="relative font-display text-xl leading-tight mt-1 max-w-[32ch]">
              Send a note instead.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="relative inline-flex items-center gap-2 mt-3 font-mono text-[11px] tracking-[0.18em] uppercase border-b border-ink/40 hover:text-rust hover:border-rust transition-colors"
            >
              {site.email}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Right column: form */}
        <div className="col-span-12 lg:col-span-7 lg:border-l hairline lg:pl-8">
          {submitted ? (
            <Success
              name={name}
              date={dates.find((d) => d.iso === date)}
              time={time}
              onReset={() => {
                setSubmitted(false);
                setName("");
                setEmail("");
                setBrief("");
              }}
            />
          ) : (
            <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-6 gap-y-2">
              <div className="col-span-12 flex items-center justify-between border-b hairline-strong pb-3 mb-4">
                <span className="label-ink">Booking — Step 01 / 01</span>
                <span className="label">Auto-confirmed</span>
              </div>

              {/* Name + email */}
              <div className="col-span-12 md:col-span-6">
                <label className="label" htmlFor="b-name">Your name</label>
                <input
                  id="b-name"
                  required
                  className="field"
                  placeholder="Mara Bellini"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <label className="label" htmlFor="b-email">Email</label>
                <input
                  id="b-email"
                  type="email"
                  required
                  className="field"
                  placeholder="you@somewhere.co.nz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Project type */}
              <fieldset className="col-span-12 mt-4">
                <legend className="label mb-2">Project type</legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      active={type === t}
                      onClick={() => setType(t)}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Budget */}
              <fieldset className="col-span-12 mt-4">
                <legend className="label mb-2">Indicative budget (NZD)</legend>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <Chip
                      key={b}
                      label={b}
                      active={budget === b}
                      onClick={() => setBudget(b)}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Date */}
              <fieldset className="col-span-12 mt-5">
                <div className="flex items-center justify-between mb-2">
                  <legend className="label">Pick a day</legend>
                  <span className="label">Weekdays · Pacific/Auckland</span>
                </div>
                <div className="flex gap-2 overflow-x-auto scroll-x pb-1 -mx-1 px-1">
                  {dates.map((d) => (
                    <button
                      type="button"
                      key={d.iso}
                      onClick={() => setDate(d.iso)}
                      className={`shrink-0 w-[72px] h-[78px] border text-left p-2 transition-colors ${
                        date === d.iso
                          ? "bg-ink text-bone border-ink"
                          : "hairline-strong hover:border-rust"
                      }`}
                    >
                      <div className="font-mono text-[10px] tracking-[0.16em] uppercase opacity-70">
                        {d.weekday}
                      </div>
                      <div className="font-display text-2xl leading-none mt-1">
                        {d.day}
                      </div>
                      <div className="font-mono text-[10px] tracking-[0.16em] uppercase mt-1 opacity-70">
                        {d.month}
                      </div>
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Time */}
              <fieldset className="col-span-12 mt-5">
                <legend className="label mb-2">Pick a time</legend>
                <div className="flex flex-wrap gap-2">
                  {slots.map((t) => (
                    <Chip
                      key={t}
                      label={t}
                      active={time === t}
                      onClick={() => setTime(t)}
                    />
                  ))}
                </div>
              </fieldset>

              {/* Brief */}
              <div className="col-span-12 mt-5">
                <label className="label" htmlFor="b-brief">
                  Brief — what would you like to make?
                </label>
                <textarea
                  id="b-brief"
                  className="field"
                  rows={3}
                  placeholder="A four-metre dining table in oak and patinated steel, for a villa in Pt Chev…"
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                />
              </div>

              {/* Submit */}
              <div className="col-span-12 mt-6 flex flex-wrap items-center justify-between gap-4 border-t hairline-strong pt-5">
                <p className="label max-w-[36ch]">
                  Free of charge — no obligation, no fine print. Just bring
                  the brief.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-60"
                >
                  {loading ? "Confirming…" : "Confirm booking"}
                  <Arrow />
                </button>
              </div>

              {error && (
                <p
                  role="alert"
                  className="col-span-12 mt-3 font-mono text-[11px] tracking-[0.12em] uppercase text-rust"
                >
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 h-9 border font-mono text-[11px] tracking-[0.14em] uppercase transition-colors ${
        active
          ? "bg-ink text-bone border-ink"
          : "hairline-strong hover:border-rust"
      }`}
    >
      {label}
    </button>
  );
}

function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function Success({
  name,
  date,
  time,
  onReset,
}: {
  name: string;
  date?: { day: string; month: string; weekday: string };
  time: string;
  onReset: () => void;
}) {
  return (
    <div className="border hairline-strong bg-paper p-6 md:p-8 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 grit-light" />
      <div className="relative">
        <p className="label-ink">Confirmed · #SS-{Math.floor(Math.random() * 9000 + 1000)}</p>
        <h3 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight mt-3">
          Grazie, {name || "friend"}.
        </h3>
        <p className="mt-4 text-[15px] leading-[1.65] text-graphite max-w-[44ch]">
          You’re booked in for <strong className="text-ink">{date?.weekday} {date?.day} {date?.month}</strong> at <strong className="text-ink">{time}</strong>. A
          calendar invite and prep notes are on the way to your inbox.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#work" className="btn-ghost">See selected work</a>
          <button onClick={onReset} className="btn-primary">
            Book another <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
