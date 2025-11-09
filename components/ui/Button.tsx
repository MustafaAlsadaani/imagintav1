"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,229,229,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#040a16] disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-premium-cyan text-premium-bg shadow-premium hover:-translate-y-[3px] hover:bg-premium-magenta hover:text-white hover:shadow-[0_26px_58px_rgba(5,15,32,0.62),0_0_44px_rgba(230,0,230,0.28)] active:bg-premium-magenta/80 active:scale-95",
        gradient:
          "bg-premium-cyan text-premium-bg shadow-[0_16px_38px_rgba(5,15,32,0.45)] transition-[transform,box-shadow,color,background-color] duration-500 hover:-translate-y-[3px] hover:bg-premium-cyan/90 hover:text-premium-bg active:bg-premium-cyan/85 active:scale-95",
        glass:
          "glass-creative text-premium-text-secondary hover:text-white hover:shadow-[0_0_36px_rgba(0,229,229,0.26)] hover:border-[rgba(230,0,230,0.4)] active:scale-[0.98]",
        glow:
          "bg-[linear-gradient(140deg,#00e5e5,#e600e6)] text-white shadow-[0_0_38px_rgba(0,229,229,0.32)] hover:shadow-[0_0_64px_rgba(230,0,230,0.34)]",
        secondary:
          "border border-[rgba(0,229,229,0.22)] bg-[rgba(12,22,38,0.6)] text-premium-text-secondary hover:text-white hover:border-[rgba(0,229,229,0.35)] hover:bg-[rgba(16,28,46,0.8)] active:scale-95",
        outline:
          "border border-[rgba(0,229,229,0.6)] text-premium-cyan hover:bg-[rgba(0,229,229,0.08)] hover:text-white",
        ghost:
          "text-premium-text-secondary hover:text-premium-cyan hover:bg-[rgba(12,23,39,0.65)]",
        link:
          "text-premium-accent underline-offset-4 hover:text-premium-green hover:underline hover:[text-shadow:0_0_4px_rgba(50,205,50,0.2)]",
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
          "relative overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
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
