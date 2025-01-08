/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      'main_C': '#ffb433',
      'base_C': '#ffffff',
      'accent_C': '#337eff',
      'accent2_C': '#004bcc',
      'white': '#ffffff',
      'black': '#222222',
      'red': 'red',
    },
    extend: {
      animation: {
        "fade-out": "fade-out 2s ease   both"
      },
      keyframes: {
        "fade-out": {
          "0%": {opacity: "0"},
            to: {opacity: "1"},
        }
      },
      colors: {
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb'
            }
          }   
        }
      },
      plugins: [],
    }
  


