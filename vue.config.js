module.exports = {
  "transpileDependencies": [],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  devServer: {
    port: 8000
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/parspack-clone/'
    : '/'

}