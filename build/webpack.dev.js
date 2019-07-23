var utils = require('./utils')
var webpack = require('webpack')
var path = require('path')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  devServer:{
    proxy:config.dev.proxyTable,
    contentBase: path.join(__dirname, '../dist'),
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    // development模式会将 process.env.NODE_ENV 的值设为 development
    // new webpack.DefinePlugin({
    //   'process.env': config.dev.env
    // })
  ]
})

