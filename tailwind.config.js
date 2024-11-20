/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        appearCircle: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'spin': 'spin 4s linear forwards',
        'spinInfinite': 'spin 1s linear infinite',
        'appearCircle': 'appearCircle 0.5s ease-out forwards'
      }
    }
  },
  plugins: [require('tailwind-scrollbar'),],
}

