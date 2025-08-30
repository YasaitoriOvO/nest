import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Archivo Black': true,
      'Noto Sans SC': true,
      'Noto Serif SC': true,
      'Material Symbols Outlined': true
    },
    display: 'swap',
    download: true
  },
  css: ['./app/pages/global.css'],
})