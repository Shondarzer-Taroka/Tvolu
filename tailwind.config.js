
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        primary: '#443927', // Add custom colors if needed
        accent: '#D4AF7A',
        background: '#FAFAFA',
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







// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#443927', // Add custom colors if needed
//         accent: '#D4AF7A',
//         background: '#FAFAFA',
//       },
//       fontFamily: {
//         sans: ['Arial', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };
