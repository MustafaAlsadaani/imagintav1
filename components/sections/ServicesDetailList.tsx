"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const CAPABILITIES = [
  {
    title: "Strategy Pods",
    summary: "Quarterly plans, budgeting, and leadership support keep every initiative pointed at measurable growth.",
    items: ["Roadmaps & OKRs", "Market and competitor scans", "Stakeholder alignment", "Fractional leadership"],
  },
  {
    title: "Brand & Creative",
    summary: "Visual systems, campaign assets, and motion delivered with templates your team can reuse instantly.",
    items: ["Identity & guidelines", "Product UI libraries", "Video & motion", "Sales collateral"],
  },
  {
    title: "Engineering",
    summary: "Design-to-code delivery across web apps, marketing sites, and integrations—secure, performant, accessible.",
    items: ["Next.js builds", "Automation & integrations", "CMS setups", "Performance + QA"],
  },
  {
    title: "Growth",
    summary: "SEO, paid, lifecycle, and analytics under one plan so you always know which channels are working.",
    items: ["Search & content", "Paid media orchestration", "Lifecycle automation", "Conversion optimisation"],
  },
  {
    title: "Security & Care",
    summary: "Resilience woven into every release—monitoring, compliance, and enablement keep momentum safe.",
    items: ["Security reviews", "Monitoring & alerting", "Disaster recovery", "Team training"],
  },
];

const SERVICE_EXTRAS = [
  {
    label: "Monthly focus",
    detail: "Priorities stack in one shared backlog. We ship every month and review metrics together.",
  },
  {
    label: "Quarterly reset",
    detail: "Roadmaps adjust with data, not guesswork. Leadership gets a clear view of budget and progress.",
  },
  {
    label: "Always-on support",
    detail: "Slack channel, office hours, and docs keep teams informed without chasing status updates.",
  },
];

export default function ServicesDetailList() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-alt py-24 md:py-32 lg:py-48">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_18%_20%,rgba(236,72,153,0.35),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(6,182,212,0.32),transparent_60%),radial-gradient(circle_at_52%_76%,rgba(99,102,241,0.28),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-12">
        <motion.div
          className="space-y-6 text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-200/85">
            Everything in one relationship
          </span>
          <h2 className="text-balance text-4xl font-heading font-bold text-white sm:text-5xl lg:text-[3.2rem]">
            A single partnership that unlocks every Imaginta capability
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-white/75">
            Strategy pods, design, engineering, growth, and security operate as one unit. No add-ons. No hand-offs. Just a cinematic launch
            crew orchestrating every move with precision.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((capability, index) => (
            <WarmSpotlight key={capability.title} className="h-full">
              <motion.article
                className="flex h-full flex-col gap-6 rounded-3xl border border-cyber-neutral/35 bg-cyber-bg/80 p-8 text-sm text-cyber-text transition-all duration-300 hover:border-cyber-primary/35"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyber-text-secondary">{capability.title}</p>
                  <p className="text-cyber-text-secondary">{capability.summary}</p>
                </div>
                <ul className="space-y-2 text-cyber-text-secondary">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-2xl border border-cyber-neutral/28 bg-cyber-bg/74 px-4 py-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyber-primary/35 bg-cyber-bg/80 text-xs text-cyber-primary">
                        <FaArrowRight className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>

        <motion.div
          className="mt-20 grid gap-6 lg:grid-cols-3"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {SERVICE_EXTRAS.map((extra, index) => (
            <WarmSpotlight key={extra.label} className="h-full">
              <motion.div
                className="h-full rounded-3xl border border-cyber-neutral/35 bg-cyber-bg/78 p-6 text-sm text-cyber-text transition-all duration-300 hover:border-cyber-primary/35"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyber-text-secondary">{extra.label}</p>
                <p className="mt-3 text-cyber-text-secondary">{extra.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

