"use client";

import { motion } from "framer-motion";
import { FaClock, FaCompass, FaGlobeEurope, FaShieldAlt } from "react-icons/fa";

const HIGHLIGHTS = [
  {
    icon: FaClock,
    title: "Zero-lag kickoff",
    description: "Your first briefing lands within 60 minutes. A tailored mission roadmap is delivered inside 72 hours.",
    signal: "00:60",
  },
  {
    icon: FaShieldAlt,
    title: "Security choreography",
    description: "Privacy-by-design rituals, zero-trust infrastructure, and compliance baked into every sprint.",
    signal: "SOC 2 + GDPR",
  },
  {
    icon: FaGlobeEurope,
    title: "Global strike teams",
    description: "Hybrid squads syncing in Brussels, Lisbon, and Brooklyn—covering every timezone you operate in.",
    signal: "CET · GMT · EST",
  },
  {
    icon: FaCompass,
    title: "Victory guidance",
    description: "War-room workshops, async rituals, and living dashboards so your leadership sees momentum in real time.",
    signal: "Full telemetry",
  },
];

export default function ContactHighlights() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(236,72,153,0.22),transparent_60%),radial-gradient(circle_at_82%_25%,rgba(14,165,233,0.2),transparent_62%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-200/90">
            Imaginta advantage
          </span>
          <h2 className="mt-6 text-balance text-4xl font-heading font-bold text-white sm:text-5xl">
            Built for quiet influence. Designed to deliver undeniable wins.
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            We embed beside your leadership, orchestrating product, brand, engineering, and growth movements in one unified cadence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, title, description, signal }, index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05] p-8 text-white transition-all hover:-translate-y-1.5 hover:border-orange-200/40"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <div className="absolute -right-16 -top-12 h-36 w-36 rounded-full bg-white/10 blur-3xl transition-transform group-hover:scale-125" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10">
                  <Icon className="h-5 w-5 text-orange-200" />
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/60">
                  {signal}
                </span>
              </div>
              <h3 className="mt-7 text-xl font-heading font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

