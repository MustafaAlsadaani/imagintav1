"use client";

import { motion } from "framer-motion";
import { FaDribbble, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const PLATFORMS = [
  { name: "LinkedIn", handle: "@imaginta", followers: "2.5K", icon: FaLinkedin, color: "text-electric", link: "#" },
  { name: "Instagram", handle: "@imaginta_studio", followers: "5.2K", icon: FaInstagram, color: "text-accent", link: "#" },
  { name: "Twitter", handle: "@imaginta", followers: "1.8K", icon: FaTwitter, color: "text-cyber", link: "#" },
  { name: "Dribbble", handle: "imaginta", followers: "3.1K", icon: FaDribbble, color: "text-neon", link: "#" },
];

export default function SocialConnect() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <motion.h3
          className="text-3xl font-heading font-bold text-foreground"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Connect With Us
        </motion.h3>
        <motion.p
          className="mt-3 text-foreground-secondary"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Follow our upcoming releases, behind-the-scenes updates, and creative experiments.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {PLATFORMS.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={platform.name}
                href={platform.link}
                className="glass-creative group rounded-xl p-6 text-center transition duration-500 hover:bg-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className={cn("mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-2xl", platform.color)}>
                  <Icon />
                </span>
                <p className="mt-4 text-lg font-semibold text-foreground">{platform.name}</p>
                <p className="text-sm text-foreground-secondary">{platform.handle}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground-muted">{platform.followers} followers</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
