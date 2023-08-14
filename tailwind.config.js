/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jb': ['JetBrains Mono', 'monospace'],
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

