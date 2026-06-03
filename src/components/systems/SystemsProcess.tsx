import { systemsProcess } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

export function SystemsProcess() {
  return (
    <section id="systems-process" className="relative systems-surface py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <header className="grid grid-cols-12 gap-4 pb-8 border-b hairline-strong">
            <p className="col-span-12 md:col-span-3 label-ink">§ SYS/03 — Process</p>
            <h2 className="col-span-12 md:col-span-9 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
              Six movements from problem to <em className="text-rust">deployed</em>.
            </h2>
          </header>
        </SystemsReveal>

        <ol className="mt-10 relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[27px] top-8 bottom-8 w-px bg-[var(--grid-line-strong)]"
          />
          {systemsProcess.map((step, i) => (
            <SystemsReveal key={step.n} delay={i * 50}>
              <li className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b hairline last:border-0">
                <div className="col-span-12 md:col-span-1 flex md:justify-center">
                  <span className="relative z-10 inline-flex size-14 items-center justify-center border hairline-strong bg-paper font-display text-2xl leading-none">
                    {step.n}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-7 md:pl-4">
                  <p className="text-[15px] leading-[1.65] text-graphite max-w-[48ch]">
                    {step.body}
                  </p>
                </div>
              </li>
            </SystemsReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
