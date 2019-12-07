const path = require('path');
const resolve = dir => path.join(__dirname, './', dir);
module.exports = {
  // webpack配置
  // 简单的配置方式
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': resolve('src'),
        '@imgs': resolve('src/assets/imgs'),
        '@audios': resolve('src/assets/audios'),
        '@less': resolve('src/assets/less'),
        '@utils': resolve('src/utils'),
        '@views': resolve('src/views'),
        '@styles': resolve('src/styles'),
        '@mixin': resolve('src/mixin'),
        '@c': resolve('src/components'),
        '@directive': resolve('src/directive'),
      }
    },
  }),
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        './src/styles/less/*.less',
      ]
    }
  }
}
