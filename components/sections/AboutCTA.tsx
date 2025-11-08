"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/25 via-pink-500/20 to-cyan-400/25 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%),radial-gradient(circle_at_bottom,rgba(17,24,39,0.65),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center text-white">
        <motion.h2
          className="text-4xl font-heading font-bold md:text-5xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to design the next chapter together?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-3xl text-base text-white/80 sm:text-lg"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        >
          Let’s align on vision, budget, and first wins. Imaginta will script the experience, assemble the squad, and deliver momentum
          you can measure.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >
          <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
            <Link href="/contact" className="flex items-center gap-2">
              Schedule a strategy call
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg" className="rounded-full px-7 py-4 text-base text-white/80">
            <Link href="/services" className="flex items-center gap-2">
              View our playbook
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
