"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaCrown, FaFire, FaRocket, FaStar } from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const BUNDLES = [
  {
    name: "Foundation Starter",
    price: "€2,999",
    icon: FaRocket,
    popular: false,
    tagline: "Perfect launch pad for new ventures",
    features: [
      "5-Page Responsive Website",
      "Basic SEO Setup",
      "Logo + Brand Colors",
      "Social Media Setup",
      "SSL Security",
      "30 Days Support",
    ],
    ideal: "Startups, Local Businesses, Solopreneurs",
    color: "electric",
    gradient: "from-electric to-cyber",
    timeline: "4-6 weeks",
  },
  {
    name: "Growth Accelerator",
    price: "€6,999",
    icon: FaFire,
    popular: true,
    tagline: "Scale your business to new heights",
    features: [
      "10-Page Website + Blog",
      "Advanced SEO + 3mo PPC",
      "Complete Brand Package",
      "3-Month Content Strategy",
      "GDPR Compliance",
      "Quarterly Strategy Sessions",
      "90 Days Priority Support",
    ],
    ideal: "Growing SMEs, E-commerce, Services",
    color: "cyber",
    gradient: "from-cyber to-neon",
    timeline: "8-12 weeks",
  },
  {
    name: "Enterprise Dominance",
    price: "Custom",
    icon: FaCrown,
    popular: false,
    tagline: "Unleash unlimited potential",
    features: [
      "Everything in Growth +",
      "Custom Web Application",
      "Dedicated Account Manager",
      "Advanced Security Suite",
      "24/7 Priority Support",
      "Monthly Optimisation",
      "Unlimited Revisions (6mo)",
    ],
    ideal: "Large Enterprises, High-Growth Startups",
    color: "accent",
    gradient: "from-accent to-electric",
    timeline: "12-20 weeks",
  },
];

export default function ServiceBundles() {
  return (
    <section id="bundles" className="relative overflow-hidden bg-gradient-to-b from-background to-background-secondary py-32">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[5%]" />
      <GradientOrb color="accent" size="md" className="right-[-15%] bottom-[15%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Complete <span className="text-gradient">Solutions</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="sunset" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Choose the package that matches your ambition. Every engagement is customized after a strategy session.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {BUNDLES.map((bundle, index) => {
            const Icon = bundle.icon;
            return (
              <div key={bundle.name} className="[perspective:1200px]">
                <motion.div
                  className={cn(
                    "glass-card relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-transform duration-500",
                    bundle.popular && "border-2 border-cyber shadow-glow-cyber",
                  )}
                  whileHover={{ rotateY: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 140, damping: 22, delay: index * 0.05 }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-20`} />
                  {bundle.popular && (
                    <div className="absolute right-0 top-0 flex items-center gap-2 rounded-bl-3xl rounded-tr-3xl bg-cyber px-5 py-2 text-sm font-semibold text-white">
                      <FaStar className="h-4 w-4" /> Most popular
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col">
                    <div className="space-y-4">
                      <div className={`inline-flex rounded-2xl bg-gradient-to-br ${bundle.gradient} p-4 shadow-lg text-white`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-3xl font-heading font-bold text-foreground">{bundle.name}</h3>
                      <p className="text-sm text-foreground-secondary">{bundle.tagline}</p>
                    </div>

                    <div className="mt-6 border-y border-white/10 py-6 text-4xl font-heading font-bold text-gradient">
                      {bundle.price}
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-foreground-secondary">
                      {bundle.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-neon">
                            <FaCheck className="h-3.5 w-3.5" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 space-y-2 text-sm text-foreground-secondary">
                      <p className="font-semibold uppercase tracking-[0.3em] text-foreground-muted">Ideal for</p>
                      <p>{bundle.ideal}</p>
                      <p className="text-xs text-foreground-muted">Timeline: {bundle.timeline}</p>
                    </div>
                  </div>

                  <Button asChild variant={bundle.popular ? "gradient" : "glass"} size="lg" className="mt-8 w-full">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

