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
      colors: {
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb'
        }
      }
    },
  },
  plugins: [],
}

