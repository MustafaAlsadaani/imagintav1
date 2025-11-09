"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroVariant = "centered" | "split" | "asymmetric" | "minimal";
type HeroHeight = "default" | "tall" | "full";

interface HeroLayoutProps {
  children: ReactNode;
  variant?: HeroVariant;
  height?: HeroHeight;
  className?: string;
  visual?: ReactNode;
}

type SectionProps = HTMLAttributes<HTMLElement>;

const HEIGHT_MAP: Record<HeroHeight, string> = {
  default: "min-h-[80vh]",
  tall: "min-h-[90vh]",
  full: "min-h-screen",
};

export default function HeroLayout({
  children,
  variant = "centered",
  height = "default",
  className,
  visual,
  ...rest
}: HeroLayoutProps & SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden section-padding-y",
        HEIGHT_MAP[height],
        className
      )}
      {...rest}
    >
      {renderVariant(variant, children, visual)}
    </section>
  );
}

function renderVariant(variant: HeroVariant, children: ReactNode, visual?: ReactNode) {
  switch (variant) {
    case "split":
      return (
        <div className="container-padding mx-auto grid h-full max-w-[1400px] items-center gap-16 md:grid-cols-2 lg:gap-24">
          {children}
        </div>
      );
    case "asymmetric":
      return (
        <div className="container-padding mx-auto grid h-full max-w-[1600px] items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">{children}</div>
          <div className="md:col-span-5">{visual}</div>
        </div>
      );
    case "minimal":
      return (
        <div className="container-padding mx-auto flex h-full max-w-4xl flex-col justify-center space-y-10">
          {children}
        </div>
      );
    default:
      return (
        <div className="container-padding mx-auto flex h-full max-w-5xl flex-col items-center justify-center text-center">
          {children}
        </div>
      );
  }
}

