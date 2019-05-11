
const webpack = require('af-webpack/webpack')

module.exports = function (webpackConfig, env) {
  webpackConfig.plugins.unshift(new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
        BUILD_TIME: Date.now(), // 打包时间
    }
  }))
  return webpackConfig
}