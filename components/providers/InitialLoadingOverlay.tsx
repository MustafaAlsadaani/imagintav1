"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const PROGRESS_STEPS = [
  "Setting up secure connection",
  "Loading Imaginta experience",
  "Preparing partner playbooks",
];

export default function InitialLoadingOverlay() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const wavePoints = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, index) => ({
        id: `wave-${index}`,
        delay: index * 0.25,
        rotate: index % 2 === 0 ? 12 : -12,
      })),
    []
  );

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setVisible(false), 4200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % PROGRESS_STEPS.length);
    }, 1300);
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-gradient-to-br from-background via-background-secondary to-background/95"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative flex w-full max-w-lg flex-col items-center gap-10 px-8 text-center">
            <div className="relative h-48 w-full overflow-visible">
              <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-200/30" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/20"
                animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {wavePoints.map(({ id, delay, rotate }) => (
                <motion.div
                  key={id}
                  className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                  style={{ rotate }}
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.9, 0.5],
                        }
                  }
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
                />
              ))}

              <motion.div
                className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-cyan-400 blur-2xl"
                animate={prefersReducedMotion ? undefined : { scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/60"
                animate={prefersReducedMotion ? undefined : { rotate: [-8, 8, -8] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex h-full w-full items-center justify-center text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">
                  im
                </div>
              </motion.div>
            </div>

            <div className="w-full space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-orange-200/80">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-300" />
                Imaginta
              </div>

              <motion.p
                key={PROGRESS_STEPS[step]}
                className="text-sm text-foreground-secondary"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
              >
                {PROGRESS_STEPS[step]}
              </motion.p>

              <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400"
                  animate={{ width: ["5%", "70%", "100%"] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
