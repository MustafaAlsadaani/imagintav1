"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import type { IconType } from "react-icons";

type PricingTier = {
  name: string;
  range: string;
  description: string;
};

type ServiceDetailProps = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  pricing: PricingTier[];
};

export default function ServiceDetail({ icon: Icon, title, description, features, pricing }: ServiceDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-b border-border/60 bg-background py-12">
      <div className="container-custom grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <Icon className="h-16 w-16 text-gradient-end" />
          <h2 className="mt-4 text-3xl font-bold text-foreground">{title}</h2>
          <p className="mt-4 text-muted-foreground">{description}</p>

          <h3 className="mt-8 text-lg font-semibold text-foreground">Key Features</h3>
          <ul className="mt-4 space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                <FaCheck className="mt-1 h-4 w-4 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground">Pricing Options</h3>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="mt-4 flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-6 py-4 text-left font-semibold text-foreground transition-colors hover:bg-white/10"
          >
            <span>View Pricing Tiers</span>
            <FaChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4">
                  {pricing.map((tier) => (
                    <div
                      key={tier.name}
                      className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-sm"
                    >
                      <h4 className="text-lg font-bold text-foreground">{tier.name}</h4>
                      <p className="mt-2 text-xl font-semibold text-primary">{tier.range}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

