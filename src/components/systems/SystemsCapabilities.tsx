import { systemsCapabilities } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

export function SystemsCapabilities() {
  return (
    <section id="systems-capabilities" className="relative systems-surface-alt py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <header className="grid grid-cols-12 gap-4 pb-8 border-b hairline-strong">
            <p className="col-span-12 md:col-span-3 label-ink">§ SYS/04 — Expertise</p>
            <h2 className="col-span-12 md:col-span-9 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              Capability <em className="text-rust">matrix</em>.
            </h2>
          </header>
        </SystemsReveal>

        <div className="mt-10 grid grid-cols-12 gap-4 md:gap-6">
          {systemsCapabilities.map((cap, i) => (
            <SystemsReveal
              key={cap.category}
              delay={i * 70}
              className="col-span-12 sm:col-span-6 lg:col-span-3"
            >
              <div className="h-full border hairline-strong bg-paper p-5 md:p-6 relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
                <div aria-hidden className="absolute inset-0 grit-light" />
                <div className="relative">
                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-rust">
                    {cap.category}
                  </p>
                  <ul className="mt-4 space-y-2.5 border-t hairline pt-4">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="font-display text-lg leading-tight flex items-baseline gap-2"
                      >
                        <span className="text-rust font-mono text-[10px]">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SystemsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
