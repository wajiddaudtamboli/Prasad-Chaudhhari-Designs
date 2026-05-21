/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3EE",
        walnut: "#2A1E17",
        gold: "#C8A97E",
        charcoal: "#1C1C1C",
        taupe: "#D8CEC3",
        muted: "#5A514A",
        beige: "#B89B7A"
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', "serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        luxury: "0 20px 60px rgba(0,0,0,0.12)",
        glow: "0 24px 70px rgba(200,169,126,0.22)"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C8A97E 0%, #D6B58B 100%)",
        "ivory-fade": "linear-gradient(180deg, #F7F3EE 0%, #EFE6DD 100%)"
      }
    }
  },
  plugins: []
};
