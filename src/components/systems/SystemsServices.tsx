import { systemsServices } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

export function SystemsServices() {
  return (
    <section id="systems-services" className="relative systems-surface-alt py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <header className="grid grid-cols-12 gap-4 pb-8 border-b hairline-strong">
            <p className="col-span-12 md:col-span-3 label-ink">§ SYS/01 — Capabilities</p>
            <h2 className="col-span-12 md:col-span-9 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              What we <em className="text-rust">build</em>.
            </h2>
          </header>
        </SystemsReveal>

        <ul className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
          {systemsServices.map((s, i) => (
            <SystemsReveal key={s.code} delay={i * 60} className="col-span-12 md:col-span-6">
              <li className="h-full border hairline-strong bg-paper p-6 md:p-7 relative overflow-hidden group hover:border-rust transition-colors duration-300">
                <div aria-hidden className="absolute inset-0 grit-light opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="label-ink">{s.code}</p>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight mt-2">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-graphite max-w-[44ch]">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink border hairline px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#systems-contact"
                    className="inline-flex mt-5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink border-b border-ink/40 group-hover:text-rust group-hover:border-rust transition-colors"
                  >
                    Discuss this capability →
                  </a>
                </div>
              </li>
            </SystemsReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
