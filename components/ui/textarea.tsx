import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex w-full rounded-lg border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.68)] px-3 py-2 text-sm text-premium-text shadow-[0_12px_26px_rgba(5,15,32,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] placeholder:text-premium-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(50,205,50,0.3)] focus-visible:border-[rgba(0,229,229,0.6)] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };

