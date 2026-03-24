/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#2B1B12",
        chestnut: "#3E2723",
        gold: "#D4AF37",
        glow: "#C68642",
        parchment: "#F2E6D8",
        mist: "#D8C9BB"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 12px 40px rgba(212, 175, 55, 0.18)",
        glow: "0 0 0 1px rgba(212, 175, 55, 0.18), 0 0 24px rgba(198, 134, 66, 0.22)"
      },
      backgroundImage: {
        "executive-radial": "radial-gradient(circle at top, rgba(212, 175, 55, 0.10), transparent 38%), radial-gradient(circle at 80% 20%, rgba(198, 134, 66, 0.14), transparent 22%)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "scaleX(0)", opacity: "0.35" },
          "100%": { transform: "scaleX(1)", opacity: "1" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        shimmer: "shimmer 700ms ease-out forwards",
        float: "float 7s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
