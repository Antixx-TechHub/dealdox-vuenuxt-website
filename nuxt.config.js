export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'DealDox',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/pages-css/home-one.css',
    '~/assets/css/pages-css/home-one.scss',
    '~/assets/css/pages-css/home-two.css',
    '~/assets/css/pages-css/home-two.scss',
    '~/assets/css/pages-css/home-three.css',
    '~/assets/css/pages-css/home-three.scss',
    '~/assets/css/pages-css/home-four.css',
    '~/assets/css/pages-css/home-four.scss',
    '~/assets/css/pages-css/home-five.css',
    '~/assets/css/pages-css/home-five.scss',
    '~/assets/css/pages-css/home-six.css',
    '~/assets/css/pages-css/home-six.scss',
    '~/assets/css/pages-css/footer.css',
    '~/assets/css/pages-css/footer.scss',
    '~/assets/css/pages-css/navbar.css',
    '~/assets/css/pages-css/navbar.scss',
    '~/assets/css/style.css',
    '~/assets/css/style.scss',
    '~/assets/css/remixicon.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/pages-css/profile-authentication.css',
    '~/assets/css/pages-css/profile-authentication.scss',
    '~/assets/css/pages-css/blog-details.css',
    '~/assets/css/pages-css/blog-details.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
        loaders: {
            vue: {
                prettify: false
            }
        }
  }
}
