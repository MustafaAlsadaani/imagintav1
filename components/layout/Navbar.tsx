"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", subLabel: "Front door", href: "/" },
  { label: "Services", subLabel: "Delivery suite", href: "/services" },
  { label: "About", subLabel: "Team", href: "/about" },
  { label: "Blog", subLabel: "Signals", href: "/blog" },
  { label: "Contact", subLabel: "Start", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = useMemo(
    () =>
      NAV_LINKS.map((link) => ({
        ...link,
        isActive:
          link.href === "/services"
            ? pathname?.startsWith("/services")
            : pathname === link.href || pathname?.startsWith(`${link.href}/`),
      })),
    [pathname]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,15,0.92),rgba(4,3,15,0.4),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 transition-[padding] duration-300 md:px-6">
        <motion.nav
          layout
          className={cn(
            "relative flex items-center justify-between gap-8 overflow-hidden border border-white/[0.12] bg-black/40 px-6 backdrop-blur-[28px] transition-all duration-500 md:px-9",
            isScrolled ? "rounded-[24px] py-3 shadow-[0_24px_70px_rgba(7,6,24,0.62)]" : "rounded-[32px] py-5 shadow-[0_40px_90px_rgba(7,6,24,0.72)]"
          )}
        >
          <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_12%_24%,rgba(236,72,153,0.45),transparent_55%),radial-gradient(circle_at_88%_20%,rgba(14,165,233,0.33),transparent_60%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.12),transparent_65%)]" />
          <div className="pointer-events-none absolute inset-x-[18%] top-[-120%] h-[280%] translate-y-1/6 transform rounded-full bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-50" />

          <div className="relative z-10 flex items-center gap-4">
            <Link href="/" aria-label="Imaginta home" className="logo-hover flex items-center gap-2 rounded-full px-3 py-2">
              <motion.span whileHover={{ scale: 1.05 }} className="text-[22px] font-semibold lowercase tracking-tight text-gradient">
                imaginta
              </motion.span>
              <span className="hidden text-[11px] uppercase tracking-[0.35em] text-white/45 sm:inline">Studio</span>
            </Link>
            <div className="hidden border-l border-white/10 pl-4 lg:block">
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.45em] text-white/45">Digital strategy partner</span>
                <span className="text-xs text-white/70">Brussels · Remote first</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden flex-1 justify-center lg:flex">
            <div className="relative flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "group relative inline-flex flex-col items-center gap-1 overflow-hidden rounded-[22px] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] transition-all duration-300",
                    item.isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                  aria-current={item.isActive ? "page" : undefined}
                >
                  {item.isActive ? (
                    <motion.span
                      layoutId="nav-active-highlight"
                      className="absolute inset-0 rounded-[22px] border border-white/20 bg-white/[0.16] shadow-[0_24px_55px_rgba(8,7,30,0.55)]"
                      transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                  <span className="relative z-10 text-[9px] font-normal uppercase tracking-[0.46em] text-white/35">{item.subLabel}</span>
                  <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute inset-0 rounded-[22px] bg-gradient-to-r from-white/0 via-white/14 to-white/0 opacity-70" />
                    <span className="absolute -top-px left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/65 transition-colors duration-300 hover:border-white/25 hover:text-white"
              >
                View services
                <FiArrowUpRight className="h-3 w-3" />
              </Link>
              <Button
                asChild
                variant="gradient"
                size="sm"
                className="cta-primary rounded-full px-6 py-2 text-sm font-semibold shadow-[0_12px_30px_rgba(236,72,153,0.35)]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start a project
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <motion.button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition-colors duration-300 hover:border-orange-300 hover:text-orange-300 lg:hidden"
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </motion.button>
          </div>
        </motion.nav>

        <motion.div className="absolute left-0 top-full h-px w-full origin-left bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400" style={{ scaleX: progressScaleX }} />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(236,72,153,0.3),transparent_55%),radial-gradient(circle_at_75%_20%,rgba(6,182,212,0.28),transparent_60%),rgba(4,4,16,0.94)]" />

            <motion.div
              className="relative z-10 flex h-full w-full flex-col justify-between rounded-t-[32px] border border-white/10 bg-white/[0.04] pb-10 pt-16 backdrop-blur-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 pb-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white/50">Navigation</p>
                  <p className="mt-2 text-xl font-semibold text-white">Where should we take you?</p>
                </div>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white transition-colors duration-300 hover:border-orange-300 hover:text-orange-200"
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes className="h-4 w-4" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.28 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-2xl border border-white/[0.12] px-5 py-4 text-base font-semibold text-white transition-all duration-300",
                          item.isActive ? "bg-white/[0.12] shadow-[0_16px_40px_rgba(8,8,26,0.45)]" : "bg-white/[0.05] hover:border-white/20 hover:bg-white/[0.08]"
                        )}
                      >
                        <span className="flex flex-col">
                          <span>{item.label}</span>
                          <span className="text-sm font-normal text-white/60">{item.subLabel}</span>
                        </span>
                        <motion.span
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm text-white/80 transition-colors duration-300 group-hover:text-white"
                          whileHover={{ rotate: 10 }}
                        >
                          <FiArrowUpRight />
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 rounded-3xl border border-white/[0.12] bg-white/[0.06] p-6 text-sm text-white/75 backdrop-blur-2xl"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-200/80">Same-day response</p>
                  <p className="mt-3 text-base text-white">
                    Tell us what you want to ship and we’ll return a scoped plan within 24 hours.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.3 }}
              >
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="cta-primary w-full rounded-full px-8 py-6 text-lg shadow-[0_22px_60px_rgba(236,72,153,0.45)]"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                    Start your project
                    <FiArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="fixed bottom-8 right-6 z-40 hidden lg:block">
        <Button asChild variant="glow" size="lg" className="rounded-full px-6 py-3">
          <Link href="/contact" className="flex items-center gap-2">
            Let’s Talk
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </header>
  );
}
