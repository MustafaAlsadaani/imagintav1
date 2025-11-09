"use client";

import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    phase: "Kickoff",
    highlight: "Days 0-10",
    summary: "Interviews, access, and success metrics aligned. Launch map and backlog delivered to stakeholders.",
    touchpoints: ["Founder alignment call", "Tooling + telemetry audit", "Roadmap + backlog delivery"],
  },
  {
    phase: "Build & Launch",
    highlight: "Weeks 2-4",
    summary: "Design, content, and code sprint together. First releases go live with enablement docs and training.",
    touchpoints: ["Design + engineering sprints", "Campaign + asset production", "Launch playbooks + training"],
  },
  {
    phase: "Grow & Optimise",
    highlight: "Monthly",
    summary: "Metrics reviewed, experiments shipped, and backlog refreshed so the curve keeps climbing.",
    touchpoints: ["Growth + analytics sync", "Backlog refresh", "Enablement + support"],
  },
  {
    phase: "Review & Renew",
    highlight: "Quarterly",
    summary: "Leadership roundtables, budget impact review, and planning for the next momentum wave.",
    touchpoints: ["Leader roundtable", "Budget + impact review", "Next-quarter roadmap"],
  },
];

const SUPPORT_LAYERS = [
  {
    title: "Shared mission room",
    detail: "Notion, Linear, and playback archives centralise every asset, update, and decision.",
  },
  {
    title: "Warm communication",
    detail: "Dedicated Slack channel with <48h responses, weekly office hours, and monthly workshops.",
  },
  {
    title: "Documentation first",
    detail: "Playbooks, dashboards, and replays ensure your team stays confident as you scale.",
  },
];

export default function ServicesProcess() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_12%_12%,rgba(245,168,107,0.28),transparent_55%),radial-gradient(circle_at_84%_14%,rgba(125,211,252,0.22),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 blur-[200px] opacity-55 [background-image:radial-gradient(circle_at_0%_0%,rgba(245,168,107,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(125,211,252,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
            Journey rhythm
          </span>
          <h2 className="mt-6 text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[3rem]">
            A calm, warm cadence that keeps every launch moving forward.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 sm:text-lg">
            Every engagement follows a predictable rhythm—so you always know what comes next, who is owning it, and how success is measured.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            className="surface-panel--lifted rounded-[34px] p-8"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.phase}
                  className="surface-panel rounded-3xl px-6 py-6 text-left"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
                    <span>{step.highlight}</span>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-heading font-semibold text-white">{step.phase}</h3>
                  <p className="mt-2 text-white/70">{step.summary}</p>
                  <ul className="mt-4 space-y-2 text-white/65">
                    {step.touchpoints.map((touchpoint) => (
                      <li key={touchpoint} className="flex items-start gap-2">
                        <span className="mt-[6px] inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                        <span>{touchpoint}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {SUPPORT_LAYERS.map((layer, index) => (
              <motion.div
                key={layer.title}
                className="surface-panel rounded-3xl px-6 py-6 text-sm text-white/75"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <h4 className="text-lg font-heading font-semibold text-white">{layer.title}</h4>
                <p className="mt-2 text-white/70">{layer.detail}</p>
              </motion.div>
            ))}

            <motion.div
              className="surface-panel rounded-3xl px-6 py-6 text-sm text-white/75"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.24, ease: "easeOut" }}
            >
              <p>
                “The cadence stays calm and predictable. Leadership gets clarity, the team sees momentum, and launches feel cinematic instead of chaotic.”
              </p>
              <p className="mt-4 text-[12px] font-semibold uppercase tracking-[0.28em] text-white/45">Marketing Director · SaaS</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

