/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths to all of your components
  component: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}