"use client";

import { useState } from "react";
import { vacancies, site, type Vacancy } from "@/data/site";

const statusStyle: Record<Vacancy["status"], { dot: string; label: string; text: string }> = {
  open: { dot: "bg-moss pulse-soft", label: "Open", text: "text-moss" },
  soon: { dot: "bg-copper", label: "Opening soon", text: "text-copper" },
  closed: { dot: "bg-concrete/60", label: "Closed", text: "text-concrete" },
};

type ApplyStatus = "idle" | "loading" | "done" | "error";

export function Careers() {
  return (
    <section id="careers" className="relative bg-bone">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        <header className="col-span-12 grid grid-cols-12 gap-4 pb-6 border-b hairline-strong">
          <p className="col-span-12 md:col-span-3 label-ink">§ CR — Partnerships</p>
          <h2 className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Work with <em className="text-rust">us</em>.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right label">
            Apprentice · Contract · Partnership
          </p>
        </header>

        {/* Vacancies */}
        <div className="col-span-12 lg:col-span-7">
          <p className="label-ink mb-4">Current openings</p>
          <ul className="border-t hairline">
            {vacancies.map((v) => (
              <VacancyRow key={v.code} v={v} />
            ))}
          </ul>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete mt-4">
            Roles refresh quarterly. Don&rsquo;t see a fit?
            <a href="#apply" className="text-ink hover:text-rust underline-offset-2 hover:underline ml-1">
              Apply speculatively →
            </a>
          </p>
        </div>

        {/* Apply form */}
        <aside
          id="apply"
          className="col-span-12 lg:col-span-5 lg:border-l hairline lg:pl-8"
        >
          <ApplyForm />
        </aside>
      </div>
    </section>
  );
}

function VacancyRow({ v }: { v: Vacancy }) {
  const s = statusStyle[v.status];
  return (
    <li className="grid grid-cols-12 gap-3 border-b hairline py-5">
      <div className="col-span-2 md:col-span-1 label-ink pt-1">{v.code}</div>
      <div className="col-span-10 md:col-span-7">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-display text-xl md:text-2xl leading-tight">{v.title}</h3>
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
            · {v.kind} · {v.location}
          </span>
        </div>
        <p className="text-[13.5px] leading-snug text-graphite mt-1 max-w-[48ch]">
          {v.blurb}
        </p>
      </div>
      <div className="col-span-7 md:col-span-2 flex md:items-center">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase">
          <span className={`size-1.5 rounded-full ${s.dot}`} />
          <span className={s.text}>{s.label}</span>
        </span>
      </div>
      <div className="col-span-5 md:col-span-2 flex items-center justify-end">
        {v.status === "open" ? (
          <a
            href="#apply"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink border-b border-ink/40 hover:text-rust hover:border-rust transition-colors"
          >
            Apply <span aria-hidden>→</span>
          </a>
        ) : (
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-concrete">
            —
          </span>
        )}
      </div>
    </li>
  );
}

function ApplyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<string>(
    vacancies.find((v) => v.status === "open")?.code ?? "speculative",
  );
  const [link, setLink] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ApplyStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role, link, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Couldn't send application");
      setStatus("done");
      setName("");
      setEmail("");
      setLink("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : `Email ${site.email} instead`);
    }
  }

  if (status === "done") {
    return (
      <div className="border hairline-strong bg-paper p-6 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 grit-light" />
        <div className="relative">
          <p className="label-ink">Application received</p>
          <h3 className="font-display text-3xl leading-[0.95] tracking-tight mt-2">
            Thanks for that.
          </h3>
          <p className="mt-3 text-[14px] leading-[1.6] text-graphite">
            We&rsquo;ll reply within five working days. If you&rsquo;re a fit, the
            next step is a coffee at the workshop.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-4 gap-y-2">
      <div className="col-span-12 flex items-center justify-between border-b hairline-strong pb-3 mb-3">
        <span className="label-ink">Apply / partner</span>
        <span className="label">Reply within 5 days</span>
      </div>
      <div className="col-span-12 md:col-span-6">
        <label className="label" htmlFor="a-name">Your name</label>
        <input
          id="a-name"
          required
          className="field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mara Bellini"
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <label className="label" htmlFor="a-email">Email</label>
        <input
          id="a-email"
          type="email"
          required
          className="field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere.co.nz"
        />
      </div>
      <div className="col-span-12 mt-3">
        <label className="label" htmlFor="a-role">Role or partnership</label>
        <select
          id="a-role"
          className="field bg-bone"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          {vacancies.map((v) => (
            <option key={v.code} value={v.code} disabled={v.status === "closed"}>
              {v.code} — {v.title} {v.status === "soon" ? "(opening soon)" : ""}
              {v.status === "closed" ? "(closed)" : ""}
            </option>
          ))}
          <option value="speculative">Speculative — surprise us</option>
        </select>
      </div>
      <div className="col-span-12 mt-3">
        <label className="label" htmlFor="a-link">Portfolio / link (optional)</label>
        <input
          id="a-link"
          type="url"
          className="field"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://"
        />
      </div>
      <div className="col-span-12 mt-3">
        <label className="label" htmlFor="a-msg">Why this role / collaboration?</label>
        <textarea
          id="a-msg"
          required
          rows={4}
          className="field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A short paragraph is fine. Honest is better than long."
        />
      </div>
      <div className="col-span-12 mt-4 flex flex-wrap items-center justify-between gap-3 border-t hairline-strong pt-4">
        <p className="label max-w-[34ch]">
          Or write directly &mdash;{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-ink hover:text-rust border-b border-ink/40 hover:border-rust"
            style={{ textTransform: "none", letterSpacing: 0 }}
          >
            {site.email}
          </a>
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send application"}
          <Arrow />
        </button>
      </div>
      {error && (
        <p
          role="alert"
          className="col-span-12 mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-rust"
        >
          {error}
        </p>
      )}
    </form>
  );
}

function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
