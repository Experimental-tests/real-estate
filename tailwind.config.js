module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'status-existing-light': '#00940F1A',
        'status-existing': '#00940F',
        'status-construction-light': '#6366F11A',
        'status-construction': '#0333DC',
        'status-proposed-light': '#FFE5D480',
        'status-proposed': '#FF9241',
      },
      boxShadow: {
        header: '0px 4px 40px 0px #00000012',
        card: '0px 4px 20px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
