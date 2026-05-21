"use client";

import { useEffect, useState } from "react";
import { hourlyRate, type HourlyRate } from "@/lib/studio";

const bandLabel: Record<HourlyRate["band"], string> = {
  peak: "Peak",
  steady: "Steady",
  "off-peak": "Off-peak",
  closed: "Closed",
};

const trendGlyph: Record<HourlyRate["trend"], string> = {
  up: "▲",
  down: "▼",
  flat: "—",
};

export function BenchRate({ className = "" }: { className?: string }) {
  const [rate, setRate] = useState<HourlyRate | null>(null);

  useEffect(() => {
    const tick = () => setRate(hourlyRate());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!rate) {
    return (
      <span
        className={`inline-flex items-baseline gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete ${className}`}
        aria-hidden
      >
        Rate —
      </span>
    );
  }

  if (rate.band === "closed") {
    return (
      <span
        className={`inline-flex items-baseline gap-2 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete ${className}`}
        title="Studio is closed — rate resumes next weekday at 09:00 NZT."
      >
        <span className="opacity-60">Bench rate</span>
        <span className="text-ink">— · Closed</span>
      </span>
    );
  }

  const tone =
    rate.band === "peak"
      ? "text-rust"
      : rate.band === "steady"
      ? "text-ink"
      : "text-moss";

  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-mono text-[10px] tracking-[0.16em] uppercase ${className}`}
      title={`Bench rate updates hourly with workshop availability. ${bandLabel[rate.band]} demand.`}
    >
      <span className="text-concrete">Bench</span>
      <span className={`font-display normal-case tracking-tight text-[13px] leading-none ${tone}`}>
        NZD&nbsp;{rate.rate}
      </span>
      <span className={`text-[9px] ${tone}`} aria-hidden>
        /hr {trendGlyph[rate.trend]}
      </span>
    </span>
  );
}
