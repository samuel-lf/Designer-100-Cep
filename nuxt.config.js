export default {
  target: 'static',
  htmlAttrs: {
    lang: 'pt-BR'
  },
  head: {
    title: 'Designer 100 cep',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/scss/global.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:400,600,700,900']
    }
  },

  axios: {},

  build: {
  }
}
