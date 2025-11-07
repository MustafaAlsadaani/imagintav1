import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const slideInFromSide = (direction: "left" | "right" = "right"): Variants => ({
  hidden: { opacity: 0, x: direction === "right" ? 60 : -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

export const staggerGrid: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const floatGentle: Variants = {
  animate: {
    y: [0, -10, 6, 0],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    boxShadow: [
      "0 0 0px rgba(139, 92, 246, 0.0)",
      "0 0 25px rgba(139, 92, 246, 0.35)",
      "0 0 10px rgba(6, 182, 212, 0.25)",
      "0 0 0px rgba(6, 182, 212, 0.0)",
    ],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const rotateSlowly: Variants = {
  animate: {
    rotate: [0, 6, -6, 0],
    transition: {
      duration: 14,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const magneticHover = {
  hover: {
    scale: 1.04,
    transition: {
      type: "spring" as const,
      stiffness: 180,
      damping: 14,
    },
  },
  tap: {
    scale: 0.96,
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] as const },
  },
};

