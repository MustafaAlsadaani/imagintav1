"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const CONTACT_POINTS = [
  {
    title: "Ready to move?",
    description: "Book a 30-minute session so we can map priorities, budget guardrails, and first month wins.",
    action: {
      label: "Schedule a strategy call",
      href: "/contact",
    },
  },
  {
    title: "Need the details?",
    description: "Download the one-page plan to review with your team—pricing, process, and deliverables included.",
    action: {
      label: "Get the plan PDF",
      href: "/downloads/imaginta-plan.pdf",
    },
  },
];

export default function ServicesCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-orange-500/25 via-pink-500/20 to-cyan-400/20 py-24"
      data-stickman-section="contact"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(17,24,39,0.65),_transparent_70%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center text-white"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Next step</p>
          <h2 className="mt-4 text-3xl font-heading font-bold sm:text-4xl">Let’s map your first 90 days.</h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Whether you want a consultative walkthrough or just the numbers, we make the next move simple.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CONTACT_POINTS.map((point, index) => (
            <WarmSpotlight key={point.title} className="h-full" intensity={0.7}>
              <motion.div
                className="flex h-full flex-col justify-between rounded-3xl border border-white/20 bg-white/10 p-6 text-left text-sm text-white/80 backdrop-blur-2xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-white/70">{point.description}</p>
                </div>
                <Link
                  href={point.action.href}
                  className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
                >
                  {point.action.label}
                </Link>
              </motion.div>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
