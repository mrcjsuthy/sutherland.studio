import Link from "next/link";
import { site } from "@/data/site";
import { systemsContact } from "@/data/systems";
import { SystemsReveal } from "./SystemsReveal";

export function SystemsContact() {
  return (
    <section id="systems-contact" className="relative systems-surface py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <SystemsReveal>
          <div className="border hairline-strong bg-paper p-8 md:p-12 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grit-light" />
            <div className="relative grid grid-cols-12 gap-6 md:gap-8 items-end">
              <div className="col-span-12 md:col-span-8">
                <p className="label-ink">§ SYS/06 — Contact</p>
                <h2 className="font-display text-4xl md:text-5xl leading-[0.92] tracking-tight mt-3">
                  {systemsContact.headline}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.65] text-graphite max-w-[48ch]">
                  {systemsContact.subheadline}
                </p>
                <p className="mt-4 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
                  Or write directly —{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink hover:text-rust border-b border-ink/40"
                    style={{ textTransform: "none", letterSpacing: 0 }}
                  >
                    {site.email}
                  </a>
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 flex md:justify-end">
                <Link href={systemsContact.cta.href} className="btn-primary w-full md:w-auto justify-center">
                  {systemsContact.cta.label}
                  <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </SystemsReveal>
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
