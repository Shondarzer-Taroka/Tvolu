
// /** @type {import('tailwindcss').Config} */
// export default {
//   // darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
    
//     extend: {
//       animation: {
//         spin: 'spin 2s linear infinite',
//         'spin-slow': 'spin 4s linear infinite',
//         'spin-reverse': 'reverse-spin 2s linear infinite',
//       },
//       keyframes: {
//         'reverse-spin': {
//           from: { transform: 'rotate(360deg)' },
//           to: { transform: 'rotate(0deg)' },
//         },
//       },
//       colors: {
//         primary: '#443927', // Add custom colors if needed
//         accent: '#D4AF7A',
//         background: '#FAFAFA',
//         brown: {
//           400: "#a65e3d",
//           600: "#6d3d27",
//           700: "#502d1e",
//         },
//       },
//       fontFamily: {
//         sans: ['Arial', 'sans-serif'],
//       },
//     },
   
//     fontFamily: {
//       poppins:"'Poppins', sans-serif"
//     },
//   },

//   keyframes: {
//         wave: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-50%)' },
//         },
//       },
//       animation: {
//         wave: 'wave 20s linear infinite',
//       },

//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       'light',
      
//       'cupcake',
//       'bumblebee',
//       'emerald',
//       'corporate',
//       'synthwave',
//       'retro',
//       'cyberpunk',
//       'valentine',
//       'halloween',
//       'garden',
//       'forest',
//       'aqua',
//       'lofi',
//       'pastel',
//       'fantasy',
//       'wireframe',
//       'black',
//       'luxury',
//       'dracula',
//       'cmyk',
//       'autumn',
//       'business',
//       'acid',
//       'lemonade',
//       'night',
//       'coffee',
//       'winter',
//       'dim',
//       'nord',
//       'sunset',
//     ],
//   },
// }







/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // class based dark mode
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
        wave: 'wave 20s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        primary: '#443927',
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
        poppins: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [
    // Remove or comment out daisyUI plugin if you want no daisyUI styling at all
    // require("daisyui")
  ],
  // Remove daisyui config if not using daisyui
};
