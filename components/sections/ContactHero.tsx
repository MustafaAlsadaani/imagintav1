"use client";

import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiClock, FiGlobe, FiMessageSquare, FiPhoneCall } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const HERO_METRICS = [
  { icon: FiClock, label: "Average reply time", value: "< 60 minutes" },
  { icon: FiMessageSquare, label: "First action plan", value: "Within 72 hours" },
  { icon: FiGlobe, label: "Time zones covered", value: "CET · GMT · EST" },
];

const CONTACT_CHANNELS = [
  {
    title: "Book a strategy call",
    description: "Pick a slot that works best for you. We meet on Google Meet or Zoom with a shared agenda.",
    badge: "30-minute call",
    href: "#contact-form",
  },
  {
    title: "Send us a quick note",
    description: "Email a short summary of what you need. We respond with next steps and any questions.",
    badge: "Same-day reply",
    href: "mailto:launch@imaginta.com",
  },
  {
    title: "Request a full audit",
    description: "Share your website, marketing channels, and goals. We deliver a simple plan with pricing.",
    badge: "72-hour plan",
    href: "#contact-form",
  },
];

const HERO_STEPS = [
  {
    label: "Step 1 · Share your story",
    detail: "Tell us about your business, customers, and goals. Include any links or documents you already have.",
  },
  {
    label: "Step 2 · Review together",
    detail: "We study your brand, website, and marketing, then highlight the quick wins and smartest next moves.",
  },
  {
    label: "Step 3 · Clear action plan",
    detail: "You receive a short plan with recommended services, pricing ranges, timeline, and the team involved.",
  },
];

export default function ContactHero() {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  return (
    <section
      className="relative overflow-hidden bg-[rgba(10,23,38,0.95)] py-28 md:py-36 lg:py-40"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
        event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
        pointerX.set(x);
        pointerY.set(y);
      }}
      onPointerLeave={(event) => {
        event.currentTarget.style.setProperty("--pointer-x", "50%");
        event.currentTarget.style.setProperty("--pointer-y", "40%");
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(620px circle at var(--pointer-x, 50%) var(--pointer-y, 40%), rgba(0,229,229,0.26), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_84%_18%,rgba(230,0,230,0.14),transparent_64%),radial-gradient(circle_at_52%_78%,rgba(50,205,50,0.12),transparent_68%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.06]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 md:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            className="flex flex-col gap-10"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 34 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(0,229,229,0.32)] bg-[rgba(12,25,44,0.72)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-cyan">
                Contact Imaginta
              </span>
              <h1 className="text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[3.1rem]">
                Let’s talk about the results you want next.
              </h1>
              <p className="max-w-2xl text-base text-premium-text-secondary sm:text-lg">
                Share where your business stands today and what needs to improve. We’ll answer quickly, explain everything in plain
                language, and map out the smartest path forward.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {HERO_METRICS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="rounded-3xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.78)] p-5 text-sm text-premium-text"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-premium-text-secondary">
                    <metric.icon className="h-4 w-4 text-premium-cyan" />
                    {metric.label}
                  </div>
                  <p className="mt-3 text-xl font-heading font-semibold text-white drop-shadow-[0_0_18px_rgba(0,229,229,0.32)]">
                    {metric.value}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.32em]">
                <Link href="#contact-form" className="flex items-center gap-2">
                  Start the conversation
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="rounded-full px-8 py-4 text-sm font-semibold uppercase tracking-[0.32em]"
              >
                <Link href="#map" className="flex items-center gap-2">
                  See where we work
                  <FiPhoneCall className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 rounded-[36px] border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.82)] p-8 text-sm text-premium-text shadow-[0_26px_64px_rgba(5,15,32,0.55)]"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 38 }}
            animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-premium-text-secondary">Ways to get started</p>
            <div className="grid gap-4">
              {CONTACT_CHANNELS.map((channel) => (
                <Link
                  key={channel.title}
                  href={channel.href}
                  className="group flex flex-col gap-3 rounded-3xl border border-[rgba(0,229,229,0.16)] bg-[rgba(12,23,39,0.72)] p-5 transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.32)] hover:bg-[rgba(16,28,46,0.82)]"
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-premium-text-secondary">
                    <span>{channel.badge}</span>
                    <span className="text-premium-cyan group-hover:text-white">Open</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white">{channel.title}</h3>
                  <p className="text-sm text-premium-text-secondary">{channel.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="rounded-[34px] border border-[rgba(0,229,229,0.18)] bg-[rgba(12,23,39,0.8)] p-8 shadow-[0_24px_58px_rgba(5,15,32,0.52)]"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 42 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">What to expect</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {HERO_STEPS.map((step) => (
              <div key={step.label} className="rounded-3xl border border-[rgba(0,229,229,0.16)] bg-[rgba(10,20,36,0.78)] p-5">
                <span className="text-[11px] uppercase tracking-[0.32em] text-premium-text-secondary">{step.label}</span>
                <p className="mt-3 text-sm text-premium-text-secondary">{step.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-[rgba(230,0,230,0.22)] bg-[rgba(15,24,42,0.8)] p-6 text-sm text-premium-text-secondary">
            “Imaginta replied the same day, explained the plan in simple terms, and gave us a clear timeline. We felt confident from the
            first call.”
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">COO · Logistics team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

