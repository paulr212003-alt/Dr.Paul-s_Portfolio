/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./data/**/*.{js,jsx,ts,tsx,mdx}",
    "./lib/**/*.{js,jsx,ts,tsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-soft": "rgb(var(--color-surface-soft) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        "accent-contrast": "rgb(var(--color-accent-contrast) / <alpha-value>)"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 50px rgb(var(--shadow-rgb) / 0.08)",
        float: "0 10px 26px rgb(var(--shadow-rgb) / 0.06)",
        glow:
          "0 0 0 1px rgb(var(--color-accent) / 0.16), 0 12px 30px rgb(var(--glow-rgb) / 0.18)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "scaleX(0)", opacity: "0.35" },
          "100%": { transform: "scaleX(1)", opacity: "1" }
        }
      },
      animation: {
        shimmer: "shimmer 700ms ease-out forwards"
      }
    }
  },
  plugins: []
};
