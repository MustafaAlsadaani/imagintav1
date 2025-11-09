"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiCheck, FiClock, FiHash } from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type BundleTier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  outcome: string;
  timeline: string;
  id: string;
};

const BUNDLES: BundleTier[] = [
  {
    id: "foundation",
    name: "Foundation Starter Pack",
    price: "€2,999",
    cadence: "Project • 4-6 weeks",
    tagline: "Get a professional website, brand basics, and marketing kickoff in one package.",
    features: [
      "Brand identity workshop and logo refresh",
      "Responsive website with up to 5 pages",
      "Easy-to-follow content management training",
      "Basic SEO and contact forms to capture leads",
    ],
    outcome: "Perfect when you need a strong online presence fast without managing multiple vendors.",
    timeline: "Kickoff within 5 days · first version in 14 days.",
  },
  {
    id: "accelerator",
    name: "Growth Accelerator Squadron",
    price: "€5,499 / mo",
    cadence: "Retainer • 6 month plan",
    tagline: "Ongoing design, marketing, and website support to grow your audience.",
    features: [
      "Monthly website and landing page updates",
      "Search, social, and email campaigns managed for you",
      "Monthly reporting call with clear next steps",
      "Training and playbooks for your internal team",
    ],
    outcome: "Ideal for businesses that want predictable marketing support and steady lead generation.",
    timeline: "Onboard in 10 days · campaigns live in week 2.",
  },
  {
    id: "command",
    name: "Command & Defend Enterprise",
    price: "Custom quote",
    cadence: "Partnership • 12 month roadmap",
    tagline: "Full digital transformation support with security and strategy built in.",
    features: [
      "Dedicated strategist, designer, developer, and marketer",
      "Advanced security reviews and compliance support",
      "Automation and system integrations tailored to your tools",
      "Quarterly planning workshops with leadership",
    ],
    outcome: "Best for larger teams that need a long-term partner to manage complex digital projects.",
    timeline: "Discovery workshop in 2 weeks · roadmap launch in 30 days.",
  },
];

const variants = {
  enter: { opacity: 0, y: -20 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function ServicesBundles() {
  const [activeId, setActiveId] = useState<string>(BUNDLES[0]?.id ?? "");

  return (
    <section className="relative overflow-hidden border-b border-cyber-neutral/20 bg-cyber-bg/98 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,255,255,0.12),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(176,38,255,0.18),transparent_65%)] opacity-70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          <div className="space-y-6">
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-cyber-accent/30 bg-cyber-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-cyber-accent"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              Service bundles
            </motion.span>
            <motion.h2
              className="text-3xl font-heading font-bold text-white md:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              Simple packages for every stage of your business.
            </motion.h2>
            <motion.p
              className="text-lg text-cyber-text-secondary"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              Choose the bundle that matches your goals. Each option includes web development, marketing, design, business advice, and
              cyber security support tailored to your needs.
            </motion.p>
            <div className="grid gap-4">
              {BUNDLES.map((bundle) => {
                const isActive = bundle.id === activeId;
                return (
                  <button
                    key={bundle.id}
                    type="button"
                    onClick={() => setActiveId(bundle.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                      isActive
                        ? "border-cyber-primary/45 bg-cyber-primary/8 text-white shadow-[0_0_22px_rgba(0,255,255,0.25)]"
                        : "border-cyber-neutral/60 bg-cyber-neutral/20 text-cyber-text-secondary hover:border-cyber-primary/35 hover:bg-cyber-neutral/30"
                    }`}
                    aria-pressed={isActive}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-base font-semibold">{bundle.name}</p>
                      <LuSparkles className={`h-5 w-5 ${isActive ? "text-cyber-primary" : "text-cyber-text-secondary/60"}`} />
                    </div>
                    <p className="mt-1 text-sm text-cyber-text-secondary/90">{bundle.tagline}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[34px] border border-cyber-primary/15" />
            <div className="relative overflow-hidden rounded-[34px] border border-cyber-neutral/30 bg-cyber-bg/88 p-8 shadow-[0_30px_120px_rgba(2,16,32,0.5)]">
              <AnimatePresence mode="wait">
                {BUNDLES.filter((bundle) => bundle.id === activeId).map((bundle) => (
                  <motion.div
                    key={bundle.id}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="space-y-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div className="space-y-2">
                        <h3 className="text-3xl font-heading font-bold text-white">{bundle.name}</h3>
                        <p className="text-base text-cyber-text-secondary">{bundle.tagline}</p>
                      </div>
                      <div className="rounded-2xl border border-cyber-primary/30 bg-cyber-bg/80 px-4 py-3 text-right text-sm text-cyber-primary">
                        <p className="text-xl font-semibold text-white">{bundle.price}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-cyber-text-secondary">{bundle.cadence}</p>
                      </div>
                    </div>
                    <ul className="grid gap-3 text-sm text-cyber-text-secondary">
                      {bundle.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 rounded-2xl border border-cyber-neutral/25 bg-cyber-bg/75 px-4 py-3">
                          <span className="mt-[2px] flex size-6 items-center justify-center rounded-full border border-cyber-primary/35 bg-cyber-primary/10 text-cyber-primary">
                            <FiCheck className="h-3.5 w-3.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-2xl border border-cyber-neutral/25 bg-cyber-neutral/25 px-5 py-4 text-sm text-cyber-text-secondary">
                      <div className="flex flex-wrap items-center gap-3 text-cyber-highlight/90">
                        <FiHash className="h-4 w-4" />
                        <span className="text-xs uppercase tracking-[0.32em] text-cyber-highlight/80">Outcome</span>
                      </div>
                      <p className="mt-2 text-cyber-text-secondary">{bundle.outcome}</p>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyber-neutral/25 bg-cyber-bg/70 px-5 py-4 text-sm text-cyber-text-secondary">
                      <div className="flex items-center gap-2 text-cyber-primary">
                        <FiClock className="h-4 w-4" />
                        <span className="uppercase tracking-[0.3em] text-xs text-cyber-text-secondary">Timeline</span>
                      </div>
                      <p className="text-cyber-text-secondary">{bundle.timeline}</p>
                    </div>
                    <Button asChild variant="gradient" size="lg" className="w-full rounded-full">
                      <Link href="/contact">Discuss this bundle</Link>
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

