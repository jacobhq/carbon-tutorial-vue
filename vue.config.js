// vue.config.js
module.exports = {
  // options...
  devServer: {
    disableHostCheck: true
  },
  pwa: {
    themeColor: '#42b983',
    msTileColor: '#42b983',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      background_color: '#42b983'
    }
  }
};
