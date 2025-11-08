"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import MagneticContainer from "@/components/ui/MagneticContainer";
import { Button } from "@/components/ui/button";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const EXPERIENCE_LAYERS = [
  {
    title: "Plan the project",
    description:
      "We learn how your business works, who you serve, and what success looks like so the plan fits real goals.",
    bullets: [
      "Simple workshops with your team",
      "Clear goals, timelines, and budget ranges",
      "Customer journey and content outline",
    ],
  },
  {
    title: "Design the experience",
    description:
      "We turn the plan into friendly layouts, copy, and visuals that match your brand and guide people to take action.",
    bullets: [
      "Brand visuals, messaging, and tone",
      "Page and funnel wireframes to review",
      "Prototypes you can click through",
    ],
  },
  {
    title: "Build, launch, and support",
    description:
      "We develop, test, and launch your website or campaign, then stay close with the tracking and updates you need.",
    bullets: [
      "Fast, secure builds and integrations",
      "SEO setup, analytics, and automation",
      "Training, handover, and support options",
    ],
  },
];

const SIGNATURE_STACKS = [
  {
    badge: "Websites",
    title: "Website design & development",
    copy: "Custom websites, online stores, and web apps built to load fast, rank well on Google, and work on every device.",
    highlights: [
      "Built for phones, tablets, and desktops",
      "Simple editing so your team can refresh content",
      "Search engine setup that helps customers find you",
    ],
    benefit: "Benefit: Customers stay longer and buy more, increasing your revenue.",
    href: "/services#web",
  },
  {
    badge: "Marketing",
    title: "Digital marketing & lead generation",
    copy: "Campaigns that bring the right visitors to your site and turn them into enquiries, bookings, and sales.",
    highlights: [
      "SEO means making your site show up first in search results",
      "Ads, email, and social media managed in one plan",
      "Landing pages and reports that show what works",
    ],
    benefit: "Benefit: Get seen by the right people and turn them into loyal buyers.",
    href: "/services#marketing",
  },
  {
    badge: "Branding",
    title: "Branding & visual design",
    copy: "Logos, visual systems, and campaign assets that keep every touchpoint consistent and easy to understand.",
    highlights: [
      "Logo design, colour palettes, and easy-to-share assets",
      "Templates for social posts, proposals, and ads",
      "Clear brand guides that keep every message on-track",
    ],
    benefit: "Benefit: Make your brand memorable so customers recognise and trust you.",
    href: "/services#design",
  },
  {
    badge: "Strategy",
    title: "Business and digital strategy support",
    copy: "Hands-on guidance for pricing, offers, and operations so you can make confident decisions and stay on track.",
    highlights: [
      "Growth plans with step-by-step actions",
      "Sales journeys that guide customers from first visit to purchase",
      "Training sessions so your team understands each change",
    ],
    benefit: "Benefit: Expand safely and spot new opportunities without the guesswork.",
    href: "/services#business",
  },
  {
    badge: "Security",
    title: "Cybersecurity & compliance",
    copy: "Protect customer data and keep your business online with gap reports, action plans, and ongoing monitoring.",
    highlights: [
      "Security checkups and penetration tests",
      "GDPR explained in plain language with clear action steps",
      "24/7 monitoring alerts and easy-to-follow response plans",
    ],
    benefit: "Benefit: Avoid hacks and fines while keeping customer trust strong.",
    href: "/services#security",
  },
];

const EXPERIENCE_MATRIX = [
  {
    quadrant: "Plan",
    focus: "Turn goals into a clear blueprint",
    cues: "Agree on what great looks like, who we’re helping, and how success will be measured.",
  },
  {
    quadrant: "Design",
    focus: "Create the content and visuals",
    cues: "Sketch layouts, write copy, and build prototypes you can review and approve quickly.",
  },
  {
    quadrant: "Build",
    focus: "Develop, test, and integrate",
    cues: "Code the website, connect the tools, and check everything works perfectly before launch.",
  },
  {
    quadrant: "Grow",
    focus: "Improve with real data",
    cues: "Watch the numbers, run experiments, and roll out updates that keep results climbing.",
  },
];

export default function ServicesOverview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-background via-background-secondary/70 to-background-secondary py-32"
      data-stickman-section="services-overview"
    >
      <div className="absolute inset-0 opacity-60">
        <AnimatedMesh />
      </div>
      <GradientOrb color="electric" size="lg" className="left-[-22%] top-[-18%] opacity-85" />
      <GradientOrb color="accent" size="md" className="right-[-18%] bottom-[-16%] opacity-65" />
      {!prefersReducedMotion && (
        <motion.div
          className="aurora-veil absolute inset-0"
          animate={{ backgroundPosition: ["0% 30%", "90% 70%", "0% 30%"], opacity: [0.32, 0.48, 0.32] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative z-10 container-custom flex flex-col gap-20">
        <motion.div
          className="grid items-start gap-14 rounded-[48px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl lg:grid-cols-[1.2fr_0.8fr]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85">
              What we deliver
            </span>
            <h2 className="text-balance text-4xl font-heading font-bold text-white md:text-5xl">
              Digital services translated, orchestrated, and shipped without friction.
            </h2>
            <DecorativeLine gradient="aurora" align="left" />
            <p className="max-w-3xl text-base text-white/75 sm:text-lg">
              Strategy, design, development, and marketing move together in one partnership. We lead the roadmap, handle execution, and
              keep owners and teams aligned with plain-language updates.
            </p>

            <div className="grid gap-4 text-left text-sm text-white/65 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">How it feels</p>
                <p className="mt-2">One shared backlog, warm communication, no vendor juggling.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">What you control</p>
                <p className="mt-2">Budget guardrails, business goals, and yes/no calls—Imaginta handles the rest.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="gradient" asChild className="gap-2 rounded-full px-6 py-3">
                <Link href="/services">
                  See all services
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="glass" asChild className="gap-2 rounded-full px-6 py-3 text-white/80">
                <Link href="/contact">
                  Schedule a call
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div className="grid gap-4 sm:grid-cols-2">
            {EXPERIENCE_MATRIX.map((item) => (
              <WarmSpotlight key={item.quadrant} className="h-full" intensity={0.68}>
                <motion.div
                  className="h-full rounded-3xl border border-white/12 bg-white/[0.05] p-6 text-left text-sm text-white/75 backdrop-blur-xl"
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.02, borderColor: "rgba(251,191,36,0.4)" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/60">{item.quadrant}</p>
                  <h3 className="mt-2 text-lg font-heading font-semibold text-white">{item.focus}</h3>
                  <p className="mt-3 text-white/60">{item.cues}</p>
                </motion.div>
              </WarmSpotlight>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {EXPERIENCE_LAYERS.map((layer, index) => (
            <WarmSpotlight key={layer.title} className="h-full" intensity={0.66}>
              <motion.div
                className="h-full rounded-4xl border border-white/12 bg-white/[0.05] p-8 text-left text-sm text-white/75 backdrop-blur-xl"
                whileHover={prefersReducedMotion ? undefined : { y: -6, borderColor: "rgba(6,182,212,0.35)" }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Layer 0{index + 1}</span>
                <h3 className="mt-2 text-2xl font-heading font-semibold text-white">{layer.title}</h3>
                <p className="mt-3 text-white/65">{layer.description}</p>
                <ul className="mt-4 spacey-3 space-y-3 text-white/60">
                  {layer.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-200">
                        •
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </WarmSpotlight>
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
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-90"
                    style={{ background: "radial-gradient(560px circle at 20% 0%, rgba(244,114,182,0.14), transparent 70%)" }}
                  />

                  <div className="relative z-10 grid gap-8 md:grid-cols-[0.5fr_1fr]">
                    <div className="space-y-4">
                      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">{stack.badge}</span>
                      <h3 className="text-2xl font-heading font-semibold md:text-3xl">{stack.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">{stack.copy}</p>
                      <p className="text-sm font-semibold text-orange-300 md:text-base">{stack.benefit}</p>
                    </div>

                    <div className="space-y-4">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {stack.highlights.map((highlight) => (
                          <li key={highlight} className="glass-card flex items-start gap-3 rounded-3xl border border-white/5 bg-white/[0.05] p-5">
                            <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-electric">
                              <FaCheckCircle className="h-4 w-4 text-orange-200" />
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
                        Learn more
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
              <h3 className="text-xl font-heading font-semibold md:text-2xl">
                A simple rhythm that keeps projects moving and everyone informed.
              </h3>
              <p className="text-sm leading-relaxed text-foreground-secondary md:text-base">
                Our strategists, designers, developers, and marketers work as one joined team with yours. We share progress every
                week, document decisions, and make sure you always know what happens next.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["Strategy pulses", "Design labs", "Build sprints", "Growth amplification"].map((phase, index) => (
                <div key={phase} className="glass-card relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.05] p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground-muted">0{index + 1}</span>
                  <h4 className="mt-3 text-lg font-heading font-semibold text-foreground">{phase}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {index === 0 && "Short planning sessions to review targets, budget, and priorities before each stage."}
                    {index === 1 && "Collaborative design reviews where we walk through layouts and copy together."}
                    {index === 2 && "Two-week development blocks with demos, testing, and clear action items."}
                    {index === 3 && "Marketing check-ins covering campaign results, new ideas, and next improvements."}
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
