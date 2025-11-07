import { cn } from "@/lib/utils";

type GradientOrbColor = "electric" | "cyber" | "neon" | "accent";
type GradientOrbSize = "sm" | "md" | "lg";

interface GradientOrbProps {
  className?: string;
  color?: GradientOrbColor;
  size?: GradientOrbSize;
}

const COLOR_MAP: Record<GradientOrbColor, string> = {
  electric: "bg-electric/20",
  cyber: "bg-cyber/20",
  neon: "bg-neon/20",
  accent: "bg-accent/20",
};

const SIZE_MAP: Record<GradientOrbSize, string> = {
  sm: "h-56 w-56",
  md: "h-80 w-80",
  lg: "h-[32rem] w-[32rem]",
};

export function GradientOrb({
  className,
  color = "electric",
  size = "md",
}: GradientOrbProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-3xl opacity-40",
        COLOR_MAP[color],
        SIZE_MAP[size],
        className,
      )}
    />
  );
}

export default GradientOrb;

