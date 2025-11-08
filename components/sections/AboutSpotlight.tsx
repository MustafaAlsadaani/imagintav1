"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const SIGNATURE_STATS = [
  { label: "Launches led", value: "108" },
  { label: "Disciplines united", value: "5" },
  { label: "Avg. rollout", value: "21 days" },
];

export default function AboutSpotlight() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#05030e,#0d1024)] py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.22),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.2),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 159.5 159.5 0\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'1\'/%3E%3C/svg%3E')] opacity-40 mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-10"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85">
              Imaginta Studio
            </span>
            <h1 className="text-balance text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-[3.3rem]">
              We direct brands into their next chapter—where design, engineering, and growth move in perfect sync.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Imaginta is a dark-mode creative studio born in Brussels and operating globally. We choreograph cinematic brand moments,
              build high-performance products, and orchestrate growth so ambition turns into measurable results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                <Link href="/services" className="flex items-center gap-2">
                  Explore capabilities
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-full px-7 py-4 text-base text-white/80">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a conversation
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 rounded-[36px] border border-white/12 bg-white/[0.08] p-10 text-sm text-white/75 backdrop-blur-2xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Why clients choose us</p>
              <p className="text-lg leading-relaxed text-white/80">
                One studio for storyboarding, production, and distribution. Senior talent only. Plain-language updates. Velocity without
                the chaos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {SIGNATURE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/12 bg-white/10 p-5 text-center">
                  <p className="text-2xl font-heading font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.32em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/12 bg-white/[0.07] p-5 text-sm text-white/70">
              “Imaginta runs every launch like a premiere. They align stakeholders, build the experience, and amplify the results. We stay
              because they never stop raising the bar.”
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
