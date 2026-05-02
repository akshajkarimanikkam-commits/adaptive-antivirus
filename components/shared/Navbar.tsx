"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 16));

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border transition-all duration-300",
            scrolled
              ? "h-12 border-[rgba(148,163,184,0.18)] bg-[#0A0E1A]/85 backdrop-blur-xl px-3 pl-5"
              : "h-14 border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/55 backdrop-blur-md px-4 pl-5",
          )}
        >
          <Link href="/" className="flex items-center" aria-label="Adaptive Antivirus home">
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[13px] text-[#94A3B8]">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-[#E8EEF7]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <SystemActiveBadge className="hidden md:inline-flex" />
            <Link href="#cta">
              <Button size="sm" className="hidden sm:inline-flex">Get Protected</Button>
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-9 w-9 place-items-center rounded-full border border-[rgba(148,163,184,0.18)] text-[#E8EEF7]"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-[rgba(148,163,184,0.18)] bg-[#0A0E1A]/95 backdrop-blur-xl p-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-[14px] text-[#E8EEF7] hover:bg-[rgba(124,196,255,0.06)]"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="#cta" onClick={() => setOpen(false)}>
                <Button className="mt-2 w-full">Get Protected</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
