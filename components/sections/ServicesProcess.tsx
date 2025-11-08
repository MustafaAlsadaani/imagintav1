"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";
import DecorativeLine from "@/components/ui/DecorativeLine";

const STEPS = [
  {
    phase: "Kickoff",
    highlight: "Days 0-10",
    summary: "Interviews, access, and success metrics agreed. Roadmap and backlog finalised.",
    touchpoints: ["Founder alignment call", "Tooling + data audit", "Roadmap + backlog delivery"],
  },
  {
    phase: "Build & Launch",
    highlight: "Weeks 2-4",
    summary: "Design, content, and code move together. First launches go live with enablement docs.",
    touchpoints: ["Design + engineering sprints", "Campaign + asset production", "Launch playbooks + training"],
  },
  {
    phase: "Grow & Optimise",
    highlight: "Monthly",
    summary: "Each month we review metrics, ship improvements, and prepare the next release wave.",
    touchpoints: ["Growth + analytics sync", "Backlog refresh", "Enablement + support"],
  },
  {
    phase: "Review & Renew",
    highlight: "Quarterly",
    summary: "Strategy sessions with leadership, performance deep dives, and planning for the next cycle.",
    touchpoints: ["Leader roundtable", "Budget + impact review", "Next-quarter roadmap"],
  },
];

const SUPPORT_LAYERS = [
  {
    title: "Shared workspace",
    detail: "Every asset, plan, and status update lives in one Notion + Linear workspace we maintain for you.",
  },
  {
    title: "Open communication",
    detail: "Slack channel with 48h response guarantee, plus weekly office hours and monthly workshops.",
  },
  {
    title: "Documentation first",
    detail: "Playbooks, dashboards, and training replays ensure your team stays confident as you scale.",
  },
];

export default function ServicesProcess() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-background py-28"
      data-stickman-section="services-process"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top,_rgba(251,191,36,0.2),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(6,182,212,0.2),_transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-white md:text-5xl lg:text-6xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            The journey we lead together
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            Every engagement follows a calm, collaborative rhythm. You always know what comes next—and why it matters.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <WarmSpotlight className="h-full" intensity={0.66}>
            <motion.div
              className="relative h-full rounded-[34px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div className="absolute inset-y-8 left-10 hidden w-px bg-gradient-to-b from-orange-400 via-pink-500 to-cyan-400 lg:block" />
              <div className="space-y-6 lg:pl-16">
                {STEPS.map((step, index) => (
                  <motion.div
                    key={step.phase}
                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-white/75"
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                      <span>{step.highlight}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-heading font-semibold text-white">{step.phase}</h3>
                    <p className="mt-2 text-white/65">{step.summary}</p>
                    <ul className="mt-4 space-y-2 text-white/60">
                      {step.touchpoints.map((touchpoint) => (
                        <li key={touchpoint} className="flex items-start gap-2">
                          <span className="mt-[6px] inline-flex h-1.5 w-1.5 rounded-full bg-orange-200/80" />
                          <span>{touchpoint}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </WarmSpotlight>

          <div className="space-y-6">
            {SUPPORT_LAYERS.map((layer, index) => (
              <WarmSpotlight key={layer.title} className="h-full" intensity={0.62}>
                <motion.div
                  className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-sm text-white/75 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <h4 className="text-lg font-heading font-semibold text-white">{layer.title}</h4>
                  <p className="mt-2 text-white/65">{layer.detail}</p>
                </motion.div>
              </WarmSpotlight>
            ))}

            <WarmSpotlight className="h-full" intensity={0.6}>
              <motion.div
                className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-sm text-white/65 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.24, ease: "easeOut" }}
              >
                <p>
                  “The cadence is calm and predictable. We get strategy guidance, shipped work, and documentation—without needing to
                  micromanage or chase updates.”
                </p>
                <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/45">Marketing Director · SaaS</p>
              </motion.div>
            </WarmSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

