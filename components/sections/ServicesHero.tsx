"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedMesh from "@/components/ui/AnimatedMesh";
import GradientOrb from "@/components/ui/GradientOrb";
import FloatingShape from "@/components/ui/FloatingShape";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import ServiceInquiryForm from "@/components/ui/ServiceInquiryForm";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-background py-32">
      <AnimatedMesh />
      <GradientOrb color="electric" size="lg" className="left-[-15%] top-[10%] opacity-60" />
      <GradientOrb color="cyber" size="md" className="right-[-10%] bottom-[5%] opacity-60" />
      <FloatingShape shape="blob" color="electric" size={180} delay={2} style={{ top: "20%", left: "15%" }} />
      <FloatingShape shape="triangle" color="cyber" size={140} delay={1.2} style={{ bottom: "15%", right: "20%" }} />
      <FloatingShape shape="circle" color="neon" size={160} delay={2.6} style={{ top: "35%", right: "12%" }} />

      <motion.div
        variants={fadeInUp}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-electric">Our Services</span>
        <h1 className="mt-6 text-4xl font-heading font-bold text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Forge Your <span className="text-gradient">Digital Future</span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground-secondary sm:text-xl md:text-2xl">
          Comprehensive solutions crafted with precision, creativity, and cutting-edge technology to elevate your brand.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <ServiceInquiryForm
            trigger={
              <Button variant="gradient" size="lg" className="px-8 py-6 text-base">
                Get Custom Quote
              </Button>
            }
          />
          <Button asChild variant="glass" size="lg" className="px-8 py-6 text-base">
            <Link href="#bundles">Explore Packages</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}

