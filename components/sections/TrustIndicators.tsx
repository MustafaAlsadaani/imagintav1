"use client";

import { motion, useReducedMotion } from "framer-motion";
import MagneticContainer from "@/components/ui/MagneticContainer";
import DecorativeLine from "@/components/ui/DecorativeLine";

const PRIME_METRIC = {
  value: "312 hours",
  label: "Time handed back to teams",
  description: "Average hours saved per client when we run partner approvals, integration testing, and rollout comms.",
  delta: "+27% vs last year",
};

const MOMENTUM_METRICS = [
  {
    value: "21 days",
    label: "Average rollout",
    description: "From green light to live partner experience across web, CRM, and analytics.",
  },
  {
    value: "+40%",
    label: "Median sales lift",
    description: "E-commerce and lead-gen clients reporting growth after refresh and partner alignment.",
  },
  {
    value: "24 hrs",
    label: "Escalation turnaround",
    description: "Vendor replies handled inside one business day so blockers never linger.",
  },
  {
    value: "98%",
    label: "Client satisfaction",
    description: "Post-launch survey score from founders, operations leads, and marketing managers.",
  },
];

const STORY_CARDS = [
  {
    title: "Sales backed by data",
    metric: "+€1.2M pipeline",
    detail: "Dashboards join sales, marketing, and partner signals so leaders see what campaign moved the needle.",
  },
  {
    title: "Security built-in",
    metric: "0 audit gaps",
    detail: "Vendor paperwork, access reviews, and data-flow diagrams handled for regulated industries.",
  },
  {
    title: "Teams trained fast",
    metric: "3.5h saved weekly",
    detail: "Playbooks, walkthrough videos, and office hours keep staff confident without chasing answers.",
  },
];

const IMPACT_POINTS = [
  {
    label: "Retention",
    value: "94% renew",
    copy: "Most clients keep us on retainer after the first project because the momentum continues.",
  },
  {
    label: "Support",
    value: "One Slack channel",
    copy: "All partner requests funnel through a single space with shared history and status updates.",
  },
  {
    label: "Confidence",
    value: "Plain-word dashboards",
    copy: "Weekly pulse reports translated for owners and managers—no jargon, just next steps.",
  },
];

export default function TrustIndicators() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.15),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,_transparent,_black_10%,_black_90%,_transparent)]">
        <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />
      </div>

      <div className="container-custom relative z-10 space-y-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">Proof of Performance</p>
          <h3 className="mt-4 text-4xl font-heading font-semibold text-foreground sm:text-5xl">Numbers we&apos;re proud of</h3>
          <div className="mt-6 flex justify-center">
            <DecorativeLine width="md" gradient="aurora" align="center" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base text-foreground-secondary sm:text-lg">
            We measure every rollout—from partner approvals to customer training—so founders see progress in plain words
            and finance teams see the savings on paper.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MagneticContainer intensity={12} className="rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
            <motion.div
              className="relative h-full overflow-hidden rounded-[40px] p-10 sm:p-12"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/15 to-cyan-400/15 blur-3xl"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-100/90">
                    Launch impact
                  </span>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-foreground-secondary">{PRIME_METRIC.label}</p>
                    <h4 className="text-5xl font-heading font-semibold text-white sm:text-6xl">{PRIME_METRIC.value}</h4>
                    <p className="max-w-md text-base text-white/80 sm:text-lg">{PRIME_METRIC.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2 font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    Momentum holding strong
                  </span>
                  <span className="rounded-full border border-emerald-200/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
                    {PRIME_METRIC.delta}
                  </span>
                </div>
              </div>
            </motion.div>
          </MagneticContainer>

          <div className="grid gap-6 sm:grid-cols-2">
            {MOMENTUM_METRICS.map((metric, index) => (
              <MagneticContainer key={metric.label} intensity={8}>
                <motion.div
                  className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-orange-400/15 via-transparent to-cyan-400/15 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{metric.label}</span>
                    <p className="text-3xl font-heading font-semibold text-white">{metric.value}</p>
                    <p className="text-sm text-foreground-secondary">{metric.description}</p>
                  </div>
                </motion.div>
              </MagneticContainer>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {STORY_CARDS.map((story, index) => (
              <MagneticContainer key={story.title} intensity={10}>
                <motion.article
                  className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-8"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.07, ease: "easeOut" }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-aurora opacity-75" />
                  <div className="relative z-10 space-y-4">
                    <h4 className="text-lg font-semibold text-white">{story.title}</h4>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200/80">{story.metric}</p>
                    <p className="text-sm leading-relaxed text-foreground-secondary">{story.detail}</p>
                  </div>
                </motion.article>
              </MagneticContainer>
            ))}
          </div>

          <div className="space-y-4">
            {IMPACT_POINTS.map((point, index) => (
              <MagneticContainer key={point.label} intensity={6}>
                <motion.div
                  className="flex h-full flex-col justify-between gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:flex-row sm:items-center sm:gap-6"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 26 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-foreground-muted">{point.label}</p>
                    <p className="mt-2 text-xl font-heading font-semibold text-white">{point.value}</p>
                  </div>
                  <p className="text-sm text-foreground-secondary sm:max-w-[16rem]">{point.copy}</p>
                </motion.div>
              </MagneticContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
