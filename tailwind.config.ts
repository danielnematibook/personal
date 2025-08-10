// ===== IMPORTS & DEPENDENCIES =====
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// ===== CONFIGURATION & CONSTANTS =====
const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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

    // --- FINAL & TYPE-SAFE Glow Plugin ---
    plugin(function ({ addUtilities }: { addUtilities: (utilities: any) => void }) {
      addUtilities({
        '.icon-glow': {
          filter: 'drop-shadow(0 0 8px var(--glow-color))',
        },
      })
    }),
  ],
};

export default config;