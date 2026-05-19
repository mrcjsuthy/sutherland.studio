import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Manifesto } from "@/components/Manifesto";
import { Work } from "@/components/Work";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Ticker variant="ink" />
        <Manifesto />
        <Work />
        <Ticker variant="rust" />
        <Services />
        <Process />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
