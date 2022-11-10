/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors:{
      'black':'#0F1419',
      'dark-1':'#17202A',
      'dark-2':'#1C2733',
      'dark-3':'#283340',
      'dark-4':'#3A444C',
      'dark-5':'#5B7083',
      'dark-6':'#8899A6',
      'dark-7':'#EBEEF0',
      'dark-8':'#F7F9FA',
      'primary-blue':'#1DA1F2',
      'white':'#FFFFFF',
      transparent: 'transparent'
    },
    fontSize: {
      xx:12,
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      backgroundImage:{
        'Avatar': "url('./src/components/profileImg/Avatar.png')"
      }
    },
  },
  plugins: [],
}
