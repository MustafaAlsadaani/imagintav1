"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const SNAPSHOT = [
  { label: "Timeline", value: "12 months" },
  { label: "Budget", value: "€1,999 / year" },
  { label: "Kickoff", value: "Within 10 days" },
];

const INCLUDED = [
  {
    title: "Strategy & Direction",
    items: [
      "Quarterly roadmap + KPI targets",
      "Leadership advisory and budget reviews",
      "Experiment tracking and reporting",
    ],
  },
  {
    title: "Design & Product",
    items: [
      "Brand systems, UI kits, and motion",
      "UX flows, prototypes, and testing",
      "Marketing sites and campaign assets",
    ],
  },
  {
    title: "Engineering & Growth",
    items: [
      "Next.js builds, integrations, and QA",
      "SEO, paid, lifecycle, and analytics",
      "Security, monitoring, and enablement",
    ],
  },
];

const GUARANTEES = [
  {
    heading: "One shared backlog",
    detail: "Every request lives in one transparent board with status, owner, and due date.",
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
    <section id="plan" className="relative overflow-hidden bg-gradient-to-b from-background-secondary to-background py-28">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_top,_rgba(236,72,153,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-white/60">Imaginta One Plan</span>
          <h2 className="mt-4 text-balance text-4xl font-heading font-bold text-white md:text-5xl">
            One yearly partnership, zero guesswork
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            Your plan covers everything: strategy, brand, product, engineering, growth, and care. We become your embedded digital
            team—delivering warm collaboration and accountable outcomes all year long.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <WarmSpotlight className="h-full" intensity={0.7}>
            <motion.div
              className="flex h-full flex-col gap-8 rounded-[36px] border border-white/12 bg-white/[0.05] p-10 text-sm text-white/75 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Yearly investment</p>
                  <p className="text-4xl font-heading font-semibold text-white">€1,999</p>
                </div>
                <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
                  <Link href="/contact" className="flex items-center gap-2">
                    Reserve a start date
                    <FaArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {SNAPSHOT.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/12 bg-white/[0.06] p-4 text-center text-xs uppercase tracking-[0.32em] text-white/60">
                    <span className="block text-lg font-heading font-semibold text-white/90">{item.value}</span>
                    {item.label}
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {INCLUDED.map((bucket) => (
                  <div key={bucket.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-200/80">{bucket.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                      {bucket.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 text-orange-200/80">
                            <FaCheckCircle className="h-4 w-4" />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 text-sm text-white/65">
                <p>
                  “Imaginta feels like our internal digital department—same urgency, same care. We get senior thinkers, fast delivery,
                  and documentation that keeps everyone aligned.”
                </p>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/45">
                  COO · D2C Retail Group
                </p>
              </div>
            </motion.div>
          </WarmSpotlight>

          <div className="space-y-6">
            {GUARANTEES.map((item, index) => (
              <WarmSpotlight key={item.heading} className="h-full" intensity={0.66}>
                <motion.div
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-white/75 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.07, ease: "easeOut" }}
                >
                  <h4 className="text-lg font-heading font-semibold text-white">{item.heading}</h4>
                  <p className="mt-2 text-white/65">{item.detail}</p>
                </motion.div>
              </WarmSpotlight>
            ))}

            <WarmSpotlight className="h-full" intensity={0.64}>
              <motion.div
                className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-sm text-white/70 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.24, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">What happens after 12 months?</p>
                <p className="mt-3 text-white/65">
                  Most clients renew or expand their plan. We review outcomes, budget, and new ambition lines before confirming the next
                  cycle. Your documentation, assets, and deliverables remain yours either way.
                </p>
              </motion.div>
            </WarmSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
