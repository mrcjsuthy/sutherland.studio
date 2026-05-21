import { currentBuild } from "@/data/site";

function fmt(iso: string): string {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("en-NZ", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function CurrentBuild() {
  const b = currentBuild;
  const pct = Math.round(b.progress * 100);
  return (
    <section id="bench" className="relative bg-paper">
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-12 gap-4 md:gap-8">
        {/* Left: meta column */}
        <div className="col-span-12 md:col-span-3">
          <p className="label-ink">§ AT — At the bench</p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-concrete mt-1">
            Live · updated weekly
          </p>
          <div className="mt-6 hidden md:block">
            <p className="label">Filed under</p>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink leading-relaxed mt-1">
              In progress
              <br />
              On film
              <br />
              {b.code}
            </p>
          </div>
        </div>

        {/* Right: build snapshot */}
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 gap-x-4 gap-y-6 items-end pb-6 border-b hairline-strong">
            <div className="col-span-12 md:col-span-8">
              <p className="label">Right now at the bench</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.92] tracking-tight mt-2">
                {b.title}
                <span className="text-rust">.</span>
              </h2>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-concrete mt-3">
                {b.type} · {b.client}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <p className="label">Progress</p>
              <p className="font-display text-5xl md:text-6xl leading-none tracking-tight mt-1">
                {pct}<span className="text-rust text-3xl align-top">%</span>
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-2 bg-chalk relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-ink"
              style={{ width: `${pct}%` }}
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 grit pointer-events-none"
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="mt-6 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[15px] leading-[1.65] text-graphite max-w-[48ch]">
                {b.note}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {b.materials.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink border hairline-strong px-2.5 py-1"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <dl className="col-span-12 md:col-span-5 md:border-l hairline md:pl-6 grid grid-cols-2 gap-y-3">
              {[
                ["Started", fmt(b.startedAt)],
                ["ETA", fmt(b.eta)],
                ["Bench", "01 of 01"],
                ["On film", b.filmEpisode],
              ].map(([k, v]) => (
                <div key={k} className="col-span-2 grid grid-cols-5 gap-2">
                  <dt className="col-span-2 label pt-0.5">{k}</dt>
                  <dd className="col-span-3 font-display text-base leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t hairline">
            <a
              href={b.filmHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Watch the film of this build
              <Arrow />
            </a>
            <a href="#book" className="btn-ghost">
              Commission your own
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
