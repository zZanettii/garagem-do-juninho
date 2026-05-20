/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        tablet: '768px',
        desktop: '1025px',
      },
    },
  },
};
