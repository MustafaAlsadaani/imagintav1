"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showBadge = !isOpen;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-card flex h-[420px] w-[320px] flex-col overflow-hidden rounded-3xl border border-white/10 shadow-[0_32px_80px_rgba(9,9,26,0.55)]"
            aria-live="polite"
          >
            <div className="bg-gradient-aurora flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white">
              <div>
                <p>Chat with Imaginta</p>
                <p className="text-xs font-normal text-white/80">Typically replies in a few minutes</p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="rounded-full p-1 transition hover:bg-white/20"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto bg-background-secondary/60 px-5 py-6 text-sm text-foreground-secondary">
              <div className="glass-creative max-w-[85%] rounded-2xl px-4 py-3 text-left">
                Hi there! 👋 How can we help you craft your next digital experience?
              </div>
              <p className="text-xs text-foreground-muted">
                Chat widget placeholder. Integrate Intercom, Crisp, LiveChat, or another service when ready.
              </p>
            </div>

            <form
              className="border-t border-white/10 bg-background-secondary/80 px-4 py-4"
              onSubmit={(event) => {
                event.preventDefault();
                setMessage("");
              }}
            >
              <div className="glass-creative flex items-center gap-2 rounded-full px-3 py-2">
                <input
                  type="text"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Type a message..."
                  className="h-10 flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground-muted focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className={cn(
                    "inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-aurora text-white transition",
                    message ? "opacity-100" : "opacity-60",
                  )}
                  disabled={!message}
                >
                  <FaPaperPlane className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close chat widget" : "Open chat widget"}
        className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-aurora text-white shadow-[0_24px_45px_rgba(139,92,246,0.45)] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaComments className="h-6 w-6" />}
        {showBadge && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon text-xs font-semibold text-background">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}

