"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  value: "project" | "retainer";
  onChange: (value: "project" | "retainer") => void;
}

export default function PricingToggle({ value, onChange }: PricingToggleProps) {
  return (
    <div className="glass-creative inline-flex items-center rounded-full p-1">
      {["project", "retainer"].map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option as "project" | "retainer")}
          className={cn(
            "relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] transition",
            value === option ? "text-white" : "text-foreground-muted",
          )}
        >
          {option === "project" ? "One-Time Projects" : "Monthly Retainers"}
          {value === option && (
            <motion.span
              layoutId="pricing-toggle"
              className="absolute inset-0 -z-10 rounded-full bg-gradient-aurora"
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
