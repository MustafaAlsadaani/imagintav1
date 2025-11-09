"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const COLLECTIVE_MEMOS = [
  {
    title: "Creative direction",
    quote: "We turn your ideas into clear visuals and words that customers remember.",
    owner: "Emilia · Creative Director",
  },
  {
    title: "Product engineering",
    quote: "We build fast, secure websites that work on every device.",
    owner: "Jules · Lead Engineer",
  },
  {
    title: "Growth orchestration",
    quote: "We connect your marketing channels so you always know what brings in new customers.",
    owner: "Mira · Head of Growth",
  },
  {
    title: "Partner success",
    quote: "We manage tools, vendors, and training so you can focus on running the business.",
    owner: "Louis · Partner Ops Lead",
  },
];

export default function AboutCollective() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-soft py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_70%)] opacity-45" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-cyber-text">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold text-white md:text-5xl lg:text-[3rem]">Meet the Imaginta team</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-cyber-text-secondary sm:text-lg">
            We are a friendly group of designers, developers, marketers, and security specialists. Everyone is senior, hands-on, and
            focused on helping your business grow.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {COLLECTIVE_MEMOS.map((memo, index) => (
            <WarmSpotlight key={memo.title}>
              <motion.article
                className="rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/78 p-6 text-left text-sm text-cyber-text"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.06, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">{memo.title}</p>
                <p className="mt-3 text-cyber-text">“{memo.quote}”</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyber-text-secondary/80">{memo.owner}</p>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
