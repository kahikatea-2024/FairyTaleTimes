/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['Newsreader', 'sans-serif'], // Title 
        space: ['Space Grotesk', 'sans-serif'], // Subtitle
        lora: ['Lora', 'serif'], // Main

    },
    colors:{
      DarkBlue: '#2e3d50',
      LightBlue: '#f1f7fd',

    }
    },
  },
  plugins: [],
}
