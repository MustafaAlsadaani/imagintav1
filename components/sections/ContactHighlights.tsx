"use client";

import { motion } from "framer-motion";
import { FaClock, FaGlobeEurope, FaHandHoldingHeart, FaShieldAlt } from "react-icons/fa";

const HIGHLIGHTS = [
  {
    icon: FaClock,
    title: "Rapid Kickoff",
    description: "Discovery within 24 hours and a tailored roadmap inside 5 business days.",
  },
  {
    icon: FaShieldAlt,
    title: "Security First",
    description: "GDPR-aligned processes, encrypted environments, and privacy-by-design.",
  },
  {
    icon: FaGlobeEurope,
    title: "Global Partners",
    description: "Hybrid squads collaborating across Brussels, Rotterdam, and Lisbon time zones.",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Co-Creation",
    description: "Workshops, playbooks, and async rituals that keep your team in the driver seat.",
  },
];

export default function ContactHighlights() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-aurora opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-electric">
            Why teams choose Imaginta
          </span>
          <h2 className="mt-4 text-balance text-4xl font-heading font-bold text-foreground sm:text-5xl">
            Built for momentum, powered by partnership
          </h2>
          <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
            We plug directly into your product, marketing, or leadership squad to accelerate vision into launch-ready reality.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="glass-card group relative overflow-hidden rounded-2xl border border-white/5 bg-background/60 p-8 transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-electric/10 blur-3xl transition-all group-hover:scale-125" />
              <Icon className="h-10 w-10 text-electric" />
              <h3 className="mt-6 text-xl font-heading font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

