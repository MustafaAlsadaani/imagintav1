"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const CONTACT_METHODS = [
  {
    icon: FaEnvelope,
    title: "Email Us",
    value: "hello@imaginta.com",
    description: "Get a response within 24 hours",
    link: "mailto:hello@imaginta.com",
    color: "cyan" as const,
  },
  {
    icon: FaPhone,
    title: "Call Us",
    value: "+32 2 XXX XX XX",
    description: "Mon – Fri · 9am – 6pm CET",
    link: "tel:+3220000000",
    color: "magenta" as const,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "Brussels, Belgium",
    description: "Serving clients worldwide",
    link: "#map",
    color: "green" as const,
  },
];

const COLOR_STYLES: Record<string, string> = {
  cyan: "from-premium-cyan/90 via-premium-cyan/60 to-transparent",
  magenta: "from-premium-accent/90 via-premium-accent/60 to-transparent",
  green: "from-premium-green/80 via-premium-green/60 to-transparent",
};

export default function ContactInfo() {
  return (
    <section className="relative overflow-hidden bg-[rgba(8,18,34,0.95)] py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(0,229,229,0.14),transparent_60%),radial-gradient(circle_at_82%_20%,rgba(230,0,230,0.12),transparent_64%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.04]" />

      <div className="relative z-10 grid gap-6 md:grid-cols-3">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Link href={method.link} className="group block">
                <div className="relative h-full overflow-hidden rounded-2xl border border-[rgba(0,229,229,0.18)] bg-[rgba(12,23,39,0.78)] p-8 shadow-[0_18px_46px_rgba(5,15,32,0.48)] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:-translate-y-2 group-hover:border-[rgba(0,229,229,0.32)] group-hover:bg-[rgba(16,28,46,0.86)]">
                  <div
                    className={cn(
                      "absolute inset-x-0 -top-20 h-48 bg-gradient-to-b opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      COLOR_STYLES[method.color],
                    )}
                    aria-hidden
                  />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,20,36,0.85)] text-white shadow-[0_12px_28px_rgba(5,15,32,0.4)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="relative mt-6 text-xl font-heading font-semibold text-white">{method.title}</h3>
                  <p className="relative mt-1 text-2xl font-heading font-bold text-white drop-shadow-[0_0_18px_rgba(0,229,229,0.25)]">
                    {method.value}
                  </p>
                  <p className="relative mt-3 text-sm text-premium-text-secondary">{method.description}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

