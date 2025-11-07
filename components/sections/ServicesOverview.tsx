"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import MagneticContainer from "@/components/ui/MagneticContainer";
import { Button } from "@/components/ui/button";

const EXPERIENCE_LAYERS = [
  {
    title: "Foundation Intelligence",
    description:
      "Immersive discovery sprints reveal every friction point, opportunity, and stakeholder expectation across your digital estate.",
    bullets: [
      "Executive & user interviews",
      "Value proposition and KPI mapping",
      "Service blueprints and ecosystem diagrams",
    ],
  },
  {
    title: "Experience Language",
    description:
      "A modular design and content system translates strategy into visuals, interactions, and narratives that adapt in real time.",
    bullets: [
      "Brand choreography and tone of voice",
      "Product UX choreography and prototyping",
      "Motion, 3D, and sound design studies",
    ],
  },
  {
    title: "Launch & Amplify",
    description:
      "High-performance engineering, automation, and growth operations bring every surface to market — and keep it evolving.",
    bullets: [
      "Composable builds and performance ops",
      "Experimentation, lifecycle, and media",
      "Analytics, governance, and enablement",
    ],
  },
];

const SIGNATURE_STACKS = [
  {
    badge: "Create",
    title: "Flagship platforms & immersive sites",
    copy: "Story-driven web experiences, SaaS platforms, and experiential microsites engineered for speed, SEO, and accessibility.",
    highlights: [
      "Headless architecture with component libraries",
      "Realtime content workflows, localization, personalization",
      "QA automation, observability, and performance hardening",
    ],
    href: "/services#web",
  },
  {
    badge: "Grow",
    title: "Revenue engines & lifecycle orchestration",
    copy: "From first impression to retention, we orchestrate the entire funnel with experimentation baked into every sprint.",
    highlights: [
      "Acquisition campaigns, CRO, and conversion design",
      "Lifecycle automation, CRM, and retention journeys",
      "Attribution, dashboards, and BI for decision velocity",
    ],
    href: "/services#marketing",
  },
  {
    badge: "Design",
    title: "Unified brand, product, and content systems",
    copy: "Multi-sensory identities that align teams and audiences — ready for motion, product UI, and campaign storytelling.",
    highlights: [
      "Brand DNA, art direction, and narrative frameworks",
      "Design ops, prototyping, and accessibility patterns",
      "Launch collateral, experiential activations, and 3D",
    ],
    href: "/services#design",
  },
  {
    badge: "Guide",
    title: "Strategy, enablement & founder support",
    copy: "Fractional leadership to help scale-ups and enterprise teams move faster with clarity and confidence.",
    highlights: [
      "Go-to-market, pricing, and product strategy",
      "Operating models, RevOps, and capability roadmaps",
      "Workshops, playbooks, and onboarded hybrid squads",
    ],
    href: "/services#business",
  },
  {
    badge: "Protect",
    title: "Security, privacy & compliance programs",
    copy: "Launch bold ideas with enterprise-grade trust — from GDPR readiness to ongoing threat modeling and response.",
    highlights: [
      "Security audits, penetration testing, and remediation",
      "GDPR, ISO27001, and sector compliance orchestration",
      "Runbooks, monitoring, and training for every team",
    ],
    href: "/services#security",
  },
];

const EXPERIENCE_MATRIX = [
  {
    quadrant: "Spark",
    focus: "Vision to blueprint",
    cues: "Insight, alignment, and prioritised opportunity maps that galvanise leadership and teams.",
  },
  {
    quadrant: "Shape",
    focus: "Prototype to system",
    cues: "Design languages and interactive prototypes tested with users and stakeholders in tandem.",
  },
  {
    quadrant: "Ship",
    focus: "Build to release",
    cues: "Composable delivery that merges engineering excellence with growth, SEO, and accessibility ops.",
  },
  {
    quadrant: "Scale",
    focus: "Operate to optimise",
    cues: "Experimentation, analytics, and playbooks that keep the ecosystem adapting long after launch.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background-secondary/70 to-background-secondary py-32">
      <div className="absolute inset-0 opacity-70">
        <AnimatedMesh />
      </div>
      <GradientOrb color="electric" size="lg" className="left-[-18%] top-[-22%]" />
      <GradientOrb color="cyber" size="md" className="right-[-20%] bottom-[-18%]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <motion.span
              className="inline-block text-xs font-semibold uppercase tracking-[0.45em] text-electric"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              What we create
            </motion.span>
            <motion.h2
              className="text-balance text-4xl font-heading font-bold text-foreground md:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Comprehensive digital ecosystems crafted with precision and creativity.
            </motion.h2>
            <DecorativeLine gradient="aurora" align="left" />
            <motion.p
              className="max-w-3xl text-base text-foreground-secondary sm:text-lg"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
            >
              Imaginta embeds with your product, marketing, and leadership teams to orchestrate experiences that feel cinematic,
              convert with intent, and scale without chaos. Every engagement blends strategy, design, engineering, and growth into a
              single velocity stack.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" asChild className="gap-2">
                <Link href="/services">
                  Explore the playbook
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-white/25 text-foreground hover:border-electric hover:text-electric">
                <Link href="/contact">Co-design your roadmap</Link>
              </Button>
            </div>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Experience matrix</span>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {EXPERIENCE_MATRIX.map((item) => (
                <div key={item.quadrant} className="glass-card group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.05] p-6">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                    style={{ background: "radial-gradient(320px circle at 30% 0%, rgba(139,92,246,0.16), transparent 70%)" }}
                  />
                  <div className="relative z-10 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground-muted">{item.quadrant}</p>
                    <h3 className="text-lg font-heading font-semibold text-foreground">{item.focus}</h3>
                    <p className="text-sm leading-relaxed text-foreground-secondary">{item.cues}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {EXPERIENCE_LAYERS.map((layer, index) => (
            <MagneticContainer key={layer.title} intensity={10}>
              <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-8">
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: "radial-gradient(420px circle at 15% 10%, rgba(6,182,212,0.18), transparent 70%)" }}
                />
                <div className="relative z-10 space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground-muted">Layer 0{index + 1}</span>
                  <h3 className="text-2xl font-heading font-semibold text-foreground">{layer.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">{layer.description}</p>
                  <ul className="space-y-3 text-sm text-foreground-secondary">
                    {layer.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-electric">
                          <FaCheckCircle className="h-4 w-4" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MagneticContainer>
          ))}
        </motion.div>

        <div className="space-y-10">
          {SIGNATURE_STACKS.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
            >
              <MagneticContainer intensity={14}>
                <article className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-90"
                    style={{ background: "radial-gradient(560px circle at 20% 0%, rgba(244,114,182,0.14), transparent 70%)" }}
                  />

                  <div className="relative z-10 grid gap-8 md:grid-cols-[0.5fr_1fr]">
                    <div className="space-y-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">{stack.badge}</span>
                      <h3 className="text-2xl font-heading font-semibold text-foreground md:text-3xl">{stack.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">{stack.copy}</p>
                    </div>

                    <div className="space-y-4">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {stack.highlights.map((highlight) => (
                          <li key={highlight} className="glass-card flex items-start gap-3 rounded-3xl border border-white/5 bg-white/[0.05] p-5">
                            <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-electric">
                              <FaCheckCircle className="h-4 w-4" />
                            </span>
                            <span className="text-sm leading-relaxed text-foreground-secondary">{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      <motion.a
                        href={stack.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition-colors hover:text-neon"
                        whileHover={{ x: 4 }}
                      >
                        Explore delivery details
                        <FiArrowUpRight className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </article>
              </MagneticContainer>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="overflow-hidden rounded-4xl border border-white/10 bg-white/[0.04] p-10 backdrop-blur"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Partnership cadence</span>
              <h3 className="text-xl font-heading font-semibold text-foreground md:text-2xl">
                Hybrid squads designed to deliver momentum — from strategy pulse to sprint execution.
              </h3>
              <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                We plug Imaginta experts directly into your stack. Product strategists, designers, engineers, and growth leads operate
                alongside your team with transparent rituals, async-first collaboration, and measurable outcomes mapped to your
                north star metrics.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Strategy pulses", "Design labs", "Build sprints", "Growth amplification"].map((phase, index) => (
                <div key={phase} className="glass-card relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.05] p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground-muted">0{index + 1}</span>
                  <h4 className="mt-3 text-lg font-heading font-semibold text-foreground">{phase}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {index === 0 && "Monthly north star checkpoints that align leadership, product, and marketing priorities."}
                    {index === 1 && "Rapid co-creation sessions turning insights into validated prototypes and design assets."}
                    {index === 2 && "Composable engineering sprints with automation, QA, and documentation in lockstep."}
                    {index === 3 && "Experimentation, media, and lifecycle rituals that turn launches into compounding growth."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
