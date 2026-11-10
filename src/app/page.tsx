import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TerminalDemo } from "@/components/sections/TerminalDemo";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyBuilding } from "@/components/sections/WhyBuilding";
import { Roadmap } from "@/components/sections/Roadmap";
import { ComingSoon } from "@/components/sections/ComingSoon";

export default function Page() {
  return (
    <div className="flex flex-col min-h-svh text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TerminalDemo />
        <Features />
        <HowItWorks />
        <WhyBuilding />
        <Roadmap />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
