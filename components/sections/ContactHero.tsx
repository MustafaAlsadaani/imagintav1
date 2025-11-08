"use client";

import { motion } from "framer-motion";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import FloatingShape from "@/components/ui/FloatingShape";

const SIGNALS = [
  { label: "Response time", value: "under 60 minutes" },
  { label: "Engagement", value: "covert war-room sprint" },
  { label: "Timezone coverage", value: "CET · EST" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-[#02020f] to-background-secondary py-32 sm:py-36">
      <AnimatedMesh />
      <GradientOrb color="electric" size="lg" className="left-[-15%] top-[-18%] opacity-70 blur-[2px]" />
      <GradientOrb color="cyber" size="md" className="right-[-14%] bottom-[-20%] opacity-60 blur-[1px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(236,72,153,0.24),transparent_52%),radial-gradient(circle_at_84%_24%,rgba(6,182,212,0.22),transparent_58%)]" />
      <FloatingShape shape="blob" color="electric" size={240} delay={1.6} style={{ top: "18%", left: "10%" }} />
      <FloatingShape shape="triangle" color="neon" size={160} delay={2.8} style={{ bottom: "12%", right: "16%" }} />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <motion.span
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.5em] text-orange-200/90"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Mission Control
            </motion.span>

            <motion.h1
              className="text-balance text-4xl font-heading font-bold text-white sm:text-5xl lg:text-[3.4rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            >
              Signal Imaginta. We assemble the strike team that turns ambition into an inevitable launch.
            </motion.h1>

            <motion.p
              className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
            >
              Every engagement begins in a sealed war room—clarity, choreography, and covert execution. Share your signal.
              We respond with the operators, playbooks, and momentum to win the market moment.
            </motion.p>

            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            >
              {SIGNALS.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-white/75 backdrop-blur-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/45">{signal.label}</p>
                  <p className="mt-3 text-base font-medium text-white">{signal.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative grid gap-6 rounded-[32px] border border-white/12 bg-white/[0.04] p-8 shadow-[0_28px_90px_rgba(10,10,40,0.45)] backdrop-blur-2xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -left-12 top-8 hidden h-16 w-16 rounded-full bg-orange-300/30 blur-3xl lg:block" />
            <div className="absolute -bottom-12 right-8 hidden h-28 w-28 rounded-full bg-cyan-300/25 blur-[70px] lg:block" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.48em] text-white/60">How the first 72 hours flow</p>
              <ul className="mt-6 space-y-5 text-white/80">
                <li>
                  <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/50">00 → 12h</span>
                  <p className="mt-1 text-base leading-relaxed text-white">
                    Signal received. We deploy analysts and align on stakes, audiences, and success markers.
                  </p>
                </li>
                <li>
                  <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/50">12 → 36h</span>
                  <p className="mt-1 text-base leading-relaxed text-white">
                    War-room synthesis. Lo-fi experience frames, growth scenarios, and technical pathways emerge.
                  </p>
                </li>
                <li>
                  <span className="text-sm font-semibold uppercase tracking-[0.32em] text-white/50">36 → 72h</span>
                  <p className="mt-1 text-base leading-relaxed text-white">
                    We deliver a mission brief: timelines, squad composition, investment tiers, and success choreography.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

