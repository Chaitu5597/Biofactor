export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"], // for titles
        body: ["Merriweather", "serif"],    // for paragraphs
      },
      fontSize: {
        normal: "20px",   // custom normal size
      },
      lineHeight: {
        tight20: "1.3",   // reduced spacing
      },
    },
  },
  plugins: [],
};