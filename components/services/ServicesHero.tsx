"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiTrendingUp } from "react-icons/fi";
import { FaFlagCheckered } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ServiceInquiryForm from "@/components/ui/ServiceInquiryForm";

const HERO_STATS = [
  { label: "Average launch time", value: "21 days", detail: "From kickoff to first live update" },
  { label: "Clients who return", value: "94%", detail: "Businesses that keep working with us each year" },
  { label: "Projects delivered", value: "26+", detail: "Across Belgium and worldwide" },
];

export default function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-cyber-neutral/25 bg-cyber-bg/95 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_-20%,rgba(0,255,255,0.16),transparent_60%),radial-gradient(circle_at_86%_-10%,rgba(176,38,255,0.15),transparent_60%)] opacity-75" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,20,0.75)0%,rgba(4,8,20,0.9)50%,rgba(4,8,20,1)100%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-col items-start gap-8 text-left lg:flex-row lg:items-center lg:justify-between"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-primary/35 bg-cyber-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-cyber-primary">
              One partner for every service
            </span>
            <div className="space-y-5 text-left">
              <h1 className="text-balance text-4xl font-heading font-bold text-white drop-shadow-[0_0_24px_rgba(0,255,255,0.28)] md:text-5xl lg:text-6xl">
                Our services make digital growth easy to understand and manage.
              </h1>
              <p className="text-lg leading-relaxed text-cyber-text-secondary">
                Imaginta combines web development, marketing, graphic design, business development, and cyber security in one friendly
                team. We focus on clear language, fast delivery, and results you can see.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <ServiceInquiryForm
                trigger={
                  <Button variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                    Request a call
                  </Button>
                }
              />
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full border border-cyber-neutral/40 bg-transparent px-6 py-4 text-base text-cyber-text-secondary hover:border-cyber-primary/45 hover:text-white"
              >
                <Link href="#services-grid" className="inline-flex items-center gap-2">
                  See everything included
                  <FiArrowUpRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.ul
            className="grid w-full max-w-[420px] gap-4 rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/80 p-6 text-sm text-cyber-text"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {HERO_STATS.map((stat) => (
              <li key={stat.label} className="flex items-start justify-between gap-3 rounded-2xl border border-cyber-neutral/30 bg-cyber-bg/76 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">{stat.label}</p>
                  <p className="text-sm text-cyber-text-secondary">{stat.detail}</p>
                </div>
                <p className="text-2xl font-heading font-semibold text-white">{stat.value}</p>
              </li>
            ))}
            <div className="mt-2 rounded-2xl border border-cyber-neutral/30 bg-cyber-bg/76 px-4 py-3 text-sm text-cyber-text-secondary">
              <p className="font-semibold uppercase tracking-[0.32em]">How we operate</p>
              <ul className="mt-2 space-y-1 text-xs normal-case tracking-normal">
                <li className="flex items-center gap-2 text-cyber-text-secondary/90">
                  <FiTrendingUp className="h-3.5 w-3.5 text-cyber-primary" /> Weekly updates that explain what we completed and what is next.
                </li>
                <li className="flex items-center gap-2 text-cyber-text-secondary/90">
                  <FaFlagCheckered className="h-3.5 w-3.5 text-cyber-primary" /> Direct access to senior experts—no hand-offs or confusing jargon.
                </li>
              </ul>
            </div>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

