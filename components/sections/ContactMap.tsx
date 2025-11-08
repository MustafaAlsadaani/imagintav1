"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const HUBS = [
  { city: "Brussels", label: "HQ · Strategy Ops", timezone: "CET" },
  { city: "Lisbon", label: "Design & Growth Lab", timezone: "WET" },
  { city: "Brooklyn", label: "Product Engineering Cell", timezone: "EST" },
];

export default function ContactMap() {
  return (
    <section id="map" className="relative overflow-hidden bg-gradient-to-b from-[#050516] via-[#07061e] to-background py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(236,72,153,0.16),transparent_60%),radial-gradient(circle_at_78%_20%,rgba(14,165,233,0.16),transparent_62%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center text-white"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-orange-200/80">
            Operating Field
          </span>
          <h3 className="mt-6 text-3xl font-heading font-bold sm:text-4xl">We orchestrate outcomes across three mission hubs.</h3>
          <p className="mt-3 text-base text-white/70">
            Schedule a war-room session in your timezone. Our squads bridge continents and keep your launch cadence uninterrupted.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 rounded-[34px] border border-white/10 bg-white/[0.05] p-10 text-white backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.24),transparent_58%)] opacity-70" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/12 bg-black/40 p-10 text-center">
              <FaMapMarkerAlt className="h-12 w-12 text-orange-200" />
              <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white/65">Live map placeholder</p>
              <p className="max-w-sm text-sm text-white/60">
                Embed your preferred mapping provider here (Mapbox, Google, ArcGIS) to visualise in-person session locations.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {HUBS.map((hub, index) => (
              <motion.div
                key={hub.city}
                className="rounded-[22px] border border-white/12 bg-white/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200/40"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.12 * index, duration: 0.5 }}
              >
                <div className="flex items-center justify-between text-sm uppercase tracking-[0.35em] text-white/45">
                  <span>{hub.timezone}</span>
                  <span>{index === 0 ? "HQ" : "Node"}</span>
                </div>
                <h4 className="mt-4 text-2xl font-heading font-semibold text-white">{hub.city}</h4>
                <p className="mt-2 text-sm text-white/70">{hub.label}</p>
              </motion.div>
            ))}

            <div className="rounded-[22px] border border-white/15 bg-white/[0.06] p-6 text-sm text-white/70">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">In-person intensives</p>
              <p className="mt-3">
                Quarterly, we host two-day intensives in Brussels and Brooklyn. Secure a slot through your producer if your launch
                would benefit from an in-person convergence.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-white/45">
          Remote-first operators · On-site when the mission demands it.
        </p>
      </div>
    </section>
  );
}

