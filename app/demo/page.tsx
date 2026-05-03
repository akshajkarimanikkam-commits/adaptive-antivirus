import type { Metadata } from "next";
import { DemoHero } from "@/components/sections/heroes/DemoHero";
import { InteractiveDemo } from "@/components/sections/InteractiveDemo";
import { DemoExplainer } from "@/components/sections/DemoExplainer";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Interactive simulation of the Adaptive Antivirus cycle — detect, adapt, harden, share — using a fake threat. No real malware executed.",
};

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <section className="relative pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InteractiveDemo />
        </div>
      </section>
      <DemoExplainer />
      <CTA />
      <Footer />
    </>
  );
}
