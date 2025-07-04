import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],

  // Configuration Vite pour TresJS
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@sentry/nuxt/module',
    'nuxt-meilisearch',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@pinia/colada-nuxt',
    '@primevue/nuxt-module',
    '@formkit/auto-animate/nuxt',
    'v-gsap-nuxt',
    '@tresjs/nuxt'
  ],

  tres: {
    devtools: false,
  },

  vgsap: {
    presets: [],
    breakpoint: 768,
    scroller: '',
    composable: true
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: 'aplix',
      project: 'nuxt-portfolio',
      url: process.env.SENTRY_URL || 'https://glitchtip-ywgws00kck80ggsgcoksk4s0.applix.fr/',
    },
  },

  meilisearch: {
    hostUrl: process.env.MEILISEARCH_HOST_URL || 'http://localhost:7700',
    searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY || 'qAUVtvxRfFEme3Oi0gPlvpAmIp14p0qCdkCuCjYsKi4',
    adminApiKey: process.env.MEILISEARCH_ADMIN_API_KEY || 'qAUVtvxRfFEme3Oi0gPlvpAmIp14p0qCdkCuCjYsKi4',
    instantSearch: true,
    serverSideUsage: false
  },

  runtimeConfig: {
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID || '6ftSaKAGuhniH8GXNwxj',
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'rqMV8BScb4lO3f236Fx96gjUEOCW9RnFTwzRnobh',
    awsDefaultRegion: process.env.AWS_DEFAULT_REGION || 'eu-west-3',
    awsBucket: process.env.AWS_BUCKET || 'portfolio',
    awsEndpoint: process.env.AWS_ENDPOINT || 'https://storage.aplix.nl',
    public: {
      apiUrl: process.env.API_URL,
      awsUrl: process.env.AWS_URL || 'https://storage.aplix.nl/portfolio',
      awsUsePathStyleEndpoint: process.env.AWS_USE_PATH_STYLE_ENDPOINT || 'true',
    },
  },

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        }
      }
    }
  },
})