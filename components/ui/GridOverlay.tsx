"use client";

import { cn } from "@/lib/utils";

interface GridOverlayProps {
  className?: string;
}

export function GridOverlay({ className }: GridOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-20 overflow-hidden opacity-40 mix-blend-soft-light",
        className,
      )}
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <defs>
          <pattern
            id="grid-pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(139,92,246,0.08)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect fill="url(#grid-pattern)" width="100%" height="100%" />
      </svg>
    </div>
  );
}

export default GridOverlay;

