/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // أزرق بنفسجي
        accent: "#ec4899", // وردي
      },
   

    },
  },
  plugins: [],
};
