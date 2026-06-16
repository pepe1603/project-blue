export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'nuxt-lucide-icons'
  ],

  components: [
    {
      path: '~/components',
      ignore: ['**/ui/typewriter/**']
    },
    {
      path: '~/components/ui/typewriter',
      pathPrefix: false
    }
  ],

  devtools: {
    enabled: false
  }, app: {
    head: {
      title: '__APP_TITLE__'
    }
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  googleFonts: {
    families: {
      DynaPuff: [400, 500, 600, 700],
      Courgette: [400]
    },
    display: 'swap'
  }
})
