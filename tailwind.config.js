/** @type {import('tailwindcss').Config} */
export default {
  content: [  
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'w-10', 'h-10','w-7','h-7','w-20','h-20'
    // Add other sizes if necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

