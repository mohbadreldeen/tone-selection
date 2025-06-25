export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-small': '2rem',
        'custom-large': '1.5rem',
        'custom-xl': '2rem',
        'custom-title': '3.5rem',
      },
    },
  },
};