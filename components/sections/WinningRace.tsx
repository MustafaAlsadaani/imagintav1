"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBullseye, FaHandsHelping, FaLock } from "react-icons/fa";

const features = [
  {
    icon: FaBullseye,
    title: "Clear focus",
    description: "Every plan links to a real business goal so you can track wins easily.",
  },
  {
    icon: FaHandsHelping,
    title: "Friendly guidance",
    description: "We walk beside you, explain each step, and share quick how-to videos.",
  },
  {
    icon: FaLock,
    title: "Security built in",
    description: "Protect your data, follow GDPR, and sleep easy knowing everything is monitored.",
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

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Winning the race is easier when you have a proven playbook.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            In business, it&apos;s a race. We give you the edge with proven tools and a partner who translates tech into everyday
            language. Benefit: outpace competitors without the hassle.
          </p>

          <div className="mt-10 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex items-start gap-4 rounded-2xl border border-dark-border bg-dark-lighter p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
            <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5 text-sm text-primary">
              <strong>Quick win:</strong> Many clients see faster results simply because they finally have one plan, one dashboard, and
              one friendly team answering questions in minutes.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
