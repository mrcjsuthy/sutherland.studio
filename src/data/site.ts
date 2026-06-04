export const site = {
  name: "Sutherland Studio",
  initials: "SS",
  domain: "sutherland.studio",
  email: "hello@sutherland.studio",
  phone: "+64 21 123 4365",
  youtube: {
    handle: "@sutherland-studio",
    url: "https://www.youtube.com/@sutherland-studio",
    tagline: "Every build, on film.",
    subscribers: "Subscribe — we're just starting",
  },
  patreon: {
    handle: "Sutherland Studio",
    url: "https://www.patreon.com/cw/SutherlandStudio",
    tagline: "Support the workshop — from NZD 3.50/month",
  },
  cities: [
    { name: "Firenze", country: "Italia", lat: "43°46′N", long: "11°15′E" },
    { name: "Tāmaki Makaurau", country: "Aotearoa", lat: "36°46′S", long: "174°45′E" },
  ],
  tagline: "Design & build, made to measure.",
  manifesto:
    "Sutherland Studio is a one-bench practice making considered furniture, objects and small installations — wall sculptures, spatial pieces, tables and chairs. Trained in industrial design in Florence and working out of a workshop in Auckland. Every piece is drawn, prototyped and built by hand. Every build is filmed start to finish, and the film is delivered with the work.",
  studioHours: {
    weekdayOpen: 9,
    weekdayClose: 21,
    timezone: "Pacific/Auckland",
    label: "Mon–Fri · 09:00–21:00 NZT",
  },
};

export const ticker = [
  "Design",
  "Prototype",
  "Build",
  "Tables · Chairs · Objects",
  "Wall sculptures · Installations",
  "Florence ⇄ Auckland",
  "Steel · Oak · Brass · Stone",
  "Made to measure",
  "Est. 2026",
];

/** Procedural stand-in until a GLB is added under public/models/ */
export type WorkShape =
  | "table"
  | "shelf"
  | "lamp"
  | "chair"
  | "relief"
  | "bench";

export type WorkPiece = {
  /** Chronological release ID — 0.0.1, 0.0.2, … */
  version: string;
  type: string;
  materials: string[];
  funFact: string;
  /** Limited-edition run size */
  editions: number;
  year: string;
  accent: "rust" | "moss" | "copper";
  shape: WorkShape;
  /** e.g. /models/04-sedia.glb — omit to use procedural preview */
  model?: string;
};

/** Full index — restore entries here when more pieces go live. */
export const workArchive: WorkPiece[] = [
  {
    version: "0.0.3",
    type: "Dining Table",
    materials: ["Recycled rimu top", "Patinated steel base", "Hardwax oil finish"],
    funFact:
      "The base is welded as one piece, then left to move slightly as it cools — we level the top to the steel, not the other way around.",
    editions: 6,
    year: "2026",
    accent: "rust",
    shape: "table",
    model: "/models/01-tavolo-grezzo.glb",
  },
  {
    version: "0.0.4",
    type: "Modular Shelving",
    materials: ["Powder-coated steel frame", "Tasmanian oak shelves", "Brass barrel bolts"],
    funFact:
      "Every kit is flat-packed from the workshop; the first assembly is always ours, so we know exactly which bolt wants an extra half-turn.",
    editions: 18,
    year: "2026",
    accent: "moss",
    shape: "shelf",
  },
  {
    version: "0.0.5",
    type: "Table Lamp",
    materials: ["Hand-poured concrete base", "Brushed brass stem", "Dimmable LED module"],
    funFact:
      "Bases are poured in small batches — the aggregate settles differently each time, so the swirl at the foot is never repeated.",
    editions: 24,
    year: "2026",
    accent: "copper",
    shape: "lamp",
  },
  {
    version: "0.0.6",
    type: "Workbench",
    materials: ["Macrocarpa slab", "Mild steel underframe", "Hardened vice plate"],
    funFact:
      "Commissioned benches get a notch map drawn on the slab before steel goes in — every vice, dog hole, and tool rail is cut to habit, not a template.",
    editions: 4,
    year: "2026",
    accent: "copper",
    shape: "bench",
    model: "/models/06-banco.glb",
  },
];

/** Live on site — selected work grid */
export const work: WorkPiece[] = [
  {
    version: "0.0.1",
    type: "Side Chair",
    materials: [
      "Steam-bent ash frame",
      "Vegetable-tanned saddle leather",
      "Blackened steel hardware",
    ],
    funFact:
      "Each back rail is steamed and bent in a single pass — we only get one try before the timber remembers the curve.",
    editions: 12,
    year: "2026",
    accent: "moss",
    shape: "chair",
    model: "/models/04-sedia.glb",
  },
  {
    version: "0.0.2",
    type: "Lounge Chair",
    materials: [
      "Solid American walnut",
      "Oil-waxed shell finish",
      "Full-grain leather inset",
    ],
    funFact:
      "The outer shell is rough-milled, then hand-rasped; grain flow shifts on every piece, so no two chairs share the same silhouette at the arm.",
    editions: 24,
    year: "2026",
    accent: "copper",
    shape: "chair",
    model: "/models/05-arc-walnut-chair.glb",
  },
];

export type Service = {
  code: string;
  name: string;
  desc: string;
  from: string;
  group: "build" | "digital";
  href?: string;
};

export const services: Service[] = [
  {
    code: "S/01",
    name: "Bespoke Furniture",
    desc: "Tables, chairs, seating and casegoods. Drawn, prototyped, built in-house. Every build filmed.",
    from: "NZD 4,800",
    group: "build",
  },
  {
    code: "S/02",
    name: "Small Installations",
    desc: "Wall sculptures, spatial objects and one-off pieces. Designed for a specific wall, room or place.",
    from: "NZD 2,400",
    group: "build",
  },
  {
    code: "S/03",
    name: "Lighting & Objects",
    desc: "Small-batch lamps, vessels, hardware. Editions of 10–50.",
    from: "NZD 380",
    group: "build",
  },
  {
    code: "S/04",
    name: "Product / Industrial Design",
    desc: "Concept, CAD, prototyping for product clients. From sketch to first run.",
    from: "NZD 1,400/day",
    group: "build",
  },
  {
    code: "S/05",
    name: "Graphic Design",
    desc: "Identity, print, signage and packaging. Built to live next to the object.",
    from: "NZD 1,200",
    group: "digital",
  },
  {
    code: "S/06",
    name: "Web & App Development",
    desc: "Editorial sites, product pages, lightweight apps. Designed and shipped end-to-end.",
    from: "NZD 3,800",
    group: "digital",
  },
  {
    code: "S/07",
    name: "AI Strategy & Implementation",
    desc: "Practical AI for small studios and operators. Delivered via AI Partner — our sister practice.",
    from: "POA",
    group: "digital",
    href: "https://www.aipartner.co.nz",
  },
  {
    code: "S/08",
    name: "Free Consultation",
    desc: "60-minute studio session. Drawings, materials, costing direction. Free, no obligation.",
    from: "Free",
    group: "build",
  },
];

export const process = [
  {
    n: "I",
    title: "Conversation",
    body: "A free 60-minute studio session. Bring references, measurements, dreams. We sketch and scope together.",
  },
  {
    n: "II",
    title: "Drawings",
    body: "Hand sketches into CAD. Material samples ordered. A fixed quote and a build window.",
  },
  {
    n: "III",
    title: "Prototype",
    body: "For new objects, a 1:1 or scale model. Joints tested, proportions settled before the final build.",
  },
  {
    n: "IV",
    title: "Build & Film",
    body: "Made on a single bench, by one set of hands — and filmed start to finish. Cuts posted as they become available.",
  },
  {
    n: "V",
    title: "Delivery & Film",
    body: "Hand delivered across Tāmaki Makaurau. The finished film of your build ships with the piece.",
  },
];

export const stats = [
  { k: "Years at the bench", v: "12" },
  { k: "Trained", v: "Florence, IT" },
  { k: "Studio", v: "Auckland, NZ" },
  { k: "Lead time", v: "6–12 wks" },
];

// ---------------------------------------------------------------------------
// "Right now at the bench" — set status to "planning" until a build is live.
// ---------------------------------------------------------------------------
export const currentBuild = {
  code: "ATB/—",
  status: "planning" as const,
  title: "Next build",
  type: "In planning",
  note: "Currently drawing up plans for the next build. Details to be released — build begins June 2026.",
  timeline: "June 2026",
};

// ---------------------------------------------------------------------------
// Limited edition — set available: true when a drop is ready to announce.
// ---------------------------------------------------------------------------
export const release = {
  available: false,
  code: "R/—",
  title: "Limited edition",
  blurb:
    "Small-run furniture and objects, numbered and signed. Each release ships with its build film. Details announced as pieces become ready.",
  timeline: "Released as available",
};

export type Vacancy = {
  code: string;
  title: string;
  kind: "Full-time" | "Part-time" | "Contract" | "Apprenticeship" | "Partnership";
  location: "Auckland" | "Remote" | "Hybrid";
  status: "open" | "soon" | "closed";
  blurb: string;
};

export const vacancies: Vacancy[] = [
  {
    code: "V/01",
    title: "Workshop Apprentice",
    kind: "Apprenticeship",
    location: "Auckland",
    status: "open",
    blurb:
      "Two days a week at the bench — joinery, finishing and the occasional steel weld. Curious hands, careful eye.",
  },
  {
    code: "V/02",
    title: "Build Film Director",
    kind: "Contract",
    location: "Auckland",
    status: "open",
    blurb:
      "Document our builds — single-camera, available light, monthly cuts. Editorial sensibility over reels-and-hooks.",
  },
  {
    code: "V/03",
    title: "Brand & Web Designer",
    kind: "Part-time",
    location: "Hybrid",
    status: "soon",
    blurb:
      "Identity systems and small editorial sites for our service clients. Opens once the first three are in production.",
  },
  {
    code: "V/04",
    title: "Strategic Partnership",
    kind: "Partnership",
    location: "Remote",
    status: "open",
    blurb:
      "Material suppliers, architects, agencies, and AI Partner referrers — we're open to long-term collaborations.",
  },
];
