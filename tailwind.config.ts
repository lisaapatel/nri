import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
      },
      screens: {
        xl: "1200px",
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // Cool premium blue system
        navy: {
          950: "#071226",
          900: "#0A1C3A",
          800: "#0E2750",
        },
        brand: {
          600: "#2563EB", // blue-600 feel
          500: "#3B82F6",
          100: "#DBEAFE",
          50: "#EFF6FF",
        },
        ink: {
          900: "#0B1220",
          700: "#1F2A44",
          600: "#334155",
        },
        sand: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
        },
      },
      boxShadow: {
        // Subtle Stripe-like elevation
        soft: "0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.08)",
        lift: "0 2px 4px rgba(15, 23, 42, 0.08), 0 16px 40px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(700px circle at 20% 10%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(600px circle at 80% 30%, rgba(37,99,235,0.12), transparent 55%)",
        "mesh-subtle":
          "radial-gradient(at 40% 20%, rgba(59,130,246,0.06) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(37,99,235,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(219,234,254,0.15) 0px, transparent 50%)",
        "card-overlay":
          "linear-gradient(180deg, transparent 0%, rgba(7,18,38,0.4) 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;

