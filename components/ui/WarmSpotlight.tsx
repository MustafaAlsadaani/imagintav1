"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WarmSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: number;
  bleed?: number;
}

export default function WarmSpotlight({
  children,
  className,
  intensity = 1,
  bleed = 42,
  ...props
}: WarmSpotlightProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--warm-spotlight-opacity", prefersReducedMotion ? "0.22" : "0.08");
    containerRef.current.style.setProperty("--warm-spotlight-intensity", intensity.toString());
    containerRef.current.style.setProperty("--warm-spotlight-bleed", `${bleed}%`);
  }, [intensity, bleed, prefersReducedMotion]);

  const updateCoords = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    containerRef.current.style.setProperty("--warm-spotlight-x", `${x}%`);
    containerRef.current.style.setProperty("--warm-spotlight-y", `${y}%`);
  };

  const activate = () => {
    if (!containerRef.current) return;
    containerRef.current.dataset.active = "true";
    containerRef.current.style.setProperty(
      "--warm-spotlight-opacity",
      prefersReducedMotion ? "0.34" : "0.55",
    );
  };

  const deactivate = () => {
    if (!containerRef.current) return;
    containerRef.current.dataset.active = "false";
    containerRef.current.style.setProperty("--warm-spotlight-opacity", prefersReducedMotion ? "0.22" : "0.08");
  };

  return (
    <div
      ref={containerRef}
      className={cn("warm-spotlight-container", className)}
      onPointerMove={prefersReducedMotion ? undefined : updateCoords}
      onPointerEnter={activate}
      onPointerLeave={deactivate}
      onFocusCapture={activate}
      onBlurCapture={deactivate}
      {...props}
    >
      <div className="warm-spotlight-glow" aria-hidden />
      <div className="warm-spotlight-ambient" aria-hidden />
      {children}
    </div>
  );
}
