"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Renders a subtle gradient glow that follows the user cursor to make the UI feel more alive.
 * Positions are spring-animated to keep movement smooth and respects pointer leave events.
 */
export default function InteractiveGlow() {
  const x = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const y = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handlePointerLeave = () => {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.28),_rgba(6,182,212,0))] opacity-80 blur-[120px] mix-blend-screen md:h-64 md:w-64"
      style={{ x: smoothX, y: smoothY }}
    />
  );
}


