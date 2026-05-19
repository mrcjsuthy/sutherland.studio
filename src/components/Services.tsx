import { services, products } from "@/data/site";

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-4 md:gap-8">
        {/* Header */}
        <header className="col-span-12 grid grid-cols-12 gap-4 pb-6 border-b hairline-strong">
          <p className="col-span-12 md:col-span-3 label-ink">§ 03 — Services</p>
          <h2 className="col-span-12 md:col-span-6 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            What we’re <em>open</em> for.
          </h2>
          <p className="col-span-12 md:col-span-3 md:text-right label">
            Prices ex GST · NZD
          </p>
        </header>

        {/* Services table */}
        <div className="col-span-12 lg:col-span-7">
          <ul className="border-b hairline">
            {services.map((s, i) => (
              <li
                key={s.code}
                className="grid grid-cols-12 gap-3 border-t hairline py-5 md:py-6 group"
              >
                <div className="col-span-2 md:col-span-1 label-ink pt-1">
                  {s.code}
                </div>
                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-display text-xl md:text-2xl leading-tight">
                    {s.name}
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
                    href="#book"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-ink border-b border-ink/40 group-hover:text-rust group-hover:border-rust transition-colors"
                  >
                    Enquire
                    <span aria-hidden>→</span>
                  </a>
                </div>
                {i === 0 && (
                  <div className="col-span-12 md:col-start-2 md:col-span-11 mt-1">
                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-rust">
                      ★ Most commissioned
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Shop / Products */}
        <aside
          id="products"
          className="col-span-12 lg:col-span-5 lg:border-l hairline lg:pl-8"
        >
          <div className="flex items-end justify-between pb-4 border-b hairline-strong">
            <div>
              <p className="label-ink">§ 04 — Shop · In development</p>
              <h2 className="font-display text-3xl md:text-4xl leading-[0.95] tracking-tight mt-2">
                Small editions.
              </h2>
            </div>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-concrete hidden md:inline">
              06 SKUs
            </span>
          </div>

          <ul className="divide-y hairline">
            {products.map((p) => (
              <li
                key={p.code}
                className="py-4 grid grid-cols-12 gap-2 items-center"
              >
                <span className="col-span-2 label">{p.code}</span>
                <span className="col-span-6 font-display text-lg leading-tight">
                  {p.name}
                </span>
                <span className="col-span-2 font-mono text-[11px] tracking-[0.1em] text-graphite text-right">
                  {p.price}
                </span>
                <span
                  className={`col-span-2 text-right font-mono text-[10px] tracking-[0.16em] uppercase ${
                    p.status === "In stock"
                      ? "text-moss"
                      : p.status === "Pre-order"
                      ? "text-rust"
                      : "text-concrete"
                  }`}
                >
                  {p.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-5 border hairline-strong bg-paper relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grit-light" />
            <p className="relative label-ink">Pre-order list</p>
            <p className="relative font-display text-xl leading-tight mt-1 max-w-[28ch]">
              The first run of <em>Sedia 04</em> opens in Q3. Twelve seats only.
            </p>
            <a href="#book" className="relative btn-ghost mt-4">
              Join the list
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
