"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import FloatingShape from "@/components/ui/FloatingShape";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export default function AboutHero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const meshTranslate = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const shapesTranslate = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background py-32 md:py-36">
      <motion.div className="absolute inset-0" style={{ y: prefersReducedMotion ? 0 : meshTranslate }}>
        <AnimatedMesh />
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div className="pointer-events-none absolute inset-0" style={{ y: shapesTranslate }}>
          <FloatingShape shape="blob" color="electric" size={180} delay={2} style={{ top: "10%", left: "15%" }} />
          <FloatingShape shape="triangle" color="cyber" size={140} delay={1.2} style={{ top: "60%", left: "5%" }} />
          <FloatingShape shape="circle" color="neon" size={160} delay={3} style={{ top: "20%", right: "10%" }} />
          <FloatingShape shape="square" color="accent" size={120} delay={2.5} style={{ bottom: "8%", right: "18%" }} />
          <FloatingShape shape="blob" color="electric" size={200} delay={1.8} style={{ top: "40%", right: "35%" }} />
        </motion.div>
      )}

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center">
        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <span className="pointer-events-none select-none text-[7rem] font-heading font-bold uppercase tracking-[0.2em] text-transparent md:text-[10rem]" style={{ WebkitTextStroke: "1px rgba(139,92,246,0.25)" }}>
            ABOUT
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Who We Are</p>
          <h1 className="text-4xl font-heading font-bold text-foreground md:text-5xl lg:text-6xl">
            The Creators Behind The <span className="text-gradient">Fire</span>
          </h1>
          <div className="space-y-4 text-lg leading-relaxed text-foreground-secondary">
            <p>
              Imaginta was born in Belgium with a single belief — that visionary brands deserve a unified creative partner who can dream boldly and execute flawlessly. Our studio blends artistry, strategy, and engineering into experiences that ignite emotion and deliver measurable impact.
            </p>
            <p>
              Today our collective spans strategists, designers, technologists, and growth specialists working as one integrated squad. We thrive on complex challenges, crafting digital ecosystems that move faster, feel richer, and scale with confidence.
            </p>
          </div>
          <Button asChild variant="glass" size="lg" className="mt-6 w-fit">
            <Link href="#team" className="flex items-center gap-2">
              Meet The Team
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

