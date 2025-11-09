"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContentLayoutVariant = "prose" | "split-content" | "sidebar" | "full-width";

interface ContentLayoutProps {
  children: ReactNode;
  layout?: ContentLayoutVariant;
  className?: string;
  sidebar?: ReactNode;
}

export default function ContentLayout({
  children,
  layout = "prose",
  className,
  sidebar,
}: ContentLayoutProps) {
  switch (layout) {
    case "split-content":
      return (
        <div className={cn("mx-auto grid max-w-6xl gap-16 md:grid-cols-2", className)}>
          {children}
        </div>
      );
    case "sidebar":
      return (
        <div className={cn("mx-auto grid max-w-7xl gap-12 md:grid-cols-12", className)}>
          <div className="md:col-span-8 space-section">{children}</div>
          <aside className="md:col-span-4 space-section space-y-8">{sidebar}</aside>
        </div>
      );
    case "full-width":
      return <div className={cn("w-full space-section", className)}>{children}</div>;
    default:
      return <div className={cn("prose-wrapper mx-auto max-w-3xl", className)}>{children}</div>;
  }
}

