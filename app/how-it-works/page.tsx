import type { Metadata } from "next";
import { HowHero } from "@/components/sections/heroes/HowHero";
import { CycleDiagram } from "@/components/sections/CycleDiagram";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ResponseTimeline } from "@/components/sections/ResponseTimeline";
import { Architecture } from "@/components/sections/Architecture";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Detect, adapt, harden, share. The four-phase adaptive defense cycle, in under one second.",
};

export default function HowPage() {
  return (
    <>
      <HowHero />
      <CycleDiagram />
      <HowItWorks />
      <ResponseTimeline />
      <Architecture />
      <CTA />
      <Footer />
    </>
  );
}
