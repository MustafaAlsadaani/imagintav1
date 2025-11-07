"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import AboutHero from "@/components/sections/AboutHero";
import OurStory from "@/components/sections/OurStory";
import MissionVisionValues from "@/components/sections/MissionVisionValues";
import OurCulture from "@/components/sections/OurCulture";
import Team from "@/components/sections/Team";
import OurApproach from "@/components/sections/OurApproach";
import WhyWorkWithUs from "@/components/sections/WhyWorkWithUs";
import CTASection from "@/components/sections/CTASection";

export default function AboutPageClient() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <PageTransition>
      <div ref={containerRef} className="relative flex flex-col bg-background">
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-[72px] z-30 h-0.5 origin-left bg-gradient-aurora"
          style={{ scaleX: progress }}
        />
        <AboutHero />
        <OurStory />
        <MissionVisionValues />
        <OurCulture />
        <Team />
        <OurApproach />
        <WhyWorkWithUs />
        <CTASection />
      </div>
    </PageTransition>
  );
}
