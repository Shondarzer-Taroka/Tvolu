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
       screens: {
        'max-xs': {'max': '392px'},
      }
    },
  },
  plugins: [
  
  ],
};
