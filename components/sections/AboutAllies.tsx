"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const ALLY_CARDS = [
  {
    label: "Shopify",
    description: "Commerce builds launch faster with Imaginta-managed approvals, beta features, and merchant success teams on speed dial.",
  },
  {
    label: "Google",
    description: "Search, AI, and measurement programs keep growth accountable. We align strategy with the latest product releases.",
  },
  {
    label: "Microsoft",
    description: "Azure, Copilot, and cloud security expertise to scale enterprise experiences without friction.",
  },
  {
    label: "HubSpot",
    description: "RevOps orchestration with automated journeys and reporting your board can read in minutes.",
  },
];

export default function AboutAllies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#060417,#11172b)] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-70" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">Allies that accelerate our clients</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Our partner ecosystem means faster approvals, richer data, and exclusive betas. Clients focus on vision—we handle the
            negotiations and integrations.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ALLY_CARDS.map((ally, index) => (
            <WarmSpotlight key={ally.label} intensity={0.64}>
              <motion.article
                className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-left text-sm text-white/75 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.06, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                  <span>{ally.label}</span>
                  <FiArrowUpRight className="h-4 w-4 text-orange-200/80" />
                </div>
                <p className="mt-3 text-white/65">{ally.description}</p>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
