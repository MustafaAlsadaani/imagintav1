"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import GradientOrb from "@/components/ui/GradientOrb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp } from "@/lib/animations";
import { subscribeNewsletter } from "@/lib/newsletter";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/services#pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/blog" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services#web" },
  { label: "Digital Marketing", href: "/services#marketing" },
  { label: "Creative Design", href: "/services#design" },
  { label: "Business Strategy", href: "/services#business" },
  { label: "Cyber Security", href: "/services#security" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error" | "idle"; message: string }>(
    { type: "idle", message: "" },
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    const response = await subscribeNewsletter(email);
    setLoading(false);

    setFeedback({ type: response.success ? "success" : "error", message: response.message });
    if (response.success) {
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-background-secondary to-background">
      <GradientOrb color="electric" size="lg" className="left-[-20%] top-[-30%]" />
      <GradientOrb color="accent" size="md" className="right-[-15%] top-[10%]" />
      <GradientOrb color="cyber" size="md" className="bottom-[-20%] left-1/3" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20">
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-foreground-muted">Stay inspired</p>
          <h3 className="mt-6 text-4xl font-heading font-bold text-foreground md:text-5xl">
            Join Our <span className="text-gradient">Creative Journey</span>
          </h3>
          <p className="mt-6 text-lg text-foreground-secondary">
            Subscribe for insights, product launch breakdowns, and curated inspiration from the Imaginta studio.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="glass-card flex flex-1 items-center gap-3 rounded-2xl p-2">
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-12 flex-1 border-0 bg-transparent text-foreground placeholder:text-foreground-muted focus-visible:ring-0"
                aria-label="Email address"
                required
              />
              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="flex items-center gap-2 rounded-2xl px-6 py-3"
                disabled={loading}
              >
                {loading ? "Joining..." : "Subscribe"}
                {!loading && <FaArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </form>
          <motion.p
            key={feedback.message}
            className={cn(
              "mt-4 text-sm",
              feedback.type === "success" && "text-neon",
              feedback.type === "error" && "text-accent",
              feedback.type === "idle" && "text-foreground-muted",
            )}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: feedback.message ? 1 : 0, y: feedback.message ? 0 : 10 }}
          >
            {feedback.message || "No spam, ever. Only the good stuff."}
          </motion.p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-3xl font-heading font-bold text-gradient">imaginta</p>
            <p className="text-foreground-secondary">
              We build immersive digital experiences for ambitious brands. Strategy, design, engineering, and growth in one creative powerhouse.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-creative flex h-12 w-12 items-center justify-center rounded-full text-foreground-secondary transition-colors duration-300 hover:text-white"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-1"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">Quick Links</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground-secondary">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 hover:text-electric"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">Services</p>
              <ul className="mt-4 space-y-3 text-sm text-foreground-secondary">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 hover:text-electric"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={fadeInUp}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-foreground-muted">Studio</p>
            <div className="space-y-3 text-sm text-foreground-secondary">
              <p>hello@imaginta.com</p>
              <p>Brussels, Belgium · Serving worldwide</p>
              <p>Open for collaborations, partnerships, and creative challenges.</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-foreground-muted md:flex-row md:items-center md:justify-between"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="flex items-center gap-2">
            © {currentYear} Imaginta. Made with <FaHeart className="text-accent" /> in Belgium.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="transition-colors duration-300 hover:text-electric">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-300 hover:text-electric">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
