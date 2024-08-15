/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      title: ["Bebas Neue", "sans-serif"],
    },
    backgroundImage: {
      'landingImage':"url('src/assets/images/content-image01.jpg')",
      'photograph':"url('src/assets/images/Photo-1326x939.jpg')",
      'playFullBg':"url('src/assets/images/Top-Viewbbcbv-1-scaled.jpg')",
    }
  },
  plugins: [],
}

