"use client";

import { motion } from "framer-motion";
import { FaClock } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export default function SchedulingSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.h3
          className="text-4xl font-heading font-bold text-foreground"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Schedule a <span className="text-gradient">Free Consultation</span>
        </motion.h3>
        <motion.p
          className="mt-4 text-lg text-foreground-secondary"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pick a time that works for your team. We&apos;ll come prepared with ideas and next steps tailored to your goals.
        </motion.p>

        <motion.div
          className="glass-card mx-auto mt-12 max-w-3xl rounded-3xl p-12"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FaClock className="mx-auto h-16 w-16 text-electric" />
          <p className="mt-6 text-xl text-foreground-secondary">Calendar integration placeholder</p>
          <p className="text-xs text-foreground-muted">
            Integrate Calendly, Cal.com, or similar scheduling tool in production.
          </p>
          <Button asChild variant="gradient" size="lg" className="mt-8">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground-muted">
            <span className="glass-creative rounded-full px-4 py-2">30 min strategy call</span>
            <span className="glass-creative rounded-full px-4 py-2">Remote or in-person</span>
            <span className="glass-creative rounded-full px-4 py-2">No obligation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
