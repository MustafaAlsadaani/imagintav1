"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaDownload } from "react-icons/fa";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import ServiceInquiryForm from "@/components/ui/ServiceInquiryForm";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";

export default function ServicesCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-electric/10 via-cyber/10 to-neon/10 py-32">
      <AnimatedMesh />
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[-10%]" />
      <GradientOrb color="accent" size="md" className="right-[-10%] bottom-[10%]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-3xl p-10 sm:p-16"
        >
          <h2 className="text-4xl font-heading font-bold text-foreground md:text-5xl">
            Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary">
            Let’s align on goals, scope, and momentum. Book a consultation or download our services guide to explore what’s possible.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <ServiceInquiryForm
              trigger={
                <Button variant="gradient" size="lg" className="gap-2 px-8 py-6 text-base">
                  <FaCalendarAlt className="h-5 w-5" /> Schedule Free Consultation
                </Button>
              }
            />
            <Button asChild variant="glass" size="lg" className="gap-2 px-8 py-6 text-base">
              <Link href="/services/guide.pdf">
                <FaDownload className="h-5 w-5" /> Download Services Guide
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-foreground-muted">
            <span>No commitment consultation</span>
            <span>Strategic insights in 24 hours</span>
            <span>Trusted by 50+ brands</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
