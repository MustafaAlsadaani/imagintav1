"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Imaginta rebuilt our storefront, automated order updates, and trained the staff. Revenue jumped without the usual chaos.",
    name: "Nadia Vermeulen",
    role: "Owner · Brussels Local Shop",
    metric: "Sales up 40%",
    industry: "Retail",
  },
  {
    id: 2,
    quote:
      "The dashboards speak plain language. Every Monday we know exactly which campaign earns and which one to tweak.",
    name: "Jonas De Wilde",
    role: "Founder · De Wilde Coaching",
    metric: "35% more leads",
    industry: "Professional Services",
  },
  {
    id: 3,
    quote:
      "Launch playbooks, partner approvals, and training recordings—all in one hub. The marketing team finally breathes.",
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
    detail: "Clients that extend after year one because momentum compounds.",
  },
  {
    label: "Launch velocity",
    value: "21 days",
    detail: "Average time from kickoff to the first live experience.",
  },
  {
    label: "Response",
    value: "< 24 hrs",
    detail: "Partner escalations closed before they slow the team.",
  },
];

const SHIFT_SIGNALS = [
  {
    title: "Approvals on fast-forward",
    detail: "Vendor green lights and security reviews handled by Imaginta—teams stay focused on core work.",
  },
  {
    title: "Clarity in dashboards",
    detail: "Weekly pulse reports translate data into clear next moves for founders and marketing leads.",
  },
  {
    title: "Enablement that sticks",
    detail: "Playbooks, recordings, and office hours mean new tools become daily habits, not another tab.",
  },
];

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [featured, ...supporting] = TESTIMONIALS;

  return (
    <section className="relative overflow-hidden py-32" data-stickman-section="testimonials">
      <GradientOrb color="electric" size="lg" className="left-[-18%] top-[14%] opacity-60" />
      <GradientOrb color="accent" size="md" className="bottom-[-20%] right-[-14%] opacity-45" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_top,_rgba(236,72,153,0.24),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(6,182,212,0.18),_transparent_55%)]" />
      {!prefersReducedMotion && (
        <motion.div
          className="aurora-veil absolute inset-0"
          animate={{ backgroundPosition: ["0% 60%", "100% 40%", "0% 60%"], opacity: [0.3, 0.42, 0.3] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
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
            Client <span className="text-gradient">success</span> in plain words
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="sunset" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          >
            Founders and marketing leads told us what changed after launch—faster approvals, clearer dashboards, happier customers. Here’s what keeps them renewing.
          </motion.p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {STAT_LENSES.map((stat, index) => (
            <WarmSpotlight key={stat.label} className="h-full" intensity={0.62}>
              <motion.div
                className="card-interactive card-shine h-full rounded-3xl border border-white/12 bg-white/[0.04] p-6 text-left text-sm text-white/75 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.05, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">{stat.label}</p>
                <p className="mt-2 text-2xl font-heading font-semibold text-white">{stat.value}</p>
                <p className="mt-3 text-white/60">{stat.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <WarmSpotlight className="h-full" intensity={0.68}>
            <motion.article
              className="premium-card relative flex h-full flex-col gap-8 rounded-[36px] border border-white/12 bg-white/[0.05] p-10 text-left text-sm text-white/75 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">Signal from the field</p>
                <h3 className="mt-3 text-2xl font-heading font-semibold text-white sm:text-3xl">
                  “Imaginta feels like a hidden department—launching, reporting, and tuning everything without needing direction.”
                </h3>
                <div className="mt-5 flex flex-col gap-3 text-[13px] text-white/60 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">Sofia Michiels</p>
                    <p className="text-white/60">COO · Northern Lane Logistics</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/65">
                    Renewed 3x
                  </span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {SHIFT_SIGNALS.map((signal) => (
                  <div key={signal.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/70">{signal.title}</p>
                    <p className="mt-2 text-white/60">{signal.detail}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          </WarmSpotlight>

          <div className="space-y-6">
            {supporting.map((story, index) => (
              <WarmSpotlight key={story.id} className="h-full" intensity={0.62}>
                <motion.article
                  className="card-interactive card-shine relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left text-sm text-white/80 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <FaQuoteLeft className="text-3xl text-orange-200/25" aria-hidden="true" />
                  <p className="leading-relaxed text-white/90">“{story.quote}”</p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div>
                      <p className="text-sm font-semibold text-white">{story.name}</p>
                      <p className="text-[12px] text-white/60">{story.role}</p>
                    </div>
                    <div className="text-right text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-200/75">
                      <p>{story.industry}</p>
                      <p className="mt-1 text-white/60 normal-case tracking-normal">{story.metric}</p>
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
