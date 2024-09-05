/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 0px 10px 10px #a8a8a8",
      },
      screens: {
        mobile: { max: "640px" },
        tablet: { max: "1440px" },
        laptop: { min: "1440px" },
      },
    },
  },
  plugins: [],
};
