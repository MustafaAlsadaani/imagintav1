"use client";

import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const JOURNEY = [
  {
    stage: "Script",
    headline: "Frame the story",
    description:
      "Interviews, data sweeps, and tech audits reveal the plot. We storyboard every objective in Notion, map stakeholders, and align on success signals.",
    deliverables: ["Vision deck", "North star metrics", "Experience architecture"],
  },
  {
    stage: "Design",
    headline: "Craft the scenes",
    description:
      "Brand direction, content scripting, and interface design evolve in FigJam and Figma. Every iteration reviewed live with your team.",
    deliverables: ["Moodfilm & brand frames", "UX flows", "Interactive prototypes"],
  },
  {
    stage: "Build",
    headline: "Engineer the set",
    description:
      "Next.js builds, marketing automation, and integrations come together with QA and accessibility baked in.",
    deliverables: ["Production-ready repo", "Automation & CMS setup", "Performance QA"],
  },
  {
    stage: "Premier",
    headline: "Launch & amplify",
    description:
      "Campaigns, analytics, and partner enablement go live. We keep optimising with growth loops and support rituals.",
    deliverables: ["Launch playbooks", "Growth dashboards", "Training + office hours"],
  },
];

const SUPPORT = [
  {
    label: "Always-on cadence",
    detail: "Weekly progress reels, monthly retros, quarterly strategy rewrites. We narrate every decision transparently.",
  },
  {
    label: "Partner ecosystem",
    detail: "We liaise with Shopify, Google, Microsoft, and HubSpot so approvals and rollouts skip the queue.",
  },
  {
    label: "Security & reliability",
    detail: "Resilience checklists, compliance liaison, and monitoring keep the experience tight once live.",
  },
];

export default function OurApproach() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(160deg,#060312,#0b1220)] py-28 lg:py-32">
      <GradientOrb color="cyber" size="lg" className="left-[-18%] bottom-[12%] opacity-70" />
      <GradientOrb color="electric" size="md" className="right-[-16%] top-[14%] opacity-60" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 text-white">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]">
            Our approach is a directed experience
          </h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg">
            Think of Imaginta as your creative director, production crew, and growth lead in one. Every project follows a four-act arc that
            keeps story, execution, and performance aligned.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.65fr_0.35fr]">
          <WarmSpotlight intensity={0.7}>
            <motion.ol
              className="space-y-8 rounded-[36px] border border-white/12 bg-white/[0.06] p-10 backdrop-blur-2xl"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {JOURNEY.map((stage, index) => (
                <li key={stage.stage} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{stage.stage}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white md:text-2xl">{stage.headline}</h3>
                  <p className="text-sm text-white/70">{stage.description}</p>
                  <div className="grid gap-2 text-xs uppercase tracking-[0.32em] text-white/55 sm:grid-cols-3">
                    {stage.deliverables.map((deliverable) => (
                      <span key={deliverable} className="rounded-2xl border border-white/12 bg-white/[0.04] px-3 py-2 text-[11px]">
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </motion.ol>
          </WarmSpotlight>

          <div className="space-y-6">
            {SUPPORT.map((item, index) => (
              <WarmSpotlight key={item.label} intensity={0.65}>
                <motion.div
                  className="rounded-[28px] border border-white/12 bg-white/[0.05] p-6 text-sm text-white/75 backdrop-blur-xl"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, x: 24 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-200/75">{item.label}</p>
                  <p className="mt-3 text-white/65">{item.detail}</p>
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
                “Our approach feels like a film production schedule—each act builds on the previous, every stakeholder sees the plan, and
                the launch lands with precision.”
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45">Head of Brand · Fintech</p>
              </motion.div>
            </WarmSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
}
