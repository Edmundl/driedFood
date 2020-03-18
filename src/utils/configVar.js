import { isUmeApp } from './tools.js'

// 以下是关于countly是否打点的配置

var isInUmeApp = isUmeApp(); // 页面当前是否在航旅app内

var configDot = {
  countlyOpen: 1, // countly页面打点是否打开,1打开，0关闭
  countly_appKey: '0ff9608b68551e60f2b0cfcf747f280f35cfc6d3', // countly打点的appKey,默认打到h5embeddedInApp里
  countly_eventKey: '打点测试', // 打点事件的key名，注意替换成自己的！！！,原则上一个项目只需要一个key名，具体事件打到二级目录里
  
  uploadLogOpen: isInUmeApp ? 1 : 0, // 用户行为分析打点功能是否打开，默认如果页面在航旅app内则打开

  consoleOpen: false // 是否统一关掉console.log: false：打开日志；true: 关掉日志
}

export default {
  ...configDot
}