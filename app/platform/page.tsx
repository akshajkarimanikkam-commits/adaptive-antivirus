import type { Metadata } from "next";
import { PlatformHero } from "@/components/sections/heroes/PlatformHero";
import { EngineSpec } from "@/components/sections/EngineSpec";
import { Architecture } from "@/components/sections/Architecture";
import { Breakthroughs } from "@/components/sections/Breakthroughs";
import { ProductExperience } from "@/components/sections/ProductExperience";
import { Privacy } from "@/components/sections/Privacy";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Inside the Adaptive Antivirus engine — four cooperating layers that synthesize defense on first contact.",
};

export default function PlatformPage() {
  return (
    <>
      <PlatformHero />
      <EngineSpec />
      <Architecture />
      <Breakthroughs />
      <ProductExperience />
      <Privacy />
      <CTA />
      <Footer />
    </>
  );
}
