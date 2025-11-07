"use client";

import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaUsers, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: FaChartLine,
    title: "Holistic Approach",
    description: "All services under one roof for seamless integration.",
  },
  {
    icon: FaUsers,
    title: "Client-Focused",
    description: "Your success is our success, every step of the way.",
  },
  {
    icon: FaShieldAlt,
    title: "Security First",
    description: "Enterprise-grade protection for businesses of all sizes.",
  },
  {
    icon: FaRocket,
    title: "Results Driven",
    description: "We measure success by your growth and ROI.",
  },
];

export default function WinningRace() {
  return (
    <section className="section-padding bg-dark-lighter text-foreground relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 bg-accent/8 blur-3xl" />
      <div className="container-custom grid gap-12 md:grid-cols-2 md:items-center relative z-10">
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="glass group w-full max-w-md rounded-3xl border border-dark-border bg-dark-lighter p-16 shadow-2xl hover:border-primary/30 hover:shadow-primary/20 transition-all duration-500">
            <FaRocket className="mx-auto h-32 w-32 text-primary group-hover:scale-110 transition-transform duration-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl text-foreground">
            Why Businesses Choose <span className="text-primary">Imaginta</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We don&apos;t just provide services – we build the foundation for you to win the digital race.
          </p>

          <div className="mt-10 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-dark-border bg-dark-lighter p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
