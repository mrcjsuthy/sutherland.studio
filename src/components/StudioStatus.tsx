"use client";

import { useEffect, useState } from "react";
import { studioStatus, type StudioStatus as Status } from "@/lib/studio";
import { site } from "@/data/site";

type Tone = "ink" | "bone";

export function StudioStatus({
  className = "",
  tone = "ink",
  detailed = false,
}: {
  className?: string;
  tone?: Tone;
  /** When true, show the studio-hours line under the badge. */
  detailed?: boolean;
}) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const tick = () => setStatus(studioStatus());
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  // Server / first paint placeholder — keeps SSR + hydration stable.
  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase ${
          tone === "ink" ? "text-concrete" : "text-bone/55"
        } ${className}`}
      >
        <span className="size-1.5 rounded-full bg-concrete/40" />
        Studio — checking
      </span>
    );
  }

  const dot = status.open
    ? "bg-moss pulse-soft"
    : tone === "ink"
    ? "bg-concrete/60"
    : "bg-bone/40";
  const textColor = tone === "ink" ? "text-ink" : "text-bone";

  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase ${className}`}
    >
      <span className={`size-1.5 rounded-full ${dot}`} />
      <span className={textColor}>
        Studio {status.open ? "open" : "closed"}
        {detailed && (
          <span className={tone === "ink" ? "text-concrete" : "text-bone/55"}>
            {" "}· {status.open ? site.studioHours.label : status.nextOpenLabel}
          </span>
        )}
      </span>
    </span>
  );
}
