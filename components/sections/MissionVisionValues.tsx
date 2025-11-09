"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const CORE_STATEMENTS = [
  {
    key: "mission",
    title: "Mission",
    blurb: "Make digital transformation feel cinematic, fast, and dependable for teams who refuse to slow down.",
    bullets: [
      "Every engagement shipped in plain language",
      "Senior talent embedded, no hand-offs",
      "Creativity and performance measured together",
    ],
  },
  {
    key: "vision",
    title: "Vision",
    blurb: "Imaginta is the embedded studio brands call when they need direction, production, and growth in a single heartbeat.",
    bullets: [
      "Bridge storytelling, product, and growth",
      "Lead partnerships so clients skip vendor friction",
      "Deliver experiences that feel alive and measurable",
    ],
  },
  {
    key: "values",
    title: "Values",
    blurb: "The rituals and mindsets that keep our squad precise, curious, and human-first.",
    bullets: [
      "Innovation: experiment boldly, ship responsibly",
      "Integrity: transparency over theatre",
      "Excellence: polish the craft, sweat the details",
      "Collaboration: co-create, never silo",
      "Empathy: design with care for teams and audiences",
      "Security: resilience baked into every decision",
    ],
  },
];

export default function MissionVisionValues() {
  const prefersReducedMotion = useReducedMotion();
  const [activeKey, setActiveKey] = useState<string>(CORE_STATEMENTS[0].key);

  const activeStatement = CORE_STATEMENTS.find((item) => item.key === activeKey) ?? CORE_STATEMENTS[0];

  return (
    <section className="relative overflow-hidden section-surface-soft py-28 lg:py-32">
      <GradientOrb color="cyber" size="lg" className="left-[-18%] top-[-22%] opacity-70" />
      <GradientOrb color="electric" size="md" className="right-[-15%] bottom-[-15%] opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center text-white">
          <motion.h2
            className="text-4xl font-heading font-bold md:text-5xl lg:text-[3rem]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What guides Imaginta every day
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-3xl text-base text-white/70 sm:text-lg"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
          >
            We keep a tight feedback loop between vision and execution. Every decision ladders up to why Imaginta exists, where we are
            going, and the rituals that keep us sharp.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div className="space-y-4">
            {CORE_STATEMENTS.map((statement) => {
              const isActive = statement.key === activeKey;
              return (
                <WarmSpotlight key={statement.key}>
                  <button
                    type="button"
                    onClick={() => setActiveKey(statement.key)}
                    className={`group flex w-full items-center justify-between rounded-[26px] border px-6 py-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-cyber-primary/35 bg-cyber-bg/80 text-white"
                        : "border-cyber-neutral/30 bg-cyber-bg/75 text-cyber-text-secondary hover:border-cyber-primary/35 hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.32em]">{statement.title}</span>
                    <motion.span
                      className="text-xs uppercase tracking-[0.4em] text-cyber-text-secondary"
                      animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                      transition={{ duration: 0.3 }}
                    >
                      View
                    </motion.span>
                  </button>
                </WarmSpotlight>
              );
            })}
          </div>

          <WarmSpotlight>
            <motion.div
              key={activeStatement.key}
              className="relative overflow-hidden rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/80 p-10 text-sm text-cyber-text"
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.12),transparent_65%)] opacity-60" />
              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyber-text-secondary">{activeStatement.title}</span>
                  <h3 className="mt-3 text-2xl font-heading font-semibold text-white md:text-3xl">{activeStatement.blurb}</h3>
                </div>

                <ul className="grid gap-3 text-sm text-cyber-text-secondary sm:grid-cols-2">
                  {activeStatement.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-2xl border border-cyber-neutral/30 bg-cyber-bg/75 px-4 py-3">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="rounded-2xl border border-cyber-neutral/30 bg-cyber-bg/75 p-5 text-sm text-cyber-text-secondary">
                  “Our team translates bold vision into accountable delivery. Strategy writers, motion designers, engineers, and growth
                  analysts move in lockstep. Clients never wonder what comes next.”
                </div>
              </div>
            </motion.div>
          </WarmSpotlight>
        </div>
      </div>
    </section>
  );
}

