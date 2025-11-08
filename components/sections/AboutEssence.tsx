"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const ESSENCE_POINTS = [
  {
    title: "Senior-only leadership",
    detail: "You work directly with strategists, design directors, lead engineers, and growth architects—no handoffs to juniors.",
  },
  {
    title: "Design-led engineering",
    detail: "Interfaces feel cinematic yet functional. We build the system and the storytelling in the same sprint cadence.",
  },
  {
    title: "Growth orchestration",
    detail: "Campaigns, lifecycle, analytics, and partner enablement ran by the same team that designed and built the product.",
  },
];

const FOUNDING_STORY = [
  "Imaginta started as a collaboration between a creative director and a product engineer frustrated with fractured vendor models.",
  "We built a studio that behaves like a film crew: script the vision, rehearse every scene, and deliver premieres that audiences remember.",
  "Today, our squads operate across timezones, running digital transformations in retail, SaaS, fintech, hospitality, and beyond.",
];

export default function AboutEssence() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#060417,#0a1024)] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-5 text-white lg:grid-cols-[0.55fr_0.45fr]">
        <WarmSpotlight intensity={0.7}>
          <motion.div
            className="space-y-6 rounded-[32px] border border-white/12 bg-white/[0.06] p-10 text-sm text-white/75 backdrop-blur-2xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Essence</p>
              <h3 className="text-2xl font-heading font-semibold text-white md:text-3xl">
                The Imaginta signature is precision, warmth, and relentless momentum.
              </h3>
            </div>
            <div className="grid gap-4">
              {ESSENCE_POINTS.map((point) => (
                <div key={point.title} className="rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-4">
                  <p className="text-sm font-semibold text-white/80">{point.title}</p>
                  <p className="mt-2 text-white/65">{point.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </WarmSpotlight>

        <WarmSpotlight intensity={0.65}>
          <motion.div
            className="space-y-5 rounded-[32px] border border-white/12 bg-white/[0.05] p-8 text-sm text-white/70 backdrop-blur-xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">Origins</p>
            {FOUNDING_STORY.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-xs uppercase tracking-[0.35em] text-white/60">
              Brussels • Remote-first • Operating globally
            </div>
          </motion.div>
        </WarmSpotlight>
      </div>
    </section>
  );
}
