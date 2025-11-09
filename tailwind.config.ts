import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 12px)",
        "3xl": "calc(var(--radius) + 20px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: {
          DEFAULT: "#0A192F",
          soft: "#091226",
          secondary: "#0F1F3A",
          tertiary: "#071021",
          card: "rgba(17, 28, 47, 0.78)",
          glass: "rgba(12, 24, 44, 0.72)",
        },
        surface: {
          DEFAULT: "rgba(30, 30, 30, 0.82)",
          subtle: "rgba(20, 24, 38, 0.68)",
          strong: "rgba(28, 34, 56, 0.9)",
        },
        foreground: {
          DEFAULT: "#E0E0E0",
          secondary: "#A0A0A0",
          muted: "#6E7A91",
        },
        premium: {
          bg: "#0A192F",
          surface: "#111C2E",
          neutral: "#162338",
          glass: "rgba(18, 30, 48, 0.78)",
          cyan: "#00E5E5",
          magenta: "#E600E6",
          accent: "#E600E6",
          green: "#32CD32",
          text: "#E6E8ED",
          "text-secondary": "#9AA7C2",
          "text-muted": "#7584A1",
          border: "rgba(0, 229, 229, 0.2)",
          borderSoft: "rgba(12, 24, 44, 0.6)",
        },
        "premium-overlay":
          "linear-gradient(135deg, rgba(0, 229, 229, 0.12), rgba(230, 0, 230, 0.08)), radial-gradient(circle at 20% 20%, rgba(0, 229, 229, 0.08), transparent 62%)",
        "cyber-bg": "#0A192F",
        "cyber-bg-strong": "#050B1B",
        "cyber-neutral": "#1E1E1E",
        "cyber-neutral-soft": "#131C2E",
        "cyber-primary": "#00FFFF",
        "cyber-primary-soft": "#00FFFF80",
        "cyber-accent": "#FF00FF",
        "cyber-secondary-hover": "#B026FF",
        "cyber-highlight": "#39FF14",
        "cyber-text": "#E0E0E0",
        "cyber-text-secondary": "#A0A0A0",
        border: {
          DEFAULT: "rgba(0, 255, 255, 0.18)",
          strong: "rgba(176, 38, 255, 0.32)",
          contrast: "rgba(57, 255, 20, 0.28)",
        },
        overlay: {
          soft: "rgba(5, 18, 32, 0.55)",
          deep: "rgba(4, 12, 24, 0.82)",
        },
        gradient: {
          aurora: "linear-gradient(135deg, rgba(0, 255, 255, 0.28), rgba(176, 38, 255, 0.24))",
          dusk: "linear-gradient(145deg, rgba(255, 0, 255, 0.24), rgba(57, 255, 20, 0.18))",
          neon: "linear-gradient(120deg, rgba(0, 255, 255, 0.3), rgba(255, 0, 255, 0.18), rgba(57, 255, 20, 0.24))",
        },
      },
      backgroundImage: {
        "hero-aurora":
          "radial-gradient(circle at 18% 20%, rgba(0, 255, 255, 0.32), transparent 58%), radial-gradient(circle at 82% 18%, rgba(176, 38, 255, 0.26), transparent 62%)",
        "grid-soft":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "premium-veil":
          "linear-gradient(160deg, rgba(10, 23, 38, 0.98) 0%, rgba(8, 18, 34, 0.92) 45%, rgba(5, 12, 24, 0.96) 100%)",
      },
      boxShadow: {
        "depth-soft": "0 18px 42px rgba(5, 12, 28, 0.55)",
        "depth-medium": "0 28px 80px rgba(4, 16, 40, 0.6)",
        "depth-strong": "0 40px 130px rgba(3, 12, 32, 0.65)",
        "glow-cyan": "0 0 48px rgba(0, 255, 255, 0.35)",
        "glow-magenta": "0 0 54px rgba(255, 0, 255, 0.32)",
        "glow-neo": "0 0 60px rgba(57, 255, 20, 0.3)",
        premium: "0 16px 40px rgba(0, 229, 229, 0.12), 0 6px 18px rgba(10, 25, 47, 0.85)",
        "premium-inner": "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.21, 0.61, 0.35, 1)",
        soft: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        swift: "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      transitionDuration: {
        450: "450ms",
        500: "500ms",
        600: "600ms",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 12s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
