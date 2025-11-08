"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDribbble,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import WarmSpotlight from "@/components/ui/WarmSpotlight";
import { fadeInUp } from "@/lib/animations";
import { subscribeNewsletter } from "@/lib/newsletter";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const QUICK_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const CAPABILITIES = [
  { label: "Web Experiences", href: "/services#web" },
  { label: "Growth Marketing", href: "/services#marketing" },
  { label: "Brand & Content", href: "/services#design" },
  { label: "Strategy Pods", href: "/services#business" },
  { label: "Cyber Defense", href: "/services#security" },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "GitHub", href: "https://github.com", icon: FaGithub },
  { label: "Dribbble", href: "https://dribbble.com", icon: FaDribbble },
  { label: "Behance", href: "https://behance.net", icon: SiBehance },
];

const ACTION_LINKS = [
  { label: "Start a project", href: "/contact" },
  { label: "View case studies", href: "/services#showcase" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "No spam. Just playbooks to keep you ahead.",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending) return;

    setPending(true);
    const { success, message } = await subscribeNewsletter(email);
    setPending(false);

    setFeedback({ type: success ? "success" : "error", message });
    if (success) setEmail("");
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#05030f,#0b1224)]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.55),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.45),transparent_60%),radial-gradient(circle_at_50%_70%,rgba(99,102,241,0.4),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/85">
              Imaginta Studio
            </div>
            <h3 className="text-balance text-4xl font-heading font-semibold text-white sm:text-5xl">
              We design, build, and grow digital experiences that feel cinematic—and measurable.
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/70">
              From concept to code to campaign, Imaginta is your embedded team. We keep launches warm, polished, and relentlessly tuned
              to growth.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {ACTION_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-sm text-white/70 transition-all duration-300 hover:border-orange-300/60 hover:text-white"
                >
                  <span>{link.label}</span>
                  <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <WarmSpotlight intensity={0.68}>
            <motion.div
              className="rounded-[36px] border border-white/12 bg-white/[0.08] p-8 text-sm text-white/75 backdrop-blur-2xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-200/85">Stay in the loop</p>
              <p className="mt-3 text-lg text-white">
                Monthly drop: launch breakdowns, partner intel, and growth experiments ready to copy-paste.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 flex-1 rounded-full border border-white/10 bg-black/40 text-sm text-white placeholder:text-white/40 focus-visible:ring-2 focus-visible:ring-orange-400"
                  aria-label="Email address"
                  required
                />
                <Button type="submit" variant="gradient" size="lg" className="rounded-full px-6 py-3 text-sm font-semibold" disabled={pending}>
                  {pending ? "Joining..." : "Join the digest"}
                </Button>
              </form>
              <p
                className={cn(
                  "mt-2 text-xs text-white/55",
                  feedback.type === "success" && "text-neon",
                  feedback.type === "error" && "text-accent"
                )}
              >
                {feedback.message}
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Capabilities</p>
                  <ul className="mt-4 space-y-3 text-sm text-white/65">
                    {CAPABILITIES.map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} className="transition-colors duration-300 hover:text-orange-300">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/55">Connect</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition-colors duration-300 hover:border-orange-300/60 hover:text-white"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </WarmSpotlight>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-10 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-sm text-white/70 backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr]"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50">
              © {currentYear} Imaginta · Crafted with <FaHeart className="text-orange-300" /> in Belgium · Serving clients worldwide
            </p>
            <p>HQ · Rue des Artistes 27, Brussels · hello@imaginta.com · +32 (0)2 123 45 67</p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
              {QUICK_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="transition-colors duration-300 hover:text-orange-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-6 md:justify-end">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-orange-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-orange-300">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="transition-colors duration-300 hover:text-orange-300">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
