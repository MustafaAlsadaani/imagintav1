"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-electric text-background shadow-glow-electric hover:-translate-y-[2px] hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]",
        gradient:
          "bg-gradient-aurora bg-[length:200%_200%] text-white shadow-[0_25px_60px_rgba(12,6,24,0.55)] transition-[transform,background-position,box-shadow] hover:bg-[length:220%_220%] hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(139,92,246,0.45)]",
        glass:
          "glass-creative text-foreground-secondary hover:text-foreground hover:bg-white/10",
        glow:
          "bg-gradient-aurora text-white shadow-[0_0_45px_rgba(139,92,246,0.35)] hover:shadow-[0_0_65px_rgba(6,182,212,0.45)]",
        secondary:
          "border border-white/15 bg-background/40 text-foreground-secondary hover:text-foreground hover:border-white/25 hover:bg-white/10",
        outline:
          "border border-electric/40 text-electric hover:bg-electric/10",
        ghost:
          "text-foreground-secondary hover:text-electric hover:bg-white/5",
        link: "text-electric underline-offset-4 hover:text-cyber hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn("transition-transform duration-300 ease-cinematic", buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
