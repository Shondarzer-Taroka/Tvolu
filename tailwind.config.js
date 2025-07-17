
/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-reverse': 'reverse-spin 2s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      colors: {
        primary: '#443927', // Add custom colors if needed
        accent: '#D4AF7A',
        background: '#FAFAFA',
        brown: {
          400: "#a65e3d",
          600: "#6d3d27",
          700: "#502d1e",
        },
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
   
    fontFamily: {
      poppins:"'Poppins', sans-serif"
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      'light',
      
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
}




