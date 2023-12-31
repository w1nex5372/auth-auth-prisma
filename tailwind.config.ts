import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#0C3A58',
      secondary: '#1F8289',
      third: '#F6D65A',
      black: '#000000',
      white: '#ffffff',
      red: '#D03937',
      gray: '#808080',
      lowgray: '#f0f0f0',
      green: '#008000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'lessthen400' : "400",
        'sm': '767px', // Set your desired starting point for sm
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
