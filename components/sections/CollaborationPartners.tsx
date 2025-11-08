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
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const PARTNER_BRANDS: Array<{ name: string; icon: IconType; color: string; focus: string }> = [
  { name: "Google", icon: SiGoogle, color: "#4285F4", focus: "Search · Ads · Analytics" },
  { name: "Shopify", icon: SiShopify, color: "#95BF47", focus: "Commerce · Payments" },
  { name: "Microsoft", icon: FaMicrosoft, color: "#2563EB", focus: "Cloud · Copilot" },
  { name: "HubSpot", icon: SiHubspot, color: "#FF7A59", focus: "CRM · RevOps" },
  { name: "Figma", icon: SiFigma, color: "#A259FF", focus: "Design Systems" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B", focus: "Publishing · Scale" },
  { name: "Upwork", icon: SiUpwork, color: "#14A800", focus: "Talent Pods" },
];

const DELIVERY_STEPS = [
  {
    phase: "Discover",
    tagline: "Map the stack",
    description:
      "We audit your current tools, pinpoint gaps, and shortlist partner solutions that deliver immediate wins.",
  },
  {
    phase: "Configure",
    tagline: "Handle approvals",
    description:
      "Imaginta drives vendor conversations, security reviews, and licensing so your team avoids admin overload.",
  },
  {
    phase: "Activate",
    tagline: "Launch with clarity",
    description:
      "Launch playbooks, live training, and short tutorials ensure every teammate knows how to use the new tools.",
  },
  {
    phase: "Optimise",
    tagline: "Grow with data",
    description:
      "Monthly strategy sessions and plain-language dashboards show where growth is coming from and what to improve next.",
  },
];

const QUICK_WINS = [
  {
    title: "One message, one team",
    detail: "Forget juggling support portals—our partner managers coordinate everything on your behalf.",
  },
  {
    title: "Launch-ready blueprints",
    detail: "Certified templates and migration checklists keep projects on schedule and under budget.",
  },
  {
    title: "Metrics that matter",
    detail: "We connect partner data into a single dashboard so you always know how progress ties to revenue.",
  },
];

export default function CollaborationPartners() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-28" data-stickman-section="partners">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary/80 to-background" />
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_top,_rgba(248,113,113,0.45),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.3),_transparent_60%)]" />

      <div className="container-custom relative z-10 space-y-20">
        <motion.div
          className="grid gap-10 rounded-[36px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-200/90">
              Partner ecosystem
            </span>
            <div className="space-y-4">
              <h2 className="text-balance text-4xl font-heading font-semibold text-white sm:text-5xl">
                Enterprise alliances, delivered in plain language.
              </h2>
              <p className="text-lg text-white/70">
                We negotiate partner approvals, wire up integrations, train teams, and translate every vendor update into next steps.
                You get the upside of Google, Shopify, Microsoft, HubSpot, and more—without extra process overhead.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-4 text-sm text-white/80">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">How it feels</p>
                <p className="mt-2 text-white">
                  One Slack channel. One integrated roadmap. Partner escalations handled within 24 hours.
                </p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-4 text-sm text-white/80">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">What you control</p>
                <p className="mt-2 text-white">
                  KPIs, budget guardrails, and customer priorities. We own the partner checklists and playbooks.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              <span className="rounded-full border border-white/12 px-4 py-2">Launch ready faster</span>
              <span className="rounded-full border border-white/12 px-4 py-2">Compliance handled</span>
              <span className="rounded-full border border-white/12 px-4 py-2">Training included</span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-white/80">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">Snapshot</p>
              <div className="grid gap-3">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="text-sm">Platform partners</span>
                  <span className="text-lg font-semibold text-white">7+</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="text-sm">Avg. rollout time</span>
                  <span className="text-lg font-semibold text-white">21 days</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="text-sm">Live dashboards</span>
                  <span className="text-lg font-semibold text-white">Real-time</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/[0.04] p-4 text-sm text-white/75">
              <p>
                Every engagement starts with a partner audit. We map the stack, close any compliance gaps, and schedule enablement sessions tailored to your team.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start"
        >
          <WarmSpotlight className="h-full" intensity={0.88}>
            <motion.div
              className="relative h-full overflow-hidden rounded-[36px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-2xl shadow-[0_45px_120px_rgba(10,10,40,0.45)]"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
            {!prefersReducedMotion && (
              <motion.div
                className="pointer-events-none absolute inset-[-40%] bg-[conic-gradient(from_120deg,_rgba(249,115,22,0.6),rgba(139,92,246,0.5),rgba(34,211,238,0.6),rgba(249,115,22,0.6))] opacity-35 blur-3xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
              />
            )}

            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">Trusted platforms</p>
                <p className="mt-1 text-sm text-white/70">We maintain approvals and enablement with leading ecosystems.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {PARTNER_BRANDS.map((brand) => {
                  const Icon = brand.icon;
                  return (
                    <motion.div
                      key={brand.name}
                      className="group flex items-center gap-4 rounded-3xl border border-white/12 bg-white/[0.08] px-4 py-4 text-sm text-white/80 transition-all duration-300"
                      whileHover={
                        prefersReducedMotion
                          ? undefined
                          : {
                              y: -3,
                              borderColor: "rgba(251,191,36,0.32)",
                              backgroundColor: "rgba(255,255,255,0.15)",
                            }
                      }
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10">
                        <Icon className="h-5 w-5" style={{ color: brand.color }} />
                      </span>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-white">{brand.name}</p>
                        <p className="text-xs text-white/60">{brand.focus}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/30 p-6 text-sm text-white/75">
                <p className="font-semibold text-white">What we manage</p>
                <ul className="mt-3 space-y-2 text-xs text-white/70">
                  <li>Partner negotiations, compliance reviews, and roadmap alignment.</li>
                  <li>Shared documentation hub with playbooks, status, and training replays.</li>
                  <li>Quarterly innovation sessions with platform specialists.</li>
                </ul>
              </div>
            </div>
            </motion.div>
          </WarmSpotlight>

          <WarmSpotlight className="h-full" intensity={0.85}>
            <motion.div
              className="rounded-[36px] border border-white/12 bg-white/[0.05] p-8 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">How we roll out</p>
            <p className="mt-2 text-sm text-white/70">
              A transparent timeline keeps stakeholders aligned from day one. Every stage ships assets, training, and measurement.
            </p>

            <div className="relative mt-8 space-y-6">
              <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-white/15 sm:block" />
              {DELIVERY_STEPS.map((step, index) => (
                <motion.div
                  key={step.phase}
                  className="relative flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/75 transition-all duration-300"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -2,
                          borderColor: "rgba(251,191,36,0.3)",
                          backgroundColor: "rgba(255,255,255,0.12)",
                        }
                  }
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">
                    0{index + 1}
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-white">{step.phase}</p>
                    <p className="text-xs text-white/60">{step.tagline}</p>
                    <p className="text-xs leading-relaxed text-white/60">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            </motion.div>
          </WarmSpotlight>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_WINS.map((item) => (
            <WarmSpotlight key={item.title} className="h-full" intensity={0.82}>
              <motion.div
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{item.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 rounded-[32px] border border-white/12 bg-white/[0.05] px-10 py-12 text-center sm:flex-row sm:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-white">Let’s build your partner roadmap together.</h3>
            <p className="text-sm text-foreground-secondary">
              Discover the right tools, the launch timeline, and the support structure. 30 minutes is all it takes to see the plan.
            </p>
          </div>
          <Button variant="gradient" size="lg" asChild className="rounded-full px-8 py-4">
            <Link href="/contact" className="flex items-center gap-3">
              Talk to a partner specialist
              <FiArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
