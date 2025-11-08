"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const CORE_METRICS = [
  { label: "Creative launches orchestrated", value: "108" },
  { label: "Disciplines inside one squad", value: "5" },
  { label: "Continents served", value: "3" },
];

const SIGNATURE_PILLARS = [
  "Cinematic brand storytelling",
  "Design-led engineering",
  "Growth and partner enablement",
];

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.28),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_55%),#05030e] py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'120\' height=\'120\' viewBox=\'0 0 120 120\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 119.5 119.5 0\' stroke=\'rgba(255,255,255,0.04)\' stroke-width=\'1\'/%3E%3C/svg%3E')] opacity-40 mix-blend-screen" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-10 text-left text-white">
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The Imaginta Collective
          </motion.span>

          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h1 className="text-balance text-4xl font-heading font-bold leading-tight text-white md:text-5xl lg:text-[3.5rem]">
              We are the creative directors, technologists, and growth architects taking brands into their next era.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Born in Brussels, delivering worldwide. Imaginta fuses cinematic storytelling, design-led engineering, and growth
              orchestration so every release feels inevitable. We embed with visionary teams, simplify complexity, and keep momentum
              compounding long after launch day.
            </p>
          </motion.div>

          <div className="grid gap-4 text-sm text-white/70 lg:grid-cols-2">
            {SIGNATURE_PILLARS.map((pillar) => (
              <motion.div
                key={pillar}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Pillar</span>
                <p className="mt-2 text-white/80">{pillar}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
              <Link href="/services" className="flex items-center gap-2">
                Explore our capabilities
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
        </div>

        <motion.div
          className="relative rounded-[36px] border border-white/10 bg-white/[0.05] p-10 text-white backdrop-blur-2xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.16),transparent_65%)]" />
          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Why founders pick Imaginta</p>
              <p className="text-lg leading-relaxed text-white/75">
                One dedicated collective that can direct the creative vision, build the product, wire the integrations, and orchestrate
                the growth plan—all while translating every move into plain language.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {CORE_METRICS.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/12 bg-white/10 p-5">
                  <p className="text-2xl font-heading font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-sm text-white/70">
              "Imaginta directed our brand relaunch like a film production—chaptered storytelling, flawless builds, and growth that kept
              accelerating months after the premiere."
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/45">Chief Experience Officer · Global SaaS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

