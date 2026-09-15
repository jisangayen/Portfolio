import tailwindscrollbar from "tailwind-scrollbar"
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        SecondaryColor: "#aec3b0"
      }
    },
  },
  plugins: [tailwindscrollbar],
}