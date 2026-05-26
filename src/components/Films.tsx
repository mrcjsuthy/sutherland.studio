import { site } from "@/data/site";

export function Films() {
  return (
    <section id="films" className="relative bg-ink text-bone">
      <div aria-hidden className="absolute inset-0 grit pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="grid grid-cols-12 gap-4 pb-8 border-b border-bone/15">
          <p className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/60">
            § FM — Films
          </p>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              Every build, <span className="text-signal italic">on film</span>.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-bone/70 max-w-[50ch]">
              This channel is being built out now. Videos will be released as
              they become available — workshop cuts, build progress and finished
              films delivered with each piece.
            </p>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right md:self-end">
            <div className="flex flex-col items-stretch md:items-end gap-2">
              <a
                href={site.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 h-11 bg-rust text-bone font-mono text-[11px] tracking-[0.18em] uppercase hover:bg-signal transition-colors"
              >
                <YouTubeGlyph />
                Subscribe
              </a>
              <a
                href={site.patreon.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 h-11 border border-bone/40 text-bone font-mono text-[11px] tracking-[0.18em] uppercase hover:border-signal hover:text-signal transition-colors"
              >
                Support on Patreon
              </a>
            </div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/55 mt-3">
              {site.youtube.handle}
            </p>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-bone/45 mt-1">
              {site.patreon.tagline}
            </p>
          </div>
        </header>

        {/* Coming soon panel */}
        <div className="mt-10 border border-bone/15 bg-bone/[0.03] p-8 md:p-12 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none">
            <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <rect width="800" height="400" fill="#1a1812" />
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={i} x1={i * 50} y1={0} x2={i * 50} y2={400} stroke="#ece6d8" strokeWidth={1} />
              ))}
            </svg>
          </div>
          <div className="relative max-w-[56ch]">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55">
              In production
            </p>
            <h3 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight mt-3">
              Film library <span className="text-signal italic">loading</span>.
            </h3>
            <p className="mt-4 text-[15px] leading-[1.65] text-bone/70">
              We&rsquo;re setting up the channel and editing the first cuts.
              Subscribe on YouTube or Patreon — new videos drop as each build
              reaches the bench.
            </p>
            <ul className="mt-6 space-y-2 border-t border-bone/15 pt-5">
              {[
                "01 · Shot single-camera, available light.",
                "02 · Edited as we work — released when ready.",
                "03 · Final film delivered with the build, MP4 + link.",
              ].map((l) => (
                <li
                  key={l}
                  className="font-mono text-[11px] tracking-[0.12em] uppercase text-bone/85"
                >
                  {l}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={site.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-bone border-b border-bone/40 hover:text-signal hover:border-signal"
              >
                <YouTubeGlyph />
                Subscribe on YouTube
                <span aria-hidden>→</span>
              </a>
              <a
                href={site.patreon.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-bone border-b border-bone/40 hover:text-signal hover:border-signal"
              >
                Support on Patreon
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-bone/15 pt-6">
          <p className="font-display text-xl md:text-2xl leading-tight text-bone/85 max-w-[40ch]">
            Your build comes with its
            <span className="text-signal"> own film</span> — edited, scored,
            and hand-delivered with the piece.
          </p>
        </div>
      </div>
    </section>
  );
}

function YouTubeGlyph() {
  return (
    <svg width="14" height="10" viewBox="0 0 24 17" aria-hidden>
      <path
        d="M23 2.6c-.3-1-1-1.9-2-2.2C19.2 0 12 0 12 0S4.8 0 3 .4C2 .7 1.3 1.5 1 2.6 .6 4.4.6 8.5.6 8.5s0 4 .4 5.9c.3 1 1 1.9 2 2.2 1.8.4 9 .4 9 .4s7.2 0 9-.4c1-.3 1.7-1.2 2-2.2.4-1.9.4-5.9.4-5.9s0-4.1-.4-5.9z"
        fill="currentColor"
      />
      <path d="M9.6 12.2V4.8L15.7 8.5z" fill="#14130f" />
    </svg>
  );
}
