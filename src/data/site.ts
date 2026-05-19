export const site = {
  name: "Sutherland Studio",
  initials: "SS",
  domain: "sutherland.studio",
  email: "studio@sutherland.studio",
  phone: "+64 21 123 4365",
  instagram: "@sutherland.studio",
  cities: [
    { name: "Firenze", country: "Italia", lat: "43°46′N", long: "11°15′E" },
    { name: "Tāmaki Makaurau", country: "Aotearoa", lat: "36°46′S", long: "174°45′E" },
  ],
  tagline: "Design & build, made to measure.",
  manifesto:
    "Sutherland Studio is a one-bench practice making considered objects, furniture and small interiors. Trained in industrial design in Florence and now working out of a workshop in Auckland — pairing Italian discipline with the texture of the South Pacific. Every commission is drawn, prototyped and built by hand.",
};

export const ticker = [
  "Design",
  "Prototype",
  "Build",
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
    title: "Cucina K2",
    type: "Kitchen Build",
    material: "Stainless · European oak · Travertine",
    year: "2026",
    place: "Grey Lynn, Auckland",
    notes: "Full design–build. From measured drawings to install.",
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

export const services = [
  {
    code: "S/01",
    name: "Bespoke Furniture",
    desc: "Tables, seating, casegoods. Drawn, prototyped, built in-house.",
    from: "NZD 4,800",
  },
  {
    code: "S/02",
    name: "Kitchens & Joinery",
    desc: "Full design–build. Measured survey through to install.",
    from: "NZD 28,000",
  },
  {
    code: "S/03",
    name: "Lighting & Objects",
    desc: "Small-batch lamps, vessels, hardware. Editions of 10–50.",
    from: "NZD 380",
  },
  {
    code: "S/04",
    name: "Interior Fit-out",
    desc: "Small commercial and residential. Cafés, studios, retail.",
    from: "POA",
  },
  {
    code: "S/05",
    name: "Industrial Design",
    desc: "Concept, CAD, prototyping for product clients. Day rate.",
    from: "NZD 1,400/day",
  },
  {
    code: "S/06",
    name: "Consultation",
    desc: "60-minute studio session. Drawings, materials, costing direction.",
    from: "NZD 180",
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
    body: "A 60-minute studio session. Bring references, measurements, dreams. We sketch and scope.",
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
    title: "Build",
    body: "Made on a single bench, by one set of hands. Progress photos posted weekly.",
  },
  {
    n: "V",
    title: "Delivery",
    body: "Hand delivered and installed across Tāmaki Makaurau. Care notes and a 10-year guarantee.",
  },
];

export const stats = [
  { k: "Years on the bench", v: "12" },
  { k: "Trained", v: "Florence, IT" },
  { k: "Studio", v: "Auckland, NZ" },
  { k: "Lead time", v: "6–12 wks" },
];
