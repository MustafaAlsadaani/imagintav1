"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilityGroups = [
  {
    title: "Plan & Decide",
    items: ["Digital audits & opportunity mapping", "Go-to-market and launch planning", "Executive dashboards & KPIs", "Funding and stakeholder support"],
  },
  {
    title: "Design & Build",
    items: ["Brand identity and storytelling", "UX research & prototyping", "Web and app development", "API, automation & integrations"],
  },
  {
    title: "Grow & Retain",
    items: ["SEO, paid media & content", "Email, CRM & lifecycle automation", "Conversion optimisation", "Sales enablement & RevOps"],
  },
  {
    title: "Protect & Scale",
    items: ["Security audits & compliance", "Monitoring and incident response", "Infrastructure & performance", "Data governance & privacy"],
  },
  {
    title: "Enable Your Team",
    items: ["Training and documentation", "Design systems & component libraries", "Process optimisation", "Hiring support for digital roles"],
  },
  {
    title: "Measure & Improve",
    items: ["Analytics implementation", "Attribution & reporting", "Experimentation frameworks", "Quarterly optimisation sprints"],
  },
];

export default function ServicesCapabilities() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="caps-label-wide font-semibold text-muted-foreground">
            Everything you need in one partner
          </p>
          <h2 className="mt-4 text-3xl font-heading font-bold text-foreground sm:text-4xl">
            Pick the outcomes you want&mdash;we bring the specialists, playbooks, and tools to make them happen.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every project combines the capabilities needed to reach your goals. Start small or engage us end-to-end&mdash;you always have a single team accountable for results.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="rounded-2xl border border-border bg-white/5 p-6 shadow-lg shadow-primary/10"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] h-2 w-2 rounded-full bg-gradient-start" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

