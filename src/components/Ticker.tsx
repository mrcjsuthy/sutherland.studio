import { ticker } from "@/data/site";

export function Ticker({
  variant = "ink",
}: {
  variant?: "ink" | "rust" | "bone";
}) {
  const bg =
    variant === "ink"
      ? "bg-ink text-bone"
      : variant === "rust"
      ? "bg-rust text-bone"
      : "bg-bone text-ink";

  return (
    <div className={`relative overflow-hidden ${bg} border-y hairline-strong`}>
      <div className="marquee-track flex whitespace-nowrap py-3 md:py-3.5">
        {[...Array(2)].map((_, dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center"
            aria-hidden={dup === 1}
          >
            {ticker.map((t, i) => (
              <li
                key={`${dup}-${i}`}
                className="flex items-center gap-6 px-6 font-mono text-[11px] tracking-[0.22em] uppercase"
              >
                <span>{t}</span>
                <Diamond />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

function Diamond() {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" className="opacity-70">
      <rect
        x="3"
        y="0"
        width="4.24"
        height="4.24"
        transform="rotate(45 3 0)"
        fill="currentColor"
      />
    </svg>
  );
}
