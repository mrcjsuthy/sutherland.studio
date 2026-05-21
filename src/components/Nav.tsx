"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { StudioStatus } from "./StudioStatus";
import { BenchRate } from "./BenchRate";

const links = [
  { label: "Work", href: "#work" },
  { label: "Films", href: "#films" },
  { label: "Services", href: "#services" },
  { label: "Release", href: "#release" },
  { label: "Careers", href: "#careers" },
  { label: "Book", href: "#book" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-[15px] md:text-base leading-none tracking-tight">
            Sutherland <span className="italic text-concrete">Studio</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink hover:text-rust transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <BenchRate className="hidden xl:inline-flex" />
          <StudioStatus className="hidden lg:inline-flex" />
          <a href="#book" className="btn-primary">
            Book
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center size-9 border hairline-strong"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            {open ? (
              <>
                <path d="M2 2L12 12" stroke="currentColor" strokeWidth="1.4" />
                <path d="M12 2L2 12" stroke="currentColor" strokeWidth="1.4" />
              </>
            ) : (
              <>
                <path d="M1 4H13" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1 10H13" stroke="currentColor" strokeWidth="1.4" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t hairline bg-bone">
          <div className="px-5 py-4 grid grid-cols-2 gap-y-3 gap-x-6">
            <div className="col-span-2 flex flex-wrap items-center gap-x-4 gap-y-2 pb-3 border-b hairline">
              <StudioStatus />
              <BenchRate />
            </div>
            {links.map((l) => (
              <a
                key={l.href}
                onClick={() => setOpen(false)}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.18em] uppercase block py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              onClick={() => setOpen(false)}
              href="#book"
              className="btn-primary w-full justify-center col-span-2 mt-1"
            >
              Book a free session
            </a>
            <div className="col-span-2 label">{site.email}</div>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  return (
    <span className="inline-flex items-center justify-center text-ink">
      <Logo size={30} />
    </span>
  );
}
