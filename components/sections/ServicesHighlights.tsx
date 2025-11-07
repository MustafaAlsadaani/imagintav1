"use client";

import { motion, useReducedMotion } from "framer-motion";

const highlights = [
  {
    title: "Embedded partnership",
    description:
      "We work as an extension of your leadership team with clear owners for strategy, delivery, and optimisation.",
  },
  {
    title: "Measured by outcomes",
    description:
      "KPIs are defined from day one—whether it is pipeline growth, conversion lift, or platform reliability.",
  },
  {
    title: "Global delivery, local roots",
    description:
      "Belgian craftsmanship supported by a distributed network of senior specialists in EMEA and North America.",
  },
];

const expertise = [
  "Digital strategy",
  "Brand storytelling",
  "Web engineering",
  "Growth marketing",
  "Revenue ops",
  "Security & compliance",
];

export default function ServicesHighlights() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-padding bg-background">
      <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <motion.h2
            className="text-3xl font-heading font-bold text-foreground sm:text-4xl"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            We design full-service engagements that balance experimentation with reliable execution.
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-muted-foreground"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Expect inquisitive discovery sessions, transparent roadmaps, and teams that stay laser-focused on
            the commercial impact of every deliverable.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 caps-label text-muted-foreground"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {expertise.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="rounded-2xl border border-border bg-white/5 p-6 text-left shadow-lg shadow-primary/10"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gradient-end">
                {highlight.title}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

