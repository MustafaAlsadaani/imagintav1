"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiRefreshCcw, FiSmile, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";

interface ScenarioChoice {
  label: string;
  outcome: string;
  highlight: string;
}

interface Scenario {
  id: string;
  title: string;
  tag: string;
  description: string;
  prompt: string;
  choices: ScenarioChoice[];
}

const SCENARIOS: Scenario[] = [
  {
    id: "fresh-launch",
    title: "I need a new website",
    tag: "New launch",
    description: "You want to introduce a new offer but do not have a website, mailing list, or marketing plan.",
    prompt: "What should we focus on first?",
    choices: [
      {
        label: "A) Build the website and story",
        outcome: "We design a simple website, write clear messages, and add a lead form so visitors know how to contact you.",
        highlight: "Most clients see new enquiries in the first week.",
      },
      {
        label: "B) Start collecting leads",
        outcome: "We set up a landing page, email list, and social posts so interested people can sign up before launch day.",
        highlight: "Average waitlist growth: 300+ subscribers in 30 days.",
      },
    ],
  },
  {
    id: "rebrand-sprint",
    title: "My brand looks outdated",
    tag: "Refresh",
    description: "You need fresh visuals and messaging in under a month without stopping daily operations.",
    prompt: "How do we refresh everything without stress?",
    choices: [
      {
        label: "A) Plan the full makeover",
        outcome: "We prepare a shared checklist for logo, colours, website pages, and marketing so every update launches together.",
        highlight: "Recent projects finished on time with zero rush days.",
      },
      {
        label: "B) Update customer touchpoints first",
        outcome: "We redesign key pages, brochures, and social profiles first so customers see the change right away.",
        highlight: "Typical result: more quote requests within two weeks.",
      },
    ],
  },
  {
    id: "global-rollout",
    title: "Our tools are messy",
    tag: "Support",
    description: "Your team uses many platforms and needs a clear plan to manage training, updates, and security.",
    prompt: "How can Imaginta simplify the tools?",
    choices: [
      {
        label: "A) One clear handbook",
        outcome: "We document every tool, add easy videos, and hold a live session so the whole team works the same way.",
        highlight: "Teams save about 3 hours each week searching for answers.",
      },
      {
        label: "B) Easy dashboards and alerts",
        outcome: "We connect your marketing, sales, and support data to one simple dashboard with friendly weekly emails.",
        highlight: "Managers make faster decisions with real numbers.",
      },
    ],
  },
];

export default function WinningRace() {
  const prefersReducedMotion = useReducedMotion();
  const [activeScenarioId, setActiveScenarioId] = useState<string>(SCENARIOS[0].id);
  const [selectedChoice, setSelectedChoice] = useState<ScenarioChoice | null>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const glowGradient = useMotionTemplate`radial-gradient(650px circle at ${pointerX}px ${pointerY}px, rgba(236,72,153,0.35), transparent)`;

  const activeScenario = useMemo(
    () => SCENARIOS.find((scenario) => scenario.id === activeScenarioId) ?? SCENARIOS[0],
    [activeScenarioId],
  );

  const handleSelectScenario = (scenarioId: string) => {
    setActiveScenarioId(scenarioId);
    setSelectedChoice(null);
  };

  const handleSelectChoice = (choice: ScenarioChoice) => {
    setSelectedChoice(choice);
  };

  return (
    <section
      className="relative overflow-hidden section-surface py-24 md:py-32 lg:py-40"
      onPointerMove={(event) => {
        pointerX.set(event.clientX);
        pointerY.set(event.clientY);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ backgroundImage: glowGradient }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_12%_16%,rgba(236,72,153,0.5),transparent_58%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.45),transparent_60%),radial-gradient(circle_at_40%_82%,rgba(79,70,229,0.4),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 blur-[180px] opacity-60 [background-image:radial-gradient(circle_at_0%_0%,rgba(236,72,153,0.2),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(6,182,212,0.2),transparent_60%)]" />

      {!prefersReducedMotion ? <ParticleField /> : null}

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
            Choose your situation
          </span>
          <h2 className="mt-6 text-balance text-3xl font-heading font-bold text-white sm:text-4xl lg:text-[3rem]">
            Pick the scenario that matches your business today.
          </h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg">
            Tap a card to see how Imaginta would help. Each option explains our first move and the benefit you can expect.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {SCENARIOS.map((scenario) => {
            const isActive = scenario.id === activeScenarioId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => handleSelectScenario(scenario.id)}
                className={`group overflow-hidden rounded-[28px] border p-6 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                  isActive
                    ? "border-white/30 bg-white/[0.16] shadow-[0_40px_100px_rgba(12,10,40,0.6)]"
                    : "border-white/10 bg-white/[0.06] hover:border-white/18 hover:bg-white/[0.1]"
                }`}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/55">
                  {scenario.tag}
                </span>
                <p className="mt-5 text-lg font-semibold text-white">{scenario.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{scenario.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-white/45">
                  See how we would help
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.1] p-8 text-left text-white/80 shadow-[0_55px_140px_rgba(12,10,38,0.6)] backdrop-blur-3xl md:p-10"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">Mission brief</p>
            <h3 className="text-2xl font-heading font-semibold text-white">{activeScenario.prompt}</h3>
            <p className="max-w-2xl text-sm text-white/70">
              {activeScenario.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {activeScenario.choices.map((choice) => {
              const isSelected = selectedChoice?.label === choice.label;
              return (
                <motion.button
                  key={choice.label}
                  type="button"
                  onClick={() => handleSelectChoice(choice)}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  className={`rounded-3xl border px-5 py-5 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 ${
                    isSelected
                      ? "border-white/35 bg-white/[0.18] shadow-[0_26px_70px_rgba(13,11,40,0.45)]"
                      : "border-white/12 bg-white/[0.08] hover:border-white/20 hover:bg-white/[0.12]"
                  }`}
                >
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.32em] text-white/60">
                    <FiStar className="h-4 w-4" />
                    {choice.label}
                  </div>
                  <p className="mt-3 text-sm text-white/75">{choice.outcome}</p>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-orange-200/80">
                    <FiSmile className="h-3.5 w-3.5" /> {choice.highlight}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {selectedChoice ? (
              <motion.div
                key={selectedChoice.label}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/[0.12] px-6 py-6 text-sm text-white/80 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/55">Outcome unlocked</p>
                  <p className="mt-2 text-base text-white">{selectedChoice.outcome}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.32em] text-orange-200/80">{selectedChoice.highlight}</p>
                </div>
                <Button
                  variant="glass"
                  size="lg"
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white/85"
                  onClick={() => setSelectedChoice(null)}
                >
                  Try another option
                  <FiRefreshCcw className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-[28px] border border-white/12 bg-white/[0.08] px-6 py-6 text-sm text-white/75 backdrop-blur-2xl sm:flex-row"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.32em] text-white/55">
            <span>Average launch time · 18 days</span>
            <span>Typical sales lift · 3.4×</span>
            <span>Businesses helped · 26+</span>
          </div>
          <Button asChild variant="gradient" size="lg" className="rounded-full px-7 py-4 text-sm font-semibold">
            <a href="/contact" className="flex items-center gap-2">
              Contact us to plan your next step
              <FiArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, index) => ({
        id: `particle-${index}`,
        size: 6 + Math.random() * 10,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 4,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(255,255,255,0))] opacity-80"
          style={{ width: particle.size, height: particle.size, top: `${particle.top}%`, left: `${particle.left}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-20, 0, 20],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

