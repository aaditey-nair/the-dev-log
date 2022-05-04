module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#50FFB1",
      secondary: "#FFC15E",
      accent: "#282444",
      light: "#FFEEDB",
      dark: "#1D1A31",
    },
    extend: {
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
