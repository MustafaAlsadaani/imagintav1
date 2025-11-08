"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050516] via-[#0f0f2a] to-[#050513] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(236,72,153,0.35),transparent_55%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.3),transparent_60%)] opacity-70" />
      <div className="container-custom relative z-10 text-center">
        <motion.h2
          className="text-balance text-3xl font-heading font-bold sm:text-4xl lg:text-[2.75rem]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to move from vision decks to market-dominating reality?
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Step into the Imaginta war room. We align your leadership, activate the right squad, and choreograph the launch sequence
          your competitors can&apos;t replicate.
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.12] px-8 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050516]"
          >
            Enter mission control
            <FaArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition-all duration-300 hover:border-white hover:text-white"
          >
            Review our squads
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

