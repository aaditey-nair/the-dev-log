const disabledCss = {
  "code::before": false,
  "code::after": false,
  "blockquote p:first-of-type::before": false,
  "blockquote p:last-of-type::after": false,
  pre: false,
  code: false,
  "pre code": false,
  "code::before": false,
  "code::after": false,
};

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#50FFB1",
      secondary: "#FFC15E",
      accent: "#282444",
      stripe: "#453e75",
      light: "#FFEEDB",
      dark: "#1D1A31",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        "2xl": { css: disabledCss },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
