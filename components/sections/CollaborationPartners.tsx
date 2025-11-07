"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  SiGoogle,
  SiFacebook,
  SiWordpress,
  SiShopify,
  SiFiverr,
  SiUpwork,
  SiFigma,
  SiHubspot,
} from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import type { IconType } from "react-icons";

const partners: Array<{
  name: string;
  icon: IconType;
  focus: string;
  description: string;
  accent: string;
}> = [
  {
    name: "Google Cloud & Ads",
    icon: SiGoogle,
    focus: "Cloud Â· Marketing Â· Analytics",
    description: "AI-driven insights, campaign automation, and scalable infrastructure.",
    accent: "from-primary/30 via-primary/10 to-transparent",
  },
  {
    name: "Meta Platforms",
    icon: SiFacebook,
    focus: "Social Â· Community Â· Performance",
    description: "Always-on social funnels, community programs, and paid media acceleration.",
    accent: "from-ember/40 via-ember/15 to-transparent",
  },
  {
    name: "Microsoft Azure",
    icon: SiHubspot,
    focus: "Enterprise Â· Infrastructure Â· AI",
    description: "Secure deployment, governance, and enterprise integrations across Azure.",
    accent: "from-aurora/40 via-aurora/15 to-transparent",
  },
  {
    name: "Shopify Plus",
    icon: SiShopify,
    focus: "Commerce Â· Payments Â· Automation",
    description: "Composable storefronts, automation flows, and conversion optimisation.",
    accent: "from-sapphire/30 via-sapphire/10 to-transparent",
  },
  {
    name: "WordPress VIP",
    icon: SiWordpress,
    focus: "Content Â· Publishing Â· Scale",
    description: "Enterprise publishing pipelines, localisation, and editorial workflows.",
    accent: "from-primary/25 via-transparent to-transparent",
  },
  {
    name: "Figma",
    icon: SiFigma,
    focus: "Design Systems Â· Collaboration",
    description: "Reusable component libraries, prototypes, and design-to-dev velocity.",
    accent: "from-ember/35 via-transparent to-transparent",
  },
  {
    name: "HubSpot",
    icon: SiHubspot,
    focus: "CRM Â· Automation Â· RevOps",
    description: "Lifecycle automations, attribution dashboards, and RevOps alignment.",
    accent: "from-primary/35 via-transparent to-transparent",
  },
  {
    name: "Global Expert Network",
    icon: SiUpwork,
    focus: "Talent Â· Specialist Pods Â· Scale",
    description: "Curated pods extend capabilities instantly across specialised domains.",
    accent: "from-aurora/30 via-transparent to-transparent",
  },
];

const highlights = [
  {
    title: "Co-selling momentum",
    body: "Joint GTM plans, co-branded campaigns, and access to partner marketplaces speed up adoption.",
  },
  {
    title: "Certified squads",
    body: "Imaginta specialists maintain platform certifications so your launches stay compliant and supported.",
  },
  {
    title: "Faster innovation loops",
    body: "Early feature access and feedback programs keep your product roadmap aligned with platform releases.",
  },
];

export default function CollaborationPartners() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#060708] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 bg-gradient-to-br from-primary/25 via-transparent to-transparent blur-[160px]" />
        <div className="absolute -bottom-20 right-0 h-72 w-72 bg-gradient-to-tl from-sapphire/25 via-transparent to-transparent blur-[140px]" />
      </div>

      <div className="container-custom relative z-10 space-y-16">
        <motion.div
          className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <span className="caps-label-wide inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-primary">
              Strategic alliances
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-bold text-foreground sm:text-4xl lg:text-5xl">
                Collaborating with tech giants to deliver future-facing experiences.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our partner ecosystem keeps you ahead of market shifts. From AI-driven analytics to secure infrastructure,
                we translate platform innovations into outcomes your team can measure.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_40px_rgba(10,12,16,0.35)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">{title}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-primary" /> Priority feature access
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-ember" /> Co-marketing support
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-aurora" /> Operational playbooks
              </span>
            </div>
            <div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end px-7 py-6 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-[background-position,transform] hover:-translate-y-[2px] hover:bg-right"
              >
                <Link href="/services#partners" className="inline-flex items-center gap-2">
                  Explore partner integrations
                  <FiArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground">Partnering without friction</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Dedicated partner managers orchestrate co-selling, approvals, and roadmap alignment. Your team gains the
                benefits of enterprise alliances without the admin overhead.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                <li>â€¢ Quarterly planning with partner success and Imaginta leadership.</li>
                <li>â€¢ Co-funded pilots and beta programs to validate new ideas quickly.</li>
                <li>â€¢ Shared dashboards covering activation, adoption, and ROI.</li>
              </ul>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "AI & analytics accelerators",
                "Composable commerce builds",
                "Marketing automation & CRM",
                "Enterprise security & compliance",
              ].map((item) => (
                <span key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.article
                key={partner.name}
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_24px_60px_rgba(8,10,16,0.45)]"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${partner.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      Partner
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                    <p className="caps-label text-primary">{partner.focus}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
