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
    <section className="relative overflow-hidden bg-background py-28">
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(6,182,212,0.18),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-col items-center gap-3 text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">What the plan includes</span>
          <h2 className="text-balance text-4xl font-heading font-bold text-white md:text-5xl">
            Every capability, one relationship
          </h2>
          <p className="mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            We don’t sell add-ons or upsells. You get the full Imaginta squad—strategists, designers, engineers, growth leads, and
            security specialists—inside a single plan at €1,999 per year.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {CAPABILITIES.map((capability, index) => (
            <WarmSpotlight key={capability.title} className="h-full" intensity={0.68}>
              <motion.article
                className="flex h-full flex-col justify-between gap-5 rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-sm text-white/75 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <div>
                  <h3 className="text-lg font-heading font-semibold text-white">{capability.title}</h3>
                  <p className="mt-2 text-white/65">{capability.summary}</p>
                </div>
                <ul className="grid gap-2 text-white/60">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-3 py-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs text-orange-200/80">
                        <FaArrowRight className="h-3 w-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </WarmSpotlight>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICE_EXTRAS.map((extra, index) => (
            <WarmSpotlight key={extra.label} className="h-full" intensity={0.62}>
              <motion.div
                className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-sm text-white/70 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{extra.label}</p>
                <p className="mt-3 text-white/65">{extra.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}

