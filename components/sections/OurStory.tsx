"use client";

import { motion } from "framer-motion";
import { FaGlobe, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { cn } from "@/lib/utils";

const MILESTONES = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "Founded in Belgium with a vision to unite creative direction and engineering excellence under one roof.",
    icon: FaRocket,
    color: "from-electric to-cyber",
  },
  {
    year: "2024",
    title: "Rapid Growth",
    description:
      "Expanded to 50+ clients across 15 countries, assembling multidisciplinary squads for every engagement.",
    icon: FaUsers,
    color: "from-cyber to-neon",
  },
  {
    year: "2025",
    title: "Global Impact",
    description:
      "Recognised as a creative digital studio delivering measurable outcomes for ambitious brands worldwide.",
    icon: FaGlobe,
    color: "from-neon to-accent",
  },
  {
    year: "Future",
    title: "Next Chapter",
    description:
      "Continuing to push boundaries with emerging technology, immersive storytelling, and strategic growth.",
    icon: FaTrophy,
    color: "from-accent to-electric",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background-secondary py-32" id="story">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[-10%]" />
      <GradientOrb color="neon" size="md" className="right-[-15%] bottom-[10%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our <span className="text-gradient">Journey</span>
          </motion.h2>
          <div className="mt-6 flex justify-center">
            <DecorativeLine gradient="aurora" align="center" />
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-foreground-secondary"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            From a boutique collective in Brussels to a global creative studio partnering with teams across continents.
          </motion.p>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-cyber to-neon md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {MILESTONES.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  className={cn(
                    "relative md:flex md:items-center md:gap-12",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                >
                  <div className="w-full md:w-1/2">
                    <motion.div
                      className="glass-card relative overflow-hidden rounded-2xl p-8"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    >
                      <div className={cn("inline-flex rounded-2xl bg-gradient-to-br p-4 shadow-lg", milestone.color)}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="mt-6 space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-foreground-muted">
                          {milestone.year}
                        </p>
                        <h3 className="text-2xl font-heading font-semibold text-foreground">{milestone.title}</h3>
                        <p className="text-sm leading-relaxed text-foreground-secondary">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden h-full md:block md:w-1/2" />

                  <div
                    className={cn(
                      "absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background shadow-lg",
                      `bg-gradient-to-br ${milestone.color}`,
                      "left-4 md:left-1/2 md:-translate-x-1/2",
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

