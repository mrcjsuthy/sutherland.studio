"use client";

import { useEffect, useMemo, useState } from "react";
import { release, site } from "@/data/site";
import { countdown } from "@/lib/studio";

type OrderStatus = "idle" | "loading" | "done" | "error";
type NotifyStatus = "idle" | "loading" | "done" | "error";

const accentBg: Record<string, string> = {
  rust: "var(--rust)",
  moss: "var(--moss)",
  copper: "var(--copper)",
};

export function Release() {
  // Tick once a second for the countdown.
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const c = useMemo(() => countdown(release.unlockAt), [tick]); // eslint-disable-line react-hooks/exhaustive-deps
  const unlocked = c.expired;
  const closes = useMemo(() => countdown(release.closesAt), [tick]); // eslint-disable-line react-hooks/exhaustive-deps
  const closed = closes.expired || release.soldOut;
  const orderable = unlocked && !closed;

  const accent = accentBg[release.imageAccent];

  return (
    <section id="release" className="relative bg-bone">
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        <header className="col-span-12 grid grid-cols-12 gap-4 pb-6 border-b hairline-strong">
          <p className="col-span-12 md:col-span-3 label-ink">§ RL — Release {release.code}</p>
          <h2 className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Limited <em>edition</em>.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right label">
            {release.unitsTotal} pieces · {release.currency} ex GST
          </p>
        </header>

        {/* Plate */}
        <div className="col-span-12 md:col-span-5">
          <div
            className="relative aspect-[4/5] border hairline-strong overflow-hidden bg-paper"
            aria-hidden
          >
            <svg
              viewBox="0 0 400 500"
              preserveAspectRatio="xMidYMid slice"
              className="absolute inset-0 w-full h-full"
            >
              {/* Background */}
              <rect width="400" height="500" fill="#f3eee2" />
              {/* Faint grid */}
              <g opacity="0.18">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 50}
                    y1={0}
                    x2={i * 50}
                    y2={500}
                    stroke="#14130f"
                    strokeWidth={1}
                  />
                ))}
                {Array.from({ length: 11 }).map((_, i) => (
                  <line
                    key={`h${i}`}
                    x1={0}
                    y1={i * 50}
                    x2={400}
                    y2={i * 50}
                    stroke="#14130f"
                    strokeWidth={1}
                  />
                ))}
              </g>
              {/* Stone base — lamp */}
              <ellipse cx="200" cy="380" rx="120" ry="22" fill="#14130f" opacity="0.18" />
              <rect x="120" y="280" width="160" height="110" rx="6" fill={accent} />
              {/* Brass collar */}
              <rect x="170" y="240" width="60" height="44" fill="#b66d3a" />
              {/* Stem */}
              <rect x="195" y="120" width="10" height="120" fill="#14130f" />
              {/* Shade */}
              <path
                d="M 130 120 L 270 120 L 250 60 L 150 60 Z"
                fill="#14130f"
              />
              {/* Glow underline */}
              <rect x="100" y="402" width="200" height="2" fill="#14130f" opacity="0.4" />
              {/* Spec ticks */}
              <g
                fontFamily="monospace"
                fontSize="9"
                letterSpacing="1.5"
                fill="#14130f"
                opacity="0.65"
              >
                <text x="20" y="30">{release.code}</text>
                <text x="20" y="480">{release.dimensions}</text>
                <text x="380" y="480" textAnchor="end">
                  ED.&nbsp;{release.unitsTotal}
                </text>
              </g>
            </svg>
          </div>
        </div>

        {/* Detail + countdown + form */}
        <div className="col-span-12 md:col-span-7 md:border-l hairline md:pl-8">
          <p className="label-ink">{release.code}</p>
          <h3 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mt-2">
            {release.title}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.65] text-graphite max-w-[52ch]">
            {release.blurb}
          </p>

          <dl className="mt-6 grid grid-cols-12 gap-y-3 border-t hairline-strong pt-4">
            {[
              ["Materials", release.materials],
              ["Dimensions", release.dimensions],
              ["Ships", release.ships],
              ["Edition", `Numbered · ${release.unitsTotal} pieces`],
            ].map(([k, v]) => (
              <div key={k} className="col-span-12 grid grid-cols-12 gap-2 border-b hairline py-2.5">
                <dt className="col-span-4 label">{k}</dt>
                <dd className="col-span-8 font-display text-base leading-tight">{v}</dd>
              </div>
            ))}
            <div className="col-span-12 flex items-baseline justify-between pt-3">
              <span className="label">Price</span>
              <span className="font-display text-3xl leading-none tracking-tight">
                NZD&nbsp;{release.price.toLocaleString("en-NZ")}
              </span>
            </div>
          </dl>

          {/* Countdown / state */}
          <div className="mt-8 border hairline-strong bg-paper p-5 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grit-light" />
            <div className="relative">
              {closed ? (
                <ClosedState />
              ) : orderable ? (
                <OpenState />
              ) : (
                <LockedState days={c.days} hours={c.hours} minutes={c.minutes} seconds={c.seconds} />
              )}
            </div>
          </div>

          {/* Action panel */}
          <div className="mt-6">
            {orderable ? <OrderForm /> : closed ? null : <NotifyForm />}
          </div>
        </div>
      </div>
    </section>
  );
}

function LockedState({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return (
    <>
      <p className="label-ink">Unlocks in</p>
      <div className="mt-3 grid grid-cols-4 gap-2 md:gap-4 max-w-[420px]">
        {[
          ["Days", days],
          ["Hours", hours],
          ["Min", minutes],
          ["Sec", seconds],
        ].map(([k, v]) => (
          <div key={k as string} className="border hairline-strong bg-bone p-2 text-center">
            <div className="font-display text-3xl md:text-5xl leading-none tracking-tight tabular-nums">
              {String(v).padStart(2, "0")}
            </div>
            <div className="label mt-1">{k}</div>
          </div>
        ))}
      </div>
      <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete mt-3">
        Order unlocks automatically at the moment above — refresh not required.
      </p>
    </>
  );
}

function OpenState() {
  return (
    <>
      <p className="label-ink text-rust">● Now open</p>
      <p className="font-display text-2xl md:text-3xl leading-tight tracking-tight mt-2 max-w-[36ch]">
        Edition unlocked. First-come, first-served until the run is complete.
      </p>
    </>
  );
}

function ClosedState() {
  return (
    <>
      <p className="label-ink">○ Edition complete</p>
      <p className="font-display text-2xl md:text-3xl leading-tight tracking-tight mt-2 max-w-[36ch]">
        All twenty-four pieces are spoken for. Join the list for the next release.
      </p>
    </>
  );
}

function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<NotifyStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Couldn't subscribe");
      }
      setStatus("done");
      setMessage("On the list. We'll email when the edition unlocks.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : `Try again, or email ${site.email}`);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="label mb-2">Notify when it unlocks</p>
      <div className="flex flex-col sm:flex-row gap-2 max-w-[520px]">
        <input
          type="email"
          required
          placeholder="you@somewhere.co.nz"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field flex-1"
          aria-label="Email address"
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-ghost justify-center disabled:opacity-60"
        >
          {status === "loading" ? "Adding…" : "Notify me"}
        </button>
      </div>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`mt-2 font-mono text-[10px] tracking-[0.16em] uppercase ${
            status === "error" ? "text-rust" : "text-moss"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qty, setQty] = useState(1);
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [ref, setRef] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, qty, address, note }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Couldn't place order");
      setRef(data.ref ?? null);
      setStatus("done");
      setName("");
      setEmail("");
      setAddress("");
      setNote("");
      setQty(1);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : `Try again, or email ${site.email}`);
    }
  }

  if (status === "done") {
    return (
      <div className="border hairline-strong bg-paper p-5 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 grit-light" />
        <div className="relative">
          <p className="label-ink text-rust">● Reserved · #{ref}</p>
          <p className="font-display text-2xl leading-tight mt-2 max-w-[36ch]">
            Your piece is reserved. We&rsquo;ll be in touch within 24h to confirm
            and arrange payment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-12 gap-x-4 gap-y-2">
      <p className="col-span-12 label mb-2">Reserve your piece</p>
      <div className="col-span-12 md:col-span-6">
        <label className="label" htmlFor="o-name">Name</label>
        <input
          id="o-name"
          required
          className="field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Mara Bellini"
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <label className="label" htmlFor="o-email">Email</label>
        <input
          id="o-email"
          type="email"
          required
          className="field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@somewhere.co.nz"
        />
      </div>
      <div className="col-span-12 md:col-span-4 mt-3">
        <label className="label" htmlFor="o-qty">Quantity</label>
        <input
          id="o-qty"
          type="number"
          min={1}
          max={3}
          className="field"
          value={qty}
          onChange={(e) => setQty(Math.max(1, Math.min(3, Number(e.target.value) || 1)))}
        />
      </div>
      <div className="col-span-12 md:col-span-8 mt-3">
        <label className="label" htmlFor="o-address">Ship to (city / country)</label>
        <input
          id="o-address"
          required
          className="field"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Auckland, NZ"
        />
      </div>
      <div className="col-span-12 mt-3">
        <label className="label" htmlFor="o-note">Note (optional)</label>
        <textarea
          id="o-note"
          className="field"
          rows={2}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Preferred edition number, anything else we should know…"
        />
      </div>
      <div className="col-span-12 mt-4 flex flex-wrap items-center justify-between gap-3 border-t hairline-strong pt-4">
        <p className="label max-w-[36ch]">
          We invoice manually after confirming stock — no card details required
          on this page.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "loading" ? "Reserving…" : "Reserve piece"}
          <Arrow />
        </button>
      </div>
      {message && status === "error" && (
        <p
          role="alert"
          className="col-span-12 mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-rust"
        >
          {message}
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
