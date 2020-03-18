import { isUmeApp } from './tools.js'

// 以下是关于countly是否打点的配置

var isInUmeApp = isUmeApp(); // 页面当前是否在航旅app内

var configDot = {
  countlyOpen: 1, // countly页面打点是否打开,1打开，0关闭
  countly_appKey: '0ff9608b68551e60f2b0cfcf747f280f35cfc6d3', // countly打点的appKey,默认打到h5embeddedInApp里
  countly_eventKey: '打点测试', // 打点事件的key名，注意替换成自己的！！！,原则上一个项目只需要一个key名，具体事件打到二级目录里
  
  uploadLogOpen: isInUmeApp ? 1 : 0, // 用户行为分析打点功能是否打开，默认如果页面在航旅app内则打开

  vConsoleOpen: 0, // vConsole是否打开，默认关闭，1: 打开vConsole工具，0：关闭vConsole工具，上线前一定要关闭！！
  consoleOpen: 0, // 是否打开console.log，默认关闭， 1：打开日志；0: 关闭日志
  onBack: 0 // 监控左上角返回的功能是否打开:1打开，0关闭；默认关闭，有业务需求再打开；
  // 使用方案见http://172.16.101.1:2158/pages/viewpage.action?pageId=16195992
}

export default {
  ...configDot
}