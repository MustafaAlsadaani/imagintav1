"use client";

import { Children, ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type CardGridColumns = 2 | 3 | 4;
type CardGridGap = "default" | "comfortable" | "spacious";
type CardGridVariant = "standard" | "masonry" | "featured";

interface CardGridProps {
  children: ReactNode;
  columns?: CardGridColumns;
  gap?: CardGridGap;
  variant?: CardGridVariant;
  className?: string;
}

const GAP_MAP: Record<CardGridGap, string> = {
  default: "gap-8",
  comfortable: "gap-12",
  spacious: "gap-16",
};

export default function CardGrid({
  children,
  columns = 3,
  gap = "default",
  variant = "standard",
  className,
}: CardGridProps) {
  const items = Children.toArray(children) as ReactElement[];

  if (variant === "masonry") {
    return (
      <div className={cn("masonry-grid", className)}>
        {items.map((child, index) => (
          <motion.div
            key={child.key ?? index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="break-inside-avoid"
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr",
          GAP_MAP[gap],
          className
        )}
      >
        {items.map((child, index) => (
          <motion.div
            key={child.key ?? index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className={cn({
              "md:col-span-2 md:row-span-2": index === 0,
            })}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-1",
        columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-4",
        GAP_MAP[gap],
        className
      )}
    >
      {items.map((child, index) => (
        <motion.div
          key={child.key ?? index}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="h-full"
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

