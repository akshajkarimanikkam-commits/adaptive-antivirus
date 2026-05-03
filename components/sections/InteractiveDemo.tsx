"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, RotateCcw, ShieldCheck, ShieldAlert, Bug } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { cn } from "@/lib/utils";

type Phase = "idle" | "detect" | "analyze" | "adapt" | "harden" | "share" | "complete";

const PHASE_ORDER: Phase[] = ["idle", "detect", "analyze", "adapt", "harden", "share", "complete"];

const PHASE_LABEL: Record<Phase, string> = {
  idle: "Standby",
  detect: "Detect",
  analyze: "Analyze",
  adapt: "Adapt",
  harden: "Harden",
  share: "Share",
  complete: "Complete",
};

const PHASE_DURATION: Record<Phase, number> = {
  idle: 0,
  detect: 700,
  analyze: 1400,
  adapt: 1800,
  harden: 1200,
  share: 2000,
  complete: 0,
};

const PROCESSES = [
  { name: "system_idle", desc: "System Process", critical: true },
  { name: "chrome.exe", desc: "Web Browser" },
  { name: "slack.exe", desc: "Communications" },
  { name: "code.exe", desc: "Development" },
  { name: "spotify.exe", desc: "Media Player" },
] as const;

const FAKE_MALWARE = {
  name: "TROJAN.SIM.0XF7A2",
  desc: "(simulated payload — demo only)",
};

type ConsoleLine = { text: string; tone?: "comment" | "keyword" | "string" | "danger" | "success" | "muted" };

const PHASE_LINES: Record<Exclude<Phase, "idle" | "complete">, ConsoleLine[]> = {
  detect: [
    { text: "// anomaly observed in user-space", tone: "comment" },
    { text: "process.unknown = TROJAN.SIM.0XF7A2", tone: "danger" },
    { text: "behavioral_score: 0.94", tone: "muted" },
  ],
  analyze: [
    { text: "// extracting threat fingerprint", tone: "comment" },
    { text: 'fingerprint: "0xA8C4F2E198"', tone: "string" },
    { text: "vector: process_injection", tone: "muted" },
    { text: "family: trojan/sim", tone: "muted" },
  ],
  adapt: [
    { text: "// synthesizing counter-pattern", tone: "comment" },
    { text: "generate(counter_pattern);", tone: "keyword" },
    { text: "compile(defense_logic);", tone: "keyword" },
    { text: "apply(IMMUNIZE);", tone: "success" },
  ],
  harden: [
    { text: "// vector-specific resistance applied", tone: "comment" },
    { text: "rollback(quarantined_payload);", tone: "keyword" },
    { text: 'endpoint.state: "IMMUNE"', tone: "success" },
  ],
  share: [
    { text: "// signing adaptation", tone: "comment" },
    { text: "sign(adaptation, pk);", tone: "keyword" },
    { text: "// distributing to fleet", tone: "comment" },
    { text: "broadcast(7 peers);", tone: "keyword" },
    { text: 'fleet.state: "PROTECTED"', tone: "success" },
  ],
};

const TONE_CLASS: Record<string, string> = {
  comment: "text-[#64748B]",
  keyword: "text-[#7CC4FF]",
  string: "text-[#34D399]",
  danger: "text-[#F87171]",
  success: "text-[#34D399]",
  muted: "text-[#94A3B8]",
};

function phaseIndex(p: Phase) {
  return PHASE_ORDER.indexOf(p);
}

function isAtOrPast(current: Phase, target: Phase) {
  return phaseIndex(current) >= phaseIndex(target);
}

export function InteractiveDemo() {
  const [phase, setPhase] = React.useState<Phase>("idle");
  const [running, setRunning] = React.useState(false);
  const [lines, setLines] = React.useState<ConsoleLine[]>([]);
  const [fleetCount, setFleetCount] = React.useState(0);
  const reduced = useReducedMotion();
  const timersRef = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = React.useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  React.useEffect(() => () => clearTimers(), [clearTimers]);

  const runDemo = React.useCallback(() => {
    clearTimers();
    setRunning(true);
    setPhase("idle");
    setLines([]);
    setFleetCount(0);

    const speed = reduced ? 0.4 : 1;
    let elapsed = 0;
    type ActivePhase = Exclude<Phase, "idle" | "complete">;
    const startAt: ActivePhase[] = ["detect", "analyze", "adapt", "harden", "share"];

    startAt.forEach((p) => {
      elapsed += PHASE_DURATION[PHASE_ORDER[phaseIndex(p) - 1]] * speed;
      const t = setTimeout(() => {
        setPhase(p);
        const newLines: ConsoleLine[] = PHASE_LINES[p];
        newLines.forEach((line, lineIdx) => {
          const lt = setTimeout(
            () => setLines((prev) => [...prev, line]),
            (PHASE_DURATION[p] / Math.max(newLines.length, 1)) * lineIdx * 0.7,
          );
          timersRef.current.push(lt);
        });
        if (p === "share") {
          for (let i = 1; i <= 7; i++) {
            const ft = setTimeout(
              () => setFleetCount(i),
              (PHASE_DURATION.share * speed * i) / 8,
            );
            timersRef.current.push(ft);
          }
        }
      }, elapsed);
      timersRef.current.push(t);
    });

    elapsed += PHASE_DURATION.share * speed + 200;
    const tComplete = setTimeout(() => {
      setPhase("complete");
      setRunning(false);
    }, elapsed);
    timersRef.current.push(tComplete);
  }, [reduced, clearTimers]);

  const reset = React.useCallback(() => {
    clearTimers();
    setRunning(false);
    setPhase("idle");
    setLines([]);
    setFleetCount(0);
  }, [clearTimers]);

  const malwareDetected = isAtOrPast(phase, "detect") && !isAtOrPast(phase, "harden");
  const malwareQuarantined = isAtOrPast(phase, "harden");

  const overallProgress =
    phase === "idle"
      ? 0
      : phase === "complete"
        ? 100
        : (phaseIndex(phase) / 5) * 100;

  return (
    <div className="rounded-[16px] gradient-border bg-[#0A0E1A]/85 overflow-hidden">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(148,163,184,0.08)] bg-[rgba(17,24,39,0.6)] px-5 py-3">
        <div className="flex items-center gap-2">
          {PHASE_ORDER.slice(1).map((p, i) => {
            const reached = phaseIndex(phase) >= phaseIndex(p);
            const active = phase === p;
            return (
              <React.Fragment key={p}>
                <div
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-2.5 py-1 transition-all",
                    active
                      ? "border-[rgba(124,196,255,0.5)] bg-[rgba(124,196,255,0.1)] text-[#7CC4FF]"
                      : reached
                        ? "border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.06)] text-[#34D399]"
                        : "border-[rgba(148,163,184,0.14)] bg-transparent text-[#64748B]",
                  )}
                >
                  <span className="font-mono text-[10px] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden sm:inline text-[11px] font-mono uppercase tracking-[0.12em]">
                    {PHASE_LABEL[p]}
                  </span>
                </div>
                {i < PHASE_ORDER.length - 2 && (
                  <span className="text-[#64748B]">·</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          {phase === "idle" && (
            <Button size="sm" onClick={runDemo} disabled={running}>
              <Play size={12} /> Run Demo
            </Button>
          )}
          {phase !== "idle" && (
            <Button size="sm" variant="ghost" onClick={reset}>
              <RotateCcw size={12} /> Reset
            </Button>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="grid gap-px bg-[rgba(148,163,184,0.06)] lg:grid-cols-2">
        {/* Left: endpoint */}
        <div className="bg-[#0A0E1A]/95 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
              Endpoint · Workstation-04
            </span>
            <EndpointBadge phase={phase} />
          </div>

          <div className="mt-5 rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/60 p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748B] mb-3">
              Process Monitor
            </div>
            <ul className="space-y-1.5">
              {PROCESSES.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-[12.5px] text-[#94A3B8] hover:bg-[rgba(148,163,184,0.04)]"
                >
                  <span className="font-mono">{p.name}</span>
                  <span className="text-[10.5px] uppercase tracking-[0.1em] text-[#34D399]">
                    OK
                  </span>
                </li>
              ))}
              <AnimatePresence>
                {malwareDetected && (
                  <motion.li
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2.5 py-1.5 text-[12.5px] border",
                      "border-[rgba(248,113,113,0.3)] bg-[rgba(248,113,113,0.06)] text-[#F87171]",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Bug size={12} className="shrink-0" />
                      <span className="font-mono">{FAKE_MALWARE.name}</span>
                    </span>
                    <span className="text-[10.5px] uppercase tracking-[0.1em]">
                      {phase === "detect" ? "FLAGGED" : "QUARANTINE"}
                    </span>
                  </motion.li>
                )}
              </AnimatePresence>
              {malwareQuarantined && (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-[12.5px] border border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.06)] text-[#34D399]"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck size={12} className="shrink-0" />
                    <span className="font-mono">{FAKE_MALWARE.name}</span>
                  </span>
                  <span className="text-[10.5px] uppercase tracking-[0.1em]">
                    NEUTRALIZED
                  </span>
                </motion.li>
              )}
            </ul>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <Stat
              label="Behavioral Score"
              value={
                phase === "idle"
                  ? "—"
                  : isAtOrPast(phase, "harden")
                    ? "0.02"
                    : "0.94"
              }
              tone={
                phase === "idle"
                  ? "muted"
                  : isAtOrPast(phase, "harden")
                    ? "success"
                    : "danger"
              }
            />
            <Stat
              label="Protection Level"
              value={
                phase === "idle"
                  ? "97%"
                  : phase === "detect"
                    ? "62%"
                    : phase === "analyze"
                      ? "70%"
                      : phase === "adapt"
                        ? "84%"
                        : "100%"
              }
              tone={isAtOrPast(phase, "harden") ? "success" : "primary"}
            />
          </div>
        </div>

        {/* Right: engine */}
        <div className="bg-[#0A0E1A]/95 p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
              Adaptive Engine · v3.1
            </span>
            <Pill tone={phase === "complete" ? "success" : "primary"} size="sm">
              <span className="pulse-dot relative inline-block h-1 w-1 rounded-full bg-current" />
              {phase === "idle" ? "Ready" : phase === "complete" ? "Complete" : "Active"}
            </Pill>
          </div>

          {/* Console */}
          <div className="scanline relative mt-5 h-[180px] overflow-y-auto rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/80 p-3 font-mono text-[12px]">
            {phase === "idle" && lines.length === 0 && (
              <div className="flex h-full items-center justify-center text-[#64748B]">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
                  awaiting threat signal…
                </span>
              </div>
            )}
            <AnimatePresence initial={false}>
              {lines.map((l, i) => (
                <motion.div
                  key={`${i}-${l.text}`}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cn("flex gap-3 leading-[1.65]", TONE_CLASS[l.tone ?? "muted"])}
                >
                  <span className="text-[#64748B] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{l.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Fleet visual */}
          <div className="mt-4 rounded-[12px] border border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/60 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-[#64748B]">
                Fleet Distribution
              </span>
              <span className="font-mono text-[11px] text-[#94A3B8]">
                <span className="text-gradient-cyan font-semibold">{fleetCount}</span>
                <span className="text-[#64748B]"> / 7 peers</span>
              </span>
            </div>
            <FleetVisual count={fleetCount} />
          </div>
        </div>
      </div>

      {/* Bottom progress + summary */}
      <div className="border-t border-[rgba(148,163,184,0.08)] bg-[rgba(17,24,39,0.5)] px-5 py-4">
        <ProgressBar
          value={overallProgress}
          tone={phase === "complete" ? "success" : "primary"}
          label="Cycle progress"
          hint={`${Math.round(overallProgress)}%`}
        />
        <AnimatePresence>
          {phase === "complete" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              <SummaryStat label="Detected" value="612 ms" />
              <SummaryStat label="Adapted" value="1.83 s" />
              <SummaryStat label="Hardened" value="98 ms" />
              <SummaryStat label="Fleet shared" value="7 peers" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function EndpointBadge({ phase }: { phase: Phase }) {
  const variant: "ok" | "alert" | "immune" = isAtOrPast(phase, "harden")
    ? "immune"
    : isAtOrPast(phase, "detect")
      ? "alert"
      : "ok";

  const config = {
    ok: { Icon: ShieldCheck, label: "Protected", tone: "success" as const },
    alert: { Icon: ShieldAlert, label: "Threat Active", tone: "danger" as const },
    immune: { Icon: ShieldCheck, label: "Immunized", tone: "success" as const },
  }[variant];

  const colorClass =
    variant === "alert"
      ? "border-[rgba(248,113,113,0.3)] bg-[rgba(248,113,113,0.06)] text-[#F87171]"
      : "border-[rgba(52,211,153,0.3)] bg-[rgba(52,211,153,0.06)] text-[#34D399]";

  const { Icon, label } = config;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.12em]",
        colorClass,
      )}
    >
      <Icon size={11} />
      {label}
    </span>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "success" | "danger" | "muted";
}) {
  const colors: Record<string, string> = {
    primary: "text-[#7CC4FF]",
    success: "text-[#34D399]",
    danger: "text-[#F87171]",
    muted: "text-[#64748B]",
  };
  return (
    <div className="rounded-[10px] border border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/60 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">{label}</div>
      <div className={cn("mt-1 font-mono text-[18px] font-semibold tracking-tight", colors[tone])}>
        {value}
      </div>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] border border-[rgba(148,163,184,0.1)] bg-[#0A0E1A]/40 p-3">
      <div className="text-[10px] uppercase tracking-[0.14em] text-[#64748B]">{label}</div>
      <div className="mt-1 font-mono text-[15px] font-semibold tracking-tight text-gradient-cyan">
        {value}
      </div>
    </div>
  );
}

function FleetVisual({ count }: { count: number }) {
  const peers = Array.from({ length: 7 }, (_, i) => i);
  return (
    <svg viewBox="0 0 320 100" className="h-[100px] w-full">
      <defs>
        <radialGradient id="fleet-hub-glow">
          <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
        </radialGradient>
      </defs>
      {/* HQ */}
      <circle cx="160" cy="50" r="22" fill="url(#fleet-hub-glow)" />
      <circle cx="160" cy="50" r="11" fill="#0A0E1A" stroke="#7CC4FF" strokeWidth="1.2" />
      <text x="160" y="53" textAnchor="middle" fontSize="7" fontFamily="var(--font-mono)" fill="#7CC4FF">
        HQ
      </text>
      {/* peers */}
      {peers.map((i) => {
        const angle = ((i - 3) * 22) * (Math.PI / 180);
        const distance = 120;
        const x = 160 + Math.sin(angle) * distance;
        const y = 50 + Math.cos(angle - Math.PI / 2) * 20 + (i % 2 === 0 ? 0 : 10);
        const protectedNow = i < count;
        return (
          <g key={i}>
            <line
              x1="160"
              y1="50"
              x2={x}
              y2={y}
              stroke={protectedNow ? "rgba(124,196,255,0.5)" : "rgba(148,163,184,0.15)"}
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />
            <circle
              cx={x}
              cy={y}
              r="6"
              fill="#0A0E1A"
              stroke={protectedNow ? "#7CC4FF" : "rgba(148,163,184,0.3)"}
              strokeWidth="1"
            />
            {protectedNow && (
              <circle cx={x} cy={y} r="9" fill="none" stroke="#7CC4FF" strokeWidth="0.4">
                <animate attributeName="r" from="6" to="11" dur="1.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="1.4s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}

