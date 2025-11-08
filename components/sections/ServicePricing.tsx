"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

const PLAN_FEATURES = [
  "Quarterly roadmap strategy and leadership support",
  "Design, development, and growth execution in unified sprints",
  "Partner and vendor coordination handled by Imaginta",
  "Performance dashboards and monthly optimisation rituals",
  "Security reviews, backups, and ongoing maintenance",
  "90-day post-launch optimisation for major releases",
];

export default function ServicePricing() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-secondary via-background to-background py-28">
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_15%_20%,rgba(248,113,113,0.45),transparent_60%),radial-gradient(circle_at_80%_15%,rgba(34,211,238,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-orange-200/90">
            Yearly partnership
          </span>
          <h2 className="mt-6 text-balance text-4xl font-heading font-semibold text-white sm:text-5xl">
            One plan. Everything you need for the next 12 months.
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Forget juggling proposals, vendors, and surprise costs. Imaginta’s €1,999 yearly partnership gives you the team, process,
            and ownership to build and grow confidently.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 rounded-[32px] border border-white/12 bg-white/[0.06] p-10 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">Investment</p>
              <div className="mt-2 text-5xl font-heading font-semibold text-gradient">€1,999 / year</div>
              <p className="mt-3 text-sm text-foreground-secondary">
                Flat annual budget, no retainers, no hourly surprises. Split payment available (60% kickoff, 40% mid-year).
              </p>
            </div>

            <ul className="space-y-3 text-sm text-foreground-secondary">
              {PLAN_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-neon">
                    <FaCheckCircle className="h-4 w-4" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-white/12 bg-black/30 p-6 text-sm text-foreground-secondary">
              <p>
                We work as an embedded partner. You’ll have a shared backlog, weekly check-ins, and transparent reporting so leaders
                stay informed and teams stay aligned.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-sm text-foreground-secondary">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">What to expect</p>
              <p>
                <strong className="text-white">Kickoff week:</strong> workshop, backlog, data setup, partner access.
              </p>
              <p>
                <strong className="text-white">Month 1:</strong> first sprint ships a high-impact deliverable (website update, funnel launch, or brand refresh).
              </p>
              <p>
                <strong className="text-white">Quarterly:</strong> roadmap review, performance deep-dive, and priority resets.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">Availability</p>
              <p>We partner with 6 teams per year to keep delivery sharp. Reserve with a €500 commitment applied to the plan.</p>
            </div>

            <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-base">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Start the partnership <FaArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
