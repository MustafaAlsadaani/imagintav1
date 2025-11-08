"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import FloatingShape from "@/components/ui/FloatingShape";
import GradientOrb from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";

const TAGS = ["Mythic momentum", "Victory-grade craft", "Signal-rich growth", "Security woven in"];

const PULSE_STATS = [
  { label: "Launch Velocity", value: "21 days" },
  { label: "Lifetime Lift", value: "194%" },
  { label: "Alliances", value: "12" },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background via-background-secondary/90 to-background py-28 md:py-32 lg:py-40"
      data-stickman-section="hero"
    >
      <motion.div className="absolute inset-0" animate={prefersReducedMotion ? undefined : { opacity: [0.85, 1, 0.85] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        <AnimatedMesh />
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div className="pointer-events-none absolute inset-0" animate={{ y: [0, 18, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}>
          <FloatingShape shape="blob" color="electric" size={220} delay={1.2} style={{ top: "8%", left: "18%" }} />
          <FloatingShape shape="triangle" color="accent" size={150} delay={2.4} style={{ top: "62%", left: "10%" }} />
          <FloatingShape shape="circle" color="cyber" size={190} delay={3.2} style={{ top: "32%", right: "14%" }} />
          <FloatingShape shape="square" color="neon" size={160} delay={1.8} style={{ bottom: "6%", right: "20%" }} />
        </motion.div>
      )}

      {!prefersReducedMotion && (
        <motion.div
          className="aurora-veil absolute inset-0"
          animate={{ backgroundPosition: ["0% 40%", "100% 60%", "0% 40%"], opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <GradientOrb color="electric" size="lg" className="left-[-18%] top-[10%] opacity-70" />
      <GradientOrb color="accent" size="md" className="right-[-12%] bottom-[14%] opacity-55" />

      <div className="relative z-10">
        <div className="container-custom">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-200/85"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Imaginta Studio
            </motion.span>

            <motion.h1
              className="mt-10 text-balance text-4xl font-heading font-bold text-white sm:text-5xl lg:text-6xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              We conjure digital realms that feel inevitable—magnetic, cinematic, and engineered to win.
            </motion.h1>

            <motion.p
              className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              Vision refined behind closed doors. Launches that detonate on cue. Growth systems humming like covert machinery. Imaginta is the embedded strike team orchestrating every touchpoint toward undeniable momentum.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <Button asChild variant="gradient" size="lg" className="cta-primary cta-pulse cta-magnetic rounded-full px-8 py-4 text-base">
                <Link href="/contact" className="flex items-center gap-2">
                  Initiate the launch
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="cta-secondary rounded-full px-6 py-4 text-base text-white/80">
                <Link href="/services" className="flex items-center gap-2">
                  Decode our method
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-12 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/55"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
              {TAGS.map((tag) => (
                <span key={tag} className="rounded-full border border-white/12 px-4 py-2">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-14 grid w-full max-w-3xl gap-4 border border-white/10 bg-white/[0.05] p-6 text-sm text-white/70 backdrop-blur-xl sm:grid-cols-3"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {PULSE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-2xl font-heading font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/55">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 w-full max-w-4xl rounded-[32px] border border-white/12 bg-white/[0.05] p-6 text-sm text-white/65 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              “Imaginta turned our roadmap into an inevitability. The launch hit like prophecy—and the revenue curve hasn’t stopped accelerating.”
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">Chief Strategy Officer · Global SaaS Collective</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


