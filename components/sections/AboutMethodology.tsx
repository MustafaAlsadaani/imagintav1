"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const STAGES = [
  {
    title: "Discover",
    summary: "We listen to your story, learn about your customers, and review your tools. You get a clear plan in plain words.",
    outputs: ["Goal-setting call", "Customer and market notes", "Website & tech review"],
  },
  {
    title: "Create",
    summary: "Designers, writers, developers, and marketers work together so your brand, website, and campaigns launch smoothly.",
    outputs: ["Brand and design drafts", "Website build sprints", "Marketing content"],
  },
  {
    title: "Grow",
    summary: "We launch, track results, and make simple recommendations to keep traffic, leads, and security on track.",
    outputs: ["Campaign launch", "Weekly progress update", "Security & support check-ins"],
  },
];

const SUPPORT = [
  {
    label: "Tool setup help",
    detail: "We manage approvals and integrations with platforms like Shopify, Google, Microsoft, and HubSpot.",
  },
  {
    label: "Security baseline",
    detail: "Every launch includes basic security checks, privacy steps, and easy-to-follow backup plans.",
  },
  {
    label: "Growth reports",
    detail: "Simple dashboards and monthly recaps show what is working and what we will improve next.",
  },
];

export default function AboutMethodology() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-soft py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)] opacity-70" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">A clear process from idea to long-term support</h2>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Imaginta follows three easy stages. You always know what we are working on, what we delivered, and how it helps your business.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <WarmSpotlight>
            <motion.div
              className="grid gap-6 rounded-[36px] border border-cyber-neutral/35 bg-cyber-bg/80 p-10 text-sm text-cyber-text"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {STAGES.map((stage, index) => (
                <div key={stage.title} className="rounded-3xl border border-cyber-neutral/30 bg-cyber-bg/76 p-6">
                  <div className="flex flex-wrap items-center justify-between text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">
                    <span>Stage 0{index + 1}</span>
                    <span>{stage.title}</span>
                  </div>
                  <p className="mt-4 text-sm text-cyber-text-secondary">{stage.summary}</p>
                  <div className="mt-4 grid gap-2 text-xs uppercase tracking-[0.3em] text-cyber-text-secondary sm:grid-cols-3">
                    {stage.outputs.map((output) => (
                      <span key={output} className="rounded-2xl border border-cyber-neutral/28 bg-cyber-bg/74 px-3 py-2 text-[11px]">
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
            <WarmSpotlight key={item.label}>
              <motion.div
                className="rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/78 p-6 text-sm text-cyber-text"
                initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">{item.label}</p>
                <p className="mt-2 text-cyber-text-secondary">{item.detail}</p>
              </motion.div>
            </WarmSpotlight>
          ))}

          <WarmSpotlight>
            <motion.div
              className="rounded-[28px] border border-cyber-neutral/35 bg-cyber-bg/78 p-6 text-sm text-cyber-text"
              initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
            >
              We manage everything from design to ongoing marketing and security. You get one reliable team that keeps your digital
              presence strong.
            </motion.div>
          </WarmSpotlight>
        </div>
        </div>
      </div>
    </section>
  );
}
