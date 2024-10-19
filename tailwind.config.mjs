/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'md-lg': { min: '1020px', max: '1250px' },
      },
      fontFamily: {
        newsreader: ['Newsreader', 'sans-serif'], // Title
        space: ['Space Grotesk', 'sans-serif'], // Subtitle
        lora: ['Lora', 'serif'], // Main
        buttons: ['Poppins', 'sans-serif'],
      },
      colors: {
        DarkBlue: '#2e3d50',
        MidBlue: '#adb8c4',
        LightBlue: '#f1f7fd',
      },
    },
  },
  plugins: [],
}
