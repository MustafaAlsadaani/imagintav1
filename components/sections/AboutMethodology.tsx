"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const STAGES = [
  {
    title: "Intelligence",
    summary: "Discovery sprints that capture brand voice, customer motivations, technical constraints, and success targets.",
    outputs: ["Stakeholder interviews", "Market + competitor rip", "Tech + data audit"],
  },
  {
    title: "Direction",
    summary: "Joint planning sessions orchestrate narrative arcs, experience architecture, and growth experiments.",
    outputs: ["Vision script", "Experience blueprint", "Activation map"],
  },
  {
    title: "Delivery",
    summary: "Design, engineering, growth, and partner ops work in parallel—releasing polished chapters every month.",
    outputs: ["Design + build sprints", "Campaigns + nurture", "Enablement + support"],
  },
];

const SUPPORT = [
  {
    label: "Partnership engine",
    detail: "We handle Shopify, Google, Microsoft, and HubSpot approvals, freeing your team from vendor bureaucracy.",
  },
  {
    label: "Security baseline",
    detail: "Every launch includes resilience testing, compliance alignment, and clear incident playbooks.",
  },
  {
    label: "Growth telemetry",
    detail: "Dashboards, experiment tracking, and plain-language recaps keep momentum visible to leadership.",
  },
];

export default function AboutMethodology() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#05030f,#0c1426)] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-70" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">Methodology that keeps momentum alive</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Imaginta works in orchestrated phases. Each stage has clear rituals, deliverables, and visibility so your team knows what is
            shipping and why it matters.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <WarmSpotlight intensity={0.68}>
            <motion.div
              className="grid gap-6 rounded-[36px] border border-white/12 bg-white/[0.06] p-10 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {STAGES.map((stage, index) => (
                <div key={stage.title} className="rounded-3xl border border-white/12 bg-white/[0.05] p-6">
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-white/60">
                    <span>Stage 0{index + 1}</span>
                    <span>{stage.title}</span>
                  </div>
                  <p className="mt-4 text-sm text-white/70">{stage.summary}</p>
                  <div className="mt-4 grid gap-2 text-xs uppercase tracking-[0.3em] text-white/55 sm:grid-cols-3">
                    {stage.outputs.map((output) => (
                      <span key={output} className="rounded-2xl border border-white/12 bg-white/[0.06] px-3 py-2 text-[11px]">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </WarmSpotlight>

          <div className="space-y-6">
            {SUPPORT.map((item, index) => (
              <WarmSpotlight key={item.label} intensity={0.64}>
                <motion.div
                  className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-sm text-white/75 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{item.label}</p>
                  <p className="mt-2 text-white/65">{item.detail}</p>
                </motion.div>
              </WarmSpotlight>
            ))}

            <WarmSpotlight intensity={0.62}>
              <motion.div
                className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-sm text-white/70 backdrop-blur-xl"
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
              >
                We manage the entire lifecycle across design, engineering, marketing, partner ops, and analytics—so nothing gets lost between
                departments.
              </motion.div>
            </WarmSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
