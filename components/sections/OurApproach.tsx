"use client";

import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";

const STEPS = [
  {
    title: "Discover",
    description: "We immerse ourselves in your world, aligning stakeholders and shaping the strategic north star.",
  },
  {
    title: "Design",
    description: "Experience, brand, and architecture come together in concept sprints and prototyping loops.",
  },
  {
    title: "Develop",
    description: "Engineering squads build with performance and security baked in from the first line of code.",
  },
  {
    title: "Deliver",
    description: "Launches are just the start—measurement, iteration, and growth programs sustain momentum.",
  },
];

export default function OurApproach() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <GradientOrb color="cyber" size="lg" className="left-[-18%] bottom-[5%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our <span className="text-gradient">Approach</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            From first conversation to ongoing optimisation, every phase is orchestrated for clarity, velocity, and impact.
          </motion.p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute top-1/2 left-0 hidden h-1 w-full -translate-y-1/2 bg-gradient-to-r from-electric via-cyber to-neon md:block" />

          <div className="grid gap-12 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                className="glass-card relative rounded-3xl p-8 text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-gradient">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
