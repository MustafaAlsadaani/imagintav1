"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FormColumns = 1 | 2;
type FormSpacing = "default" | "comfortable";

interface FormLayoutProps {
  children: ReactNode;
  columns?: FormColumns;
  spacing?: FormSpacing;
  submitSection?: ReactNode;
  className?: string;
}

const GAP_MAP: Record<FormSpacing, string> = {
  default: "gap-y-8",
  comfortable: "gap-y-12",
};

export default function FormLayout({
  children,
  columns = 1,
  spacing = "default",
  submitSection,
  className,
}: FormLayoutProps) {
  const isTwoColumn = columns === 2;

  return (
    <form className={cn("space-y-12", className)}>
      <div
        className={cn(
          isTwoColumn ? "grid md:grid-cols-2 gap-x-8" : "max-w-2xl",
          GAP_MAP[spacing]
        )}
      >
        {children}
      </div>

      {submitSection ? (
        <div className="mt-12 border-t border-white/10 pt-8">{submitSection}</div>
      ) : null}
    </form>
  );
}

