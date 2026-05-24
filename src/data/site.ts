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
    "Sutherland Studio is a one-bench practice making considered objects, furniture and small interiors — and the brands, films and digital tools that sit alongside them. Trained in industrial design in Florence and working out of a workshop in Auckland. Every commission is drawn, prototyped and built by hand. Every build is filmed start to finish, and the film is delivered with the piece.",
  studioHours: {
    // NZST. Mon–Fri 09:00–21:00.
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
  "Every build on film",
  "Florence ⇄ Auckland",
  "Steel · Oak · Brass · Stone",
  "Made to measure",
  "Brand · Web · AI · Object",
  "Est. 2026",
];

export const work = [
  {
    n: "01",
    title: "Tavolo Grezzo",
    type: "Dining Table",
    material: "Recycled rimu · Patinated steel",
    year: "2026",
    place: "Pt Chev, Auckland",
    notes: "Six-seat refectory table on a single welded plate base. Hand-oiled.",
    accent: "rust" as const,
    size: "tall" as const,
  },
  {
    n: "02",
    title: "Scaffale 0.1",
    type: "Modular Shelving",
    material: "Powder-coated steel · Tasmanian oak",
    year: "2026",
    place: "Studio prototype",
    notes: "Bolt-together system. Ships flat. Three depths, two heights.",
    accent: "moss" as const,
    size: "short" as const,
  },
  {
    n: "03",
    title: "Lampada Sasso",
    type: "Table Lamp",
    material: "Cast concrete · Brushed brass",
    year: "2026",
    place: "Limited edition of 24",
    notes: "Dimmable LED. Hand-poured base; no two pieces alike.",
    accent: "copper" as const,
    size: "mid" as const,
  },
  {
    n: "04",
    title: "Cucina K2",
    type: "Kitchen Build",
    material: "Stainless · European oak · Travertine",
    year: "2026",
    place: "Grey Lynn, Auckland",
    notes: "Full design–build. From measured drawings to install — and on film.",
    accent: "rust" as const,
    size: "mid" as const,
  },
  {
    n: "05",
    title: "Sedia 04",
    type: "Side Chair",
    material: "Steam-bent ash · Saddle leather",
    year: "In development",
    place: "Workshop",
    notes: "Three years in development. Production run, 2026.",
    accent: "moss" as const,
    size: "tall" as const,
  },
  {
    n: "06",
    title: "Banco di Lavoro",
    type: "Workbench",
    material: "Macrocarpa · Mild steel",
    year: "2026",
    place: "Private commission",
    notes: "Workshop bench with vice, drawers and tool rail.",
    accent: "copper" as const,
    size: "short" as const,
  },
];

export type Service = {
  code: string;
  name: string;
  desc: string;
  from: string;
  group: "build" | "digital";
  href?: string; // external URL, takes precedence over #book
};

export const services: Service[] = [
  {
    code: "S/01",
    name: "Bespoke Furniture",
    desc: "Tables, seating, casegoods. Drawn, prototyped, built in-house. Every build filmed.",
    from: "NZD 4,800",
    group: "build",
  },
  {
    code: "S/02",
    name: "Kitchens & Joinery",
    desc: "Full design–build. Measured survey through to install. Filmed start to finish.",
    from: "NZD 28,000",
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
    name: "Interior Fit-out",
    desc: "Small commercial and residential. Cafés, studios, retail.",
    from: "POA",
    group: "build",
  },
  {
    code: "S/05",
    name: "Product / Industrial Design",
    desc: "Concept, CAD, prototyping for product clients. From sketch to first run.",
    from: "NZD 1,400/day",
    group: "build",
  },
  {
    code: "S/06",
    name: "Graphic Design",
    desc: "Identity, print, signage and packaging. Built to live next to the object.",
    from: "NZD 1,200",
    group: "digital",
  },
  {
    code: "S/07",
    name: "Web & App Development",
    desc: "Editorial sites, product pages, lightweight apps. Designed and shipped end-to-end.",
    from: "NZD 3,800",
    group: "digital",
  },
  {
    code: "S/08",
    name: "AI Strategy & Implementation",
    desc: "Practical AI for small studios and operators. Delivered via AI Partner — our sister practice.",
    from: "POA",
    group: "digital",
    href: "https://www.aipartner.co.nz",
  },
  {
    code: "S/09",
    name: "Free Consultation",
    desc: "60-minute studio session. Drawings, materials, costing direction. Free, no obligation.",
    from: "Free",
    group: "build",
  },
];

export const products = [
  { code: "P/001", name: "Lampada Sasso", price: "NZD 690", status: "In stock" },
  { code: "P/002", name: "Scaffale 0.1 — Module A", price: "NZD 1,280", status: "Made to order" },
  { code: "P/003", name: "Vassoio in Acciaio", price: "NZD 240", status: "In stock" },
  { code: "P/004", name: "Sgabello Basso", price: "NZD 820", status: "Pre-order" },
  { code: "P/005", name: "Specchio Cornice", price: "NZD 1,100", status: "Made to order" },
  { code: "P/006", name: "Sedia 04", price: "NZD 1,950", status: "Q3 2026" },
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
    body: "For new objects, a 1:1 or scale model. For interiors, full set-out drawings and joints tested.",
  },
  {
    n: "IV",
    title: "Build & Film",
    body: "Made on a single bench, by one set of hands — and filmed start to finish. Weekly cuts posted while we work.",
  },
  {
    n: "V",
    title: "Delivery & Film",
    body: "Hand delivered and installed across Tāmaki Makaurau. The finished film of your build ships with the piece.",
  },
];

export const stats = [
  { k: "Years at the bench", v: "12" },
  { k: "Trained", v: "Florence, IT" },
  { k: "Studio", v: "Auckland, NZ" },
  { k: "Lead time", v: "6–12 wks" },
];

// ---------------------------------------------------------------------------
// "Right now at the bench" — the current project being worked on.
// Update these fields whenever you finish a build or start a new one.
// ---------------------------------------------------------------------------
export const currentBuild = {
  code: "ATB/07",
  title: "Cucina K2",
  type: "Kitchen build",
  client: "Private residence · Grey Lynn",
  startedAt: "2026-04-12",
  eta: "2026-06-30",
  progress: 0.62, // 0–1
  materials: ["Stainless steel", "European oak", "Travertine"],
  note: "Joinery carcass up; door fronts in their second coat of oil this week.",
  filmEpisode: "Film · EP/07 — Frames & faces",
  filmHref: "https://www.youtube.com/@sutherland-studio",
};

// ---------------------------------------------------------------------------
// Limited edition release with countdown + order flow.
// Set `unlockAt` to a future ISO timestamp; the order form is locked until
// then. Set `soldOut: true` once the edition is gone.
// ---------------------------------------------------------------------------
export const release = {
  code: "R/001",
  title: "Lampada Sasso · Edizione I",
  blurb:
    "Hand-poured concrete base with a brushed-brass collar and a warm dimmable LED. Twenty-four pieces. Each numbered, signed and shipped with its build film.",
  price: 690, // NZD ex GST
  currency: "NZD",
  unitsTotal: 24,
  // Resolves to local NZ time. Edit this to set the unlock moment.
  unlockAt: "2026-05-23T19:00:00+12:00",
  closesAt: "2026-06-30T23:59:00+12:00",
  materials: "Cast concrete · Brushed brass · Warm LED",
  dimensions: "Ø 180mm · H 280mm",
  ships: "Ships from Auckland within 4 weeks of order.",
  imageAccent: "rust" as const,
  soldOut: false,
};

// ---------------------------------------------------------------------------
// Partnerships / openings. Each vacancy has a status — open / closed / soon.
// Showcased like the studio-open badge: a coloured dot + label.
// ---------------------------------------------------------------------------
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
      "Two days a week on the bench — joinery, finishing and the occasional steel weld. Curious hands, careful eye.",
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
