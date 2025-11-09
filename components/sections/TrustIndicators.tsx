"use client";

import { motion, useReducedMotion } from "framer-motion";
import MagneticContainer from "@/components/ui/MagneticContainer";
import DecorativeLine from "@/components/ui/DecorativeLine";

const PRIME_METRIC = {
  value: "120 hours",
  label: "Average time saved",
  description: "Our clients save around 120 work hours because we manage websites, marketing, and updates for them.",
  delta: "More time for their teams",
};

const MOMENTUM_METRICS = [
  {
    value: "21 days",
    label: "Average launch",
    description: "Most projects go from kick-off to live website in just three weeks.",
  },
  {
    value: "40%",
    label: "Typical sales boost",
    description: "Businesses report up to 40% more sales after we improve their online presence.",
  },
  {
    value: "24 hrs",
    label: "Help response time",
    description: "We answer questions and fix issues within one business day.",
  },
  {
    value: "98%",
    label: "Happy clients",
    description: "Almost all clients stay with us because the results are easy to see.",
  },
];

const STORY_CARDS = [
  {
    title: "Online shop doubled",
    metric: "2× more orders",
    detail: "A local store moved online with our help and now sells twice as much each month.",
  },
  {
    title: "Security made simple",
    metric: "0 data leaks",
    detail: "We set up strong data protection so the team could serve customers without worry.",
  },
  {
    title: "Team ready to grow",
    metric: "3h saved weekly",
    detail: "Easy training videos saved the owner hours each week and kept the team on the same page.",
  },
];

const IMPACT_POINTS = [
  {
    label: "Retention",
    value: "94% renew",
    copy: "Most clients return for new projects because results keep improving.",
  },
  {
    label: "Support",
    value: "One contact point",
    copy: "You get one friendly contact for updates, changes, and new ideas.",
  },
  {
    label: "Confidence",
    value: "Plain reports",
    copy: "We send short, simple reports that explain results and the next steps.",
  },
];

export default function TrustIndicators() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-surface relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_18%_-8%,rgba(0,255,255,0.16),transparent_55%),radial-gradient(circle_at_82%_108%,rgba(176,38,255,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,_transparent,_black_12%,_black_88%,_transparent)]">
        <div className="mx-auto h-full max-w-6xl bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_68%)]" />
      </div>

      <div className="container-custom relative z-10 space-y-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyber-text-secondary">Real results</p>
          <h3 className="mt-4 text-4xl font-heading font-semibold text-white sm:text-5xl">What business owners gain with Imaginta</h3>
          <div className="mt-6 flex justify-center">
            <DecorativeLine width="md" gradient="aurora" align="center" />
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-base text-cyber-text-secondary sm:text-lg">
            Every project is tracked in clear numbers. You always know how much time you save, how many new customers arrive,
            and what we are improving next.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MagneticContainer intensity={10} className="rounded-[40px] border border-cyber-neutral/50 bg-cyber-bg/75">
            <motion.div
              className="relative h-full overflow-hidden rounded-[40px] p-10 sm:p-12"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(0,255,255,0.16),transparent_65%),radial-gradient(circle_at_80%_75%,rgba(176,38,255,0.12),transparent_70%)]"
                  animate={{ opacity: [0.12, 0.22, 0.12] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/60 bg-cyber-bg/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-cyber-text-secondary">
                    Everyday wins
                  </span>
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyber-text-secondary">{PRIME_METRIC.label}</p>
                    <h4 className="text-5xl font-heading font-semibold text-white sm:text-6xl">{PRIME_METRIC.value}</h4>
                    <p className="max-w-md text-base text-cyber-text-secondary sm:text-lg">{PRIME_METRIC.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-cyber-neutral/60 bg-cyber-bg/70 px-5 py-4 text-sm text-cyber-text">
                  <span className="inline-flex items-center gap-2 font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                    Long-term support
                  </span>
                  <span className="rounded-full border border-emerald-300/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
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
                  className="group relative h-full overflow-hidden rounded-3xl border border-cyber-neutral/50 bg-cyber-bg/70 p-6"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-cyber-primary/15 via-transparent to-cyber-accent/15 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                  <div className="relative z-10 space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyber-text-secondary">{metric.label}</span>
                    <p className="text-3xl font-heading font-semibold text-white">{metric.value}</p>
                    <p className="text-sm text-cyber-text-secondary">{metric.description}</p>
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
                  className="relative h-full overflow-hidden rounded-3xl border border-cyber-neutral/50 bg-cyber-bg/70 p-6 sm:p-8"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.07, ease: "easeOut" }}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-aurora opacity-75" />
                  <div className="relative z-10 space-y-4">
                    <h4 className="text-lg font-semibold text-white">{story.title}</h4>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyber-text-secondary">{story.metric}</p>
                    <p className="text-sm leading-relaxed text-cyber-text-secondary">{story.detail}</p>
                  </div>
                </motion.article>
              </MagneticContainer>
            ))}
          </div>

          <div className="space-y-4">
            {IMPACT_POINTS.map((point, index) => (
              <MagneticContainer key={point.label} intensity={6}>
                <motion.div
                  className="flex h-full flex-col justify-between gap-3 rounded-3xl border border-cyber-neutral/50 bg-cyber-bg/70 p-6 sm:flex-row sm:items-center sm:gap-6"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 26 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">{point.label}</p>
                    <p className="mt-2 text-xl font-heading font-semibold text-white">{point.value}</p>
                  </div>
                  <p className="text-sm text-cyber-text-secondary sm:max-w-[16rem]">{point.copy}</p>
                </motion.div>
              </MagneticContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
