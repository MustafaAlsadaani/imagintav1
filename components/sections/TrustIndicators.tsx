"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import MagneticContainer from "@/components/ui/MagneticContainer";
import DecorativeLine from "@/components/ui/DecorativeLine";

const INDICATORS = [
  { value: "100+", label: "Projects Delivered", color: "electric", position: { top: "10%", left: "10%" } },
  { value: "50+", label: "Happy Clients", color: "cyber", position: { top: "55%", left: "20%" } },
  { value: "15", label: "Countries", color: "neon", position: { top: "25%", left: "65%" } },
  { value: "99%", label: "Satisfaction", color: "accent", position: { top: "65%", left: "70%" } },
];

const CONNECTORS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
];

const COLOR_CLASS: Record<string, string> = {
  electric: "shadow-glow-electric",
  cyber: "shadow-glow-cyber",
  neon: "shadow-glow-neon",
  accent: "shadow-[0_0_28px_rgba(236,72,153,0.35)]",
};

export default function TrustIndicators() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative z-10 py-20">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">Proof of Performance</p>
          <h3 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">Numbers we&apos;re proud of</h3>
          <div className="mt-6 flex justify-center">
            <DecorativeLine width="md" gradient="aurora" align="center" />
          </div>
        </div>

        <div className="relative hidden h-64 md:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
            {CONNECTORS.map(([from, to], index) => {
              const start = INDICATORS[from].position;
              const end = INDICATORS[to].position;
              return (
                <motion.line
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  x1={parseFloat(start.left) + 5}
                  y1={parseFloat(start.top) + 5}
                  x2={parseFloat(end.left) + 5}
                  y2={parseFloat(end.top) + 5}
                  stroke="url(#gradient-stroke)"
                  strokeWidth={0.4}
                  strokeDasharray="3 3"
                  initial={{ strokeDashoffset: 10 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 1.2, delay: index * 0.2 }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient-stroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(139,92,246,0.35)" />
                <stop offset="100%" stopColor="rgba(6,182,212,0.35)" />
              </linearGradient>
            </defs>
          </svg>

          {INDICATORS.map((indicator, index) => (
            <MagneticContainer key={indicator.label} intensity={8} className="absolute" style={indicator.position as CSSProperties}>
              <motion.div
                className={`glass-card min-w-[10rem] rounded-2xl p-6 text-left transition-transform duration-300 ${COLOR_CLASS[indicator.color]}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: prefersReducedMotion ? 0 : index * 0.1, duration: 0.4 }}
              >
                <p className="text-gradient text-3xl font-heading font-bold">{indicator.value}</p>
                <p className="mt-2 text-sm text-foreground-secondary">{indicator.label}</p>
              </motion.div>
            </MagneticContainer>
          ))}
        </div>

        <div className="grid gap-4 md:hidden">
          {INDICATORS.map((indicator) => (
            <div
              key={indicator.label}
              className={`glass-card rounded-2xl p-5 text-center ${COLOR_CLASS[indicator.color]}`}
            >
              <p className="text-gradient text-3xl font-heading font-bold">{indicator.value}</p>
              <p className="mt-2 text-sm text-foreground-secondary">{indicator.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
