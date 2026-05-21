// Studio status, hourly rate and countdown helpers.
// All time math is done relative to Pacific/Auckland regardless of the
// visitor's local clock, so the studio's "open" state and "bench rate" are
// the same for everyone hitting the site.

import { site } from "@/data/site";

export type StudioStatus = {
  open: boolean;
  /** Numeric day in NZ (0 = Sun … 6 = Sat) */
  day: number;
  /** Hour 0–23 in NZ */
  hour: number;
  /** Minute 0–59 in NZ */
  minute: number;
  /** Short human label e.g. "Open · 17:32 NZT" or "Closed · opens Mon 09:00" */
  label: string;
  /** Pre-formatted next-open string when closed */
  nextOpenLabel: string | null;
};

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function nzParts(now: Date) {
  const fmt = new Intl.DateTimeFormat("en-NZ", {
    timeZone: site.studioHours.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hourStr = parts.find((p) => p.type === "hour")?.value ?? "0";
  const minuteStr = parts.find((p) => p.type === "minute")?.value ?? "0";
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return {
    day: dayMap[weekday] ?? 1,
    hour: Number(hourStr) % 24, // en-NZ sometimes returns "24" at midnight
    minute: Number(minuteStr),
  };
}

export function studioStatus(now: Date = new Date()): StudioStatus {
  const { day, hour, minute } = nzParts(now);
  const isWeekday = day >= 1 && day <= 5;
  const { weekdayOpen, weekdayClose } = site.studioHours;
  const open = isWeekday && hour >= weekdayOpen && hour < weekdayClose;

  const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;

  let label: string;
  let nextOpenLabel: string | null = null;
  if (open) {
    label = `Open · ${time} NZT`;
  } else {
    // Compute next open day label
    let nd = day;
    let added = 0;
    if (!isWeekday || hour >= weekdayClose) {
      do {
        nd = (nd + 1) % 7;
        added++;
      } while (!(nd >= 1 && nd <= 5) && added < 7);
      nextOpenLabel = `Opens ${WEEKDAY_NAMES[nd]} ${String(weekdayOpen).padStart(2, "0")}:00`;
    } else {
      // Same-day before opening
      nextOpenLabel = `Opens today ${String(weekdayOpen).padStart(2, "0")}:00`;
    }
    label = `Closed · ${nextOpenLabel}`;
  }

  return { open, day, hour, minute, label, nextOpenLabel };
}

export type HourlyRate = {
  /** Whole dollars, NZD ex GST. */
  rate: number;
  /** "Peak" / "Steady" / "Off-peak" / "Closed". */
  band: "peak" | "steady" | "off-peak" | "closed";
  /** Direction relative to next hour. */
  trend: "up" | "down" | "flat";
};

/**
 * Bench rate fluctuates by hour of day. It's a deterministic function of the
 * local NZ clock — same rate for every visitor at the same moment. Closed
 * hours show no rate.
 */
export function hourlyRate(now: Date = new Date()): HourlyRate {
  const { day, hour } = nzParts(now);
  const isWeekday = day >= 1 && day <= 5;
  const { weekdayOpen, weekdayClose } = site.studioHours;
  if (!isWeekday || hour < weekdayOpen || hour >= weekdayClose) {
    return { rate: 0, band: "closed", trend: "flat" };
  }

  // Parabolic curve, peak at noon, range ~125-195 NZD/hr.
  const rateFor = (h: number) => {
    const peak = 12;
    const dx = h - peak;
    const raw = 195 - Math.abs(dx) * 8;
    return Math.max(125, Math.round(raw / 5) * 5);
  };
  const rate = rateFor(hour);
  const nextRate = rateFor(hour + 1);
  const trend: HourlyRate["trend"] =
    nextRate > rate ? "up" : nextRate < rate ? "down" : "flat";
  const band: HourlyRate["band"] =
    rate >= 180 ? "peak" : rate >= 155 ? "steady" : "off-peak";

  return { rate, band, trend };
}

export type Countdown = {
  expired: boolean;
  /** Total milliseconds remaining. Negative when expired. */
  ms: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function countdown(target: string | Date, now: Date = new Date()): Countdown {
  const t = typeof target === "string" ? new Date(target) : target;
  const ms = t.getTime() - now.getTime();
  const expired = ms <= 0;
  const abs = Math.max(0, ms);
  const seconds = Math.floor(abs / 1000) % 60;
  const minutes = Math.floor(abs / 60_000) % 60;
  const hours = Math.floor(abs / 3_600_000) % 24;
  const days = Math.floor(abs / 86_400_000);
  return { expired, ms, days, hours, minutes, seconds };
}
