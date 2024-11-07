/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#048282',
        'windowsblue' : "#0c1b98",
        'windowsgray': " #c0c0c0",
        'linearblue' : '#377cc6'
      },
    },
  },
  plugins: [],
}

