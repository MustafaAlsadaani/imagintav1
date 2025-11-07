"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export interface ServiceShowcaseProps {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  benefits: string[];
  priceRange: string;
  gradient: string;
  align?: "left" | "right";
  ctaHref?: string;
}

export default function ServiceShowcase({
  id,
  icon: Icon,
  title,
  tagline,
  description,
  features,
  benefits,
  priceRange,
  gradient,
  align = "left",
  ctaHref = "/contact",
}: ServiceShowcaseProps) {
  const [expanded, setExpanded] = useState(false);

  const [headlinePrimary, headlineAccent] = (() => {
    const parts = title.split(" ");
    if (parts.length <= 1) return [title, ""];
    return [parts.slice(0, -1).join(" "), parts.slice(-1)[0]];
  })();

  return (
    <section id={id} className="relative overflow-hidden py-32">
      <GradientOrb color="electric" size="lg" className={align === "left" ? "right-[-15%] top-[10%]" : "left-[-15%] top-[10%]"} />
      <div
        className={cn(
          "relative z-10 mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-2 md:items-center",
          align === "right" && "md:[&>div:first-child]:order-2",
        )}
      >
        <motion.div
          variants={fadeInUp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card relative aspect-[4/3] rounded-3xl p-10"
        >
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-20`} />
          <div className="relative flex h-full flex-col items-start justify-between">
            <Icon className="h-16 w-16 text-white" />
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="glass-creative inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm text-white">
                  <FaCheck className="h-4 w-4 text-neon" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Service {id}</p>
          <h2 className="text-4xl font-heading font-bold text-foreground sm:text-5xl">
            {headlinePrimary} {headlineAccent && <span className="text-gradient">{headlineAccent}</span>}
          </h2>
          <p className="text-xl font-semibold text-foreground-secondary">{tagline}</p>
          <p className="text-lg leading-relaxed text-foreground-secondary">{description}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-foreground-secondary">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric/10 text-electric">
                  <FaCheck className="h-4 w-4" />
                </span>
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-gradient">
              <span>Starting from</span>
              <span className="text-2xl">{priceRange}</span>
            </span>
            <Button asChild variant="gradient" className="gap-2">
              <Link href={ctaHref}>Explore Details</Link>
            </Button>
            <Button
              variant="glass"
              className="gap-2"
              onClick={() => setExpanded((prev) => !prev)}
            >
              View Pricing
              <FaArrowRight className={cn("h-4 w-4 transition-transform", expanded && "translate-x-1")} />
            </Button>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="glass-card mt-4 rounded-2xl p-6"
              >
                <p className="text-sm text-foreground-secondary">
                  We tailor every project around your goals. Share your scope and we’ll create a detailed proposal within 48 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
