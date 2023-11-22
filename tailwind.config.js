/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        onest: ["var(--font-onest)"],
      },
      colors: {
        primaryColored: '#05332B', 
        secondaryColored: '#DDF23D',
        terciaryColored: '#F6F6F1',
        lightBase: '#FFFFFF',
        darkBase: '#121525',
        greenDark: '#012923',
        greenLight: '#0F3E35',
        black: {
          100: '#F6F6F6',
          200: '#A3A9A5',
          300: '#707572',
          400: '#505150',
          500: '#353836',
          600: '#282B29',
          700: '#212322',
          900: '#181A19',
        },
    },
    backgroundColor: {
      "button-default": "#DDF23D",
      'green': '#05332B',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    },
  },
  plugins: [],
}
