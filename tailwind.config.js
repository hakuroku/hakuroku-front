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
        "fadeIn": "fadeIn 3s ease both",
        "fadeIn2": "fadeIn 0.5s ease both"
      },
      keyframes: {
        "fadeIn": {
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
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.text-outline': {
              textShadow: '2px 2px 4px rgba(255, 255, 255, 0.8), -2px -2px 4px rgba(255, 255, 255, 0.8)',
            },
          });
        },
      ],
    }
  


