var env = process.env.NODE_ENV || 'development';

// 以下是网络层代理和路径的处理
var host = 'http://gray.umetrip.com' // 要代理到的地址，当开发环境启用本地代理时，本配置才起作用
var middleUrl = '/gateway/api/web/entertainactivityapi/' // 接口公共部分路径

var config = {
  'development': host + middleUrl, // 不起用代理
  // 'development': middleUrl, // 启动代理

  // 'production': 'http://119.254.233.175' + middleUrl // 测试地址
  'production': 'https://gray.umetrip.com' + middleUrl // 接口灰度地址
  // 'production': 'https://cloud.umetrip.com' + middleUrl // 线上地址
};

module.exports = {
  host,
  urlBase: config[env]
}
