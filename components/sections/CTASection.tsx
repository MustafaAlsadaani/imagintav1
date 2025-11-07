"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-electric-blue to-accent py-20 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container-custom relative z-10 text-center">
        <motion.h2
          className="text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready to Build Your Digital Foundation?
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-lg text-white/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Let&apos;s elevate your business with strategy-backed creativity and secure digital solutions.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-primary shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Schedule a Strategy Call
            <FaArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-white hover:text-primary"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

