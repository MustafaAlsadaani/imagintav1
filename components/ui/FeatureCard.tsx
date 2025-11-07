"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

const COLOR_GRADIENT: Record<string, string> = {
  electric: "from-electric to-cyber",
  cyber: "from-cyber to-electric",
  neon: "from-neon to-cyber",
  accent: "from-accent to-electric",
};

const COLOR_TEXT: Record<string, string> = {
  electric: "text-electric",
  cyber: "text-cyber",
  neon: "text-neon",
  accent: "text-accent",
};

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color?: "electric" | "cyber" | "neon" | "accent";
  href: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  color = "electric",
  href,
  delay = 0,
}: FeatureCardProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const rotateX = ((relativeY - bounds.height / 2) / bounds.height) * -14;
    const rotateY = ((relativeX - bounds.width / 2) / bounds.width) * 14;

    setGlowPosition({
      x: (relativeX / bounds.width) * 100,
      y: (relativeY / bounds.height) * 100,
    });

    setTilt({ rotateX, rotateY });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <motion.article
      variants={fadeInUp}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        style={{ transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` }}
        className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:border-white/20"
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: `radial-gradient(350px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(139,92,246,0.22), transparent 65%)`,
          }}
        />

        <div className="relative z-10 space-y-6">
          <div
            className={cn(
              "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-500 group-hover:scale-110",
              COLOR_GRADIENT[color],
            )}
          >
            <Icon className="h-8 w-8" />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-heading font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-foreground-secondary leading-relaxed">{description}</p>
          </div>

          <ul className="space-y-3 text-sm text-foreground-secondary">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-electric">
                  <FiCheck className="h-4 w-4" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <motion.a
            href={href}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-300",
              COLOR_TEXT[color],
            )}
            whileHover={{ x: 4 }}
          >
            Discover More
            <FiArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </motion.div>
    </motion.article>
  );
}
