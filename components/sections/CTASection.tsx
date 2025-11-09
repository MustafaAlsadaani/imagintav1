"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[rgba(5,12,24,0.96)] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(0,229,229,0.2),transparent_60%),radial-gradient(circle_at_82%_18%,rgba(230,0,230,0.16),transparent_64%),radial-gradient(circle_at_52%_78%,rgba(50,205,50,0.12),transparent_70%)] opacity-80" />
      <div className="absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.04]" />
      <div className="container-custom relative z-10 text-center">
        <motion.h2
          className="text-balance text-3xl font-heading font-bold sm:text-4xl lg:text-[2.75rem]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to move from plans to real progress?
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base text-premium-text-secondary sm:text-lg"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Step into the Imaginta war room. We align your leadership, activate the right squad, and choreograph the launch sequence your
          competitors can’t replicate.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.32)] bg-[rgba(12,25,44,0.82)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white shadow-[0_18px_48px_rgba(5,15,32,0.45)] transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.5)] hover:bg-[rgba(16,28,46,0.9)]"
          >
            Enter mission control
            <FaArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.24)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-premium-text-secondary transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:border-[rgba(0,229,229,0.38)] hover:text-white"
          >
            Review our squads
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

