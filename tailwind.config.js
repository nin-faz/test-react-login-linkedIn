/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedinBlue: "#0A66C2",
        linkedinBlueHover: "#d0e8ff",
        langue:"#006097",
        underLangue:"#0073b1",
        linkVisited:"#8344CC",
        dark:"#10558d",
      },
    },  
    },
  plugins: [],
};