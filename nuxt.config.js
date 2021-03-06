export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'idaproject-test-task',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/scss/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {
            src: '~plugins/svg4everybody.js',
            ssr: false,
        },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/svg-sprite-module
        '@nuxtjs/svg-sprite',
        // Doc: https://github.com/nuxt-community/style-resources-module
        '@nuxtjs/style-resources',
        // Doc: https://github.com/nuxt-community/color-mode-module
        '@nuxtjs/color-mode',
    ],

    styleResources: {
        scss: [
            '~/assets/scss/variables.scss',
            '~/assets/scss/mixins.scss',
        ],
    },

    svgSprite: {
        input: '~/assets/svg/',
        output: '~/assets/svg/sprite/',
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
