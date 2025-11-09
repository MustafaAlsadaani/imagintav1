"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "default" | "split" | "centered" | "asymmetric" | "full-bleed";
type SectionBackground = "dark" | "darker" | "gradient" | "none";

interface SectionLayoutProps {
  children: ReactNode;
  variant?: SectionVariant;
  background?: SectionBackground;
  className?: string;
  visual?: ReactNode;
}

const BACKGROUND_STYLES: Record<SectionBackground, string> = {
  none: "",
  dark: "bg-background",
  darker: "bg-background-secondary",
  gradient:
    "bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),transparent_55%),radial-gradient(circle_at_bottom,_rgba(6,182,212,0.18),transparent_52%),linear-gradient(180deg,#070716,#030312)]",
};

export default function SectionLayout({
  children,
  variant = "default",
  background = "none",
  className,
  visual,
}: SectionLayoutProps) {
  const isFullBleed = variant === "full-bleed";

  return (
    <section className={cn("relative overflow-hidden", BACKGROUND_STYLES[background])}>
      <div
        className={cn(
          isFullBleed ? "w-full" : "container-padding mx-auto max-w-[1600px]",
          "section-padding-y",
          className
        )}
      >
        {renderVariant(variant, children, visual)}
      </div>
    </section>
  );
}

function renderVariant(variant: SectionVariant, children: ReactNode, visual?: ReactNode) {
  switch (variant) {
    case "split":
      return (
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 lg:gap-24">
          {children}
        </div>
      );
    case "centered":
      return <div className="mx-auto max-w-4xl text-center">{children}</div>;
    case "asymmetric":
      return (
        <div className="grid gap-12 md:grid-cols-5">
          <div className="space-y-8 md:col-span-3">{children}</div>
          <div className="space-y-8 md:col-span-2">{visual}</div>
        </div>
      );
    case "full-bleed":
      return <div className="w-full">{children}</div>;
    default:
      return <div className="mx-auto max-w-7xl">{children}</div>;
  }
}

