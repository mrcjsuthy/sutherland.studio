import Link from "next/link";
import { systemsHero } from "@/data/systems";
import { SystemsHeroPlate } from "./SystemsHeroPlate";
import { SystemsReveal } from "./SystemsReveal";
import { SystemsThemeToggle } from "./SystemsThemeToggle";

export function SystemsHero() {
  return (
    <section
      id="systems-top"
      className="relative pt-[var(--nav-h)] pb-0 overflow-hidden systems-surface"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none systems-grid"
      />
      <div aria-hidden className="absolute inset-0 grit-light pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-4 pb-6 border-b hairline">
          <div className="col-span-12 md:col-span-4 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-rust pulse-soft" />
            <span className="label-ink">{systemsHero.label}</span>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center label">
            <Link
              href="/"
              className="hover:text-rust transition-colors"
            >
              ← Design & Build
            </Link>
          </div>
          <div className="col-span-12 md:col-span-4 flex items-center justify-start md:justify-end gap-4">
            <span className="label hidden sm:inline">Auckland · NZ</span>
            <SystemsThemeToggle />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-4 gap-y-10 pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="col-span-12 lg:col-span-6">
            <SystemsReveal>
              <h1
                className="rise font-display font-light leading-[0.9] tracking-[-0.04em]"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)" }}
              >
                {systemsHero.headline}
              </h1>
              <p className="mt-6 text-[15px] md:text-base leading-[1.65] text-graphite max-w-[48ch]">
                {systemsHero.subheadline}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href={systemsHero.ctaProjects.href} className="btn-primary justify-center sm:justify-start">
                  {systemsHero.ctaProjects.label}
                  <Arrow />
                </a>
                <a href={systemsHero.ctaDiscuss.href} className="btn-ghost justify-center sm:justify-start">
                  {systemsHero.ctaDiscuss.label}
                </a>
              </div>
              <p className="mt-8 font-mono text-[10px] tracking-[0.18em] uppercase text-concrete max-w-[42ch]">
                Industrial automation · IoT · Sensors · Embedded · Analytics ·
                Digital twins · Prototyping
              </p>
            </SystemsReveal>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:border-l hairline lg:pl-8">
            <SystemsReveal delay={120}>
              <div className="border hairline-strong overflow-hidden bg-paper relative">
                <SystemsHeroPlate className="w-full h-auto block" />
              </div>
            </SystemsReveal>
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
