"use client";

import { type ReactNode, useRef } from "react";
import type { HTMLMotionProps } from "framer-motion";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  intensity?: number;
}

/**
 * Adds a magnetic hover effect to its children, subtly tilting and translating towards the pointer position.
 */
export default function MagneticContainer({
  children,
  className,
  intensity = 12,
  ...props
}: MagneticContainerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 160, damping: 12 });
  const rotateY = useSpring(0, { stiffness: 160, damping: 12 });
  const translateX = useSpring(motionX, { stiffness: 200, damping: 20 });
  const translateY = useSpring(motionY, { stiffness: 200, damping: 20 });
  const prefersReducedMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const offsetX = event.clientX - (bounds.left + bounds.width / 2);
    const offsetY = event.clientY - (bounds.top + bounds.height / 2);
    const ratioX = offsetX / (bounds.width / 2);
    const ratioY = offsetY / (bounds.height / 2);

    motionX.set(ratioX * intensity * 0.6);
    motionY.set(ratioY * intensity * 0.6);
    rotateX.set(-ratioY * intensity);
    rotateY.set(ratioX * intensity);
  };

  const reset = () => {
    if (prefersReducedMotion) return;
    motionX.set(0);
    motionY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn(prefersReducedMotion ? "" : "[perspective:1200px]", className)}
      style={prefersReducedMotion ? undefined : { rotateX, rotateY, x: translateX, y: translateY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </motion.div>
  );
}


