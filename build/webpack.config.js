const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
// build时,设置NODE_ENV=production 打出process.env.NODE_ENV = production
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    'app' : './src/main.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    library: 'ume-ui',
    libraryTarget: 'umd'
  },
	resolve: {
    extensions: [".js", ".vue"],
    alias: {
			'vue': 'vue/dist/vue.esm.js'
		},
    modules: ['node_modules', 'src']
	},
	module:{
		rules:[
			{
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
              options: {
                limit: 10000,
                name: path.posix.join('static/img','./[name].[hash:7].[ext]')
              }
          }
        ]
			},
			{
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: path.posix.join('static/css/fonts','./[name].[hash:7].[ext]')
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }],
        exclude: file => {
          /webview_api/.test(file)
        }
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            postcss: [require('autoprefixer')({ browsers: ['last 10 Chrome versions', 'last 5 Firefox versions', 'Safari >= 6', 'ie > 8']})]
          }
        }],
        // sideEffects: true, //如果package.json文件里有"sideEffects": false,需要加上这一行，表明.vue文件是有副作用的，否则.vue文件中的style样式就没了
        exclude: file => (
          /node_modules/.test(file) && !/\.vue/.test(file)
        )
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              'presets': [
                ['env', { 'modules': false }],
                'stage-2'
              ],
              'plugins': ['transform-runtime', 'syntax-dynamic-import', ['import', {
                libraryName: '@umetrip/ume-ui',
                libraryDirectory: 'src/components/common',
                camel2DashComponentName: false,
                style: (name) => {
                  return `${name}/index.less`
                }
              }]]
            }
          }
        ],
        exclude: file => (
          /node_modules/.test(file)
        )
      },
		]
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          minChunks: 2,
          chunks: 'initial'
        }
      }
    }
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files:['**/*.vue','**/*.css','**/*.less','**/*.sass']
    }),
    new CleanWebpackPlugin(['dist'],{
        root: path.resolve(__dirname,'../')
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: './index.html',
      chunks: ['commons', 'app'], // webpack不会自动注入splitChunks里面提取的公共包
      inject: true
    })
	]
};