/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      "gotham-sans": ["gotham", "sans-serif"],
    },
    boxShadow: {
      lg: "0px 0px 15px #00000029",
    },
    minWidth: {
      "1/2": "50%",
      "1/4": "25%",
      "3/4": "75%",
      "full": "100%",
    },
  },
  plugins: [],
};
