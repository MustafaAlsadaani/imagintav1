"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LineWidth = "sm" | "md" | "lg";
type LineGradient = "aurora" | "sunset";
type LineAlign = "left" | "center" | "right";

const WIDTH_MAP: Record<LineWidth, string> = {
  sm: "w-16",
  md: "w-32",
  lg: "w-48",
};

const GRADIENT_MAP: Record<LineGradient, string> = {
  aurora: "bg-gradient-aurora",
  sunset: "bg-gradient-sunset",
};

const ALIGN_MAP: Record<LineAlign, string> = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

interface DecorativeLineProps {
  width?: LineWidth;
  gradient?: LineGradient;
  align?: LineAlign;
}

export default function DecorativeLine({
  width = "md",
  gradient = "aurora",
  align = "center",
}: DecorativeLineProps) {
  return (
    <div className={cn("flex", ALIGN_MAP[align])}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "h-1 origin-left rounded-full",
          WIDTH_MAP[width],
          GRADIENT_MAP[gradient],
          "shadow-[0_0_18px_rgba(139,92,246,0.35)]"
        )}
      />
    </div>
  );
}

