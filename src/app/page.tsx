import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { CurrentBuild } from "@/components/CurrentBuild";
import { Manifesto } from "@/components/Manifesto";
import { Work } from "@/components/Work";
import { Films } from "@/components/Films";
import { Services } from "@/components/Services";
import { Release } from "@/components/Release";
import { Process } from "@/components/Process";
import { Careers } from "@/components/Careers";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Ticker variant="ink" />
        <CurrentBuild />
        <Manifesto />
        <Work />
        <Films />
        <Services />
        <Release />
        <Process />
        <Careers />
        <Ticker variant="rust" />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
