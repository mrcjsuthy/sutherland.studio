export const verificationBadge = {
  model: "/models/verification-badge.glb",
  material: "Cast brass · Laser-etched code · Hand-applied patina",
};

export type VerificationRecord = {
  /** Code etched on the badge (stored uppercase) */
  code: string;
  pieceVersion: string;
  pieceType: string;
  editionSerial: number;
  editionTotal: number;
  manufacturedAt: string;
  manufacturedDisplay: string;
  workshop: string;
  buildVideo: {
    title: string;
    /** YouTube video ID for embed — omit for link-only fallback */
    youtubeEmbedId?: string;
    duration?: string;
  };
  makerNotes: string;
  buildQuirks: string[];
  productModel?: string;
};

/**
 * Registry of issued badge codes.
 * Add each physical badge code when a piece ships.
 */
export const verificationRegistry: Record<string, VerificationRecord> = {
  "12345": {
    code: "12345",
    pieceVersion: "0.0.1",
    pieceType: "Side Chair",
    editionSerial: 4,
    editionTotal: 12,
    manufacturedAt: "2026-03-14",
    manufacturedDisplay: "14 March 2026 · Milford workshop",
    workshop: "Sutherland Studio · Bench 01",
    buildVideo: {
      title: "Build film — Sedia 04 (0.0.1) · Piece 4 of 12",
      youtubeEmbedId: undefined,
      duration: "38:42",
    },
    makerNotes:
      "Steamed the back rail on a grey morning — humidity was low, so we ran the steam box two minutes longer than the notebook says. Leather was punched and saddle-stitched in-house; hardware blackened in batches of six so the bolts age together.",
    buildQuirks: [
      "A faint compass arc is scratched inside the rear stretcher — bench tradition for piece four of a run.",
      "One front leg sits 0.4 mm proud; we shimmed with a paper-thin leather wafer rather than re-level the whole frame.",
      "The badge was stamped before the final oil pass, so the patina is slightly darker around the serif edges.",
      "Build week coincided with a power cut — hour eleven was filmed by headlamp only.",
    ],
    productModel: "/models/04-sedia.glb",
  },
};
