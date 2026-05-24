import { site } from "@/data/site";

type Film = {
  ep: string;
  title: string;
  blurb: string;
  duration: string;
  status: "live" | "soon";
  accent: "rust" | "moss" | "copper" | "ink";
};

const films: Film[] = [
  {
    ep: "EP/07",
    title: "Frames & faces — Cucina K2",
    blurb: "The joinery carcass goes up; door fronts get their second coat of oil.",
    duration: "12:40",
    status: "live",
    accent: "rust",
  },
  {
    ep: "EP/06",
    title: "Steel & steam — Tavolo Grezzo",
    blurb: "A six-seat refectory table comes off a single welded plate base.",
    duration: "09:15",
    status: "live",
    accent: "copper",
  },
  {
    ep: "EP/05",
    title: "Pouring stone — Lampada Sasso",
    blurb: "Twenty-four concrete bases, one mould, a slow afternoon.",
    duration: "07:48",
    status: "live",
    accent: "moss",
  },
  {
    ep: "EP/08",
    title: "Delivery day — Cucina K2",
    blurb: "Hand-installed in Grey Lynn. The film ships with the kitchen.",
    duration: "—",
    status: "soon",
    accent: "ink",
  },
];

const accentMap: Record<Film["accent"], string> = {
  rust: "var(--rust)",
  moss: "var(--moss)",
  copper: "var(--copper)",
  ink: "var(--ink)",
};

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
              Every commission is filmed start to finish — workshop to delivery —
              and the finished film ships with the piece. Subscribe to watch the
              builds as they happen.
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

        {/* Featured episodes */}
        <ol className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
          {films.map((f, i) => (
            <li
              key={f.ep}
              className={`col-span-12 md:col-span-6 lg:col-span-3 group border border-bone/15 ${
                i === 0 ? "bg-bone/[0.03]" : ""
              }`}
            >
              <a
                href={site.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col h-full"
                aria-label={`Watch ${f.title}`}
              >
                {/* Thumbnail plate (inline SVG so we don't ship images) */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <svg
                    aria-hidden
                    viewBox="0 0 320 200"
                    preserveAspectRatio="xMidYMid slice"
                    className="absolute inset-0 w-full h-full"
                  >
                    <rect width="320" height="200" fill="#1a1812" />
                    <g opacity="0.18">
                      {Array.from({ length: 8 }).map((_, gx) => (
                        <line
                          key={`g${gx}`}
                          x1={gx * 40}
                          y1={0}
                          x2={gx * 40}
                          y2={200}
                          stroke="#ece6d8"
                          strokeWidth={1}
                        />
                      ))}
                    </g>
                    {/* Accent shape */}
                    <circle
                      cx={f.status === "live" ? 110 : 160}
                      cy={100}
                      r={f.status === "live" ? 64 : 52}
                      fill={accentMap[f.accent]}
                      opacity={f.status === "live" ? 0.92 : 0.4}
                    />
                    {/* Play triangle */}
                    {f.status === "live" && (
                      <g transform="translate(160 100)">
                        <circle r="22" fill="#ece6d8" />
                        <path d="M -7 -10 L 12 0 L -7 10 Z" fill="#14130f" />
                      </g>
                    )}
                    {f.status === "soon" && (
                      <g>
                        <rect x="138" y="92" width="44" height="16" fill="#ece6d8" />
                        <text
                          x="160"
                          y="104"
                          textAnchor="middle"
                          fontFamily="monospace"
                          fontSize="9"
                          letterSpacing="1.2"
                          fill="#14130f"
                        >
                          SOON
                        </text>
                      </g>
                    )}
                  </svg>
                  <span className="absolute top-2 left-2 font-mono text-[9px] tracking-[0.18em] uppercase bg-ink/70 text-bone px-1.5 py-0.5">
                    {f.ep}
                  </span>
                  <span className="absolute bottom-2 right-2 font-mono text-[9px] tracking-[0.16em] uppercase bg-ink/80 text-bone px-1.5 py-0.5">
                    {f.duration}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-display text-lg leading-tight group-hover:text-signal transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[12.5px] leading-snug text-bone/65 mt-2 flex-1">
                    {f.blurb}
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-bone/45 mt-3">
                    {f.status === "live" ? "Watch now ↗" : "Drops with delivery"}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ol>

        {/* Footer band */}
        <div className="mt-12 md:mt-14 grid grid-cols-12 gap-4 border-t border-bone/15 pt-6">
          <div className="col-span-12 md:col-span-7">
            <p className="font-display text-2xl md:text-3xl leading-tight max-w-[30ch]">
              Your build comes with its
              <span className="text-signal"> own film</span>. Edited, scored,
              and hand-delivered with the piece.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:border-l border-bone/15 md:pl-6 flex flex-col gap-3 justify-end">
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/55">
              How it works
            </p>
            <ul className="space-y-2">
              {[
                "01 · Shot single-camera, available light.",
                "02 · Edited as we work — weekly cuts on YouTube.",
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
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
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
