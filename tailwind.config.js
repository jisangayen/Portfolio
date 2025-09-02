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
        PrimaryColor: "#fe8d4e",
        PrimaryColor2: "#fd5472",
        SecondaryColor: "#7234fe"
      }
    },
  },
  plugins: [tailwindscrollbar],
}