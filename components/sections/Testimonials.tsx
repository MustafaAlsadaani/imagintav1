"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Imaginta built our online shop and showed us how to use it. We now serve twice as many customers without extra stress.",
    name: "Nadia Vermeulen",
    role: "Owner · Brussels Local Shop",
    metric: "Sales up 40%",
    industry: "Retail",
  },
  {
    id: 2,
    quote: "Weekly updates tell us which ads work. I save hours each month and know exactly where to invest.",
    name: "Jonas De Wilde",
    role: "Founder · De Wilde Coaching",
    metric: "35% more leads",
    industry: "Professional Services",
  },
  {
    id: 3,
    quote: "Our website, emails, and security are now in one place. The team finally has a clear plan to follow.",
    name: "Fatima Al-Taher",
    role: "Marketing Lead · Global Eats",
    metric: "50% repeat orders",
    industry: "Food & Beverage",
  },
];

const STAT_LENSES = [
  {
    label: "Renewal",
    value: "94%",
    detail: "Clients stay with us after the first project because results keep improving.",
  },
  {
    label: "Average launch time",
    value: "21 days",
    detail: "Most websites and campaigns go live in about three weeks.",
  },
  {
    label: "Support reply time",
    value: "< 24 hrs",
    detail: "Questions are answered and issues solved within one business day.",
  },
];

const SHIFT_SIGNALS = [
  {
    title: "Admin handled for you",
    detail: "We take care of vendor calls, approvals, and follow-ups so you can focus on serving customers.",
  },
  {
    title: "Simple reports",
    detail: "Short weekly summaries explain what worked and what to adjust next.",
  },
  {
    title: "Training that lasts",
    detail: "Playbooks and recordings help your staff use new tools with confidence.",
  },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...supporting] = TESTIMONIALS;

  return (
    <section className="section-surface relative overflow-hidden py-32" data-stickman-section="testimonials">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_18%_-12%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_82%_110%,rgba(230,0,230,0.14),transparent_62%)]" />
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,229,229,0.08),transparent_60%),radial-gradient(circle_at_78%_88%,rgba(230,0,230,0.08),transparent_62%)]"
          animate={{ opacity: [0.08, 0.14, 0.08], scale: [1, 1.02, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10 container-custom">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-white md:text-5xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What business owners say about Imaginta
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="sunset" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-premium-text-secondary sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            These business owners explain how working with Imaginta helped them sell more, save time, and understand their results.
          </motion.p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {STAT_LENSES.map((stat, index) => (
            <WarmSpotlight key={stat.label} className="h-full">
              <motion.div
                className="card-interactive h-full rounded-3xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.78)] p-6 text-left text-sm text-premium-text"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">{stat.label}</p>
                <p className="mt-2 text-2xl font-heading font-semibold text-premium-green glow-pulse">{stat.value}</p>
                <p className="mt-3 text-premium-text-secondary">{stat.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <WarmSpotlight className="h-full">
            <motion.article
              className="relative flex h-full flex-col gap-8 rounded-[36px] border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.82)] p-10 text-left text-sm text-premium-text"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">Featured story</p>
                <h3 className="mt-3 text-2xl font-heading font-semibold text-white sm:text-3xl">
                  “Imaginta feels like part of our team. They handle the website, marketing, and reports while we focus on our clients.”
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-[13px] text-premium-text-secondary sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">Sofia Michiels</p>
                    <p className="text-premium-text-secondary">COO · Northern Lane Logistics</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.75)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-premium-text-secondary">
                    Working together since 2021
                  </span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {SHIFT_SIGNALS.map((signal) => (
                  <div key={signal.title} className="rounded-2xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.74)] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">{signal.title}</p>
                    <p className="mt-2 text-premium-text-secondary">{signal.detail}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </WarmSpotlight>

          <div className="space-y-6">
            {supporting.map((story, index) => (
              <WarmSpotlight key={story.id} className="h-full">
                <motion.article
                  className="card-interactive relative flex h-full flex-col gap-6 rounded-3xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.78)] p-6 text-left text-sm text-premium-text"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <FaQuoteLeft className="text-3xl text-premium-text-secondary/40" aria-hidden="true" />
                  <p className="leading-relaxed text-white">“{story.quote}”</p>
                  <div className="flex items-center justify-between border-t border-[rgba(0,229,229,0.14)] pt-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{story.name}</p>
                      <p className="text-[12px] text-premium-text-secondary">{story.role}</p>
                    </div>
                    <div className="text-right text-[11px] font-semibold uppercase tracking-[0.28em] text-premium-text-secondary">
                      <p>{story.industry}</p>
                      <p className="mt-1 text-premium-green normal-case tracking-normal glow-pulse">{story.metric}</p>
                    </div>
                  </div>
                </motion.article>
              </WarmSpotlight>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
