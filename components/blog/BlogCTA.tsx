"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRightCircle, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(0,255,255,0.22),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(176,38,255,0.18),transparent_65%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.05]" />
      <div className="relative z-10 mx-auto max-w-4xl rounded-[40px] border border-cyber-primary/25 bg-cyber-bg/85 p-12 text-center shadow-[0_45px_160px_rgba(2,10,26,0.7)]">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/45 bg-cyber-neutral/25 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-cyber-highlight/90"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            Join the signal list
          </motion.span>
          <h2 className="max-w-2xl text-balance text-3xl font-heading font-bold text-white md:text-4xl">
            Receive the most actionable drop each week before it hits the public feed.
          </h2>
          <p className="max-w-2xl text-lg text-cyber-text-secondary">
            We send one neon signal every Friday—playbooks, frameworks, or scripts that keep founders and marketing leaders shipping with
            cinematic pace. No fluff, only the win-the-race intel.
          </p>

          <form className="mt-4 flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
            <Input
              type="email"
              required
              placeholder="you@company.com"
              className="h-12 rounded-full border border-cyber-neutral/45 bg-cyber-bg/70 px-5 text-base text-cyber-text placeholder:text-cyber-text-secondary/60 focus:border-cyber-primary/50 focus:ring-cyber-primary/40 sm:max-w-sm"
            />
            <Button type="submit" variant="gradient" size="lg" className="h-12 rounded-full px-8">
              <span className="inline-flex items-center gap-2">
                Subscribe
                <FiSend className="h-4 w-4" />
              </span>
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-cyber-text-secondary/85">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/40 bg-cyber-neutral/25 px-4 py-2">
              <span className="size-2 rounded-full bg-cyber-primary" />
              No spam, one email max
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyber-neutral/40 bg-cyber-neutral/25 px-4 py-2">
              <span className="size-2 rounded-full bg-cyber-highlight" />
              Early access to playbooks
            </span>
          </div>

          <div className="mt-6">
            <Button variant="secondary" size="lg" className="rounded-full border border-cyber-neutral/45 bg-transparent px-8 py-4 text-base text-cyber-text-secondary hover:border-cyber-primary/40 hover:text-white">
              <Link href="/contact" className="inline-flex items-center gap-2">
                Request private workshop
                <FiArrowRightCircle className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

