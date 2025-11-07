"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import FloatingShape from "@/components/ui/FloatingShape";
import MagneticContainer from "@/components/ui/MagneticContainer";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerGrid } from "@/lib/animations";

interface ShapeConfig {
  id: string;
  shape: "circle" | "square" | "triangle" | "blob";
  color: "electric" | "cyber" | "neon" | "accent";
  size: number;
  top: number;
  left: number;
  delay: number;
}

const HERO_BADGE = "Imaginta • Creative Studio";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const [isMobile, setIsMobile] = useState(false);
  const [shapes, setShapes] = useState<ShapeConfig[]>([]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setShapes([]);
      return;
    }

    const createShapes = (count: number): ShapeConfig[] => {
      const palette: ShapeConfig["color"][] = ["electric", "cyber", "neon", "accent"];
      const types: ShapeConfig["shape"][] = ["circle", "square", "triangle", "blob"];

      return Array.from({ length: count }).map((_, index) => ({
        id: `shape-${index}-${Math.random().toString(16).slice(2, 7)}`,
        shape: types[Math.floor(Math.random() * types.length)],
        color: palette[Math.floor(Math.random() * palette.length)],
        size: Math.floor(Math.random() * 70) + 50,
        top: Math.random() * 80,
        left: Math.random() * 80,
        delay: Math.random() * 6,
      }));
    };

    setShapes(createShapes(isMobile ? 8 : 18));
  }, [isMobile, prefersReducedMotion]);

  const badge = useMemo(() => HERO_BADGE, []);

  return (
    <motion.section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <AnimatedMesh />
      </motion.div>

      {!prefersReducedMotion && (
        <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
          {shapes.map((shape) => (
            <FloatingShape
              key={shape.id}
              shape={shape.shape}
              color={shape.color}
              size={shape.size}
              delay={shape.delay}
              style={{ top: `${shape.top}%`, left: `${shape.left}%` }}
            />
          ))}
        </motion.div>
      )}

      <motion.div
        style={{ y: prefersReducedMotion ? 0 : contentY }}
        variants={prefersReducedMotion ? undefined : staggerGrid}
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={prefersReducedMotion ? undefined : "visible"}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 py-32 text-center sm:px-8"
      >
        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground-secondary backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-electric" />
          {badge}
        </motion.div>

        <div className="space-y-5">
          <motion.h1
            variants={prefersReducedMotion ? undefined : fadeInUp}
            className="text-3xl font-heading font-semibold text-foreground sm:text-4xl md:text-6xl lg:text-7xl"
          >
            We Don&apos;t Just Build Digital
          </motion.h1>
          <motion.h2
            variants={prefersReducedMotion ? undefined : fadeInUp}
            transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
            className="text-gradient text-3xl font-heading font-bold sm:text-4xl md:text-6xl lg:text-7xl"
          >
            We Craft Experiences That Inspire
          </motion.h2>
        </div>

        <motion.p
          variants={prefersReducedMotion ? undefined : fadeInUp}
          transition={{ delay: prefersReducedMotion ? 0 : 0.35 }}
          className="mt-8 max-w-3xl text-base text-foreground-secondary sm:text-lg md:text-xl"
        >
          Imaginta merges artistry with technology to forge unforgettable digital journeys for ambitious brands ready to move faster, think bolder, and scale smarter.
        </motion.p>

        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
          className="mt-12 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
        >
          <MagneticContainer>
            <Button asChild variant="gradient" size="lg" className="px-8 py-6 text-base">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                Get Started
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </MagneticContainer>
          <MagneticContainer>
            <Button asChild variant="glass" size="lg" className="px-8 py-6 text-base">
              <Link href="/services" className="flex items-center justify-center gap-2 text-foreground">
                Explore Services
                <FiArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </MagneticContainer>
        </motion.div>

        <motion.div
          variants={prefersReducedMotion ? undefined : fadeInUp}
          transition={{ delay: prefersReducedMotion ? 0 : 0.65 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm text-foreground-secondary"
        >
          <span className="rounded-full border border-white/10 px-4 py-2">Dark mode native</span>
          <span className="rounded-full border border-white/10 px-4 py-2">Performance obsessed</span>
          <span className="rounded-full border border-white/10 px-4 py-2">Security ready</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="glass-creative absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full px-4 py-2 text-sm text-electric"
        animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiChevronDown className="h-5 w-5" />
        Scroll
      </motion.div>
    </motion.section>
  );
}


