"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiRadio, FiTrendingUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const CONTRIBUTORS = [
  {
    name: "Mustafa",
    handle: "@mustafa.codes",
    specialty: "Engineering Signal",
    stat: "Ship velocity 21-day average",
  },
  {
    name: "Sero",
    handle: "@sero.designs",
    specialty: "Experience Lab",
    stat: "Conversion uplift +18% per launch",
  },
  {
    name: "Falcon",
    handle: "@falcon.growth",
    specialty: "Growth Ops",
    stat: "Pipeline acceleration 2.4x YoY",
  },
];

export default function BlogHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-cyber-neutral/25 bg-cyber-bg py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(0,255,255,0.18),transparent_60%),radial-gradient(circle_at_82%_12%,rgba(176,38,255,0.16),transparent_62%)] opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.06]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,12,24,0.6)0%,rgba(6,12,24,0.92)55%,rgba(6,12,24,1)100%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-7 text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-primary/35 bg-cyber-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-cyber-primary">
              Imaginta Signals
            </span>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-heading font-bold text-white drop-shadow-[0_0_26px_rgba(0,255,255,0.35)] md:text-5xl lg:text-6xl">
                Neon intel for teams building foundations and sprinting to win.
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-cyber-text-secondary">
                Imagine a newsroom wired to strategy, design, engineering, and growth telemetry. The Imaginta Feed distils our daily field
                notes into crisp, cinematic signals you can apply before your next stand-up.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Partner with the squad
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full border border-cyber-neutral/45 bg-transparent px-8 py-4 text-base text-cyber-text-secondary hover:border-cyber-primary/40 hover:text-white"
              >
                <Link href="#signal-stream" className="inline-flex items-center gap-2">
                  Browse the signal stream
                  <FiRadio className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            className="rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/85 p-8 text-sm text-cyber-text"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 32 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.4em] text-cyber-text-secondary">
              <span>Live telemetrics</span>
              <span className="inline-flex items-center gap-1 text-cyber-primary">
                <FiTrendingUp className="h-4 w-4" /> New drops hourly
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {CONTRIBUTORS.map((contributor) => (
                <div
                  key={contributor.handle}
                  className="relative overflow-hidden rounded-3xl border border-cyber-neutral/35 bg-cyber-bg/72 px-5 py-4 transition-all duration-300 hover:border-cyber-primary/45 hover:bg-cyber-neutral/35"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(0,255,255,0.18),transparent_70%)] blur-2xl" />
                  </div>
                  <div className="relative flex flex-col gap-1 text-cyber-text">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-cyber-text-secondary/85">
                      <span>{contributor.specialty}</span>
                      <span>{contributor.handle}</span>
                    </div>
                    <p className="text-lg font-heading font-semibold text-white">{contributor.name}</p>
                    <p className="text-sm text-cyber-text-secondary/90">{contributor.stat}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

