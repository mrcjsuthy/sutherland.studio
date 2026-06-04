"use client";

import { useEffect, useRef, useState } from "react";
import type { WorkPiece } from "@/data/site";
import { WorkRoomScene } from "./WorkRoomScene";

const DEFAULT_ZOOM = 50;

type Props = {
  item: Pick<WorkPiece, "shape" | "accent" | "model">;
};

export function WorkRoomViewer({ item }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Keep page scroll from hijacking wheel events over the viewer. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const blockWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    el.addEventListener("wheel", blockWheel, { passive: false });
    return () => el.removeEventListener("wheel", blockWheel);
  }, []);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 78% 68% at 50% 42%, #e5dec8 0%, #d4ccb4 40%, #b9b099 100%)",
        }}
      />
      {visible && <WorkRoomScene item={item} visible={visible} zoom={zoom} />}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 40%, rgba(20, 19, 15, 0.08) 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-35 grit" />

      <p className="pointer-events-none absolute bottom-3 left-3 z-10 font-mono text-[9px] tracking-[0.16em] uppercase text-ink/55 bg-bone/60 backdrop-blur px-1.5 py-0.5">
        Drag to orbit
      </p>

      <div
        className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-sm border hairline bg-bone/80 px-2 py-1.5 backdrop-blur"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-concrete">
          Zoom
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={zoom}
          aria-label="Zoom 3D model"
          onChange={(e) => setZoom(Number(e.target.value))}
          className="work-zoom-slider h-1 w-16 cursor-pointer accent-rust"
        />
      </div>
    </div>
  );
}
