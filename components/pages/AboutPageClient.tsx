"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PageTransition from "@/components/layout/PageTransition";
import AboutSpotlight from "@/components/sections/AboutSpotlight";
import AboutEssence from "@/components/sections/AboutEssence";
import AboutMethodology from "@/components/sections/AboutMethodology";
import AboutCollective from "@/components/sections/AboutCollective";
import AboutAllies from "@/components/sections/AboutAllies";
import AboutCTA from "@/components/sections/AboutCTA";

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
        <AboutSpotlight />
        <AboutEssence />
        <AboutMethodology />
        <AboutCollective />
        <AboutAllies />
        <AboutCTA />
      </div>
    </PageTransition>
  );
}
