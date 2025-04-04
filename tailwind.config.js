/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths to all of your components
  component: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: '#151512',
        light: {
          100: '#D6C6FF',
          200: '#ABB5DB',
          300: '#9CAAAB',
        },
        dark: {
          100; '#221f3d',
          200: '#0f0d23',
        },
        accent: "#ABBBFF",
      },
    },
  },
  plugins: [],
}