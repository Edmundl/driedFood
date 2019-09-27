var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var baseWebpackConfig = require('./webpack.config');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var PurifyCSSPlugin = require('purifycss-webpack');
var path = require('path')
var glob = require('glob-all');

var webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[contenthash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js') // 非入口文件名
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[name].[hash].css')
    }),
    // Make sure this is after ExtractTextPlugin!
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync([
    //     path.resolve(__dirname, '../*.html'), // 处理根目录下的html文件
    //     // path.resolve(__dirname, '../src/pages/*.js'), // 处理src/pages的js文件
    //     path.resolve(__dirname, '../src/components/*/*.vue') // 处理src/components下的vue文件
    //   ])
    // }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js($|\?)/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        // exclude: /iview/,
        uglifyOptions: {
          warnings: false
        }
      }),
      new OptimizeCSSAssetsPlugin({}) // overrides the defaults provided by webpack
    ]
  }
})

module.exports = webpackConfig