import { release, site } from "@/data/site";

export function Release() {
  return (
    <section id="release" className="relative bg-bone">
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="grid grid-cols-12 gap-4 pb-6 border-b hairline-strong">
          <p className="col-span-12 md:col-span-3 label-ink">§ RL — Release</p>
          <h2 className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Limited <em>edition</em>.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right label">
            {release.timeline}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-5">
            <div
              className="relative aspect-[4/5] border hairline-strong overflow-hidden bg-paper flex items-center justify-center"
              aria-hidden
            >
              <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full">
                <rect width="400" height="500" fill="#f3eee2" />
                <g opacity="0.18">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={500} stroke="#14130f" strokeWidth={1} />
                  ))}
                  {Array.from({ length: 11 }).map((_, i) => (
                    <line key={`h${i}`} x1={0} y1={i * 50} x2={400} y2={i * 50} stroke="#14130f" strokeWidth={1} />
                  ))}
                </g>
                <text
                  x="200"
                  y="250"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="11"
                  letterSpacing="2"
                  fill="#8b8579"
                >
                  COMING SOON
                </text>
              </svg>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:border-l hairline md:pl-8 flex flex-col justify-center">
            <p className="label-ink">{release.code}</p>
            <h3 className="font-display text-4xl md:text-5xl leading-[0.95] tracking-tight mt-2">
              {release.title}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-graphite max-w-[52ch]">
              {release.blurb}
            </p>

            <div className="mt-8 border hairline-strong bg-paper p-6 relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 grit-light" />
              <div className="relative">
                <p className="label-ink text-rust">● Not yet announced</p>
                <p className="font-display text-2xl md:text-3xl leading-tight tracking-tight mt-2 max-w-[36ch]">
                  First release details coming soon. Pieces will drop as they
                  become available.
                </p>
                <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete mt-4">
                  Join the newsletter below, or email {site.email} to register interest.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#book" className="btn-primary">
                Register interest
                <Arrow />
              </a>
              <a href={site.youtube.url} target="_blank" rel="noreferrer" className="btn-ghost">
                Follow on YouTube
              </a>
            </div>
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
