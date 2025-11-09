"use client";

import { motion, useReducedMotion } from "framer-motion";
import WarmSpotlight from "@/components/ui/WarmSpotlight";

const ESSENCE_POINTS = [
  {
    title: "Experienced specialists",
    detail: "You speak directly with senior designers, developers, marketers, and security experts. No hand-offs to junior teams.",
  },
  {
    title: "Design and build together",
    detail: "We plan the look, wording, and code in the same sprint so your website feels polished and works smoothly.",
  },
  {
    title: "Growth built in",
    detail: "Marketing, content, and analytics sit beside the build. You see how every change supports sales and customer trust.",
  },
];

const FOUNDING_STORY = [
  "Imaginta began when a designer and a developer saw local businesses struggle to find clear, dependable digital partners.",
  "We decided to create a friendly studio that explains every step, delivers on time, and stays to support future ideas.",
  "Today, our remote-first team helps companies across Belgium and around the world grow with confident digital experiences.",
];

export default function AboutEssence() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden section-surface-alt py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-5 text-white lg:grid-cols-[0.55fr_0.45fr]">
        <WarmSpotlight>
          <motion.div
            className="space-y-6 rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/82 p-10 text-sm text-cyber-text"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">Essence</p>
              <h3 className="text-2xl font-heading font-semibold text-white md:text-3xl">
                What makes Imaginta different?
              </h3>
            </div>
            <div className="grid gap-4">
              {ESSENCE_POINTS.map((point) => (
                <div key={point.title} className="rounded-3xl border border-cyber-neutral/30 bg-cyber-bg/76 px-5 py-4">
                  <p className="text-sm font-semibold text-cyber-text">{point.title}</p>
                  <p className="mt-2 text-cyber-text-secondary">{point.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </WarmSpotlight>

        <WarmSpotlight>
          <motion.div
            className="space-y-5 rounded-[32px] border border-cyber-neutral/35 bg-cyber-bg/80 p-8 text-sm text-cyber-text"
            initial={prefersReducedMotion ? undefined : { opacity: 0, x: 28 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyber-text-secondary">Origins</p>
            {FOUNDING_STORY.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="rounded-2xl border border-cyber-neutral/30 bg-cyber-bg/76 p-4 text-xs uppercase tracking-[0.35em] text-cyber-text-secondary">
              Brussels • Remote-first • Operating globally
            </div>
          </motion.div>
        </WarmSpotlight>
      </div>
    </section>
  );
}
