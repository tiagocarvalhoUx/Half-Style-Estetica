export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        gold: "#d88957",
        champagne: "#f4e4d8",
        rose: "#f7ebe4",
        plum: "#063f34",
        ivory: "#fbf8f2",
        porcelain: "#fffaf4",
        emerald: "#063f34",
        "emerald-deep": "#012f27",
        copper: "#c75b12",
        "copper-soft": "#d98a58",
        "botanical-cream": "#fbf8f2"
      },
      fontFamily: {
        sans: ["Onest", "Arial", "sans-serif"],
        display: ["Onest", "Arial", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 22px 60px rgba(4, 45, 38, 0.12)"
      }
    }
  },
  plugins: []
};
