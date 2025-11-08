"use client";

import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const IMPACT_STATS = [
  {
    label: "Launches directed",
    value: "108",
    caption: "Every release treated like a premiere, with measurable growth loops built in.",
  },
  {
    label: "Partner alliances",
    value: "7",
    caption: "Shopify, Google, Microsoft, HubSpot, and more—approvals and betas fast-tracked.",
  },
  {
    label: "Client satisfaction",
    value: "98%",
    caption: "Post-launch surveys from founders and marketing leaders worldwide.",
  },
  {
    label: "Response window",
    value: "< 24h",
    caption: "Escalations resolved inside one business day across timezones.",
  },
];

const PROOF_POINTS = [
  {
    headline: "Retail collective",
    metric: "+40% revenue",
    blurb: "Orchestrated rebrand, ecommerce rebuild, and growth loops that kept sales climbing quarter over quarter.",
  },
  {
    headline: "B2B SaaS",
    metric: "21-day rollout",
    blurb: "Migrated from legacy stack, launched new product marketing, and trained GTM teams in under a month.",
  },
  {
    headline: "Hospitality group",
    metric: "3.5h saved weekly",
    blurb: "Partner playbooks and enablement hub removed admin overhead while keeping quality untouched.",
  },
];

export default function WhyWorkWithUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(236,72,153,0.15),transparent_55%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.15),transparent_60%),#05030e] py-28 lg:py-32">
      <GradientOrb color="electric" size="lg" className="left-[-14%] top-[18%] opacity-70" />
      <GradientOrb color="cyber" size="md" className="right-[-16%] bottom-[10%] opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">Why teams stay with Imaginta</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Our impact blends blockbuster launches with relentless follow-through. Here is what the numbers and stories look like side by
            side.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <WarmSpotlight intensity={0.7}>
            <motion.div
              className="grid gap-6 rounded-[36px] border border-white/12 bg-white/[0.06] p-10 backdrop-blur-2xl sm:grid-cols-2"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/12 bg-white/10 p-6 text-left text-sm text-white/75">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">{stat.label}</p>
                  <p className="mt-3 text-3xl font-heading font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-white/65">{stat.caption}</p>
                </div>
              ))}
            </motion.div>
          </WarmSpotlight>

          <div className="space-y-6">
            {PROOF_POINTS.map((point, index) => (
              <WarmSpotlight key={point.headline} intensity={0.65}>
                <motion.article
                  className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-left text-sm text-white/75 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    <span>{point.headline}</span>
                    <span className="text-orange-200/80">{point.metric}</span>
                  </div>
                  <p className="mt-3 text-white/65">{point.blurb}</p>
                </motion.article>
              </WarmSpotlight>
            ))}

            <WarmSpotlight intensity={0.6}>
              <motion.div
                className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-sm text-white/70 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
              >
                “Imaginta combines the sensitivity of a branding agency with the precision of a product team. They pull partners into the
                conversation, instrument every touchpoint, and keep momentum strong after launch.”
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">Chief Marketing Officer · Retail Group</p>
              </motion.div>
            </WarmSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}

