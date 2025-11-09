"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimationType = "fade" | "slide-up" | "slide-left" | "scale" | "stagger";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const ANIMATION_VARIANTS: Record<AnimationType, Record<string, unknown>> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  "slide-up": {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  "slide-left": {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  stagger: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AnimatedSection({
  children,
  animation = "slide-up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 0px -100px 0px",
    amount: 0.2,
  });

  const variant = ANIMATION_VARIANTS[animation];

  if (animation === "stagger") {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={variant.initial}
      animate={inView ? variant.animate : variant.initial}
      transition={{ ...(variant.transition as object), delay }}
    >
      {children}
    </motion.div>
  );
}

