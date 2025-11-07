"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialAvatarProps {
  src?: string;
  name: string;
  gradient?: boolean;
}

export default function TestimonialAvatar({ src, name, gradient = true }: TestimonialAvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={cn(
        "relative h-16 w-16 overflow-hidden rounded-full bg-white/5 shadow-lg",
        gradient && "ring-4 ring-[rgba(139,92,246,0.45)] ring-offset-2 ring-offset-background",
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          sizes="64px"
          className="rounded-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-aurora text-lg font-semibold text-white">
          {initials}
        </div>
      )}
    </div>
  );
}
