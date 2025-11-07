"use client";

import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

const FEATURES = [
  { label: "Website Pages", starter: "5", growth: "10 + Blog", enterprise: "Unlimited" },
  { label: "SEO Optimization", starter: true, growth: true, enterprise: true },
  { label: "Brand Identity", starter: true, growth: true, enterprise: true },
  { label: "Marketing Campaigns", starter: false, growth: true, enterprise: true },
  { label: "Security Monitoring", starter: "Basic", growth: "Advanced", enterprise: "24/7" },
  { label: "Support Duration", starter: "30 days", growth: "90 days", enterprise: "24/7 Priority" },
  { label: "Strategy Sessions", starter: "Kickoff", growth: "Quarterly", enterprise: "Monthly" },
  { label: "Custom Development", starter: false, growth: "Limited", enterprise: true },
  { label: "Account Manager", starter: false, growth: true, enterprise: true },
  { label: "Integrations", starter: "Core", growth: "Advanced", enterprise: "Enterprise" },
];

function renderCell(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? <FaCheck className="mx-auto text-neon" /> : <FaTimes className="mx-auto text-foreground-muted/50" />;
  }
  return <span>{value}</span>;
}

export default function ServiceComparison() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Compare Our <span className="text-gradient">Packages</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Each bundle stacks capability on top of value. Pick the launchpad that fits now—expand as you grow.
          </motion.p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full text-sm text-foreground-secondary">
              <thead className="glass-creative">
                <tr className="text-left text-xs uppercase tracking-[0.3em] text-foreground-muted">
                  <th className="px-6 py-5 font-semibold">Feature</th>
                  <th className="px-6 py-5 text-center font-semibold">Starter</th>
                  <th className="px-6 py-5 text-center font-semibold">Growth</th>
                  <th className="px-6 py-5 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature, index) => (
                  <tr key={feature.label} className="border-t border-white/10 transition hover:bg-white/5">
                    <td className="px-6 py-4 font-medium text-foreground">{feature.label}</td>
                    <td className="px-6 py-4 text-center align-middle">{renderCell(feature.starter)}</td>
                    <td className="px-6 py-4 text-center align-middle">{renderCell(feature.growth)}</td>
                    <td className="px-6 py-4 text-center align-middle">{renderCell(feature.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center gap-4 border-t border-white/10 px-6 py-6 text-sm text-foreground-muted md:flex-row md:justify-between">
            <p>Need something tailored? We build custom roadmaps for complex initiatives.</p>
            <Button asChild variant="gradient" className="px-8">
              <a href="/contact">Get Custom Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
