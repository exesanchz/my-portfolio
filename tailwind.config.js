/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom colors for the portfolio theme
      colors: {
        // Add custom colors here as needed
      },
      // Custom spacing, fonts, etc. can be added here
      fontFamily: {
        // Add custom fonts here
      },
    },
  },
  plugins: [],
}
