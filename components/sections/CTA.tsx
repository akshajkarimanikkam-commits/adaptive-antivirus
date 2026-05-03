"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Loader2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { Button } from "@/components/ui/Button";
import { GridBackground } from "@/components/shared/GridBackground";
import { ParticleField } from "@/components/shared/ParticleField";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Status = "idle" | "loading" | "success" | "error";

export function CTA() {
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState(""); // honeypot
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (res.ok && data.ok) {
        setStatus("success");
        setEmail("");
        return;
      }

      setStatus("error");
      setErrorMsg(
        data.error === "invalid_email"
          ? "That email doesn't look right — try again."
          : "We couldn't send your welcome email. Try again in a moment.",
      );
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  }

  return (
    <SectionShell id="cta" className="relative overflow-hidden">
      <GridBackground fade="radial" />
      <ParticleField count={28} />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[720px] rounded-full bg-[radial-gradient(ellipse,rgba(124,196,255,0.18),transparent_70%)] blur-2xl"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(124,196,255,0.25)] bg-[rgba(124,196,255,0.06)] px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7CC4FF]">
          <span className="pulse-dot relative inline-block h-1.5 w-1.5 rounded-full bg-[#7CC4FF] text-[#7CC4FF]" />
          Early Access
        </div>
        <h2 className="mt-6 text-[36px] sm:text-[52px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-[#E8EEF7]">
          Get protected. Make the{" "}
          <span className="text-gradient-cyan">network</span> stronger.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] sm:text-[16px] leading-[1.65] text-[#94A3B8]">
          Start a free trial across every device you own. The first encounter teaches the system. The next one runs into a wall.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label className="relative flex-1">
            <span className="sr-only">Work email</span>
            <Mail
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#64748B]"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              autoComplete="email"
              disabled={status === "loading" || status === "success"}
              className="h-12 w-full rounded-lg border border-[rgba(148,163,184,0.18)] bg-[rgba(17,24,39,0.6)] pl-9 pr-3 text-[14px] text-[#E8EEF7] placeholder:text-[#64748B] backdrop-blur transition-all focus:border-[rgba(124,196,255,0.4)] focus:outline-none focus:ring-2 focus:ring-[rgba(124,196,255,0.25)] disabled:opacity-60"
            />
          </label>

          {/* Honeypot — visually hidden, ignored by users, filled by bots */}
          <label
            aria-hidden
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </label>

          <Button
            type="submit"
            size="lg"
            className="h-12"
            disabled={status === "loading" || status === "success"}
          >
            {status === "loading" ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                Sending…
              </>
            ) : status === "success" ? (
              "You're on the list"
            ) : (
              <>
                Start Free Trial <ArrowRight size={15} />
              </>
            )}
          </Button>
        </form>

        <div aria-live="polite" className="min-h-[24px] mt-3">
          {status === "success" && (
            <p className="text-[13px] text-[#34D399]">
              Check your inbox — a welcome email is on the way from the Adaptive Antivirus Team.
            </p>
          )}
          {status === "error" && errorMsg && (
            <p className="text-[13px] text-[#F87171]">{errorMsg}</p>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA"].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(148,163,184,0.16)] bg-[rgba(17,24,39,0.5)] px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-[#94A3B8] backdrop-blur"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#34D399]" />
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}
