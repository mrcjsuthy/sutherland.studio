import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Ticker } from "@/components/Ticker";
import { SystemsHero } from "@/components/systems/SystemsHero";
import { SystemsServices } from "@/components/systems/SystemsServices";
import { SystemsProjects } from "@/components/systems/SystemsProjects";
import { SystemsProcess } from "@/components/systems/SystemsProcess";
import { SystemsCapabilities } from "@/components/systems/SystemsCapabilities";
import { SystemsPhilosophy } from "@/components/systems/SystemsPhilosophy";
import { SystemsContact } from "@/components/systems/SystemsContact";
import { systemsMeta } from "@/data/systems";

export const metadata: Metadata = {
  title: systemsMeta.title,
  description: systemsMeta.description,
  keywords: systemsMeta.keywords,
  alternates: { canonical: `https://sutherland.studio${systemsMeta.path}` },
  openGraph: {
    title: systemsMeta.title,
    description: systemsMeta.description,
    url: `https://sutherland.studio${systemsMeta.path}`,
    siteName: "Sutherland Studio",
    type: "website",
  },
};

export default function SystemsAutomationPage() {
  return (
    <>
      <Nav />
      <div id="systems-page" className="systems-page flex-1 flex flex-col">
        <main className="flex-1 flex flex-col">
          <SystemsHero />
          <Ticker variant="ink" />
          <SystemsServices />
          <SystemsProjects />
          <SystemsProcess />
          <SystemsCapabilities />
          <SystemsPhilosophy />
          <Ticker variant="rust" />
          <SystemsContact />
        </main>
      </div>
      <Footer />
    </>
  );
}
