export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        gold: "#b88a44",
        champagne: "#efe1c9",
        rose: "#b76e79",
        plum: "#2b1827",
        ivory: "#fffdf9",
        porcelain: "#f7f1eb"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        luxe: "0 22px 60px rgba(43, 24, 39, 0.12)"
      }
    }
  },
  plugins: []
};
