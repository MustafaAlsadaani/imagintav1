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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: {
          DEFAULT: "#0a0514",
          secondary: "#0f0a1f",
          tertiary: "#1a0f2e",
          card: "#130a24",
        },
        foreground: {
          DEFAULT: "#f8f9fa",
          secondary: "#b4b7c9",
          muted: "#8b8fa3",
        },
        primary: {
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
          foreground: "#100826",
        },
        electric: {
          light: "#a78bfa",
          DEFAULT: "#8b5cf6",
          dark: "#7c3aed",
        },
        cyber: {
          light: "#22d3ee",
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
        },
        neon: {
          light: "#34d399",
          DEFAULT: "#10b981",
          dark: "#059669",
        },
        accent: {
          light: "#f472b6",
          DEFAULT: "#ec4899",
          dark: "#db2777",
        },
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          light: "rgba(255, 255, 255, 0.18)",
        },
        gradient: {
          "aurora-start": "#8b5cf6",
          "aurora-mid": "#06b6d4",
          "aurora-end": "#10b981",
          "sunset-start": "#ec4899",
          "sunset-end": "#f59e0b",
        },
      },
      backgroundImage: {
        "gradient-aurora": "linear-gradient(to right, #8b5cf6, #06b6d4, #10b981)",
        "gradient-sunset": "linear-gradient(to bottom right, #ec4899, #8b5cf6)",
        "gradient-mesh":
          "radial-gradient(at 20% 30%, rgba(139, 92, 246, 0.35) 0%, transparent 60%), radial-gradient(at 80% 70%, rgba(6, 182, 212, 0.35) 0%, transparent 60%)",
      },
      boxShadow: {
        "glow-electric": "0 0 30px rgba(139, 92, 246, 0.25)",
        "glow-cyber": "0 0 30px rgba(6, 182, 212, 0.25)",
        "glow-neon": "0 0 30px rgba(16, 185, 129, 0.25)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.21, 0.61, 0.35, 1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space)", "system-ui", "sans-serif"],
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
