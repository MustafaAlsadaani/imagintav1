"use client";

import { motion } from "framer-motion";

const gradients = [
  {
    className: "left-[-10%] top-[-20%] h-[28rem] w-[28rem] bg-electric/30",
    duration: 24,
  },
  {
    className: "right-[-15%] top-[10%] h-[32rem] w-[32rem] bg-cyber/30",
    duration: 28,
  },
  {
    className: "left-1/2 bottom-[-20%] h-[36rem] w-[36rem] -translate-x-1/2 bg-neon/25",
    duration: 32,
  },
];

export default function AnimatedMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {gradients.map((gradient, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[160px] ${gradient.className}`}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: gradient.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAnIGhlaWdodD0nMTAnIHZpZXdCb3g9JzAgMCAxMCAxMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZmlsdGVyIGlkPSduJyB4PScwJyB5PScwJz48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9JzAuOScgbnVtT2N0YXZlcz0nMycgKyBjbGVhclR5cGU9J2luZGljdGlvbiIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPScxMCcgaGVpZ2h0PScxMCcgZmlsdGVyPSJ1cmwoI24pIiBmaWxsPSIjMDAwIiBvcGFjaXR5PScwLjUnLz48L3N2Zz4=')",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}

