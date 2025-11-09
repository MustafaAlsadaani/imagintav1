"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  SiGoogle,
  SiShopify,
  SiHubspot,
  SiFigma,
  SiWordpress,
  SiUpwork,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/button";

const PARTNER_BRANDS: Array<{ name: string; icon: IconType; color: string; focus: string }> = [
  { name: "Google", icon: SiGoogle, color: "#4285F4", focus: "Search, ads, analytics" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47", focus: "Online stores and payments" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#2563EB", focus: "Cloud tools and support" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", focus: "CRM and automation" },
  { name: "Figma", icon: SiFigma, color: "#A259FF", focus: "Design collaboration" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B", focus: "Web publishing" },
  { name: "Upwork", icon: SiUpwork, color: "#14A800", focus: "Extra talent when needed" },
];

const DELIVERY_STEPS = [
  {
    phase: "Discover",
    tagline: "Understand your tools",
    description: "We review what you already use and suggest software that makes daily work easier.",
  },
  {
    phase: "Configure",
    tagline: "Set everything up",
    description: "Imaginta handles vendor calls, setup steps, and security checks so you avoid paperwork.",
  },
  {
    phase: "Activate",
    tagline: "Train your team",
    description: "Short tutorials and live sessions show your team how to use each tool with confidence.",
  },
  {
    phase: "Improve",
    tagline: "Review and grow",
    description: "Monthly check-ins share simple reports so you know what to keep, change, or add next.",
  },
];

const HIGHLIGHTS = [
  {
    title: "One message, one team",
    detail: "We coordinate updates and support so your staff can focus on customers instead of chasing vendors.",
  },
  {
    title: "Ready-to-go plans",
    detail: "Clear checklists keep every project on time and on budget.",
  },
  {
    title: "Easy-to-read reports",
    detail: "Simple dashboards show what is working so decisions stay quick and confident.",
  },
];

export default function CollaborationPartners() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_18%_18%,rgba(245,168,107,0.32),transparent_58%),radial-gradient(circle_at_80%_14%,rgba(125,211,252,0.24),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 blur-[220px] opacity-60 [background-image:radial-gradient(circle_at_0%_0%,rgba(245,168,107,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(125,211,252,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="surface-panel--lifted overflow-hidden rounded-[44px] px-8 py-10 md:px-12 md:py-12"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(245,168,107,0.24),transparent_55%),radial-gradient(circle_at_82%_24%,rgba(125,211,252,0.22),transparent_60%)] opacity-80" />
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
                Trusted partners
              </span>
              <h2 className="text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[2.8rem]">
                Big-name tools made simple for everyday businesses.
              </h2>
              <p className="text-base text-white/70 sm:text-lg">
                We set up and manage trusted platforms like Google, Shopify, Microsoft, and HubSpot. You see only the benefits—better
                visibility, smoother sales, and safer data—without getting stuck in technical tasks.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.32em] text-white/45">
                <span className="rounded-full border border-white/12 px-4 py-2">Faster setup</span>
                <span className="rounded-full border border-white/12 px-4 py-2">Clear training</span>
                <span className="rounded-full border border-white/12 px-4 py-2">Ongoing support</span>
              </div>
            </div>

            <div className="surface-panel rounded-[32px] px-6 py-6 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.32em] text-white/55">Snapshot</p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
                  <span>Platform partners</span>
                  <span className="text-lg font-semibold text-white">7+</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
                  <span>Avg. rollout time</span>
                  <span className="text-lg font-semibold text-white">21 days</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3">
                  <span>Enablement kits</span>
                  <span className="text-lg font-semibold text-white">Custom</span>
                </div>
              </div>
              <div className="mt-4 rounded-3xl border border-white/12 bg-white/[0.04] p-4 text-white/70">
                We begin with a quick review of your tools. You receive a simple action list that shows what to keep, add, or improve.
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="surface-panel--lifted rounded-[36px] p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {PARTNER_BRANDS.map((brand) => {
                const Icon = brand.icon;
                return (
                  <div key={brand.name} className="surface-panel rounded-3xl px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/10">
                        <Icon className="h-5 w-5" style={{ color: brand.color }} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{brand.name}</p>
                        <p className="text-xs text-white/60">{brand.focus}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="surface-panel rounded-[36px] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">How we roll out</p>
            <p className="mt-3 text-sm text-white/70">
              Our rollout plan is short and clear. Each step ends with ready-to-use assets, training, and a plain summary of the results.
            </p>
            <div className="mt-6 space-y-4">
              {DELIVERY_STEPS.map((step, index) => (
                <div key={step.phase} className="surface-panel rounded-3xl px-5 py-5 text-sm text-white/75">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/55">
                    <span>{step.phase}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <p className="mt-2 text-xs text-white/60">{step.tagline}</p>
                  <p className="mt-2 text-white/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="surface-panel rounded-3xl px-6 py-6 text-sm text-white/75">
              <h4 className="text-lg font-heading font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-white/70">{item.detail}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[32px] border border-white/12 bg-white/[0.06] px-10 py-12 text-center sm:flex-row sm:text-left"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="space-y-2 text-white/80">
            <h3 className="text-2xl font-semibold text-white">Let’s build your partner roadmap together.</h3>
            <p className="text-sm">
              In just 30 minutes we can show you the tools we recommend, the launch schedule, and how we keep everything running smoothly.
            </p>
          </div>
          <Button variant="gradient" size="lg" asChild className="rounded-full px-8 py-4 text-sm font-semibold">
            <Link href="/contact" className="flex items-center gap-3">
              Book a quick partner call
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
