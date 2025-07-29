import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  head: {
    titleTemplate: '%s - baltazar-qr-app',
    title: 'baltazar-qr-app',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS
  css: [],

  // Plugins
  plugins: [
    '~/plugins/html5-qrcode.js'
  ],

  // Auto import components
  components: true,

  // Build modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // Authentication
  auth: {
    redirect: {
      login: "/auth/signin",
      logout: "/auth/signin",
      callback: "/auth/callback",
      home: "/"
    },
    autoFetchUser: true,
    strategies: {
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID || '5167xxxx.apps.googleusercontent.com',
        scheme: "oauth2",
        endpoints: {
          authorization: "https://accounts.google.com/o/oauth2/auth",
          userInfo: "https://www.googleapis.com/oauth2/v3/userinfo"
        },
        token: {
          property: "access_token",
          type: "Bearer",
          maxAge: 1800,
        },
        responseType: "token id_token",
        scope: ["openid", "profile", "email"],
        redirectUri: process.env.GOOGLE_REDIRECT_URI || "http://localhost:3000/auth/callback",
        codeChallengeMethod: "",
      }
    }
  },

  // Vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration
  build: {}
}
