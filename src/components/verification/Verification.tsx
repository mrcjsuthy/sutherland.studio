"use client";

import { useState } from "react";
import type { VerificationRecord } from "@/data/verification";
import { verificationBadge } from "@/data/verification";
import { site } from "@/data/site";
import { VerificationBadgeViewer } from "./VerificationBadgeViewer";

type ApiOk = { ok: true; record: VerificationRecord };
type ApiErr = { ok: false; error: string };

export function Verification() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<VerificationRecord | null>(null);

  const expanded = record !== null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = (await res.json()) as ApiOk | ApiErr;
      if (!data.ok) {
        setRecord(null);
        setError(data.error);
        return;
      }
      setRecord(data.record);
    } catch {
      setRecord(null);
      setError("Could not reach verification. Try again shortly.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setRecord(null);
    setError(null);
    setCode("");
  }

  return (
    <section
      id="verify"
      className={`relative border-y hairline bg-paper transition-[padding] duration-300 ${
        expanded ? "py-12 md:py-20" : "py-14 md:py-20"
      }`}
    >
      <div
        className={`mx-auto w-full px-5 md:px-8 ${
          expanded
            ? "max-w-[1400px]"
            : "flex min-h-[min(44vh,26rem)] max-w-3xl flex-col items-center justify-center text-center md:min-h-[min(40vh,22rem)]"
        }`}
      >
        {expanded ? (
          <header className="grid grid-cols-12 gap-4 border-b hairline-strong pb-8">
            <p className="col-span-12 md:col-span-3 label-ink text-left">
              § VF — Verification
            </p>
            <div className="col-span-12 md:col-span-9 text-left">
              <h2 className="font-display text-3xl md:text-5xl leading-[0.95] tracking-tight">
                Every piece carries a{" "}
                <span className="text-copper italic">brass badge</span>.
              </h2>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-[1.65] text-graphite">
                Each finished work ships with a cast brass verification badge.
                Your code is registered to the build below — film, manufacture
                date, and bench notes.
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-concrete">
                {verificationBadge.material}
              </p>
            </div>
          </header>
        ) : (
          <header className="w-full">
            <p className="label-ink">§ VF — Verification</p>
            <h2 className="mt-3 font-display text-2xl leading-[0.95] tracking-tight md:text-4xl">
              Every piece carries a{" "}
              <span className="text-copper italic">brass badge</span>.
            </h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-[14px] leading-snug text-graphite">
              Laser-etched code on each piece — search here to verify
              authenticity.
            </p>
          </header>
        )}

        <div
          className={`grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 md:items-center ${
            expanded ? "mt-8 md:mt-10 max-w-4xl mx-auto" : "mt-8 md:mt-10"
          }`}
        >
          <div className="flex justify-center md:col-span-1">
            <VerificationBadgeViewer />
          </div>
          <div className="flex min-w-0 flex-col justify-center text-left md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter etched code"
                autoComplete="off"
                spellCheck={false}
                aria-label="Badge verification code"
                className="h-11 min-w-0 flex-1 border hairline-strong bg-bone px-3 font-mono text-sm tracking-widest text-ink placeholder:text-concrete/60 focus:outline-none focus:ring-1 focus:ring-copper/50"
              />
              <button
                type="submit"
                disabled={loading || !code.trim()}
                className="btn-primary shrink-0 disabled:opacity-50"
              >
                {loading ? "Checking…" : "Verify"}
              </button>
            </form>

            {error && (
              <p
                role="alert"
                className="mt-3 border hairline-strong border-rust/30 bg-bone px-3 py-2 font-mono text-[10px] tracking-[0.12em] uppercase text-rust"
              >
                {error}
              </p>
            )}
          </div>
        </div>

        {record && (
          <div className="mx-auto mt-8 w-full max-w-4xl space-y-4 md:mt-10">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={reset}
                className="font-mono text-[10px] tracking-[0.16em] uppercase text-concrete hover:text-rust transition-colors"
              >
                Verify another code
              </button>
            </div>
            <VerificationResult record={record} />
          </div>
        )}
      </div>
    </section>
  );
}

function VerificationResult({ record }: { record: VerificationRecord }) {
  const { buildVideo } = record;

  return (
    <article className="border hairline-strong bg-bone">
      <header className="border-b hairline px-4 py-4 md:px-6 md:py-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-moss">
              Authentic · Registered
            </p>
            <h3 className="mt-1 font-display text-2xl md:text-3xl leading-tight tracking-tight">
              {record.pieceVersion}
              <span className="text-concrete"> · </span>
              {record.pieceType}
            </h3>
          </div>
          <span className="border hairline bg-paper px-2 py-1 font-mono text-[10px] tracking-[0.16em] uppercase text-copper">
            Piece {record.editionSerial} / {record.editionTotal}
          </span>
        </div>
        <dl className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[9px] tracking-[0.16em] uppercase text-concrete">
              Manufactured
            </dt>
            <dd className="mt-0.5 text-[13px] text-graphite">
              {record.manufacturedDisplay}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[9px] tracking-[0.16em] uppercase text-concrete">
              Workshop
            </dt>
            <dd className="mt-0.5 text-[13px] text-graphite">{record.workshop}</dd>
          </div>
        </dl>
      </header>

      <div className="space-y-6 px-4 py-5 md:px-6 md:py-6">
        <section>
          <p className="label-ink mb-3">{buildVideo.title}</p>
          {buildVideo.youtubeEmbedId ? (
            <div className="relative aspect-video w-full border hairline-strong bg-ink">
              <iframe
                title={buildVideo.title}
                src={`https://www.youtube.com/embed/${buildVideo.youtubeEmbedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3 border hairline-strong bg-paper px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-display text-lg leading-tight">
                  Build film on file
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase text-concrete">
                  {buildVideo.duration
                    ? `Runtime ${buildVideo.duration}`
                    : "Delivered with the piece"}
                </p>
              </div>
              <a
                href={site.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary shrink-0"
              >
                Studio films
              </a>
            </div>
          )}
        </section>

        <section>
          <p className="mb-2 font-mono text-[10px] tracking-[0.18em] uppercase text-concrete">
            Notes from the maker
          </p>
          <p className="max-w-[62ch] text-[14px] leading-[1.65] text-graphite">
            {record.makerNotes}
          </p>
        </section>

        <section>
          <p className="mb-3 font-mono text-[10px] tracking-[0.18em] uppercase text-concrete">
            From the bench log
          </p>
          <ul className="space-y-2">
            {record.buildQuirks.map((q) => (
              <li
                key={q}
                className="text-[13px] leading-snug text-graphite before:mr-2 before:text-rust before:content-['·']"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>

        <a href="#work" className="btn-ghost w-fit">
          View {record.pieceVersion} in selected work
        </a>
      </div>
    </article>
  );
}
