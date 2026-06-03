"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { mainNav } from "@/data/nav";
import { Logo } from "./Logo";
import { StudioStatus } from "./StudioStatus";
import { BenchRate } from "./BenchRate";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onSystems = pathname.startsWith("/systems-automation");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookHref = onSystems ? "/#book" : "#book";

  return (
    <header
      className={`site-header fixed top-0 inset-x-0 z-50 min-h-[var(--nav-h)] transition-colors duration-300 ${
        scrolled
          ? "bg-bone/85 backdrop-blur supports-[backdrop-filter]:bg-bone/70 border-b hairline"
          : "bg-transparent"
      }`}
    >
      <nav className="site-nav max-w-[1400px] mx-auto px-5 md:px-8 min-h-[var(--nav-row-h)] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-[15px] md:text-base leading-none tracking-tight">
            Sutherland <span className="italic text-concrete">Studio</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-3 xl:gap-5 shrink min-w-0">
          {mainNav.map((l) => {
            const active = l.match ? pathname === l.match : false;
            return (
              <li key={l.href} className="shrink-0">
                <Link
                  href={l.href}
                  className={`font-mono text-[11px] tracking-[0.18em] uppercase whitespace-nowrap py-1 transition-colors ${
                    active ? "text-rust" : "text-ink hover:text-rust"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3 xl:gap-4 shrink-0">
          <BenchRate className="hidden xl:inline-flex" />
          <StudioStatus className="hidden lg:inline-flex" />
          <Link href={bookHref} className="btn-primary shrink-0 !py-3 md:!py-3.5">
            Book
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center size-9 border hairline-strong"
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
            {mainNav.map((l) => (
              <Link
                key={l.href}
                onClick={() => setOpen(false)}
                href={l.href}
                className={`font-mono text-[11px] tracking-[0.18em] uppercase block py-2 ${
                  l.match && pathname === l.match ? "text-rust" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              onClick={() => setOpen(false)}
              href={bookHref}
              className="btn-primary w-full justify-center col-span-2 mt-1"
            >
              Book a free session
            </Link>
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
