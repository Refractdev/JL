import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        cream: {
          DEFAULT: "hsl(var(--cream))",
          deep: "hsl(var(--cream-deep))",
        },
        paper: "hsl(var(--paper))",
        blush: {
          DEFAULT: "hsl(var(--blush))",
          deep: "hsl(var(--blush-deep))",
        },
        champagne: "hsl(var(--champagne))",
        mocha: "hsl(var(--mocha))",
        cocoa: "hsl(var(--cocoa))",
        taupe: "hsl(var(--taupe))",
        bronze: {
          DEFAULT: "hsl(var(--bronze))",
          deep: "hsl(var(--bronze-deep))",
          glow: "hsl(var(--bronze-glow))",
        },
        espresso: {
          DEFAULT: "hsl(var(--espresso))",
          soft: "hsl(var(--espresso-soft))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 7.5vw, 6.25rem)", { lineHeight: "1.02" }],
        "display-lg": ["clamp(2.25rem, 5.2vw, 4.25rem)", { lineHeight: "1.06" }],
        "display-md": ["clamp(1.875rem, 3.8vw, 3rem)", { lineHeight: "1.1" }],
        "display-sm": ["clamp(1.5rem, 2.6vw, 2.125rem)", { lineHeight: "1.18" }],
      },
      borderRadius: {
        xs: "var(--r-sm)",
        "2xl": "var(--r-md)",
        "3xl": "var(--r-lg)",
        "4xl": "var(--r-xl)",
        "5xl": "var(--r-2xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
        deep: "var(--shadow-deep)",
      },
      maxWidth: {
        measure: "40ch",
        "measure-lg": "58ch",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.33, 1, 0.68, 1)",
      },
      animation: {
        "rise-in": "riseIn 1.1s cubic-bezier(0.33, 1, 0.68, 1) both",
        drift: "driftY 7s ease-in-out infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
