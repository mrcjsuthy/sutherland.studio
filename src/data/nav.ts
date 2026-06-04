export type NavLink = {
  label: string;
  href: string;
  /** Match pathname for active state on standalone pages */
  match?: string;
};

export const mainNav: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Verify", href: "/#verify" },
  { label: "Films", href: "/#films" },
  { label: "Services", href: "/#services" },
  {
    label: "Systems & Automation",
    href: "/systems-automation",
    match: "/systems-automation",
  },
  { label: "Release", href: "/#release" },
  { label: "Careers", href: "/#careers" },
  { label: "Book", href: "/#book" },
];
