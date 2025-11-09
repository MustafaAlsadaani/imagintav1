"use client";

import Link from "next/link";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiPlayCircle } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const HERO_TAGS = [
  "Clear digital plans",
  "Websites that work everywhere",
  "Marketing that brings leads",
  "Security built in",
];

const HERO_STATS = [
  { label: "Average launch time", value: "18 days" },
  { label: "Typical sales increase", value: "3.4×" },
  { label: "Businesses supported", value: "26+" },
];

const HERO_STEPS = [
  { title: "Plan", description: "We learn about your goals and create a simple roadmap you can approve quickly." },
  { title: "Build", description: "Our team designs, writes, and develops everything while you get clear updates each week." },
  { title: "Grow", description: "We launch, track results, and adjust marketing so more customers discover and trust you." },
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const glowGradient = useMotionValue(
    "radial-gradient(520px circle at 50% 50%, rgba(0,255,255,0.25), transparent 70%)",
  );

  return (
    <section
      className="relative overflow-hidden border-b border-cyber-neutral/30 bg-cyber-bg py-28 md:py-32 lg:py-40"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        glowGradient.set(`radial-gradient(520px circle at ${x}px ${y}px, rgba(0,255,255,0.25), transparent 70%)`);
      }}
      onPointerLeave={() => {
        glowGradient.set("radial-gradient(520px circle at 50% 50%, rgba(0,255,255,0.25), transparent 70%)");
      }}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: glowGradient }} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,255,255,0.18),transparent_55%),radial-gradient(circle_at_84%_16%,rgba(176,38,255,0.16),transparent_60%),radial-gradient(circle_at_50%_84%,rgba(57,255,20,0.14),transparent_65%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.06]" />

      {!prefersReducedMotion ? <HeroParticleField /> : null}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 md:px-8 lg:px-10">
        <motion.div
          className="flex w-full max-w-4xl flex-col items-center gap-6 text-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyber-primary/35 bg-cyber-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-cyber-primary">
            Welcome to Imaginta
          </span>
          <h1 className="text-balance text-4xl font-heading font-bold text-white drop-shadow-[0_0_28px_rgba(0,255,255,0.32)] sm:text-5xl lg:text-[3.4rem]">
            Your creative partner for simple, powerful digital transformation.
          </h1>
          <p className="max-w-3xl text-lg text-cyber-text-secondary">
            We help regular business owners build strong brands, friendly websites, and clear growth plans. Our team handles the tech and creative work so you win more customers and save time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.32em] text-cyber-text-secondary/70">
            {HERO_TAGS.map((tag) => (
              <span key={tag} className="rounded-full border border-cyber-neutral/50 bg-cyber-bg/70 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em]"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start your project
                <FiArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full border border-cyber-neutral/45 bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyber-text-secondary transition-all duration-300 hover:border-cyber-primary/40 hover:text-white"
            >
              <Link href="/services" className="flex items-center gap-2">
                Explore our services
                <FiPlayCircle className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid w-full max-w-5xl gap-4 sm:grid-cols-3"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-[26px] border border-cyber-neutral/40 bg-cyber-bg/78 px-6 py-6 text-left text-cyber-text"
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.2),transparent_70%)]" />
              </span>
              <p className="relative z-10 text-3xl font-heading font-semibold text-white drop-shadow-[0_0_18px_rgba(0,255,255,0.38)]">
                {stat.value}
              </p>
              <p className="relative z-10 mt-3 text-[11px] uppercase tracking-[0.38em] text-cyber-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-18 relative w-full max-w-5xl overflow-hidden rounded-[34px] border border-cyber-neutral/40 bg-cyber-bg/82 p-8 text-left text-sm text-cyber-text shadow-[0_24px_95px_rgba(2,10,26,0.6)]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,255,255,0.2),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(176,38,255,0.18),transparent_65%)] opacity-70" />
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-left text-xs uppercase tracking-[0.35em] text-cyber-text-secondary">
              How we work
              <span className="text-lg font-heading font-semibold tracking-normal text-white sm:text-xl">
                Three clear steps to launch and grow your business online.
              </span>
              <p className="text-sm normal-case tracking-normal text-cyber-text-secondary">
                Our designers, developers, marketers, and security specialists work together in easy two-week cycles. You always know what
                comes next and how each step helps your business.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {HERO_STEPS.map((step, index) => (
                <div key={step.title} className="relative overflow-hidden rounded-[24px] border border-cyber-neutral/45 bg-cyber-bg/78 p-5">
                  <span className="absolute left-5 top-5 text-[11px] uppercase tracking-[0.38em] text-cyber-text-secondary/70">
                    0{index + 1}
                  </span>
                  <p className="mt-8 text-base font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-sm text-cyber-text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] border border-cyber-neutral/45 bg-cyber-bg/76 px-6 py-5 text-sm text-cyber-text-secondary">
              “Imaginta turned our launch runway into an orchestrated premiere. The reveal landed like a prophecy—and the telemetry still climbs.”
              <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-cyber-text-secondary/75">
                Chief Strategy Officer · Global SaaS Collective
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroParticleField() {
  const particles = Array.from({ length: 28 }).map((_, index) => ({
    id: `hero-particle-${index}`,
    size: 6 + Math.random() * 10,
    top: Math.random() * 100,
    left: Math.random() * 100,
    duration: 7 + Math.random() * 10,
    delay: Math.random() * 4,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0))] opacity-70"
          style={{ width: particle.size, height: particle.size, top: `${particle.top}%`, left: `${particle.left}%` }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-14, 0, 14],
            x: [0, Math.random() * 14 - 7, 0],
          }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}


