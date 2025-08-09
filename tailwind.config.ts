// ===== IMPORTS & DEPENDENCIES =====
import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

// ===== CONFIGURATION & CONSTANTS =====
const config: Config = {
  darkMode: "class", // FIX: Changed from ["class"] to "class"
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ... rest of the file remains the same
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        'royal-gold': {
            light: '#D4AF37',
            DEFAULT: '#C09A2A',
            dark: '#AE8A24'
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '20px': '20px',
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['IRANYekanX', 'sans-serif'],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const glowUtilities = {
        '.text-glow-instagram': { textShadow: '0 0 10px #E1306C, 0 0 20px #E1306C' },
        '.text-glow-telegram': { textShadow: '0 0 10px #229ED9, 0 0 20px #229ED9' },
        '.text-glow-youtube': { textShadow: '0 0 10px #FF0000, 0 0 20px #FF0000' },
        '.text-glow-spotify': { textShadow: '0 0 10px #1DB954, 0 0 20px #1DB954' },
        '.text-glow-soundcloud': { textShadow: '0 0 10px #FF5500, 0 0 20px #FF5500' },
        '.text-glow-applemusic': { textShadow: '0 0 10px #FB2A42, 0 0 20px #FB2A42' },
      };
      addUtilities(glowUtilities, ['hover']);
    }),
  ],
};

export default config;