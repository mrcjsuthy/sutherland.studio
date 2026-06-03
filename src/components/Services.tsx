import { services, type Service } from "@/data/site";

const groupLabels: Record<Service["group"], { label: string; tag: string }> = {
  build: { label: "Build", tag: "Product · Installation · Object" },
  digital: { label: "Digital", tag: "Brand · Web · AI" },
};

export function Services() {
  const build = services.filter((s) => s.group === "build");
  const digital = services.filter((s) => s.group === "digital");

  return (
    <section id="services" className="relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        <header className="col-span-12 grid grid-cols-12 gap-4 pb-6 border-b hairline-strong">
          <p className="col-span-12 md:col-span-3 label-ink">§ 03 — Services</p>
          <h2 className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            What we&rsquo;re <em>open</em> for.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right label">
            <a
              href="/systems-automation"
              className="text-ink hover:text-rust border-b border-ink/30 hover:border-rust transition-colors"
            >
              Systems & Automation →
            </a>
          </p>
        </header>

        <div className="col-span-12 lg:col-span-7">
          <ServiceGroup items={build} group="build" mostCommissionedIndex={0} />
          <ServiceGroup items={digital} group="digital" />
        </div>

        <aside
          id="products"
          className="col-span-12 lg:col-span-5 lg:border-l hairline lg:pl-8"
        >
          <div className="pb-4 border-b hairline-strong">
            <p className="label-ink">§ 04 — Small editions</p>
            <h2 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight mt-2">
              Released as available.
            </h2>
          </div>

          <div className="mt-8 p-6 md:p-8 border hairline-strong bg-paper relative overflow-hidden min-h-[280px] flex flex-col justify-center">
            <div aria-hidden className="absolute inset-0 grit-light" />
            <div className="relative">
              <p className="label-ink">In development</p>
              <p className="font-display text-2xl md:text-3xl leading-tight mt-2 max-w-[28ch]">
                Small-run furniture and objects — tables, chairs, lamps and
                wall pieces.
              </p>
              <p className="mt-4 text-[14px] leading-[1.6] text-graphite max-w-[40ch]">
                Editions will be released as they become available. No fixed
                catalogue yet — the first pieces are in planning now.
              </p>
              <a href="#release" className="btn-ghost mt-6">
                Limited edition →
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function ServiceGroup({
  items,
  group,
  mostCommissionedIndex,
}: {
  items: Service[];
  group: Service["group"];
  mostCommissionedIndex?: number;
}) {
  const meta = groupLabels[group];
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-baseline justify-between pb-3 pt-2 border-b hairline">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink">
          {meta.label}
        </p>
        <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
          {meta.tag}
        </p>
      </div>
      <ul>
        {items.map((s, i) => {
          const external = Boolean(s.href);
          const linkProps = external
            ? {
                href: s.href,
                target: "_blank" as const,
                rel: "noreferrer" as const,
              }
            : { href: "#book" };
          return (
            <li
              key={s.code}
              className="grid grid-cols-12 gap-3 border-b hairline py-5 md:py-6 group"
            >
              <div className="col-span-2 md:col-span-1 label-ink pt-1">
                {s.code}
              </div>
              <div className="col-span-10 md:col-span-6">
                <h3 className="font-display text-xl md:text-2xl leading-tight">
                  {s.name}
                  {external && (
                    <span className="ml-2 font-mono text-[9px] tracking-[0.2em] uppercase text-rust align-middle">
                      ↗ External
                    </span>
                  )}
                </h3>
                <p className="text-[13.5px] leading-snug text-graphite mt-1 max-w-[44ch]">
                  {s.desc}
                </p>
              </div>
              <div className="col-span-7 md:col-span-3 flex md:items-center label-ink md:justify-end">
                From {s.from}
              </div>
              <div className="col-span-5 md:col-span-2 flex items-center justify-end">
                <a
                  {...linkProps}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink border-b border-ink/40 group-hover:text-rust group-hover:border-rust transition-colors"
                >
                  {external ? "Visit" : "Enquire"}
                  <span aria-hidden>→</span>
                </a>
              </div>
              {mostCommissionedIndex === i && (
                <div className="col-span-12 md:col-start-2 md:col-span-11 mt-1">
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust">
                    ★ Most commissioned
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
