"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Web Development", href: "/services#web" },
  { label: "Marketing", href: "/services#marketing" },
  { label: "Graphic Design", href: "/services#design" },
  { label: "Business Development", href: "/services#business" },
  { label: "Cyber Security", href: "/services#security" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progressScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
    return undefined;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems = useMemo(
    () =>
      NAV_LINKS.map((link) => ({
        ...link,
        isActive: link.href === "/services" ? pathname?.startsWith("/services") : pathname === link.href,
      })),
    [pathname]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/85 via-background/30 to-transparent" />

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 pt-6 transition-all duration-500">
        <motion.div
          className={cn(
            "flex w-full items-center justify-between gap-4 transition-all duration-500",
            isScrolled ? "glass-card rounded-full px-6 py-3 shadow-xl" : "glass-creative rounded-2xl px-8 py-4"
          )}
          layout
        >
          <Link href="/" className="flex items-center gap-3" aria-label="Imaginta home">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-semibold lowercase tracking-tight text-gradient"
            >
              imaginta
            </motion.span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="relative"
            >
              <button
                type="button"
                className="group flex items-center gap-2 text-sm font-medium text-foreground-secondary transition-colors duration-300 hover:text-electric"
              >
                Services
                <FaChevronDown
                  className={cn(
                    "h-3 w-3 transition-transform duration-300",
                    isServicesOpen ? "rotate-180 text-electric" : "text-foreground-muted"
                  )}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="glass-card absolute left-1/2 top-full mt-4 w-56 -translate-x-1/2 rounded-xl p-2 shadow-2xl"
                  >
                    {SERVICE_LINKS.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block rounded-lg px-4 py-3 text-sm text-foreground-secondary transition-colors duration-200 hover:bg-white/10 hover:text-electric"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems
              .filter((item) => item.label !== "Services")
              .map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-foreground-secondary transition-colors duration-300 hover:text-electric",
                    item.isActive && "text-electric"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-0 top-full mt-1 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-aurora transition-transform duration-300",
                      item.isActive && "scale-x-100",
                      "group-hover:scale-x-100"
                    )}
                  />
                </Link>
              ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="gradient"
              size="sm"
              className="relative hidden overflow-hidden rounded-full px-6 py-2 text-sm font-semibold lg:inline-flex"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>

            <motion.button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors duration-300 hover:border-electric hover:text-electric lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              whileTap={{ scale: 0.94 }}
            >
              {isMobileMenuOpen ? <FaTimes className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gradient-aurora"
          style={{ scaleX: progressScaleX }}
        />
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-2xl"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.06 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-foreground transition-colors duration-300 hover:text-gradient"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="rounded-full px-8 py-6 text-lg"
            >
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                Start Your Project
                <FiArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-6 z-40 hidden lg:block"
      >
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
