"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiLifeBuoy,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    title: "One partner for every discipline",
    description: "Strategy, design, engineering, marketing, and security specialists at your disposal without building an in-house team.",
    icon: FiUsers,
  },
  {
    title: "Roadmaps tied to business goals",
    description: "We translate your revenue targets and customer needs into a phased action plan with measurable checkpoints.",
    icon: FiTarget,
  },
  {
    title: "Momentum you can maintain",
    description: "From launch to growth campaigns and platform upkeep, we keep shipping so your team can focus on operations.",
    icon: FiTrendingUp,
  },
];

const partnershipSteps = [
  "We audit where you are today and co-create a simple success plan.",
  "Dedicated Imaginta squad executes while you approve and prioritise.",
  "Monthly reviews keep budgets, performance, and next moves transparent.",
];

export default function HomeMissionVision() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="caps-label-wide inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-primary">
            Imaginta for business owners
          </span>
          <h2 className="mt-6 text-3xl font-heading font-bold text-foreground sm:text-4xl lg:text-5xl">
            A success partner focused on clear outcomes, not agency jargon.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most leaders donâ€™t need more vendorsâ€”they need a cross-functional team that understands the pressures of running a
            growing business. Imaginta embeds alongside you to modernise your digital presence, attract customers, and keep
            everything running securely without creating another full-time hire to manage.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4 text-muted-foreground">
              {benefits.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">How partnering with us works</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We keep the process transparent so you always know whatâ€™s happening next.
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                {partnershipSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 text-primary">
                      <FiCheckCircle className="h-4 w-4" />
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <FiShield className="h-4 w-4 text-primary" />
                Security-first builds
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <FiLifeBuoy className="h-4 w-4 text-accent" />
                Ongoing optimisation support
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">Why owners choose Imaginta</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We bring leadership-level guidance without the enterprise overhead, helping you focus on running the business while we
                deliver the digital foundations that keep it growing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Web + product", detail: "High-performing sites, platforms, and customer journeys." },
                { label: "Growth engine", detail: "Campaigns, funnels, and marketing ops that scale with demand." },
                { label: "Secure operations", detail: "Compliance, monitoring, and incident response on standby." },
                { label: "Embedded squad", detail: "Weekly touchpoints, clear reporting, and shared ownership." },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">{item.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:-translate-y-[1px] hover:shadow-xl"
            >
              <Link href="/contact">
                Book a strategy call
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
