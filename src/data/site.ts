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
    n: "05",
    title: "Relief 01",
    type: "Wall Sculpture",
    material: "Patinated steel · Macrocarpa",
    year: "In development",
    place: "Studio prototype",
    notes: "Small installation piece — wall-mounted, modular panels.",
    accent: "rust" as const,
    size: "mid" as const,
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
