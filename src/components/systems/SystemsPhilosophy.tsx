import { systemsPhilosophy } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

export function SystemsPhilosophy() {
  return (
    <section id="systems-philosophy" className="relative bg-ink text-bone py-16 md:py-24">
      <div aria-hidden className="absolute inset-0 grit pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <p className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/60">
              § SYS/05 — Philosophy
            </p>
            <div className="col-span-12 md:col-span-9 md:border-l border-bone/15 md:pl-8">
              <h2 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight max-w-[20ch]">
                {systemsPhilosophy.title}
              </h2>
              <p className="mt-6 text-[16px] md:text-lg leading-[1.65] text-bone/75 max-w-[52ch]">
                {systemsPhilosophy.body}
              </p>
            </div>
          </div>
        </SystemsReveal>
      </div>
    </section>
  );
}
