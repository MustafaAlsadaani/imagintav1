"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const ctaClasses =
  "group relative hidden overflow-hidden rounded-full border border-[rgba(0,229,229,0.28)] bg-[rgba(12,25,44,0.78)] px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-premium-text transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(230,0,230,0.4)] hover:text-white lg:inline-flex";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isMobileMenuOpen) {
      body.dataset.navOpen = "true";
      html.dataset.navOpen = "true";
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      delete body.dataset.navOpen;
      delete html.dataset.navOpen;
      body.style.overflow = "";
      html.style.overflow = "";
    }

    return () => {
      delete body.dataset.navOpen;
      delete html.dataset.navOpen;
      body.style.overflow = "";
      html.style.overflow = "";
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
    [pathname],
  );

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 sm:px-6">
      <motion.nav
        layout
        className={cn(
          "pointer-events-auto relative w-full max-w-6xl overflow-hidden rounded-[26px] border border-[rgba(0,229,229,0.18)] bg-[rgba(10,20,36,0.92)] shadow-[0_20px_58px_rgba(5,15,32,0.58)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
          isScrolled && "border-[rgba(230,0,230,0.28)] bg-[rgba(8,18,34,0.94)] shadow-[0_26px_68px_rgba(5,15,32,0.65)]",
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_-10%_-30%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_110%_-40%,rgba(230,0,230,0.14),transparent_64%)] opacity-80" />
        <motion.span
          className="pointer-events-none absolute left-8 right-8 top-0 h-[2px] origin-left rounded-full bg-gradient-to-r from-premium-cyan via-premium-magenta to-premium-cyan"
          style={{ scaleX: progressScaleX }}
        />

        <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 md:px-8">
          <Link href="/" aria-label="Imaginta home" className="flex items-center gap-3">
            <motion.span
              className="text-xl font-semibold lowercase tracking-tight text-white"
              whileHover={{ scale: 1.08, color: "#00E5E5" }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              imaginta
            </motion.span>
            <span className="hidden text-[11px] uppercase tracking-[0.36em] text-premium-text-secondary sm:block">Collective</span>
          </Link>

          <LayoutGroup id="desktop-nav">
            <nav className="relative hidden items-center justify-center gap-1 rounded-full border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.75)] px-3 py-2 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={item.isActive ? "page" : undefined}
                  className={cn(
                    "group relative flex items-center px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-premium-text-secondary transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                    item.isActive ? "text-white" : "hover:text-premium-cyan",
                  )}
                >
                  <span className="relative z-20">{item.label}</span>
                  <span className="absolute inset-0 rounded-full bg-premium-cyan/10 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:opacity-100" />
                  {item.isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-gradient-to-r from-premium-cyan via-premium-magenta to-premium-cyan shadow-[0_0_18px_rgba(0,229,229,0.4)]"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </LayoutGroup>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-[rgba(0,229,229,0.22)] bg-[rgba(12,25,44,0.72)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-premium-text-secondary xl:flex">
              <span className="block size-2 rounded-full bg-premium-green shadow-[0_0_12px_rgba(50,205,50,0.55)]" />
              ready to help
            </div>

            <Link href="/contact" className={ctaClasses}>
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,229,229,0.22),rgba(230,0,230,0.22),rgba(50,205,50,0.22))]" />
              </span>
              <span className="relative z-10 flex items-center gap-2">
                Start a project
                <FiArrowUpRight className="h-4 w-4" />
              </span>
            </Link>

            <motion.button
              type="button"
              aria-label="Toggle navigation"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,229,229,0.24)] bg-[rgba(12,23,39,0.75)] text-premium-text transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.45)] hover:text-premium-cyan lg:hidden"
              whileTap={{ scale: 0.94 }}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="pointer-events-auto fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.65),rgba(0,0,0,0.92))] backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 mt-auto flex h-[88vh] flex-col rounded-t-[36px] border border-[rgba(0,229,229,0.22)] bg-[rgba(8,18,34,0.96)] pb-12 pt-10 shadow-[0_-24px_90px_rgba(5,15,32,0.6)]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.32, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between px-6 pb-6">
                <div className="space-y-2 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-text-secondary">Menu</p>
                  <p className="text-xl font-semibold text-white">Find what you need quickly.</p>
                </div>
                <motion.button
                  type="button"
                  aria-label="Close navigation"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,229,229,0.24)] bg-[rgba(12,23,39,0.75)] text-white transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.45)] hover:text-premium-cyan"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiX className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto px-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * index, duration: 0.28 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-[26px] border px-5 py-4 text-base font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                          item.isActive
                            ? "border-[rgba(0,229,229,0.45)] bg-[rgba(12,23,39,0.82)] shadow-[0_26px_64px_rgba(5,15,32,0.55)]"
                            : "border-[rgba(0,229,229,0.18)] bg-[rgba(12,23,39,0.72)] hover:border-[rgba(0,229,229,0.38)] hover:bg-[rgba(16,28,46,0.78)]",
                        )}
                      >
                        <span>{item.label}</span>
                        <motion.span
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.75)] text-sm text-premium-text-secondary transition-colors duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:border-[rgba(0,229,229,0.45)] group-hover:text-white"
                          whileHover={{ rotate: 10 }}
                        >
                          <FiArrowUpRight />
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 rounded-[26px] border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.78)] p-6 text-sm text-premium-text-secondary"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.32 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-text-secondary/80">Fast response</p>
                  <p className="mt-3 text-base text-premium-text">
                    Share your goal and we send back a simple action plan within one business day.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="px-6 pt-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.32 }}
              >
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="w-full rounded-full px-8 py-5 text-base font-semibold uppercase tracking-[0.3em]"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                    Start a project
                    <FiArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto fixed bottom-8 right-5 z-40 hidden lg:block"
      >
        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyber-primary/40 bg-cyber-bg/80 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-cyber-primary/60"
        >
          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,255,255,0.25),rgba(176,38,255,0.25),rgba(57,255,20,0.25))]" />
          </span>
          <span className="relative z-10 flex items-center gap-2">
            Let’s talk
            <FiArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </motion.div>
    </header>
  );
}
