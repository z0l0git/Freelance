module.exports = {
  theme: {
    extend: {
    
      animation: {
        wiggle: "wiggle 2s infinite",
      },
      wiggle: {
        // "0%, 100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotatez(-6deg)" },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      mobile: "480px",
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
