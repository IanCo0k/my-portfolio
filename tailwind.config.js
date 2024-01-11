/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#379634ff',
        'aero': '#05b2dcff',
        'seasalt': '#f7f7f9ff',
        'dark-purple': '#0f0326ff',
        'oxford-blue': '#0c1b33ff',
      },
      backgroundColor: {
        'body': 'var(--bg-dark-purple)',
      },
    },
  },
  plugins: [],
};
