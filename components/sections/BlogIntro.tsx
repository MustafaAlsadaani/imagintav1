"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogIntro() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-soft py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-5 text-white text-center">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Imaginta Feed
        </motion.span>
        <motion.h1
          className="mt-8 text-balance text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-[3.3rem]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          Fresh drops from Mustafa, Sero, and Falcon – insights, hacks, and behind-the-scenes energy.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/75"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          Tap into the daily stream powering Imaginta – posts rotate every hour so you always catch fresh thinking on web craft, design,
          marketing, and business growth. A social-style feed for curious builders.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
        >
          <Button asChild variant="gradient" size="lg" className="rounded-full px-7 py-4 text-base">
            <Link href="/contact" className="flex items-center gap-2">
              Collaborate with us
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="glass" size="lg" className="rounded-full px-7 py-4 text-base text-white/80">
            <Link href="#feed" className="flex items-center gap-2">
              Jump to latest posts
              <FiArrowUpRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
