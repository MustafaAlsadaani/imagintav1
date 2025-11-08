"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import WarmSpotlight from "@/components/ui/WarmSpotlight";
import GradientOrb from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import ServiceInquiryForm from "@/components/ui/ServiceInquiryForm";

const SNAPSHOT = [
  { label: "0-3 days", detail: "Kickoff, access, and priorities" },
  { label: "Day 10", detail: "Roadmap + backlog locked" },
  { label: "Week 3", detail: "First launch live" },
  { label: "Each month", detail: "New drops + growth review" },
];

const PILLARS = [
  "Strategy in plain language",
  "Design + build in the same sprint",
  "Growth, analytics, and care included",
];

export default function ServicesHero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background-secondary/90 to-background py-28">
      <GradientOrb color="electric" size="lg" className="left-[-15%] top-[18%] opacity-60" />
      <GradientOrb color="cyber" size="md" className="right-[-12%] bottom-[15%] opacity-55" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          className="space-y-8"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85">
            One partnership plan
          </span>
          <div className="space-y-5">
            <h1 className="text-balance text-4xl font-heading font-bold text-white md:text-5xl lg:text-6xl">
              All the momentum of an in-house digital team without the overhead.
            </h1>
            <p className="text-lg leading-relaxed text-white/70">
              Imaginta plugs into your company as a warm extension of product, brand, and growth. One yearly plan covers strategy,
              design, engineering, optimisation, and care—delivered in predictable sprints.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-white/75">
            {PILLARS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-400/25 text-orange-200">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <ServiceInquiryForm
              trigger={
                <Button variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                  Book a strategy call
                </Button>
              }
            />
            <Button asChild variant="glass" size="lg" className="rounded-full px-6 py-4 text-base text-white/80">
              <Link href="#plan">See everything included</Link>
            </Button>
          </div>
        </motion.div>

        <WarmSpotlight className="h-full" intensity={0.72}>
          <motion.div
            className="relative h-full overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.06] p-10 text-sm text-white/75 backdrop-blur-2xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 34 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">How the first month unfolds</p>
                <p className="mt-2 text-sm text-white/65">
                  A clear, warm onboarding means everyone knows what happens next.
                </p>
              </div>
              <div className="space-y-4">
                {SNAPSHOT.map((step, index) => (
                  <div key={step.label} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[13px] font-semibold text-white/75">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{step.label}</p>
                      <p className="text-white/60">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-[13px] text-white/60">
                “Within three weeks Imaginta delivered our new launch assets, automated the marketing flows, and coached our team.
                Everything felt calm, measured, and on track.”
              </div>
            </div>
          </motion.div>
        </WarmSpotlight>
      </div>
    </section>
  );
}

