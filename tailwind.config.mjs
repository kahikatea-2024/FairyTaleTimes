/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1020px', max: '1250px' },
      },
    },
  },
  plugins: [],
}
