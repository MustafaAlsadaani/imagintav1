"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaFacebookF, FaLink } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface SocialShareProps {
  quote: string;
  author: string;
  className?: string;
}

const shareLinks = (
  quote: string,
  author: string,
): { label: string; icon: JSX.Element; href: string }[] => {
  const encoded = encodeURIComponent(`“${quote}” — ${author}`);
  const url = encodeURIComponent("https://www.imaginta.com");
  return [
    {
      label: "Share on Twitter",
      icon: <FaTwitter className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?text=${encoded}&url=${url}`,
    },
    {
      label: "Share on LinkedIn",
      icon: <FaLinkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encoded}`,
    },
    {
      label: "Share on Facebook",
      icon: <FaFacebookF className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
  ];
};

export default function SocialShare({ quote, author, className }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`“${quote}” — ${author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Clipboard copy failed", error);
    }
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {shareLinks(quote, author).map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-creative flex h-9 w-9 items-center justify-center rounded-full text-foreground-secondary transition-colors duration-300 hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
      <motion.button
        type="button"
        onClick={handleCopy}
        className="glass-creative flex h-9 w-9 items-center justify-center rounded-full text-foreground-secondary transition-colors duration-300 hover:text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Copy testimonial"
      >
        <FaLink className="h-4 w-4" />
      </motion.button>
      <span className="text-xs text-foreground-muted transition-opacity duration-300" aria-live="polite">
        {copied ? "Copied!" : ""}
      </span>
    </div>
  );
}
