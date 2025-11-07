export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="pointer-events-auto absolute -top-16 left-4 z-[999] inline-flex items-center gap-2 rounded-b-xl bg-gradient-to-r from-electric/90 to-cyber/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(8,8,18,0.45)] transition focus:top-4 focus:outline-none"
    >
      Skip to main content
    </a>
  );
}

