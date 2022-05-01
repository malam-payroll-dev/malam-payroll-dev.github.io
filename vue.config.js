const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/malam-payroll-dev/' : '/',

  transpileDependencies: true,

  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html',
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts./,
          handler: 'CacheFirst',
          options: { cacheName: 'vue3-external-fonts' }
        }
      ]
    }
  },

  chainWebpack: config => {
    config.output.chunkFilename('js/[name].[id].[chunkhash:8].js')
  }
})
