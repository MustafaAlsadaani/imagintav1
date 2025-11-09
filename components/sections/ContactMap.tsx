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
    <section id="map" className="relative overflow-hidden bg-[rgba(6,14,28,0.96)] py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(0,229,229,0.16),transparent_60%),radial-gradient(circle_at_80%_16%,rgba(230,0,230,0.12),transparent_62%),radial-gradient(circle_at_52%_82%,rgba(50,205,50,0.12),transparent_68%)] opacity-75" />
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/circuit-grid.svg')] opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,229,229,0.28)] bg-[rgba(12,25,44,0.72)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.38em] text-premium-cyan">
            Operating field
          </span>
          <h3 className="mt-6 text-balance text-3xl font-heading font-semibold text-white sm:text-4xl">
            Mission rooms in Brussels, Lisbon, and Brooklyn—ready when you need them.
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-base text-premium-text-secondary sm:text-lg">
            Book a two-day intensive or sync remotely. Our squads bridge timezones without slowing your launch cadence.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-10 rounded-[34px] border border-[rgba(0,229,229,0.22)] bg-[rgba(12,23,39,0.8)] p-10 text-white shadow-[0_28px_70px_rgba(5,15,32,0.5)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[rgba(0,229,229,0.2)] bg-[rgba(10,20,36,0.82)] p-8 text-center text-premium-text shadow-[0_24px_60px_rgba(5,15,32,0.48)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(0,229,229,0.18),transparent_60%)] opacity-70" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4">
              <FaMapMarkerAlt className="h-12 w-12 text-premium-cyan" />
              <p className="text-lg font-semibold uppercase tracking-[0.32em] text-premium-text-secondary">Map placeholder</p>
              <p className="max-w-sm text-sm text-premium-text-secondary">
                Embed your preferred mapping provider (Mapbox, Google, ArcGIS) to show in-person session locations and recommended briefing
                venues.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {HUBS.map((hub, index) => (
              <motion.div
                key={hub.city}
                className="rounded-3xl border border-[rgba(0,229,229,0.18)] bg-[rgba(10,20,36,0.78)] px-6 py-6 text-premium-text"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1 * index, duration: 0.45, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-premium-text-secondary/75">
                  <span>{hub.timezone}</span>
                  <span>{index === 0 ? "HQ" : "Node"}</span>
                </div>
                <h4 className="mt-4 text-2xl font-heading font-semibold text-white">{hub.city}</h4>
                <p className="mt-2 text-sm text-premium-text-secondary">{hub.label}</p>
              </motion.div>
            ))}

            <div className="rounded-3xl border border-[rgba(230,0,230,0.18)] bg-[rgba(15,24,42,0.82)] px-6 py-6 text-sm text-premium-text-secondary shadow-[0_18px_46px_rgba(5,15,32,0.45)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-premium-text-secondary/80">In-person intensives</p>
              <p className="mt-3">
                Quarterly, we host two-day deep dives in Brussels and Brooklyn. Mention it in your briefing if face-to-face alignment would
                speed up your launch.
              </p>
            </div>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-[11px] uppercase tracking-[0.35em] text-premium-text-secondary/75">
          Remote-first operators · On-site when the mission demands it.
        </p>
      </div>
    </section>
  );
}

