"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    title: "Step 1 • Strategy Session",
    description:
      "We learn about your goals, customers, and roadblocks. Together we define the business outcomes that matter most.",
    outputs: ["Success metrics", "Project roadmap", "Recommended team"],
  },
  {
    title: "Step 2 • Blueprint",
    description:
      "Our team designs the solution&mdash;from wireframes and messaging to technical architecture and campaign plans.",
    outputs: ["User journeys & messaging", "Release plan", "Budget & timeline"],
  },
  {
    title: "Step 3 • Build & Launch",
    description:
      "Designers, developers, and marketers work in sprints. You receive weekly updates and can review work at every stage.",
    outputs: ["Sprint demos", "QA & compliance", "Launch checklist"],
  },
  {
    title: "Step 4 • Grow & Support",
    description:
      "After launch we monitor results, optimise, and train your team. Continue with us or keep everything documented in-house.",
    outputs: ["Analytics dashboard", "Optimisation plan", "Training & handover"],
  },
];

export default function ServicesProcess() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="caps-label-wide font-semibold text-muted-foreground">
            How we work with you
          </p>
          <h2 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">
            A clear, four-step process keeps projects moving and stakeholders confident from day one.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You always know what’s happening, who is responsible, and how decisions ladder up to results. No jargon, no
            deliverables without purpose.
          </p>
        </motion.div>

        <div className="mt-12 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="panel-base border-border bg-white/6 p-8 shadow-primary/10"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl space-y-3">
                  <p className="caps-label font-semibold text-sm text-gradient-end">
                    {step.title}
                  </p>
                  <p className="text-base text-muted-foreground sm:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground">
                  <p className="caps-label font-semibold text-foreground">
                    You receive
                  </p>
                  <ul className="mt-3 space-y-2">
                    {step.outputs.map((output) => (
                      <li key={output} className="flex items-center gap-2">
                        <FaArrowRight className="h-3 w-3 text-gradient-start" aria-hidden="true" />
                        <span>{output}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

