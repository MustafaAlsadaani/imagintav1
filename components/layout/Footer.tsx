"use client";

import { FormEvent, SVGProps, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/lib/newsletter";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const NAV_GROUPS = [
  {
    title: "Work with us",
    links: [
      { label: "Start a project", href: "/contact" },
      { label: "Our services", href: "/services" },
      { label: "Pricing bundles", href: "/services#bundles" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Who we are", href: "/about" },
      { label: "Client stories", href: "/blog" },
      { label: "Join the team", href: "/about#careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog articles", href: "/blog" },
      { label: "How we work", href: "/services#process" },
      { label: "FAQs", href: "/contact" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", handle: "@IMAGINTA01", href: "https://facebook.com/IMAGINTA01", Icon: FacebookIcon },
  { label: "X", handle: "@IMAGINTA01", href: "https://x.com/IMAGINTA01", Icon: XIcon },
  { label: "Instagram", handle: "@IMAGINTA01", href: "https://instagram.com/IMAGINTA01", Icon: InstagramIcon },
  { label: "TikTok", handle: "@IMAGINTA01", href: "https://tiktok.com/@IMAGINTA01", Icon: TikTokIcon },
  { label: "GitHub", handle: "@IMAGINTA01", href: "https://github.com/IMAGINTA01", Icon: GitHubIcon },
];

const QUICK_STATS = [
  { label: "Average launch time", value: "18 days" },
  { label: "Typical sales lift", value: "3.4×" },
  { label: "Businesses supported", value: "26+" },
];

const SIGNALS = [
  "Clear plans for websites, marketing, and security",
  "Friendly updates that explain what changed",
  "Support that stays after launch",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "idle" | "success" | "error"; message: string }>(
    {
      type: "idle",
    message: "Monthly tips. No spam.",
    },
  );

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
    <footer className="relative overflow-hidden bg-premium-bg text-premium-text">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_-10%_-40%,rgba(0,229,229,0.14),transparent_62%),radial-gradient(circle_at_110%_-30%,rgba(230,0,230,0.12),transparent_65%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 blur-[220px] opacity-35 [background-image:radial-gradient(circle_at_0%_0%,rgba(0,229,229,0.08),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(230,0,230,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-12">
        <motion.section
          className="relative overflow-hidden rounded-[30px] border border-[rgba(0,229,229,0.26)] bg-[rgba(12,23,39,0.82)] px-8 py-10 shadow-[0_26px_64px_rgba(5,15,32,0.55)] md:px-12 md:py-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_-30%,rgba(0,229,229,0.12),transparent_60%),radial-gradient(circle_at_88%_-20%,rgba(230,0,230,0.12),transparent_62%)] opacity-70" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.28)] bg-[rgba(0,229,229,0.12)] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-cyan shadow-[0_0_32px_rgba(0,229,229,0.24)]">
                Ready to grow
              </span>
              <div className="space-y-4">
                <h2 className="text-balance text-3xl font-heading font-semibold text-white sm:text-4xl lg:text-[2.85rem]">
                  Let’s build your next digital milestone together.
                </h2>
                <p className="max-w-2xl text-base text-premium-text-secondary sm:text-lg">
                  Imaginta blends creative ideas with practical tech. We design, market, and protect your business so you can focus on
                  serving customers.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {QUICK_STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.76)] p-4 shadow-[0_16px_32px_rgba(5,15,32,0.5)] backdrop-blur"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">{stat.label}</p>
                    <p className="mt-2 text-2xl font-heading font-semibold text-white drop-shadow-[0_0_18px_rgba(0,229,229,0.32)]">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="gradient" size="lg" className="rounded-full px-8 py-4 text-sm font-semibold">
                  <Link href="/contact" className="flex items-center gap-2">
                    Talk to our team
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-full border border-[rgba(0,229,229,0.22)] bg-transparent px-8 py-4 text-sm font-semibold text-premium-text-secondary transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.4)] hover:text-white"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    See what we offer
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6 rounded-[24px] border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.8)] px-6 py-7 shadow-[0_18px_36px_rgba(5,15,32,0.52)]">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-premium-text-secondary">Signal feed</p>
                <h3 className="text-2xl font-heading font-semibold text-white">Subscribe for simple tips</h3>
                <p className="text-sm text-premium-text-secondary">
                  Get one helpful email each month with quick wins for websites, marketing, and security. No spam, just value.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-12 w-full rounded-full border border-[rgba(0,229,229,0.24)] bg-[rgba(12,23,39,0.7)] text-sm text-premium-text placeholder:text-premium-text-secondary/60"
                  aria-label="Email address"
                  required
                />
                <Button type="submit" variant="gradient" size="lg" className="w-full rounded-full px-6 py-3 text-sm font-semibold" disabled={pending}>
                  {pending ? "Sending…" : "Send me tips"}
                </Button>
              </form>
              <p
                className={cn(
                  "text-xs text-premium-text-secondary",
                  feedback.type === "success" && "text-premium-green",
                  feedback.type === "error" && "text-premium-accent"
                )}
              >
                {feedback.message}
              </p>
              <ul className="space-y-3 text-sm text-premium-text-secondary">
                {SIGNALS.map((signal) => (
                  <li key={signal} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-premium-cyan" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.div
          className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-premium-text-secondary">Headquarters</span>
              <p className="text-sm text-premium-text-secondary">
                98 Cyber Dock
                <br />
                Brussels, BE
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:launch@imaginta.com"
                className="inline-flex items-center gap-2 text-premium-cyan transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-white"
              >
                launch@imaginta.com
              </a>
              <a
                href="tel:+3220000000"
                className="inline-flex items-center gap-2 text-premium-cyan transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-white"
              >
                +32 2 000 0000
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ label, handle, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${label} ${handle}`}
                  aria-label={`${label} ${handle}`}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,229,229,0.18)] bg-[rgba(12,23,39,0.75)] text-premium-text-secondary transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.38)] hover:text-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-premium-text-secondary">{group.title}</p>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex w-full items-center justify-between rounded-xl border border-transparent px-2 py-2 text-sm text-premium-text-secondary transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.28)] hover:text-white"
                    >
                      <span>{link.label}</span>
                      <FiArrowRight className="h-3.5 w-3.5 text-premium-text-secondary transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-1 group-hover:text-premium-cyan" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col gap-4 rounded-[20px] border border-[rgba(0,229,229,0.2)] bg-[rgba(12,23,39,0.78)] px-6 py-6 text-xs uppercase tracking-[0.32em] text-premium-text-secondary sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="flex items-center gap-2">
            © {currentYear} Imaginta · Crafted with <FaHeart className="text-premium-accent" /> in Belgium · Serving clients worldwide
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link href="/services" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              Services
            </Link>
            <Link href="/about" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              About
            </Link>
            <Link href="/blog" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              Journal
            </Link>
            <Link href="/privacy" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              Terms
            </Link>
            <Link href="/contact" className="transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:text-premium-cyan">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.5l.5-4H14V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 4l16 16m0-16L4 20" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 8v8.5a2.5 2.5 0 1 1-2-2.45" />
      <path d="M15 3v1.65a4 4 0 0 0 4 4V12" />
      <path d="M15 7.82a4 4 0 1 1-6 3.68" />
    </svg>
  );
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 4.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}
