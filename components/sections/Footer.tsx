import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { SystemActiveBadge } from "@/components/shared/SystemActiveBadge";
import { SITE } from "@/lib/constants";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Coverage", href: "/coverage" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Thesis", href: "#thesis" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Press Kit", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Threat Index", href: "#threats" },
      { label: "Engineering Blog", href: "#" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Trust Center", href: "#" },
      { label: "Responsible Disclosure", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr] lg:gap-16">
          <div>
            <Logo />
            <p className="mt-5 text-[13.5px] leading-[1.6] text-[#94A3B8] max-w-xs">
              {SITE.tagline}. Detect. Adapt. Immunize. Across desktop, mobile, and console.
            </p>
            <div className="mt-6">
              <SystemActiveBadge />
            </div>
            <div className="mt-6 flex items-center gap-2">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[rgba(148,163,184,0.14)] text-[#94A3B8] transition-all hover:border-[rgba(124,196,255,0.3)] hover:text-[#7CC4FF]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#7CC4FF]">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13.5px] text-[#94A3B8] transition-colors hover:text-[#E8EEF7]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[rgba(148,163,184,0.08)] pt-7 sm:flex-row sm:items-center">
          <div className="text-[12px] text-[#64748B]">
            © 2026 Adaptive Antivirus. {SITE.tagline}.
          </div>
          <div className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
            Built for desktop · mobile · console
          </div>
        </div>
      </div>
    </footer>
  );
}
