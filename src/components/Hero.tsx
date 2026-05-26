import { site, stats } from "@/data/site";
import { StudioStatus } from "./StudioStatus";

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-24 md:pt-28 pb-0 overflow-hidden"
    >
      {/* Background grid + grit */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--ink) 1px, transparent 1px), linear-gradient(to bottom, var(--ink) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Top meta row */}
        <div className="grid grid-cols-12 gap-4 pb-6 border-b hairline">
          <div className="col-span-12 md:col-span-4 flex items-center gap-2">
            <StudioStatus detailed />
          </div>
          <div className="hidden md:flex col-span-2 items-center label">
            <span>Lat 36°46′S · Long 174°45′E</span>
          </div>
          <div className="hidden md:flex col-span-3 items-center label">
            <span>Workshop — Tāmaki Makaurau</span>
          </div>
          <div className="col-span-12 md:col-span-3 flex items-center md:justify-end label">
            <span>Vol. 01 / Iss. 01 · {site.youtube.tagline}</span>
          </div>
        </div>

        {/* Title block */}
        <div className="grid grid-cols-12 gap-x-4 gap-y-6 pt-10 md:pt-14">
          {/* Side annotation */}
          <aside className="hidden md:block col-span-3">
            <div className="sticky top-24">
              <p className="label mb-3">Index — A1</p>
              <p className="font-mono text-[11px] leading-relaxed text-graphite max-w-[24ch]">
                A design & build studio for furniture, objects and small
                installations. Italian discipline, South Pacific texture.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-y-3">
                {stats.map((s) => (
                  <div key={s.k}>
                    <div className="label">{s.k}</div>
                    <div className="font-display text-lg leading-tight">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Big type */}
          <div className="col-span-12 md:col-span-9">
            <h1
              className="rise font-display font-light leading-[0.86] tracking-[-0.045em] uppercase"
              style={{ fontSize: "clamp(40px, 10.5vw, 168px)" }}
            >
              <span className="block">Sutherland</span>
              <span className="block">
                <span className="italic font-normal">Studio</span>
                <span className="inline-block align-top translate-y-[0.18em] ml-2 md:ml-4 text-rust">
                  *
                </span>
              </span>
            </h1>

            <div className="mt-8 md:mt-10 grid grid-cols-12 gap-4">
              <p className="col-span-12 md:col-span-7 font-display text-2xl md:text-[28px] leading-[1.18] tracking-tight max-w-[26ch]">
                Considered objects & built environments — drawn,
                <span className="text-rust"> prototyped</span> and made
                by hand in Auckland.
              </p>
              <div className="col-span-12 md:col-span-5 flex md:justify-end items-end min-w-0">
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full md:w-auto">
                  <a href="#book" className="btn-primary justify-center sm:justify-start">
                    Book free consultation
                    <Arrow />
                  </a>
                  <a
                    href={site.youtube.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost justify-center sm:justify-start"
                  >
                    Watch on YouTube
                  </a>
                  <a
                    href={site.patreon.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost justify-center sm:justify-start"
                  >
                    Support on Patreon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-4 pb-6 border-b hairline">
          {site.cities.map((c, i) => (
            <div
              key={c.name}
              className={`col-span-6 md:col-span-3 ${
                i === 0 ? "" : "md:border-l hairline md:pl-4"
              }`}
            >
              <div className="label mb-1">
                Origin {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-xl md:text-3xl leading-tight break-words">
                {c.name}
              </div>
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
                {c.country} · {c.lat} {c.long}
              </div>
            </div>
          ))}
          <div className="col-span-12 md:col-span-3 md:border-l hairline md:pl-4">
            <div className="label mb-1">Disciplines</div>
            <div className="font-display text-lg md:text-xl leading-tight break-words">
              Furniture · Installation · Product · Brand · Web · Film
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 md:border-l hairline md:pl-4">
            <div className="label mb-1">Currently</div>
            <div className="font-display text-lg md:text-xl leading-tight">
              Booking <em className="not-italic text-rust">Q3 — Q4 2026</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      className="-mr-0.5"
    >
      <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
