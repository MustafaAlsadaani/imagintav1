"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

type ShapeType = "circle" | "square" | "triangle" | "blob";
type ShapeColor = "electric" | "cyber" | "neon" | "accent";

const COLOR_MAP: Record<ShapeColor, string> = {
  electric: "bg-electric/25",
  cyber: "bg-cyber/25",
  neon: "bg-neon/25",
  accent: "bg-accent/25",
};

interface FloatingShapeProps {
  shape?: ShapeType;
  color?: ShapeColor;
  size?: number;
  delay?: number;
  style?: CSSProperties;
}

export default function FloatingShape({
  shape = "circle",
  color = "electric",
  size = 80,
  delay = 0,
  style,
}: FloatingShapeProps) {
  const dimension = `${size}px`;

  return (
    <motion.div
      className="absolute will-change-transform"
      style={style}
      initial={{ opacity: 0.25, y: 0 }}
      animate={{ opacity: [0.25, 0.5, 0.3], y: [-20, 10, -10] }}
      transition={{ duration: 18 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {renderShape(shape, color, dimension)}
    </motion.div>
  );
}

function renderShape(shape: ShapeType, color: ShapeColor, size: string) {
  switch (shape) {
    case "square":
      return (
        <motion.div
          className={COLOR_MAP[color] + " rounded-2xl blur-sm"}
          style={{ width: size, height: size }}
          animate={{ rotate: [0, 8, -6, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      );
    case "triangle":
      return (
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="blur-sm"
          animate={{ rotate: [0, -10, 6, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="50,0 100,100 0,100" className={`fill-current ${colorClass(color)}`} opacity={0.25} />
        </motion.svg>
      );
    case "blob":
      return (
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          className="blur-sm"
          animate={{ rotate: [0, 12, -12, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M54.5,-59.1C68.4,-44.7,75.1,-22.4,76.6,1.5C78.1,25.4,74.3,50.7,60.3,65.7C46.4,80.7,23.2,85.4,1.2,84.1C-20.8,82.9,-41.6,75.7,-57.9,61.5C-74.2,47.4,-85.9,26.2,-88.5,3.2C-91.1,-19.9,-84.7,-44.9,-69.6,-59.6C-54.5,-74.2,-30.8,-78.6,-7.7,-72.7C15.5,-66.7,31,-50.6,54.5,-59.1Z"
            className={`fill-current ${colorClass(color)}`}
            opacity={0.22}
          />
        </motion.svg>
      );
    case "circle":
    default:
      return (
        <motion.div
          className={`${COLOR_MAP[color]} rounded-full blur-sm`}
          style={{ width: size, height: size }}
          animate={{ rotate: [0, 6, -6, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      );
  }
}

function colorClass(color: ShapeColor) {
  switch (color) {
    case "electric":
      return "text-electric";
    case "cyber":
      return "text-cyber";
    case "neon":
      return "text-neon";
    case "accent":
    default:
      return "text-accent";
  }
}

