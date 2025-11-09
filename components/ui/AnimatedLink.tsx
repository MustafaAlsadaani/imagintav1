"use client";

import Link, { LinkProps } from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AnimatedLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const MotionLink = motion(Link);

const AnimatedLink = forwardRef<HTMLAnchorElement, AnimatedLinkProps>(({ className, children, icon, ...props }, ref) => {
  return (
    <MotionLink
      ref={ref}
      {...props}
      className={cn(
        "link-gradient inline-flex items-center gap-2 text-sm font-semibold text-cyber-primary transition-colors duration-300 hover:text-cyber-secondary-hover",
        className,
      )}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <span>{children}</span>
      <span className="inline-flex h-5 w-5 items-center justify-center text-xs">
        {icon ?? <FiArrowRight className="h-4 w-4" />}
      </span>
    </MotionLink>
  );
});

AnimatedLink.displayName = "AnimatedLink";

export default AnimatedLink;
