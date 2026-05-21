import { site } from "@/data/site";
import { Newsletter } from "./Newsletter";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-bone">
      <div aria-hidden className="absolute inset-0 grit pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-8">
        {/* Big wordmark */}
        <div className="flex flex-col">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55">
            {site.domain}
          </p>
          <h2
            aria-hidden
            className="font-display font-light leading-[0.85] tracking-[-0.05em] uppercase mt-3 whitespace-nowrap"
            style={{ fontSize: "clamp(54px, 9.4vw, 180px)" }}
          >
            Sutherland<span className="italic">.studio</span>
          </h2>
        </div>

        {/* Columns */}
        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-8 border-t border-bone/15 pt-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55 mb-3">
              Studio
            </p>
            <p className="font-display text-xl leading-tight">
              Workshop
              <br />
              Milford, Auckland
              <br />
              Aotearoa New Zealand
            </p>
            <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-bone/50 mt-3">
              Lat 36°46′S · Long 174°45′E
            </p>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55 mb-3">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a className="font-display text-lg md:text-xl leading-tight hover:text-signal break-all" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="font-display text-lg md:text-xl leading-tight hover:text-signal" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a className="font-display text-lg md:text-xl leading-tight hover:text-signal" href={`https://instagram.com/${site.instagram.replace("@", "")}`} target="_blank" rel="noreferrer">
                  {site.instagram}
                </a>
              </li>
              <li>
                <a className="font-display text-lg md:text-xl leading-tight hover:text-signal" href={site.youtube.url} target="_blank" rel="noreferrer">
                  YouTube — {site.youtube.handle}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55 mb-3">
              Index
            </p>
            <ul className="space-y-2">
              {[
                ["01", "At the bench", "#bench"],
                ["02", "Work", "#work"],
                ["03", "Films", "#films"],
                ["04", "Services", "#services"],
                ["05", "Release", "#release"],
                ["06", "Process", "#process"],
                ["07", "Careers", "#careers"],
                ["08", "Book", "#book"],
              ].map(([n, label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="grid grid-cols-12 gap-2 items-baseline group"
                  >
                    <span className="col-span-2 font-mono text-[10px] tracking-[0.18em] text-bone/45 group-hover:text-signal">
                      {n}
                    </span>
                    <span className="col-span-10 font-display text-xl leading-tight group-hover:text-signal">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/55 mb-3">
              Newsletter
            </p>
            <p className="font-display text-xl leading-tight">
              Four times a year. New pieces, open commissions, workshop notes.
            </p>
            <Newsletter />
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-14 pt-6 border-t border-bone/15 grid grid-cols-12 gap-4 items-end">
          <p className="col-span-12 md:col-span-5 font-mono text-[10px] tracking-[0.16em] uppercase text-bone/50">
            © {year} Sutherland Studio · All work hand built in Aotearoa.
          </p>
          <p className="col-span-6 md:col-span-4 font-mono text-[10px] tracking-[0.16em] uppercase text-bone/50">
            Set in Fraunces &amp; Inter · Made with care in Auckland.
          </p>
          <p className="col-span-6 md:col-span-3 md:text-right font-mono text-[10px] tracking-[0.16em] uppercase text-bone/50">
            Firenze ⇄ Tāmaki Makaurau
          </p>
        </div>
      </div>
    </footer>
  );
}
