"use client";

import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const CULTURE_QUOTE =
  "We direct every engagement like a cinematic production—clear briefs, rehearsed hand-offs, and an encore of measurable growth.";

const OPERATING_PRINCIPLES = [
  {
    title: "Embedded squads",
    description: "We join your ops in shared workspaces, matching rituals and tools to feel like part of the crew from day one.",
  },
  {
    title: "Creative rigor",
    description: "Ideas only matter when they ship beautifully. We critique hard, polish harder, and document every choice.",
  },
  {
    title: "Momentum monitors",
    description: "Weekly pulses, monthly recaps, quarterly deep dives—each with plain-language dashboards and footage-worthy demos.",
  },
];

const RITUALS = [
  {
    label: "Mondays",
    detail: "Studio-wide cinematic review. We set tone, align narrative, adjust sprints, and escalate blockers instantly.",
  },
  {
    label: "Wednesdays",
    detail: "Design, engineering, and growth labs. Fast critiques, prototype walkthroughs, and security sweeps.",
  },
  {
    label: "Fridays",
    detail: "Premiere demo. Stakeholders stream the latest build, receive recaps, and approve the next chapter.",
  },
];

export default function OurCulture() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#05030e,#0f172a)] py-28 lg:py-32">
      <GradientOrb color="neon" size="lg" className="left-[-20%] top-[10%] opacity-65" />
      <GradientOrb color="electric" size="md" className="right-[-16%] bottom-[12%] opacity-55" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">Culture that keeps the studio sharp</h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine align="center" gradient="aurora" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Imaginta is intentionally senior, remote-native, and cinematic in delivery. Our culture is part precision, part play, and
            entirely focused on client outcomes.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.55fr_0.45fr]">
          <WarmSpotlight intensity={0.7}>
            <motion.div
              className="space-y-8 rounded-[36px] border border-white/12 bg-white/[0.06] p-10 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Studio mindset</p>
                <p className="text-xl leading-relaxed text-white/80 md:text-2xl">{CULTURE_QUOTE}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {OPERATING_PRINCIPLES.map((principle) => (
                  <div key={principle.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-sm text-white/70">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{principle.title}</p>
                    <p className="mt-3">{principle.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </WarmSpotlight>

          <WarmSpotlight intensity={0.65}>
            <motion.div
              className="space-y-5 rounded-[32px] border border-white/12 bg-white/[0.05] p-8 text-sm text-white/70 backdrop-blur-xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Weekly rhythm</p>
              {RITUALS.map((ritual) => (
                <div key={ritual.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/70">{ritual.label}</p>
                  <p className="mt-2 text-white/65">{ritual.detail}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-xs uppercase tracking-[0.35em] text-white/60">
                Precision • Empathy • Curiosity • Accountability
              </div>
            </motion.div>
          </WarmSpotlight>
        </div>
      </div>
    </section>
  );
}
