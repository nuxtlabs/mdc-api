export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['ts']
    }
  }
})
