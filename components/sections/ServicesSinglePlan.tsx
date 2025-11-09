"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const SNAPSHOT = [
  { label: "Timeline", value: "12 months" },
  { label: "Budget", value: "€1,999 / year" },
  { label: "Kickoff", value: "Within 10 days" },
];

const INCLUDED = [
  {
    title: "Strategy & Direction",
    items: [
      "Quarterly roadmap & KPI targets",
      "Leadership advisory + budget reviews",
      "Experiment tracking & reporting",
    ],
  },
  {
    title: "Design & Product",
    items: [
      "Brand systems, UI kits, and motion",
      "UX flows, prototypes, and testing",
      "Marketing sites and launch assets",
    ],
  },
  {
    title: "Engineering & Growth",
    items: [
      "Next.js builds, integrations, QA",
      "SEO, paid, lifecycle, analytics",
      "Security, monitoring, enablement",
    ],
  },
];

const GUARANTEES = [
  {
    heading: "One shared backlog",
    detail: "Every request lives in one transparent board with owner, status, and due date.",
  },
  {
    heading: "Monthly launch rhythm",
    detail: "We ship meaningful drops every month and review metrics together.",
  },
  {
    heading: "Warm partner support",
    detail: "Slack channel, office hours, and enablement sessions keep your team confident.",
  },
];

export default function ServicesSinglePlan() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="plan" className="relative overflow-hidden section-surface py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_16%_18%,rgba(245,168,107,0.35),transparent_58%),radial-gradient(circle_at_82%_12%,rgba(125,211,252,0.24),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 blur-[200px] opacity-60 [background-image:radial-gradient(circle_at_0%_0%,rgba(245,168,107,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(125,211,252,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
            Imaginta one plan
          </span>
          <h2 className="mt-6 text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[3rem]">
            One annual partnership that feels like an in-house launch room.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            Strategy, brand, product, engineering, and growth move as one embedded crew. The plan stays warm, predictable, and accountable—no vendor juggling required.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            className="surface-panel--lifted flex h-full flex-col gap-8 rounded-[36px] p-8 text-sm text-white/75"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">Yearly investment</p>
                <p className="text-4xl font-heading font-semibold text-white">€1,999</p>
              </div>
              <Button asChild variant="gradient" size="lg" className="rounded-full px-7 py-4 text-base">
                <Link href="/contact" className="flex items-center gap-2">
                  Reserve a start date
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {SNAPSHOT.map((item) => (
                <div key={item.label} className="surface-panel rounded-3xl px-4 py-4 text-center text-xs uppercase tracking-[0.32em] text-white/60">
                  <span className="block text-lg font-heading font-semibold text-white">{item.value}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {INCLUDED.map((bucket) => (
                <div key={bucket.title} className="surface-panel rounded-3xl px-6 py-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/60">{bucket.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {bucket.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-[6px] inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="surface-panel--subtle rounded-3xl px-6 py-6 text-sm text-white/70">
              “Imaginta operates like our internal digital department—same urgency, same care. Senior thinkers, fast delivery, and documentation that keeps everyone aligned.”
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/45">COO · D2C Retail Group</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {GUARANTEES.map((item, index) => (
              <div key={item.heading} className="surface-panel rounded-3xl px-6 py-6 text-sm text-white/75">
                <h4 className="text-lg font-heading font-semibold text-white">{item.heading}</h4>
                <p className="mt-2 text-white/70">{item.detail}</p>
              </div>
            ))}

            <div className="surface-panel rounded-3xl px-6 py-6 text-sm text-white/70">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">After the first year</p>
              <p className="mt-3">
                Most teams renew or expand. We review outcomes, budget, and ambition lines before confirming the next cycle. Every asset, insight, and playbook remains yours either way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
