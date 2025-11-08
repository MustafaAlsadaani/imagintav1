"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const COLLECTIVE_MEMOS = [
  {
    title: "Creative direction",
    quote: "We storyboard every launch like a cinematographer—beats, frames, resonance.",
    owner: "Emilia · Creative Director",
  },
  {
    title: "Product engineering",
    quote: "Design systems, performance, and accessibility are treated as one constraint.",
    owner: "Jules · Lead Engineer",
  },
  {
    title: "Growth orchestration",
    quote: "We connect campaigns, lifecycle, and analytics into a single growth narrative.",
    owner: "Mira · Head of Growth",
  },
  {
    title: "Partner success",
    quote: "Imaginta handles the vendor maze so clients stay focused on craft and customers.",
    owner: "Louis · Partner Ops Lead",
  },
];

export default function AboutCollective() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#05030e,#0f1a2e)] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_75%)] opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">The Imaginta collective</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Multidisciplinary, senior, and endlessly curious. Our team melds creative direction, engineering, partner ops, and growth into
            one cohesive voice.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {COLLECTIVE_MEMOS.map((memo, index) => (
            <WarmSpotlight key={memo.title} intensity={0.65}>
              <motion.article
                className="rounded-[28px] border border-white/12 bg-white/[0.06] p-6 text-left text-sm text-white/75 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.06, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{memo.title}</p>
                <p className="mt-3 text-white/80">“{memo.quote}”</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">{memo.owner}</p>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
