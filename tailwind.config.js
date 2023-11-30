/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Add the 'backgroundColor' and 'textColor' properties to set default styles for 'body'.
  // You can adjust the classes 'bg-gray-800' and 'text-white' to your preferred values.
  corePlugins: {
    preflight: false, // Disable the default base styles to avoid conflicts.
  },
  extend: {
    // Set default background color and text color for the 'body' element.
    backgroundColor: {
      'body': 'bg-gray-800',
    },
    textColor: {
      'body': 'text-white',
    },
  },
};
