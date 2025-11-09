"use client";

import { cn } from "@/lib/utils";

interface WarmSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
}

export default function WarmSpotlight({ children, className, ...props }: WarmSpotlightProps) {
  return (
    <div className={cn("rounded-2xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.76)] shadow-[0_14px_28px_rgba(5,15,32,0.45)] transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]", className)} {...props}>
      {children}
    </div>
  );
}
