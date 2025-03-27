/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        premier: {
          gold: '#FFCC01',     // Gold color for the crown and highlight elements
          amber: '#FFC107',    // Amber color for hover effects
          purple: '#8B5CF6',   // Purple for contact button
          'purple-dark': '#7C3AED',  // Darker purple for hover states
          'burgundy': '#800020',     // Background color tone
          'floral-white': '#FFF9E6',  // Light floral accent color
        }
      },
    },
  },
  plugins: [],
} 