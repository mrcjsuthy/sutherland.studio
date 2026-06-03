import { systemsProjects } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

const accentFill: Record<string, string> = {
  rust: "var(--rust)",
  moss: "var(--moss)",
  copper: "var(--copper)",
  ink: "var(--ink)",
};

function ProjectPlate({ accent }: { accent: string }) {
  const fill = accentFill[accent] ?? accentFill.ink;
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" aria-hidden>
      <rect width="400" height="240" fill="#1a1812" />
      <g opacity="0.12">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={i * 50} y1={0} x2={i * 50} y2={240} stroke="#ece6d8" strokeWidth={1} />
        ))}
      </g>
      <circle cx="200" cy="120" r="72" fill={fill} opacity={0.88} />
      <rect x="80" y="180" width="240" height="2" fill="#ece6d8" opacity="0.25" />
      <path
        d="M 60 200 L 120 160 L 200 175 L 280 130 L 340 150"
        fill="none"
        stroke="#ece6d8"
        strokeWidth="1.5"
        opacity="0.4"
      />
    </svg>
  );
}

export function SystemsProjects() {
  return (
    <section id="systems-projects" className="relative bg-ink text-bone py-16 md:py-24">
      <div aria-hidden className="absolute inset-0 grit pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <header className="grid grid-cols-12 gap-4 pb-8 border-b border-bone/15">
            <p className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/60">
              § SYS/02 — Projects
            </p>
            <h2 className="col-span-12 md:col-span-9 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              Featured <span className="text-signal italic">work</span>.
            </h2>
            <p className="col-span-12 md:col-span-9 md:col-start-4 text-[15px] leading-[1.65] text-bone/70 max-w-[52ch] mt-2">
              Placeholder case studies — structured for future deep dives. Each
              card supports imagery, tags, and an optional case study link.
            </p>
          </header>
        </SystemsReveal>

        <ol className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
          {systemsProjects.map((p, i) => (
            <SystemsReveal key={p.code} delay={i * 80} className="col-span-12 md:col-span-6">
              <li className="group border border-bone/15 bg-bone/[0.03] h-full flex flex-col overflow-hidden hover:border-signal/40 transition-colors duration-300">
                <div className="aspect-[5/3] overflow-hidden border-b border-bone/15">
                  <ProjectPlate accent={p.accent} />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/50">
                    {p.code}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl leading-tight mt-2 group-hover:text-signal transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-bone/70 flex-1">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] tracking-[0.16em] uppercase text-bone/80 border border-bone/20 px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.caseStudyHref ? (
                    <a
                      href={p.caseStudyHref}
                      className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-bone border-b border-bone/40 hover:text-signal hover:border-signal w-fit"
                    >
                      Case study →
                    </a>
                  ) : (
                    <span className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/45">
                      Case study — coming soon
                    </span>
                  )}
                </div>
              </li>
            </SystemsReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
