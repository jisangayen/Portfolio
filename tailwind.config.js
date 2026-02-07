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
        PrimaryColor: "#253745",
        PrimaryColor2: "#11212d",
        SecondaryColor: "#4a5c6a"
      }
    },
  },
  plugins: [tailwindscrollbar],
}