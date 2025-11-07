"use client";

import { motion } from "framer-motion";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import FloatingShape from "@/components/ui/FloatingShape";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <AnimatedMesh />
      <GradientOrb color="electric" size="lg" className="left-[-12%] top-[-18%]" />
      <GradientOrb color="cyber" size="md" className="right-[-18%] bottom-[-10%]" />
      <FloatingShape shape="blob" color="electric" size={200} delay={1.8} style={{ top: "25%", left: "8%" }} />
      <FloatingShape shape="triangle" color="neon" size={140} delay={2.4} style={{ top: "60%", right: "12%" }} />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.45em] text-electric">Let&apos;s Collaborate</span>
        <motion.h1
          className="mt-6 text-balance text-4xl font-heading font-bold text-foreground sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          We craft ambitious digital experiences with teams who dream bigger
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-foreground-secondary sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          Share your vision and we&apos;ll design a roadmap that blends imagination with measurable momentum.
        </motion.p>
      </div>
    </section>
  );
}

