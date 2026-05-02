import type { Metadata } from "next";
import { CoverageHero } from "@/components/sections/heroes/CoverageHero";
import { OSWall } from "@/components/sections/OSWall";
import { Coverage } from "@/components/sections/Coverage";
import { ConsoleSupport } from "@/components/sections/ConsoleSupport";
import { ThreatMatrix } from "@/components/sections/ThreatMatrix";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Coverage",
  description:
    "Desktop, laptop, mobile, tablet, console — Adaptive Antivirus protects every endpoint with the same engine.",
};

export default function CoveragePage() {
  return (
    <>
      <CoverageHero />
      <OSWall />
      <Coverage />
      <ConsoleSupport />
      <ThreatMatrix />
      <CTA />
      <Footer />
    </>
  );
}
