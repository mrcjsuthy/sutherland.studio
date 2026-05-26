import { site } from "@/data/site";

export function Manifesto() {
  return (
    <section id="about" className="relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        <div className="col-span-12 md:col-span-3 flex md:flex-col md:justify-between gap-4">
          <div>
            <p className="label-ink">§ 01 — Manifesto</p>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete mt-1">
              Read time · 40 sec
            </p>
          </div>
          <div className="hidden md:block">
            <p className="label">Filed under</p>
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-ink leading-relaxed">
              Practice
              <br />
              Provenance
              <br />
              Material
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-9">
          <p className="font-display text-[28px] md:text-[44px] leading-[1.08] tracking-tight max-w-[22ch]">
            We make things that are <em className="text-rust">specific</em>—
            for a place, a person, a use. Not catalogue. Not committee.
          </p>

          <div className="mt-8 md:mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[15px] leading-[1.65] text-graphite">
                {site.manifesto}
              </p>
              <p className="mt-5 text-[15px] leading-[1.65] text-graphite">
                A piece begins with a conversation and a sharpened pencil. It
                ends on a truck headed across Tāmaki Makaurau — to a lounge, a
                gallery wall, a studio. In between: drawings, prototypes,
                steel that gets cut, oak that gets steam-bent, brass that gets
                polished. The fingerprints stay on.
              </p>
            </div>
            <aside className="col-span-12 md:col-span-5 border-l hairline md:pl-6">
              <p className="label mb-3">Studio principles</p>
              <ol className="space-y-3">
                {[
                  "One bench. One set of hands.",
                  "Every build, on film — delivered with the piece.",
                  "Honest materials, visible joints.",
                  "Drawn before it’s built.",
                  "A 10-year guarantee, in writing.",
                  "Local where possible; Italian where it matters.",
                ].map((p, i) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[14px] leading-snug border-b hairline pb-3 last:border-0"
                  >
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete pt-1 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
