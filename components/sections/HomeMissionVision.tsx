"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiLifeBuoy, FiShield, FiUsers } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const goals = [
  {
    number: "1",
    title: "Help you get online quickly.",
    detail: "Launch or refresh your website fast so customers can find you day and night.",
  },
  {
    number: "2",
    title: "Protect your business from threats.",
    detail: "Security and privacy tools keep your data safe and give customers confidence.",
  },
  {
    number: "3",
    title: "Grow your sales with smart strategies.",
    detail: "Marketing plans show you where new leads come from and how to nurture them.",
  },
];

export default function HomeMissionVision() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="container-custom">
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
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Our mission is to give you tools that make business growth simple.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We explain every step in plain language so you always know how a website, marketing plan, or security upgrade will help.
            Benefit: save time and money while seeing real results, like 30% more leads.
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
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold">Mission statement</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our goal is to give you the tools to build a lasting business foundation. We keep meetings friendly, use simple
                explainers, and show exactly how each service supports your bottom line.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold">Our simple goals for your business</h3>
              <div className="mt-4 space-y-4">
                {goals.map((goal) => (
                  <div key={goal.number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <span className="flex items-center gap-3 text-sm font-semibold text-primary">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                        {goal.number}
                      </span>
                      {goal.title}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{goal.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <FiUsers className="h-4 w-4 text-primary" />
                Friendly, plain-language calls
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <FiShield className="h-4 w-4 text-primary" />
                Security-first tech choices
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <FiLifeBuoy className="h-4 w-4 text-accent" />
                Support ready when you need it
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-lg font-semibold">Why owners choose Imaginta</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Struggling to attract customers or keep up with tech changes? We stand beside you, teach what works, and deliver the
                tools to keep results climbing.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Web made easy", detail: "Simple sites and stores your team can update in minutes." },
                { label: "Marketing clarity", detail: "Know which channels bring the best leads and why." },
                { label: "Secure systems", detail: "Compliance, monitoring, and quick support if issues pop up." },
                { label: "Embedded squad", detail: "Weekly check-ins, clear dashboards, and a partner who teaches." },
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
                Talk through your goals with us
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
