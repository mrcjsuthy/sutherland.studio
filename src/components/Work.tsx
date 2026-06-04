import { work, type WorkPiece } from "@/data/site";
import { WorkRoomViewer } from "@/components/work/WorkRoomViewer";

type Accent = "rust" | "moss" | "copper";

const accentBg: Record<Accent, string> = {
  rust: "bg-rust",
  moss: "bg-moss",
  copper: "bg-copper",
};

const accentBorder: Record<Accent, string> = {
  rust: "border-rust/40 text-rust",
  moss: "border-moss/40 text-moss",
  copper: "border-copper/40 text-copper",
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
            <p className="label">02 of 24 indexed</p>
          </div>
          <h2 className="col-span-12 md:col-span-6 md:order-2 font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
            Pieces built between
            <span className="italic"> bench </span>
            and brief.
          </h2>
        </header>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
          {work.map((w) => (
            <WorkCard key={w.version} item={w} />
          ))}
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

function WorkCard({ item }: { item: WorkPiece }) {
  return (
    <article className="group relative flex h-full flex-col border hairline-strong bg-bone">
      <div className="relative overflow-visible">
        <div className="relative aspect-[4/3] overflow-hidden">
          <WorkRoomViewer item={item} />
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
            <span className={`size-1.5 ${accentBg[item.accent]}`} />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink/80 bg-bone/70 backdrop-blur px-1.5 py-0.5">
              {item.version} · {item.type}
            </span>
          </div>
        </div>
        <div className="absolute right-3 top-3 z-20">
          <EditionBadge
            count={item.editions}
            accent={item.accent}
            idSuffix={`${item.version}-view`}
            tooltipAlign="end"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t hairline px-4 py-4 md:px-5 md:py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl leading-none tracking-tight">
              {item.version}
            </h3>
            <p className="mt-1 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
              {item.year}
            </p>
          </div>
          <EditionBadge
            count={item.editions}
            accent={item.accent}
            idSuffix={`${item.version}-cap`}
            className="hidden sm:inline-flex"
          />
        </div>

        <ul className="mt-3 space-y-1">
          {item.materials.map((m) => (
            <li
              key={m}
              className="font-mono text-[10px] tracking-[0.14em] uppercase text-graphite before:mr-2 before:text-concrete before:content-['—']"
            >
              {m}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-[13px] leading-[1.55] text-graphite">
          <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-concrete">
            Note ·{" "}
          </span>
          {item.funFact}
        </p>
      </div>
    </article>
  );
}

function EditionBadge({
  count,
  accent,
  idSuffix,
  className = "",
  tooltipAlign = "center",
}: {
  count: number;
  accent: Accent;
  idSuffix: string;
  className?: string;
  tooltipAlign?: "center" | "end";
}) {
  const tooltipAlignClass =
    tooltipAlign === "end"
      ? "right-0 left-auto translate-x-0"
      : "left-1/2 -translate-x-1/2";

  return (
    <span
      className={`group/le relative inline-flex cursor-help items-center gap-1 border bg-bone/90 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.14em] uppercase backdrop-blur focus-within:outline-none focus-visible:ring-1 focus-visible:ring-ink/30 ${accentBorder[accent]} ${className}`}
      tabIndex={0}
      aria-describedby={`le-tip-${idSuffix}`}
    >
      <span className="text-ink/70">LE</span>
      <span className="font-semibold">×{count}</span>
      <span
        id={`le-tip-${idSuffix}`}
        role="tooltip"
        className={`pointer-events-none absolute top-full z-50 mt-2 w-max max-w-[min(240px,72vw)] ${tooltipAlignClass} border hairline-strong bg-bone px-2.5 py-2 font-mono text-[9px] normal-case leading-snug tracking-normal text-graphite opacity-0 shadow-md transition-opacity duration-150 group-hover/le:opacity-100 group-focus-visible/le:opacity-100`}
      >
        Limited edition — only{" "}
        <span className="font-semibold text-ink">{count}</span> pieces in this
        run. Each is numbered and registered at the workshop.
      </span>
    </span>
  );
}
