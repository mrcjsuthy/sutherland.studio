import { currentBuild, site } from "@/data/site";

export function CurrentBuild() {
  const b = currentBuild;
  const planning = b.status === "planning";

  return (
    <section id="bench" className="relative bg-paper">
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3">
          <p className="label-ink">§ AT — At the bench</p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-concrete mt-1">
            {planning ? "Planning · next build" : "Live · updated weekly"}
          </p>
          <div className="mt-6 hidden md:block">
            <p className="label">Filed under</p>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink leading-relaxed mt-1">
              {planning ? "In planning" : "In progress"}
              <br />
              On film
              <br />
              {b.code}
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-12 gap-x-4 gap-y-6 items-end pb-6 border-b hairline-strong">
            <div className="col-span-12 md:col-span-8">
              <p className="label">Right now at the bench</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[0.92] tracking-tight mt-2">
                {planning ? (
                  <>
                    Drawing up the <em className="text-rust">next</em> build
                    <span className="text-rust">.</span>
                  </>
                ) : (
                  <>
                    {b.title}
                    <span className="text-rust">.</span>
                  </>
                )}
              </h2>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-concrete mt-3">
                {b.type}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <p className="label">Timeline</p>
              <p className="font-display text-3xl md:text-4xl leading-none tracking-tight mt-1">
                {b.timeline}
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-8">
              <p className="text-[15px] leading-[1.65] text-graphite max-w-[52ch]">
                {b.note}
              </p>
            </div>
            <dl className="col-span-12 md:col-span-4 md:border-l hairline md:pl-6 space-y-3">
              <div className="grid grid-cols-5 gap-2">
                <dt className="col-span-2 label pt-0.5">Status</dt>
                <dd className="col-span-3 font-display text-base leading-tight">
                  {planning ? "Plans in progress" : "On the bench"}
                </dd>
              </div>
              <div className="grid grid-cols-5 gap-2">
                <dt className="col-span-2 label pt-0.5">Ref</dt>
                <dd className="col-span-3 font-display text-base leading-tight">{b.code}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 pt-4 border-t hairline">
            <a href="#films" className="btn-ghost">
              Every build, on film
            </a>
            <a href="#book" className="btn-primary">
              Commission your own
              <Arrow />
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
