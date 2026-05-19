import { process } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="relative bg-ink text-bone">
      <div aria-hidden className="absolute inset-0 grit pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="grid grid-cols-12 gap-4 pb-8 border-b border-bone/15">
          <p className="col-span-12 md:col-span-3 font-mono text-[10px] tracking-[0.18em] uppercase text-bone/60">
            § 05 — Process
          </p>
          <h2 className="col-span-12 md:col-span-9 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            From <span className="text-signal italic">sketch</span> to settled
            in your living room — in five movements.
          </h2>
        </header>

        <ol className="mt-10 grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-10">
          {process.map((p, i) => (
            <li
              key={p.n}
              className="col-span-12 md:col-span-6 lg:col-span-2 lg:border-r lg:last:border-0 border-bone/15 lg:pr-4"
            >
              <div className="flex items-baseline justify-between border-b border-bone/15 pb-3">
                <span className="font-display text-4xl leading-none">
                  {p.n}
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/50">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-tight mt-3">
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-bone/70 mt-2">
                {p.body}
              </p>
            </li>
          ))}
        </ol>

        {/* Footer band */}
        <div className="mt-14 md:mt-16 grid grid-cols-12 gap-4 border-t border-bone/15 pt-6">
          <div className="col-span-12 md:col-span-5">
            <p className="font-display text-2xl md:text-3xl leading-tight max-w-[28ch]">
              All work backed by a written
              <span className="text-signal"> 10-year guarantee</span>.
            </p>
          </div>
          <ul className="col-span-12 md:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["Fixed quote", "Before we begin."],
              ["Weekly photos", "While we build."],
              ["Hand delivery", "Auckland-wide."],
              ["Aftercare kit", "Oil, wax, instructions."],
            ].map(([k, v]) => (
              <li key={k} className="border-l border-bone/15 pl-3">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-bone/55">
                  {k}
                </p>
                <p className="font-display text-base leading-tight mt-1">
                  {v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
