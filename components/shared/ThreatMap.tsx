"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export function ThreatMap() {
  const reduced = useReducedMotion();
  const points = React.useMemo(() => {
    const pseudo = (i: number) => {
      const a = Math.sin(i * 9.7898) * 43758.5453;
      return a - Math.floor(a);
    };
    return Array.from({ length: 22 }, (_, i) => ({
      x: 8 + pseudo(i + 3) * 84,
      y: 22 + pseudo(i + 19) * 56,
      delay: pseudo(i + 41) * 6,
    }));
  }, []);

  return (
    <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[12px] border border-[rgba(148,163,184,0.12)] bg-[#0A0E1A]/80">
      <div aria-hidden className="absolute inset-0 bg-grid-fine mask-radial-fade" />
      <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="map-glow">
            <stop offset="0%" stopColor="#7CC4FF" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity={0} />
          </radialGradient>
        </defs>
        {/* abstract continent silhouettes via dots */}
        {Array.from({ length: 380 }).map((_, i) => {
          const x = (i * 13.7) % 100;
          const y = (i * 7.3) % 50;
          const dx = x - 50;
          const dy = y - 25;
          const r = Math.sqrt(dx * dx + dy * dy);
          if (r > 30 && r < 35) return null;
          const land =
            Math.sin(x * 0.32 + y * 0.18) > 0.1 &&
            Math.cos(x * 0.21 - y * 0.27) > -0.2;
          if (!land) return null;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r="0.32"
              fill="rgba(148,163,184,0.18)"
            />
          );
        })}
        {/* attack pulses */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="2" fill="url(#map-glow)" />
            <circle cx={p.x} cy={p.y} r="0.5" fill="#7CC4FF">
              {!reduced && (
                <>
                  <animate
                    attributeName="r"
                    from="0.5"
                    to="3"
                    dur="2.4s"
                    begin={`${p.delay}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="1"
                    to="0"
                    dur="2.4s"
                    begin={`${p.delay}s`}
                    repeatCount="indefinite"
                  />
                </>
              )}
            </circle>
          </g>
        ))}
      </svg>
      <div className="absolute left-4 top-3 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.16em] text-[#64748B]">
        <span className="pulse-dot relative inline-block h-1 w-1 rounded-full bg-[#34D399] text-[#34D399]" />
        Live · Attacks blocked worldwide
      </div>
      <div className="absolute right-4 bottom-3 font-mono text-[11px] text-[#94A3B8]">
        <span className="text-gradient-cyan font-semibold">2,481,902</span> last 24h
      </div>
    </div>
  );
}
