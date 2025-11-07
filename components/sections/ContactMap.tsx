"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { fadeInUp } from "@/lib/animations";

export default function ContactMap() {
  return (
    <section id="map" className="bg-gradient-to-b from-background to-background-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h3
          className="text-center text-3xl font-heading font-bold text-foreground"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Location
        </motion.h3>
        <motion.div
          className="glass-card mt-10 h-96 overflow-hidden rounded-3xl"
          variants={fadeInUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-electric/10 to-cyber/10">
            <FaMapMarkerAlt className="mb-4 h-12 w-12 text-electric" />
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground">Google Maps integration placeholder</p>
              <p className="mt-1 text-sm text-foreground-secondary">
                Integrate Google Maps or Mapbox here in production.
              </p>
            </div>
          </div>
        </motion.div>
        <p className="mt-6 text-center text-sm text-foreground-secondary">
          Based in Brussels, Belgium — partnering with teams worldwide.
        </p>
      </div>
    </section>
  );
}

