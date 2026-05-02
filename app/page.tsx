import { Hero } from "@/components/sections/Hero";
import { CyberReality } from "@/components/sections/CyberReality";
import { LegacyFails } from "@/components/sections/LegacyFails";
import { MalwareSpreads } from "@/components/sections/MalwareSpreads";
import { Breakthroughs } from "@/components/sections/Breakthroughs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Architecture } from "@/components/sections/Architecture";
import { Coverage } from "@/components/sections/Coverage";
import { ConsoleSupport } from "@/components/sections/ConsoleSupport";
import { ThreatMatrix } from "@/components/sections/ThreatMatrix";
import { ResponseTimeline } from "@/components/sections/ResponseTimeline";
import { Privacy } from "@/components/sections/Privacy";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { Competitive } from "@/components/sections/Competitive";
import { Moat } from "@/components/sections/Moat";
import { Pricing } from "@/components/sections/Pricing";
import { Roadmap } from "@/components/sections/Roadmap";
import { Thesis } from "@/components/sections/Thesis";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ThreatMapSection } from "@/components/sections/ThreatMapSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CyberReality />
      <LegacyFails />
      <MalwareSpreads />
      <Breakthroughs />
      <HowItWorks />
      <Architecture />
      <Coverage />
      <ConsoleSupport />
      <ThreatMatrix />
      <ThreatMapSection />
      <ResponseTimeline />
      <Privacy />
      <ProductExperience />
      <Competitive />
      <Moat />
      <Pricing />
      <Roadmap />
      <Thesis />
      <CTA />
      <Footer />
    </>
  );
}
