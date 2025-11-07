"use client";

import { motion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";

const PRINCIPLES = [
  {
    title: "Think Different",
    description: "We challenge conventions and explore what’s possible beyond the brief.",
  },
  {
    title: "Act Bold",
    description: "Decisive action and rapid experimentation keep momentum high.",
  },
  {
    title: "Create Magic",
    description: "Craft that sparks emotion is fuelled by empathy and precision.",
  },
  {
    title: "Deliver Excellence",
    description: "We measure success by the durability and impact of what we ship.",
  },
];

export default function OurCulture() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background-secondary py-32">
      <GradientOrb color="neon" size="lg" className="left-[-15%] top-[15%]" />
      <GradientOrb color="electric" size="md" className="right-[-12%] bottom-[10%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Our Culture</p>
            <h2 className="text-4xl font-heading font-bold text-foreground md:text-5xl">
              “We build digital experiences that feel inevitable — crafted with heart, delivered with rigour.”
            </h2>
            <p className="text-lg leading-relaxed text-foreground-secondary">
              Collaboration isn’t a buzzword here; it’s our operating system. We embed with client teams, stay close to real problems, and design journeys that are as enjoyable as the outcomes are powerful.
            </p>
            <div className="flex justify-start">
              <DecorativeLine align="left" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="glass-card rounded-2xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 160, damping: 20, delay: index * 0.04 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-heading font-semibold text-foreground">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{principle.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
