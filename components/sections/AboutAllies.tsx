"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const ALLY_CARDS = [
  {
    label: "Shopify",
    description: "We set up online stores, manage approvals, and connect payment tools so you can sell faster.",
  },
  {
    label: "Google",
    description: "We improve search visibility and campaigns using the latest tools from Google Ads and Analytics.",
  },
  {
    label: "Microsoft",
    description: "We support Azure, Microsoft 365, and security setups to keep your team productive and safe.",
  },
  {
    label: "HubSpot",
    description: "We build automated emails and sales dashboards that show your pipeline in a single view.",
  },
];

export default function AboutAllies() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-alt py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] opacity-45" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-cyber-text">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold text-white md:text-5xl lg:text-[3rem]">Trusted partners that speed up your results</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-cyber-text-secondary sm:text-lg">
            We work closely with leading platforms. Imaginta manages the setup and support so you get the benefits without the busywork.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {ALLY_CARDS.map((ally, index) => (
            <WarmSpotlight key={ally.label}>
              <motion.article
                className="rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/78 p-6 text-left text-sm text-cyber-text"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.06, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">
                  <span>{ally.label}</span>
                  <FiArrowUpRight className="h-4 w-4 text-cyber-text-secondary" />
                </div>
                <p className="mt-3 text-cyber-text-secondary">{ally.description}</p>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
