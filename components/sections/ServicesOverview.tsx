"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const SERVICE_PILLARS = [
  {
    title: "Web Development",
    description: "We design and build websites that are easy to use on phones, tablets, and computers.",
    highlights: [
      "Custom designs that match your brand",
      "Online stores and booking systems",
      "Simple SEO steps so more people find you",
    ],
  },
  {
    title: "Marketing",
    description: "We help customers discover you through search, social media, and helpful content.",
    highlights: [
      "Search engine improvements that boost visibility",
      "Social media posts and ads that attract leads",
      "Email and content plans that keep buyers engaged",
    ],
  },
  {
    title: "Business Support",
    description: "We guide your strategy, improve graphics, and keep data safe as you grow.",
    highlights: [
      "Brand identity, logos, and visuals that stand out",
      "Growth plans and market research for clear decisions",
      "Cyber security audits and GDPR support",
    ],
  },
];

const SERVICE_STACKS = [
  {
    badge: "Web Development",
    title: "Websites built for growth",
    copy: "Custom websites, landing pages, and e-commerce stores that are fast, secure, and easy to edit.",
    href: "/services#web",
  },
  {
    badge: "Marketing",
    title: "Campaigns that generate leads",
    copy: "SEO, paid ads, and social content that bring new customers without wasting your budget.",
    href: "/services#marketing",
  },
  {
    badge: "Graphic Design",
    title: "Brand identity and visuals",
    copy: "Logos, brand guides, and graphics that make your business look professional everywhere.",
    href: "/services#design",
  },
  {
    badge: "Business Development",
    title: "Strategy and planning support",
    copy: "Market research, pricing advice, and growth plans that keep your business moving forward.",
    href: "/services#business",
  },
  {
    badge: "Cyber Security",
    title: "Protection and compliance",
    copy: "Security reviews, data protection, and GDPR guidance so your customers feel safe.",
    href: "/services#security",
  },
];

const WORKFLOW_STEPS = [
  {
    label: "Discover",
    detail: "We learn about your goals, customers, and current tools. You get a simple plan in plain words.",
  },
  {
    label: "Create",
    detail: "Designers, developers, and marketers work together while you receive weekly progress notes.",
  },
  {
    label: "Launch",
    detail: "We publish your website, campaigns, and graphics with clear instructions for your team.",
  },
  {
    label: "Support",
    detail: "We monitor results, improve what needs attention, and stay available for future ideas.",
  },
];

export default function ServicesOverview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_16%_18%,rgba(245,168,107,0.35),transparent_58%),radial-gradient(circle_at_86%_14%,rgba(125,211,252,0.24),transparent_60%),radial-gradient(circle_at_42%_78%,rgba(79,70,229,0.24),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 blur-[220px] opacity-60 [background-image:radial-gradient(circle_at_0%_0%,rgba(245,168,107,0.22),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(125,211,252,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="surface-panel--lifted overflow-hidden rounded-[44px] px-8 py-10 md:px-12 md:py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(245,168,107,0.22),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(125,211,252,0.22),transparent_60%)] opacity-80" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/60">
                Our services
              </span>
              <h2 className="text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[2.8rem]">
                Everything you need to build, promote, and protect your business online.
              </h2>
              <p className="text-base text-white/70 sm:text-lg">
                Imaginta combines web development, marketing, graphic design, business development, and cyber security under one roof.
                You get one helpful team that explains every step in simple language.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="gradient" asChild className="rounded-full px-6 py-3 text-sm font-semibold">
                  <Link href="/services" className="flex items-center gap-2">
                    See all services
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="glass" asChild className="rounded-full px-6 py-3 text-sm font-semibold text-white/80">
                  <Link href="/contact" className="flex items-center gap-2">
                    Talk to our team
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="surface-panel rounded-[32px] px-6 py-6 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.32em] text-white/55">Why small businesses choose us</p>
              <div className="mt-4 space-y-3 text-white/70">
                <p>• One partner for design, development, marketing, and security.</p>
                <p>• Plain-language updates that explain the work and the results.</p>
                <p>• Friendly support even after launch to keep improvements coming.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {SERVICE_PILLARS.map((pillar) => (
            <div key={pillar.title} className="surface-panel rounded-[32px] px-6 py-6">
              <h3 className="text-xl font-heading font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-white/70">{pillar.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/65">
                {pillar.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/70" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {SERVICE_STACKS.map((stack) => (
            <article key={stack.title} className="surface-panel rounded-[28px] px-6 py-6 transition-transform duration-300 hover:-translate-y-1">
              <span className="text-xs font-semibold uppercase tracking-[0.4em] text-white/55">{stack.badge}</span>
              <h3 className="mt-3 text-lg font-heading font-semibold text-white">{stack.title}</h3>
              <p className="mt-2 text-sm text-white/70">{stack.copy}</p>
              <Link href={stack.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white">
                Learn more
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 surface-panel--subtle rounded-[32px] px-8 py-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4 text-sm text-white/75">
              <p className="text-xs uppercase tracking-[0.35em] text-white/55">How working with us feels</p>
              <p>
                Our process is steady and transparent. You see the plan, the progress, and the benefits without needing to ask for them.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {WORKFLOW_STEPS.map((step, index) => (
                <div key={step.label} className="surface-panel rounded-3xl px-5 py-5 text-sm text-white/75">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.32em] text-white/55">
                    <span>{step.label}</span>
                    <span>0{index + 1}</span>
                  </div>
                  <p className="mt-2 text-white/70">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
