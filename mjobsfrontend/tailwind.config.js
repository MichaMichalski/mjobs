/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mybg: "rgba(var(--color-mybg))",
        mycontent: "rgba(var(--color-mycontent))",
        mycontenthover: "rgba(var(--color-mycontenthover))"
      },
    },
  },
  plugins: [],
}

