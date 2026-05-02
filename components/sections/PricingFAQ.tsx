"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUpStagger, fadeUpItem, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FAQ = [
  {
    q: "What's actually different across plans?",
    a: "The adaptive engine is identical in every plan — same detection, same fleet learning, same cross-platform parity. Plans differ in seat count, admin surface, and add-on availability. The Family plan adds parental controls and 5 device slots. Enterprise adds an admin dashboard, policy controls, and incident reporting. OEM is for embedding the engine into a hardware product.",
  },
  {
    q: "How does the free trial work?",
    a: "14 days, no card required. The engine runs in full adaptive mode the entire trial — you see the same protection paying customers see, on every device you install it on. No data is shared with us beyond standard threat intelligence; no emails after day 14 unless you ask for them.",
  },
  {
    q: "What counts as a 'device' on the Family plan?",
    a: "Anything the agent runs on. Laptops, desktops, phones, tablets, consoles, and TVs are all single seats. Five seats covers most households without nickel-and-diming you for an iPad you forgot you owned.",
  },
  {
    q: "Is there a refund policy?",
    a: "Full refund within 30 days, no questions asked. After that, prorated refund on remaining time if you cancel. We don't claw back protection — adaptations your devices contributed to the network stay in the network.",
  },
  {
    q: "Can I move from Consumer to Family or Enterprise later?",
    a: "Yes. Upgrades are prorated; you keep all device history, adaptation logs, and account configuration. Downgrades take effect at the next billing cycle.",
  },
  {
    q: "How do OEM and platform partnerships work?",
    a: "We license the adaptive engine for embedding into devices, network appliances, or platform-level security products. Pricing is a revenue share negotiated against fleet size and surface area. Get in touch for a partnership conversation.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#111827]/40 transition-all hover:border-[rgba(124,196,255,0.25)]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold tracking-tight text-[#E8EEF7]">
          {q}
        </span>
        <span
          className={cn(
            "grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[rgba(124,196,255,0.25)] text-[#7CC4FF] transition-transform",
            open && "rotate-180",
          )}
        >
          {open ? <Minus size={13} /> : <Plus size={13} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-[14px] leading-[1.65] text-[#94A3B8]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PricingFAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <SectionShell id="faq">
      <SectionHeader
        eyebrow="FAQ"
        title={
          <>
            Pricing questions, <span className="text-gradient-cyan">answered straight</span>.
          </>
        }
        blurb="Six things people ask before they buy. No marketing fog."
      />

      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-12 mx-auto max-w-3xl space-y-3"
      >
        {FAQ.map((item, i) => (
          <motion.div key={item.q} variants={fadeUpItem}>
            <FAQItem
              q={item.q}
              a={item.a}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
