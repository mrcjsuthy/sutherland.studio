"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { Logo } from "./Logo";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Shop", href: "#products" },
  { label: "Process", href: "#process" },
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

        <ul className="hidden md:flex items-center gap-7">
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

        <div className="hidden md:flex items-center gap-3">
          <span className="hidden lg:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
            <span className="size-1.5 rounded-full bg-moss pulse-soft" />
            Taking commissions
          </span>
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
        <div className="md:hidden border-t hairline bg-bone">
          <ul className="px-5 py-4 grid grid-cols-2 gap-y-3 gap-x-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="font-mono text-[11px] tracking-[0.18em] uppercase block py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="col-span-2 pt-2">
              <a
                onClick={() => setOpen(false)}
                href="#book"
                className="btn-primary w-full justify-center"
              >
                Book a session
              </a>
            </li>
            <li className="col-span-2 label">{site.email}</li>
          </ul>
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
