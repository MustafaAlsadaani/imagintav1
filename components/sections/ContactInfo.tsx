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
    color: "electric" as const,
  },
  {
    icon: FaPhone,
    title: "Call Us",
    value: "+32 2 XXX XX XX",
    description: "Mon – Fri · 9am – 6pm CET",
    link: "tel:+3220000000",
    color: "cyber" as const,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit Us",
    value: "Brussels, Belgium",
    description: "Serving clients worldwide",
    link: "#map",
    color: "neon" as const,
  },
];

const COLOR_GRADIENT: Record<string, string> = {
  electric: "from-electric to-cyber",
  cyber: "from-cyber to-neon",
  neon: "from-neon to-electric",
};

export default function ContactInfo() {
  return (
    <section className="py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.div
              key={method.title}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={method.link}
                className="group block"
              >
                <div className="glass-card relative h-full overflow-hidden rounded-2xl p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <div
                    className={cn(
                      "inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110",
                      COLOR_GRADIENT[method.color],
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-heading font-semibold text-foreground">{method.title}</h3>
                  <p className="mt-1 text-2xl font-heading font-bold text-gradient">{method.value}</p>
                  <p className="mt-3 text-sm text-foreground-secondary">{method.description}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

