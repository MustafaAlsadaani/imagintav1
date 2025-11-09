"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiAperture,
  FiBarChart2,
  FiCpu,
  FiFeather,
  FiLayers,
  FiMonitor,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import { IconType } from "react-icons";

type Service = {
  title: string;
  icon: IconType;
  headline: string;
  description: string;
  benefits: string[];
  highlight: string;
};

const SERVICES: Service[] = [
  {
    title: "Product Engineering",
    icon: FiCpu,
    headline: "Build websites and systems that just work.",
    description: "We design and develop fast, secure websites and apps that are easy to update.",
    benefits: ["Custom design matched to your brand", "Responsive layouts for phones and computers", "Built-in SEO and performance checks"],
    highlight: "Best for launching or refreshing your main website.",
  },
  {
    title: "Brand & Experience",
    icon: FiFeather,
    headline: "Create a strong, consistent brand identity.",
    description: "We craft logos, colour palettes, and visual systems that make your business memorable.",
    benefits: ["Brand guidelines your team can follow", "Marketing materials for web and print", "User-friendly interface designs"],
    highlight: "Ideal when your brand feels outdated or unclear.",
  },
  {
    title: "Growth Marketing",
    icon: FiActivity,
    headline: "Bring more customers to your business.",
    description: "We run search, social, and email campaigns that attract the right audience.",
    benefits: ["Search engine improvements", "Paid ads managed for you", "Content plans with reporting each month"],
    highlight: "Perfect when you need steady leads without spending hours yourself.",
  },
  {
    title: "Cyber Security",
    icon: FiShield,
    headline: "Keep customer data safe and build trust.",
    description: "We review your systems, set up protections, and prepare you for GDPR requirements.",
    benefits: ["Security audits with clear actions", "Privacy policies and backups", "Monitoring and quick support if issues appear"],
    highlight: "Recommended if you handle payments, personal data, or sensitive information.",
  },
  {
    title: "Intelligence & Analytics",
    icon: FiBarChart2,
    headline: "Understand your numbers with ease.",
    description: "We centralise your data into easy dashboards and help you act on the findings.",
    benefits: ["Simple dashboards that explain trends", "Automated reports delivered to your inbox", "Advice on what to improve next"],
    highlight: "Use when you need clear reporting without extra staff.",
  },
  {
    title: "Enablement & Advisory",
    icon: FiUsers,
    headline: "Get guidance that keeps your team aligned.",
    description: "We run workshops, create playbooks, and support hiring so your team grows with confidence.",
    benefits: ["Leadership and team coaching", "Easy-to-follow documentation", "Help finding trusted partners and talent"],
    highlight: "Essential when you are growing fast and need structure.",
  },
  {
    title: "Automation & Systems",
    icon: FiLayers,
    headline: "Automate routine tasks and save hours each week.",
    description: "We connect your tools and build automations that remove manual work.",
    benefits: ["Process review to spot bottlenecks", "Secure integrations between your apps", "Regular optimisation support"],
    highlight: "Choose when manual processes are slowing your team down.",
  },
  {
    title: "Immersive Storytelling",
    icon: FiAperture,
    headline: "Share your story in a way customers remember.",
    description: "We produce presentations, videos, and event assets that explain your value simply.",
    benefits: ["Scripts and storytelling support", "Video and motion graphics", "Launch materials for events or investor calls"],
    highlight: "Made for product launches, investor meetings, and special announcements.",
  },
  {
    title: "Managed Digital Operations",
    icon: FiMonitor,
    headline: "Keep your digital presence running smoothly.",
    description: "We stay on board to maintain your website, content, and platforms month after month.",
    benefits: ["Ongoing updates and fixes", "Performance and uptime monitoring", "Regular planning calls and reports"],
    highlight: "For organisations needing continuity without hiring an in-house team.",
  },
];

const CARD_VARIANT = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="relative overflow-hidden border-b border-cyber-neutral/20 bg-cyber-bg py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_105%,rgba(57,255,20,0.08),transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <header className="max-w-4xl space-y-4">
          <motion.p
            className="text-sm font-semibold uppercase tracking-[0.3em] text-cyber-text-secondary"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.4 }}
          >
            Services at a glance
          </motion.p>
          <motion.h2
            className="text-3xl font-heading font-bold text-white md:text-4xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to build, promote, and protect your business online.
          </motion.h2>
          <motion.p
            className="max-w-3xl text-lg text-cyber-text-secondary"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Pick the services that fit your goals or let us build a bundle for you. We keep the process friendly and explain every step in
            simple language.
          </motion.p>
        </header>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={CARD_VARIANT}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-cyber-neutral/35 bg-cyber-neutral/40 p-6 transition-all duration-300 hover:border-cyber-primary/50 hover:bg-cyber-neutral/30"
                whileHover={{ y: -4 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(176,38,255,0.18),transparent_70%)] blur-2xl" />
                  <div className="absolute inset-px rounded-[26px] border border-cyber-primary/20" />
                </div>
                <div className="relative flex flex-1 flex-col gap-4">
                  <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-cyber-primary/40 bg-cyber-bg/70 text-cyber-primary transition-transform duration-300 group-hover:rotate-6 group-hover:text-cyber-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-heading font-semibold text-white">{service.title}</h3>
                    <p className="text-base font-medium text-cyber-accent/80">{service.headline}</p>
                    <p className="text-sm text-cyber-text-secondary">{service.description}</p>
                  </div>
                  <ul className="space-y-2 pt-4 text-sm text-cyber-text-secondary/90">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="mt-[6px] size-1.5 rounded-full bg-cyber-primary/70" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative mt-6 rounded-2xl border border-cyber-primary/20 bg-cyber-bg/60 px-4 py-3 text-xs text-cyber-text-secondary">
                  <span className="font-semibold uppercase tracking-[0.28em] text-cyber-highlight/80">Why it matters</span>
                  <p className="mt-2 text-sm text-cyber-text-secondary/90">{service.highlight}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

