"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  asMotion?: boolean;
}

export const InteractiveCard = React.forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, children, asMotion = false, onPointerMove, onPointerLeave, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const prefersReducedMotion = useReducedMotion();

    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const Component = asMotion ? motion.div : "div";

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
      const strength = Math.max(0, 1 - distance / maxDistance);
      node.style.setProperty("--card-magnetic-strength", strength.toString());
      onPointerMove?.(event);
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
      const node = containerRef.current;
      if (node) {
        node.style.setProperty("--card-magnetic-strength", "0");
      }
      onPointerLeave?.(event);
    };

    return (
      <Component
        ref={containerRef as React.Ref<HTMLDivElement>}
        className={cn("premium-card card-magnetic card-shine", className)}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

InteractiveCard.displayName = "InteractiveCard";
