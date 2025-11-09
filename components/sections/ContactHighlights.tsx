"use client";

import { motion } from "framer-motion";
import { FaClock, FaCompass, FaGlobeEurope, FaShieldAlt } from "react-icons/fa";

const HIGHLIGHTS = [
  {
    icon: FaClock,
    title: "Fast replies",
    description: "We respond within one hour and deliver your first action plan within three days.",
    signal: "< 60 min",
  },
  {
    icon: FaShieldAlt,
    title: "Security minded",
    description: "Every project includes privacy checks, backups, and clear steps to keep data safe.",
    signal: "GDPR ready",
  },
  {
    icon: FaGlobeEurope,
    title: "Flexible time zones",
    description: "Teams across Belgium, Portugal, and the US keep projects moving wherever you are.",
    signal: "CET · GMT · EST",
  },
  {
    icon: FaCompass,
    title: "Guidance you can trust",
    description: "Simple dashboards and regular calls make it easy to see progress and plan what is next.",
    signal: "Weekly updates",
  },
];

export default function ContactHighlights() {
  return (
    <section className="relative overflow-hidden bg-[rgba(8,18,34,0.96)] py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_84%_22%,rgba(230,0,230,0.14),transparent_64%),radial-gradient(circle_at_50%_86%,rgba(50,205,50,0.12),transparent_70%)] opacity-75" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.28)] bg-[rgba(12,25,44,0.72)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-cyan">
            Why teams choose Imaginta
          </span>
          <h2 className="mt-6 text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[3rem]">
            Straightforward support that keeps your digital presence growing.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-premium-text-secondary sm:text-lg">
            We work beside you, handling the technical tasks and explaining the impact in simple language so you always feel confident.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {HIGHLIGHTS.map(({ icon: Icon, title, description, signal }, index) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-[28px] border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.8)] px-8 py-8 text-white shadow-[0_20px_58px_rgba(5,15,32,0.48)] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.35)] hover:bg-[rgba(16,28,46,0.88)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,229,0.35)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(0,229,229,0.24)] bg-[rgba(10,20,36,0.82)] text-premium-cyan shadow-[0_12px_28px_rgba(5,15,32,0.45)] transition-transform duration-500 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="rounded-full border border-[rgba(0,229,229,0.26)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.4em] text-premium-text-secondary">
                  {signal}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-heading font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-premium-text-secondary">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

