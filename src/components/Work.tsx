import { work } from "@/data/site";

type Accent = "rust" | "moss" | "copper";

const accentBg: Record<Accent, string> = {
  rust: "bg-rust",
  moss: "bg-moss",
  copper: "bg-copper",
};

const accentText: Record<Accent, string> = {
  rust: "text-rust",
  moss: "text-moss",
  copper: "text-copper",
};

export function Work() {
  return (
    <section id="work" className="relative bg-paper border-y hairline">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <header className="grid grid-cols-12 gap-4 pb-8 border-b hairline-strong">
          <div className="col-span-6 md:col-span-3">
            <p className="label-ink">§ 02 — Selected work</p>
          </div>
          <div className="col-span-6 md:col-span-3 md:order-3 flex md:justify-end items-end">
            <p className="label">06 of 24 indexed</p>
          </div>
          <h2 className="col-span-12 md:col-span-6 md:order-2 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Pieces built between
            <span className="italic"> bench </span>
            and brief.
          </h2>
        </header>

        {/* Asymmetric editorial grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-12 gap-3 md:gap-4">
          {work.map((w, i) => {
            // Vary column spans / row spans for asymmetry
            const spans = [
              "col-span-12 md:col-span-7 md:row-span-2",
              "col-span-6 md:col-span-5",
              "col-span-6 md:col-span-5",
              "col-span-12 md:col-span-4 md:row-span-2",
              "col-span-6 md:col-span-4",
              "col-span-6 md:col-span-4",
            ];
            const span = spans[i % spans.length];
            return (
              <WorkCard key={w.n} item={w} span={span} index={i} />
            );
          })}
        </div>

        <footer className="mt-10 md:mt-12 flex flex-wrap items-end justify-between gap-4 border-t hairline pt-6">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-concrete max-w-[42ch]">
            Full archive available on request. New commissions are scheduled
            against current workshop load — typically 6 to 12 weeks out.
          </p>
          <a href="#book" className="btn-ghost">
            Commission a piece
          </a>
        </footer>
      </div>
    </section>
  );
}

function WorkCard({
  item,
  span,
  index,
}: {
  item: (typeof work)[number];
  span: string;
  index: number;
}) {
  const isFeature = span.includes("row-span-2");

  return (
    <article
      className={`${span} group relative bg-bone border hairline-strong overflow-hidden flex flex-col`}
    >
      {/* Image / illustration plate */}
      <div
        className={`relative ${
          isFeature ? "aspect-[4/5] md:aspect-auto md:flex-1" : "aspect-[4/3]"
        } overflow-hidden`}
      >
        <Plate accent={item.accent} index={index} />
        {/* Overlay number */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`size-1.5 ${accentBg[item.accent]}`} />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/80 bg-bone/70 backdrop-blur px-1.5 py-0.5">
            {item.n} · {item.type}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/80 bg-bone/70 backdrop-blur px-1.5 py-0.5">
            {item.year}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="px-4 py-4 md:px-5 md:py-5 border-t hairline">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl md:text-2xl leading-tight min-w-0">
            {item.title}
          </h3>
          <p
            className={`font-mono text-[9px] md:text-[10px] tracking-[0.14em] uppercase shrink-0 text-right max-w-[42%] ${accentText[item.accent]}`}
          >
            {item.material.split(" · ")[0]}
          </p>
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete mt-1">
          {item.place}
        </p>
        {isFeature && (
          <p className="text-[13px] leading-snug text-graphite mt-2 max-w-[42ch]">
            {item.notes}
          </p>
        )}
      </div>
    </article>
  );
}

/**
 * SVG "plate" used in place of imagery. Each plate is a different
 * abstract industrial composition so the grid feels rich without
 * needing real photography on day one.
 */
function Plate({ accent, index }: { accent: Accent; index: number }) {
  const accentVar =
    accent === "rust"
      ? "var(--rust)"
      : accent === "moss"
      ? "var(--moss)"
      : "var(--copper)";

  const variant = index % 6;

  return (
    <div className="absolute inset-0">
      {/* base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            variant === 0
              ? "linear-gradient(135deg, #1f1d18 0%, #2a2823 60%, #14130f 100%)"
              : variant === 1
              ? "linear-gradient(180deg, #e5dec8 0%, #d4ccb4 100%)"
              : variant === 2
              ? "linear-gradient(160deg, #cdc4a9 0%, #b9b099 100%)"
              : variant === 3
              ? "linear-gradient(210deg, #1a1916 0%, #2c2a24 100%)"
              : variant === 4
              ? "linear-gradient(180deg, #ece6d8 0%, #ddd3b9 100%)"
              : "linear-gradient(135deg, #2a2823 0%, #14130f 100%)",
        }}
      />
      {/* Composition svgs */}
      <svg
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
      >
        {variant === 0 && (
          <>
            <rect x="60" y="220" width="280" height="14" fill="#3c3a33" />
            <rect x="80" y="100" width="6" height="120" fill="#494640" />
            <rect x="314" y="100" width="6" height="120" fill="#494640" />
            <rect x="60" y="90" width="280" height="14" fill={accentVar} />
            <circle cx="200" cy="60" r="22" fill="#d9d1bc" opacity="0.9" />
          </>
        )}
        {variant === 1 && (
          <>
            <rect x="40" y="40" width="320" height="240" fill="none" stroke="#2a2823" strokeWidth="2" />
            <rect x="60" y="60" width="140" height="200" fill="#2a2823" />
            <rect x="60" y="60" width="140" height="40" fill={accentVar} />
            <rect x="220" y="60" width="120" height="95" fill="#2a2823" />
            <rect x="220" y="170" width="120" height="90" fill="#2a2823" />
            <circle cx="290" cy="115" r="6" fill={accentVar} />
            <circle cx="290" cy="220" r="6" fill={accentVar} />
          </>
        )}
        {variant === 2 && (
          <>
            <ellipse cx="200" cy="240" rx="120" ry="14" fill="#14130f" opacity="0.25" />
            <rect x="170" y="120" width="60" height="120" fill="#2a2823" />
            <rect x="155" y="100" width="90" height="22" fill={accentVar} />
            <rect x="170" y="60" width="60" height="44" fill="#d9d1bc" />
            <circle cx="200" cy="82" r="12" fill={accentVar} />
          </>
        )}
        {variant === 3 && (
          <>
            <rect x="0" y="0" width="400" height="320" fill="none" />
            <path d="M40 260 L200 80 L360 260 Z" fill="#1f1d18" stroke={accentVar} strokeWidth="2" />
            <rect x="180" y="200" width="40" height="60" fill={accentVar} />
            <line x1="40" y1="260" x2="360" y2="260" stroke="#d9d1bc" strokeWidth="1" />
          </>
        )}
        {variant === 4 && (
          <>
            <rect x="0" y="240" width="400" height="80" fill="#2a2823" />
            <rect x="80" y="120" width="240" height="120" fill="#14130f" />
            <rect x="80" y="120" width="240" height="10" fill={accentVar} />
            <rect x="100" y="150" width="40" height="80" fill="#3a382f" />
            <rect x="160" y="150" width="40" height="80" fill="#3a382f" />
            <rect x="220" y="150" width="40" height="80" fill="#3a382f" />
            <rect x="280" y="150" width="40" height="80" fill="#3a382f" />
          </>
        )}
        {variant === 5 && (
          <>
            <circle cx="200" cy="160" r="100" fill="none" stroke={accentVar} strokeWidth="2" />
            <circle cx="200" cy="160" r="60" fill="#d9d1bc" />
            <rect x="195" y="100" width="10" height="120" fill="#14130f" />
            <rect x="140" y="155" width="120" height="10" fill="#14130f" />
          </>
        )}
        {/* Grain dots */}
        <g opacity="0.18">
          {Array.from({ length: 40 }).map((_, i) => (
            <circle
              key={i}
              cx={(i * 37) % 400}
              cy={(i * 71) % 320}
              r="0.7"
              fill="#fff"
            />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 grit pointer-events-none" />
    </div>
  );
}
