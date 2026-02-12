import tailwindscrollbar from "tailwind-scrollbar"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter']
      },
      colors: {
        PrimaryColor: "#375534",
        PrimaryColor2: "#6b9071",
        SecondaryColor: "#aec3bo"
      }
    },
  },
  plugins: [tailwindscrollbar],
}