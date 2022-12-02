/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3d-button': "var(--shadow-3d-button)",
        '3d-button-inset': "var(--shadow-3d-button-inset)",
        '3d-card': "var(--shadow-3d-card)",
      },
      dropShadow: {
        'themed': "var(--drop-shadow)",
        'light': "var(--drop-shadow-light)",
      }
    },
    colors: {
      ...colors,
      'primary': "var(--color-primary)",
      'themed-bg': "var(--color-background)",
      'themed-bg-transparent': "var(--color-background-transparent)",
      'themed-text': "var(--color-text)",
      'themed-border': "var(--color-border)",
      'appbar-border': "var(--color-border-appbar)",
    },
  },
  plugins: [],
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },
};
