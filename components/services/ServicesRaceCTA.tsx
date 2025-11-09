"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function ServicesRaceCTA() {
  return (
    <section className="relative overflow-hidden bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(0,255,255,0.18),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(57,255,20,0.18),transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-cyber-primary/25 bg-cyber-bg/80 p-10 text-center shadow-[0_40px_160px_rgba(2,12,28,0.72)]">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center gap-6"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/40 bg-cyber-neutral/30 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyber-highlight/90"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Ready to transform?
          </motion.span>
          <h2 className="text-balance text-3xl font-heading font-bold text-white md:text-4xl">
            Imaginta is your friendly partner for websites, marketing, design, business support, and cyber security.
          </h2>
          <p className="text-lg text-cyber-text-secondary">
            Tell us what you want to improve and we will build a simple plan that shows the steps, timeline, and expected results—all in
            everyday language.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Contact us today
                <FiArrowRightCircle className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-full border border-cyber-neutral/40 bg-transparent px-8 py-4 text-base text-cyber-text-secondary hover:border-cyber-primary/45 hover:text-white"
            >
              <Link href="/about">See the team in action</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-cyber-text-secondary">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/35 bg-cyber-neutral/25 px-4 py-2">
              <span className="size-2 rounded-full bg-cyber-primary" />
              Friendly onboarding process
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/35 bg-cyber-neutral/25 px-4 py-2">
              <span className="size-2 rounded-full bg-cyber-highlight" />
              Weekly updates with clear actions
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/35 bg-cyber-neutral/25 px-4 py-2">
              <span className="size-2 rounded-full bg-cyber-accent" />
              Ongoing support after launch
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

