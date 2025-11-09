"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const SIGNATURE_STATS = [
  { label: "Projects delivered", value: "108" },
  { label: "Experts on the team", value: "15" },
  { label: "Average launch time", value: "21 days" },
];

export default function AboutSpotlight() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-soft py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,255,0.22),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(176,38,255,0.2),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 159.5 159.5 0\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'1\'/%3E%3C/svg%3E')] opacity-40 mix-blend-screen" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-cyber-text">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-10"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <span className="section-badge">About Imaginta</span>
            <h1 className="text-balance text-4xl font-heading font-bold leading-tight md:text-5xl lg:text-[3.3rem]">
              We help everyday businesses turn ideas into clear, modern digital experiences.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-cyber-text-secondary">
              Imaginta started in Belgium to support small and medium businesses with design, development, marketing, and security—all in
              one place. We keep conversations friendly, explain every step, and focus on results you can measure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                <Link href="/services" className="flex items-center gap-2">
                  View our services
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-full px-7 py-4 text-base text-cyber-text-secondary hover:text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Talk to us
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 rounded-[36px] border border-cyber-neutral/60 bg-cyber-bg/75 p-10 text-sm text-cyber-text backdrop-blur-2xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">Why business owners choose us</p>
              <p className="text-lg leading-relaxed text-white">
                One studio for websites, branding, marketing, and cyber security. Senior specialists guide every project and keep you
                informed in simple words.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {SIGNATURE_STATS.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-cyber-neutral/60 bg-cyber-bg/70 p-5 text-center">
                  <p className="text-2xl font-heading font-semibold text-white drop-shadow-[0_0_18px_rgba(0,255,255,0.32)]">{stat.value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.32em] text-cyber-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-cyber-neutral/60 bg-cyber-bg/70 p-5 text-sm text-cyber-text-secondary">
              “Imaginta listened to what we needed, explained the plan in plain language, and delivered exactly when they said they would.”
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
