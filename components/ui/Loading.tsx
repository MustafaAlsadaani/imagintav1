import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <motion.span
        className="block h-16 w-16 rounded-full border-4 border-neutral-200 border-t-accent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
      />
    </div>
  );
}

