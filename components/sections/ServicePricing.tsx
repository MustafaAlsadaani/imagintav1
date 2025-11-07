"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheck, FaStar, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";
import PricingToggle from "@/components/ui/PricingToggle";

export interface PricingTier {
  name: string;
  priceRange: string;
  description: string;
  timeline: string;
  features: string[];
  exclusions?: string[];
  popular?: boolean;
}

interface ServicePricingProps {
  tiers: PricingTier[];
}

export default function ServicePricing({ tiers }: ServicePricingProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [mode, setMode] = useState<"project" | "retainer">("project");

  return (
    <section className="bg-gradient-to-b from-background-secondary to-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground sm:text-4xl">
              Transparent Pricing, Tailored Engagements
            </h3>
            <p className="mt-3 max-w-xl text-foreground-secondary">
              Choose the partnership level that matches your goals. Toggle between project engagements and monthly retainers.
            </p>
          </div>
          <PricingToggle value={mode} onChange={setMode} />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={cn(
                "glass-card relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-500",
                tier.popular && "border-2 border-electric shadow-glow-electric",
              )}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 160, damping: 20, delay: index * 0.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {tier.popular && (
                <div className="absolute right-0 top-0 inline-flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl bg-electric px-5 py-2 text-sm font-semibold text-white">
                  <FaStar className="h-4 w-4" /> Most popular
                </div>
              )}
              <div className="space-y-4">
                <h4 className="text-2xl font-heading font-bold text-foreground">{tier.name}</h4>
                <div className="text-4xl font-heading font-bold text-gradient">
                  {mode === "project" ? tier.priceRange : `${tier.priceRange} / month`}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">{tier.timeline}</p>
                <p className="text-sm leading-relaxed text-foreground-secondary">{tier.description}</p>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-foreground-secondary">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-neon/15 text-neon">
                      <FaCheck className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
                {tier.exclusions?.map((exclusion) => (
                  <li key={exclusion} className="flex items-start gap-3 text-foreground-muted">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-foreground-muted">
                      <FaTimes className="h-3.5 w-3.5" />
                    </span>
                    <span className="line-through">{exclusion}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1">
                <Button
                  variant={tier.popular ? "gradient" : "glass"}
                  className="w-full"
                  onClick={() => setSelected(selected === index ? null : index)}
                >
                  {selected === index ? "Hide Details" : "Choose Plan"}
                </Button>
                <AnimatePresence initial={false}>
                  {selected === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card mt-4 rounded-2xl p-4 text-xs text-foreground-secondary"
                    >
                      Let’s lock in scope and deliverables. We’ll tailor this package to your roadmap within 48 hours.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
