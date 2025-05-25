// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [{ name: 'Libre Franklin', provider: 'google', weights: [300, 400, 500, 600, 700, 800, 900] }]
  }
})
