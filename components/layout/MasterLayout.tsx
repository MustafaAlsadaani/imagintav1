"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type WidthPreset = "default" | "narrow" | "wide" | "full";
type SpacingPreset = "comfortable" | "compact" | "spacious";

interface MasterLayoutProps {
  children: ReactNode;
  maxWidth?: WidthPreset;
  spacing?: SpacingPreset;
  className?: string;
}

const WIDTH_MAP: Record<WidthPreset, string> = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[1600px]",
  full: "w-full",
};

const SPACING_MAP: Record<SpacingPreset, string> = {
  comfortable: "py-24 md:py-32",
  compact: "py-16 md:py-24",
  spacious: "py-32 md:py-48",
};

const isDev = process.env.NODE_ENV !== "production";

export default function MasterLayout({
  children,
  maxWidth = "default",
  spacing = "comfortable",
  className,
}: MasterLayoutProps) {
  return (
    <div className={cn("relative", SPACING_MAP[spacing])}>
      <div
        className={cn(
          "mx-auto w-full px-6 lg:px-8",
          WIDTH_MAP[maxWidth],
          className
        )}
      >
        {children}
      </div>

      {isDev && maxWidth !== "full" ? (
        <div className="pointer-events-none absolute inset-0 hidden select-none md:block">
          <div
            className={cn(
              "mx-auto grid h-full w-full grid-cols-12 gap-4 opacity-20",
              WIDTH_MAP[maxWidth]
            )}
          >
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="border-l border-dashed border-white/20"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

