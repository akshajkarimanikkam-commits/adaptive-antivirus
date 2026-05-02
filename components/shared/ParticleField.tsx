"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  r: number;
  d: number;
  o: number;
}

export function ParticleField({ count = 36, className }: ParticleFieldProps) {
  const reduced = useReducedMotion();
  const particles = React.useMemo<Particle[]>(() => {
    const pseudo = (i: number) => {
      const a = Math.sin(i * 12.9898) * 43758.5453;
      return a - Math.floor(a);
    };
    return Array.from({ length: count }, (_, i) => ({
      x: pseudo(i + 1) * 100,
      y: pseudo(i + 17) * 100,
      r: 0.6 + pseudo(i + 31) * 1.4,
      d: 4 + pseudo(i + 53) * 8,
      o: 0.18 + pseudo(i + 71) * 0.45,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#7CC4FF]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.r}px`,
            height: `${p.r}px`,
            opacity: p.o,
            boxShadow: "0 0 8px rgba(124,196,255,0.6)",
            animation: reduced
              ? undefined
              : `float-slow ${p.d}s ease-in-out infinite`,
            animationDelay: `${(i * 0.13) % 4}s`,
          }}
        />
      ))}
    </div>
  );
}
