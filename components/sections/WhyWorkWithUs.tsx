"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { cn } from "@/lib/utils";

const STATS = [
  { number: 100, suffix: "+", label: "Projects Delivered", icon: "🚀", color: "electric" },
  { number: 50, suffix: "+", label: "Happy Clients", icon: "🎯", color: "cyber" },
  { number: 15, suffix: "", label: "Countries Served", icon: "🌍", color: "neon" },
  { number: 99, suffix: "%", label: "Client Satisfaction", icon: "⭐", color: "accent" },
];

const COLOR_MAP: Record<string, string> = {
  electric: "shadow-glow-electric",
  cyber: "shadow-glow-cyber",
  neon: "shadow-glow-neon",
  accent: "shadow-[0_0_28px_rgba(236,72,153,0.35)]",
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(latest)}${suffix}`;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref} className="tabular-nums" />;
}

export default function WhyWorkWithUs() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <GradientOrb color="electric" size="lg" className="left-[-10%] top-[20%]" />
      <GradientOrb color="cyber" size="md" className="right-[-15%] bottom-[15%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            By The <span className="text-gradient">Numbers</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Proof that imagination plus precision delivers transformative outcomes.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={cn("glass-card rounded-2xl p-8 text-center", COLOR_MAP[stat.color])}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
            >
              <span className="text-5xl" role="img" aria-label={stat.label}>
                {stat.icon}
              </span>
              <div className="mt-4 text-5xl font-heading font-bold text-gradient">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

