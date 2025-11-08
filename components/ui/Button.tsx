"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 ease-cinematic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-electric text-background shadow-[0_18px_45px_rgba(99,102,241,0.35)] hover:-translate-y-[2px] hover:shadow-[0_26px_60px_rgba(99,102,241,0.45)]",
        gradient:
          "bg-[linear-gradient(120deg,#f97316,#7c3aed,#0ea5e9)] animate-gradient-pan text-white shadow-[0_22px_55px_rgba(139,92,246,0.32),0_14px_38px_rgba(6,182,212,0.25)] transition-[transform,box-shadow,filter] hover:shadow-[0_30px_70px_rgba(139,92,246,0.42),0_20px_48px_rgba(6,182,212,0.3)] hover:brightness-[1.05] active:scale-[0.98]",
        glass:
          "glass-creative text-white/75 hover:text-white hover:bg-white/12 hover:shadow-[0_0_32px_rgba(6,182,212,0.22)] hover:border-white/20 active:scale-[0.98]",
        glow:
          "bg-[linear-gradient(140deg,#a855f7,#0ea5e9)] text-white shadow-[0_0_45px_rgba(14,165,233,0.45)] hover:shadow-[0_0_70px_rgba(236,72,153,0.45)]",
        secondary:
          "border border-white/15 bg-background/40 text-foreground-secondary hover:text-foreground hover:border-white/25 hover:bg-white/10 active:scale-[0.98]",
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
  isLoading?: boolean;
  ripple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, ripple = true, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading;
    return (
      <Comp
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-transform duration-300 ease-cinematic",
          ripple && "has-ripple",
          !ripple && "no-ripple",
          isLoading && "button-loading pointer-events-none",
          isDisabled && "button-disabled",
          buttonVariants({ variant, size }),
          className
        )}
        disabled={isDisabled}
        data-loading={isLoading || undefined}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
