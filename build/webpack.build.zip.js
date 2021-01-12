var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.build');
const FileManagerPlugin = require('filemanager-webpack-plugin');
var configVar = require('../src/utils/configVar')

var webpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: [`./${configVar.configVar.projectName}.zip`, `./dist`],
        },
        onEnd: [
          {
            mkdir: [`./temp/${configVar.configVar.projectName}`],
            copy: [
              {
                source: `./dist/static`,
                destination: `./temp/${configVar.configVar.projectName}/static`
              },
              {
                source: `./dist/index.html`,
                destination: `./temp/${configVar.configVar.projectName}/index.html`
              }
            ],
            archive: [
              {
                source: `./temp`,
                destination: `./${configVar.configVar.projectName}.zip`
              }
            ],
            delete: [`./temp`]
          }
        ]
      }
    })
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
})

module.exports = webpackConfig