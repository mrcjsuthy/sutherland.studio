"use client";

import { useEffect, useRef } from "react";
import { VerificationBadgeScene } from "./VerificationBadgeScene";

type Props = {
  className?: string;
};

/** Transparent viewer — blends with section background, no chrome. */
export function VerificationBadgeViewer({ className = "" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
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
      className={`relative mx-auto aspect-square w-full max-w-[10.5rem] sm:max-w-[12rem] md:max-w-full md:max-h-56 ${className}`}
    >
      <VerificationBadgeScene />
    </div>
  );
}
