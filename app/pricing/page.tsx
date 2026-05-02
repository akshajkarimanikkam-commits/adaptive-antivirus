import type { Metadata } from "next";
import { PricingHero } from "@/components/sections/heroes/PricingHero";
import { Pricing } from "@/components/sections/Pricing";
import { Competitive } from "@/components/sections/Competitive";
import { PricingFAQ } from "@/components/sections/PricingFAQ";
import { Roadmap } from "@/components/sections/Roadmap";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Consumer, family, enterprise, and OEM — four ways to deploy the same adaptive engine.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <Pricing />
      <Competitive />
      <PricingFAQ />
      <Roadmap />
      <CTA />
      <Footer />
    </>
  );
}
