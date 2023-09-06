/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./dist/style.css"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 2px 31px 0px rgba(194, 193, 209, 0.37)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        mycyan: "#34AFF4",
      },
    },
  },
  plugins: [],
};
