export const systemsMeta = {
  title: "Systems & Automation Engineering | Sutherland Studio",
  description:
    "Sutherland Studio designs and builds IoT systems, automation solutions, monitoring platforms, intelligent prototypes, and engineering innovations that connect the physical and digital world.",
  keywords: [
    "Automation Engineering",
    "IoT Development",
    "Industrial Automation",
    "Connected Systems",
    "Monitoring Solutions",
    "Engineering Prototyping",
    "Intelligent Systems",
    "Product Innovation",
    "New Zealand Engineering Studio",
  ],
  path: "/systems-automation",
};

export const systemsHero = {
  label: "§ SYS — Systems & Automation",
  headline: "Engineering the systems behind tomorrow.",
  subheadline:
    "From connected devices and automation workflows to intelligent monitoring systems and industrial prototypes, we design and build solutions that bridge hardware, software, and the physical world.",
  ctaProjects: { label: "View Projects", href: "#systems-projects" },
  ctaDiscuss: { label: "Discuss a Project", href: "#systems-contact" },
};

export type SystemsService = {
  code: string;
  name: string;
  desc: string;
  tags: string[];
};

export const systemsServices: SystemsService[] = [
  {
    code: "SYS/01",
    name: "Industrial Automation",
    desc: "Control systems, process automation, machine integration, and operational efficiency — designed for real workshops and production environments.",
    tags: ["PLC", "Integration", "Process"],
  },
  {
    code: "SYS/02",
    name: "Internet of Things (IoT)",
    desc: "Connected sensors, remote monitoring, telemetry, environmental sensing, and smart asset tracking across sites and assets.",
    tags: ["Sensors", "Telemetry", "Edge"],
  },
  {
    code: "SYS/03",
    name: "Data & Monitoring Systems",
    desc: "Custom dashboards, reporting tools, real-time monitoring, alerts, and operational visibility when spreadsheets stop being enough.",
    tags: ["Dashboards", "Alerts", "Reporting"],
  },
  {
    code: "SYS/04",
    name: "Embedded Systems & Prototyping",
    desc: "Rapid hardware concepts, microcontroller projects, proof-of-concepts, and technical prototypes — from sketch to working device.",
    tags: ["MCU", "Firmware", "PoC"],
  },
  {
    code: "SYS/05",
    name: "AI & Intelligent Systems",
    desc: "Practical AI that supports decision-making, automates repetitive work, and surfaces patterns in operational data — not slide decks.",
    tags: ["Workflows", "Insights", "Vision"],
  },
  {
    code: "SYS/06",
    name: "Research & Development",
    desc: "Exploration of emerging technologies, experimentation, proof-of-concepts, and innovation projects at the edge of what you do today.",
    tags: ["R&D", "Experiment", "Innovation"],
  },
];

export type SystemsProject = {
  code: string;
  title: string;
  desc: string;
  tags: string[];
  accent: "rust" | "moss" | "copper" | "ink";
  caseStudyHref?: string;
};

export const systemsProjects: SystemsProject[] = [
  {
    code: "PR/01",
    title: "AI-Powered Inventory Intelligence",
    desc: "Transforming raw inventory data into actionable operational insights through custom dashboards, automation, and reporting.",
    tags: ["Python", "Dashboards", "Automation"],
    accent: "rust",
    caseStudyHref: undefined,
  },
  {
    code: "PR/02",
    title: "Remote Environmental Monitoring Platform",
    desc: "A connected sensor network providing real-time visibility into environmental conditions and operational performance.",
    tags: ["IoT", "Sensors", "Telemetry"],
    accent: "moss",
  },
  {
    code: "PR/03",
    title: "Industrial Equipment Telemetry System",
    desc: "Capturing machine performance data to improve maintenance planning and operational efficiency.",
    tags: ["Edge", "MQTT", "Analytics"],
    accent: "copper",
  },
  {
    code: "PR/04",
    title: "Digital Twin Prototype",
    desc: "A virtual representation of physical systems for simulation, monitoring, and optimisation.",
    tags: ["Simulation", "3D", "Monitoring"],
    accent: "ink",
  },
];

export const systemsProcess = [
  { n: "01", title: "Discover", body: "Understand the challenge and desired outcomes." },
  { n: "02", title: "Investigate", body: "Research existing systems, workflows, and constraints." },
  { n: "03", title: "Design", body: "Develop concepts, architecture, and technical approaches." },
  { n: "04", title: "Prototype", body: "Build and test early versions." },
  { n: "05", title: "Validate", body: "Refine through testing and feedback." },
  { n: "06", title: "Deploy", body: "Implement, monitor, and improve." },
];

export const systemsCapabilities = [
  {
    category: "Hardware",
    items: ["Sensors", "Microcontrollers", "Data acquisition", "Communications"],
  },
  {
    category: "Software",
    items: ["Python", "APIs", "Databases", "Automation platforms"],
  },
  {
    category: "Systems",
    items: ["IoT architectures", "Monitoring systems", "Integrations", "Analytics"],
  },
  {
    category: "Emerging Technology",
    items: ["AI", "Digital Twins", "Computer Vision", "Autonomous Systems"],
  },
];

export const systemsPhilosophy = {
  title: "Technology should solve real problems.",
  body: "We believe the most impactful technology isn't necessarily the most complex. Our focus is on creating practical, thoughtful systems that improve visibility, reduce friction, and help people make better decisions. Whether it's a connected sensor, an automation workflow, or a completely new prototype, every project begins with understanding the problem first.",
};

export const systemsContact = {
  headline: "Have a system worth building?",
  subheadline:
    "We're always interested in discussing automation, IoT, engineering, and innovation projects.",
  cta: { label: "Start a Conversation", href: "/#book" },
};
