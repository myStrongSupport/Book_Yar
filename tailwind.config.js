/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "hsl(from #daaa63 h s l / 0.2)",
          70: "hsl(from #daaa63 h s l / 0.3)",
          100: "#f8f3ed",
          200: "#daaa63",
          300: "#e5830d",
          400: "#967349",
          500: "#7a4f37",
          600: "#220e07",
        },
      },
    },
  },
  plugins: [],
};
