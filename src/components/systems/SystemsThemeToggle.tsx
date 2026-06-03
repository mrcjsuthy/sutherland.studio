"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "ss-systems-theme";

export function SystemsThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark") {
      setDark(true);
      return;
    }
    if (stored === "light") {
      setDark(false);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    document.getElementById("systems-page")?.classList.toggle("systems-dark", dark);
  }, [dark, mounted]);

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-[88px] border hairline-strong opacity-40" aria-hidden />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      className="inline-flex items-center gap-2 h-9 px-3 border hairline-strong font-mono text-[10px] tracking-[0.16em] uppercase transition-colors hover:border-rust hover:text-rust"
      aria-pressed={dark}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={dark ? "text-concrete" : "text-ink"}>Light</span>
      <span className="w-px h-3 bg-grid-line-strong" aria-hidden />
      <span className={dark ? "text-ink" : "text-concrete"}>Dark</span>
    </button>
  );
}
