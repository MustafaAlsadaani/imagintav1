"use client";

import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const MILESTONES = [
  {
    year: "2023",
    headline: "Imaginta ignites in Brussels",
    detail:
      "A design director and lead engineer combine forces to offer cinematic brand experiences with production-level execution.",
    takeaway: "Small studio, senior-only talent, immediate impact.",
  },
  {
    year: "2024",
    headline: "From boutique to embedded squads",
    detail:
      "Growth leaders, motion designers, and data strategists join. We start running multi-timezone engagements across Europe and MENA.",
    takeaway: "One collective, five disciplines, zero hand-offs.",
  },
  {
    year: "2025",
    headline: "Partnership network becomes our multiplier",
    detail:
      "Certified partner status with Shopify, Google, HubSpot, and Microsoft means faster approvals and exclusive product access.",
    takeaway: "Clients skip vendor admin and unlock beta features first.",
  },
  {
    year: "Future",
    headline: "Immersive products & intelligent growth",
    detail:
      "We continue blending cinematic storytelling with AI-assisted design systems, delivering experiences that feel alive and measurable.",
    takeaway: "Every release: scripted, orchestrated, optimised.",
  },
];

export default function OurStory() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-32">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[-15%] opacity-80" />
      <GradientOrb color="accent" size="md" className="right-[-18%] bottom-[-10%] opacity-60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_65%)] opacity-70" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center text-white">
          <motion.h2
            className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our story is a continuous escalation
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            Every chapter sharpened our craft and expanded the impact we can deliver. We call it the Imaginta escalation curve—always
            building, always amplifying.
          </motion.p>
        </div>

        <div className="mt-20 flex flex-col gap-12 lg:flex-row">
          <div className="relative mx-auto hidden w-[2px] flex-none rounded-full bg-gradient-to-b from-orange-400 via-pink-500 to-cyan-400 lg:block" />

          <div className="flex-1 space-y-10">
            {MILESTONES.map((milestone, index) => (
              <WarmSpotlight key={milestone.year} className="h-full" intensity={0.7}>
                <motion.article
                  className="grid gap-6 rounded-[32px] border border-white/12 bg-white/[0.06] p-8 text-sm text-white/75 backdrop-blur-2xl md:grid-cols-[0.2fr_0.8fr]"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.07, ease: "easeOut" }}
                >
                  <div className="flex items-start justify-between gap-4 md:flex-col md:text-left">
                    <span className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{milestone.year}</span>
                    <span className="hidden h-16 w-[2px] rounded-full bg-white/20 md:block" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-heading font-semibold text-white md:text-xl">{milestone.headline}</h3>
                    <p className="text-white/65">{milestone.detail}</p>
                    <p className="text-sm font-semibold text-orange-200/80">{milestone.takeaway}</p>
                  </div>
                </motion.article>
              </WarmSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

