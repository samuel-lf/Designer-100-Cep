export default {
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'pt-BR'
    },
    title: 'Designer 100 cep',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ei, Designer! Descubra como você pode conquistar o faturamento de 3 a 5 mil reais por mês utilizando o Marketing Digital.' }
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
    '@nuxtjs/svg',
    'nuxt-webfontloader',
    '@nuxtjs/axios'
  ],
  webfontloader: {
    google: {
      families: ['Montserrat:300,400,600,700,900']
    }
  },

  axios: {},

  build: {
  }
}
