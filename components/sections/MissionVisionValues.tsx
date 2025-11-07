"use client";

import { motion } from "framer-motion";
import { FaEye, FaHeart, FaLightbulb, FaShieldAlt, FaBullseye, FaUsers } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GradientOrb from "@/components/ui/GradientOrb";
import DecorativeLine from "@/components/ui/DecorativeLine";
import { fadeInUp } from "@/lib/animations";

const values = [
  {
    title: "Innovation",
    description: "We experiment boldly and turn nascent ideas into reality.",
    icon: FaLightbulb,
  },
  {
    title: "Integrity",
    description: "Transparency, trust, and accountability drive every decision.",
    icon: FaShieldAlt,
  },
  {
    title: "Excellence",
    description: "Craftsmanship and polish are non-negotiable across every touchpoint.",
    icon: FaBullseye,
  },
  {
    title: "Collaboration",
    description: "We co-create with clients and empower their teams for long-term success.",
    icon: FaUsers,
  },
  {
    title: "Empathy",
    description: "Understanding people fuels design that resonates and performs.",
    icon: FaHeart,
  },
  {
    title: "Security",
    description: "We bake in resilience and compliance from day zero.",
    icon: FaShieldAlt,
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <GradientOrb color="cyber" size="lg" className="left-[-15%] top-[-20%]" />
      <GradientOrb color="electric" size="md" className="right-[-10%] bottom-[-15%]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-heading font-bold text-foreground md:text-5xl"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            What <span className="text-gradient">Drives</span> Us
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
            Our culture fuses bold creativity, rigorous strategy, and security-first execution to deliver lasting results.
          </motion.p>
        </div>

        <Tabs defaultValue="mission" className="mt-16">
          <TabsList className="glass-creative mx-auto flex w-full max-w-xl justify-center gap-2 rounded-2xl p-2">
            <TabsTrigger
              value="mission"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition data-[state=active]:bg-gradient-aurora data-[state=active]:text-white"
            >
              Mission
            </TabsTrigger>
            <TabsTrigger
              value="vision"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition data-[state=active]:bg-gradient-aurora data-[state=active]:text-white"
            >
              Vision
            </TabsTrigger>
            <TabsTrigger
              value="values"
              className="rounded-xl px-4 py-2 text-sm font-semibold transition data-[state=active]:bg-gradient-aurora data-[state=active]:text-white"
            >
              Values
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="mt-10">
            <motion.div
              className="glass-card grid gap-10 rounded-3xl p-10 md:grid-cols-[1.2fr_1fr]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-electric">
                  Mission
                </div>
                <p className="text-3xl font-heading font-semibold leading-relaxed text-foreground">
                  Empower visionary leaders with cohesive digital ecosystems that elevate brands and accelerate measurable growth.
                </p>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
                <p>
                  We integrate strategy, design, engineering, and growth under one studio so teams can focus on momentum—not vendor management.
                </p>
                <p>
                  Every engagement is led by senior talent, anchored in data, and designed to scale securely.
                </p>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="vision" className="mt-10">
            <motion.div
              className="glass-card grid gap-10 rounded-3xl p-10 md:grid-cols-[1.1fr_1fr]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyber/30 bg-cyber/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyber">
                  Vision
                </div>
                <p className="text-3xl font-heading font-semibold leading-relaxed text-foreground">
                  Imaginta is the creative digital studio of choice for brands ready to spark revolutions in their industries.
                </p>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
                <p>
                  We see a world where brand storytelling, digital products, and growth strategy are crafted together for maximum impact.
                </p>
                <p>
                  Our aim is to become the partner teams call when they need ideas and execution in perfect harmony.
                </p>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="values" className="mt-10">
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="glass-card rounded-2xl p-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18, delay: index * 0.04 }}
                  >
                    <div className="inline-flex rounded-xl bg-white/10 p-3 text-electric">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

