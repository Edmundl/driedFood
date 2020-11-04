import Countly from 'countly-sdk-web'
import { callNative } from '@umetrip/jsapi'
import { configVar } from './configVar.js'; 

export function query(key) {
  let url = location.href
  const reg = new RegExp(`[?|&|#]${key}=([^&#]+)`)
  const match = url.match(reg)
  return match && match[1]
}

export function isUmeApp() {
  var userAgent = navigator.userAgent.toLowerCase();
  var hasUmeAgent = userAgent.indexOf('umetrip') !== -1;
  return (query('sourceFrom') && query('sourceFrom') === 'app') || hasUmeAgent
}

export function getFirstProperty(obj) {
  for (let key in obj) { // for in 循环是有序的
    return key
  }
}
export function changeTitle(title) {
  document.title = title
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.setAttribute('src', '/favicon.ico')
  let d = function () {
    setTimeout(function () {
      iframe.removeEventListener('load', d)
      document.body.removeChild(iframe)
    }, 0)
  }
  iframe.addEventListener('load', d)
  document.body.appendChild(iframe)
}
export function getPlatform() {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('android') !== -1) {
    return 'android'
  } else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
    return 'ios'
  } else {
    return ''
  }
}
export function getTime(minutes, seconds) {
  let time = Number(minutes) * 60 + Number(seconds) // 总秒数
  time = time - 1
  minutes = Math.floor(time / 60)
  seconds = time % 60
  if (minutes < 10) {
    minutes = '0' + minutes.toString()
  }
  if (seconds < 10) {
    seconds = '0' + seconds.toString()
  }
  return {
    time: time,
    formatTime: minutes + ':' + seconds
  }
}

export function findIndex(array, key, value) {
  for (let i = 0; i < array.length; i++) {
    const obj = array[i]
    if (obj[key] === value) {
      return i
    }
  }
}

export function countlyLog() {
  if (configVar.countlyOpen) {
    let hashPath = location.hash.split('?')[0]
    Countly.init({
      app_key: configVar.countly_appKey,
      url: 'https://analytics.umetrip.com/'
      // url: 'http://10.5.150.36/'
    });
    Countly.q.push(['track_sessions']);
    Countly.q.push(['track_pageview', location.pathname + hashPath]);
    Countly.q.push(['track_errors']);
  }
}

export function clickEvent(bt) {
  if (configVar.countlyOpen) {
    Countly.add_event({
      key: configVar.countly_eventKey, // Tag名称，需自定义
      segmentation: {
        [bt]: 1
      }
    });
  }
}

export function uploadH5Log() {
  var isInUmeApp = isUmeApp()
  if (configVar.uploadLogOpen && isInUmeApp) {
    let hashPath = location.hash.split('?')[0]
    var p = {
      ti: document.title,
      ul: location.pathname + hashPath,
      bt: ''
    }
    callNative('uploadH5Log', {
      't': Date.now(),
      'p': p,
      'e': 6
    }, function(result) {
      console.log(result)
    })
  }
}

export function uploadH5LogBtn(bt) {
  var isInUmeApp = isUmeApp()
  if (configVar.uploadLogOpen && isInUmeApp) {
    let hashPath = location.hash.split('?')[0]
    var p = {
      ti: document.title,
      ul: location.pathname + hashPath,
      bt: bt
    }
    callNative('uploadH5Log', {
      't': Date.now(),
      'p': p,
      'e': 7
    }, function(result) {
      console.log(result)
    })
  }
}

export function record(hash) {
  countlyLog(hash)
  uploadH5Log(hash)
}

export function initH5Service() {
  var isInUmeApp = isUmeApp()
  let p1 = new Promise((resolve, reject) => {
    if (isInUmeApp) {
      callNative('h5Service', {
        serviceName: []
      }, result => {
        console.log('beforeEach h5Service回调执行了', result)
        resolve(result)
      })
    } else {
      resolve(true)
    }
  })
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
  return Promise.race([p1, p2])
}

export function xlogUp(level, submid, func, content) {
  // level 表示等级，可选'I','W','E','F',分别代表Info,Warn,Error,Fatal
  // func 表示当前报错的方法名，方便自己定位的
  // mid 表示大业务类型，21表示jsapi；这里写死21就行
  // submid 表示业务块名称，比如'机票','客服'等，或者'接口请求'这种代表功能的意义也可以，自己知道就行
  // content 表示具体要上传的log内容
  var isInUmeApp = isUmeApp()
  if (isInUmeApp) {
    callNative('jsUploadXlog', {
      level: level,
      func: func,
      mid: '21',
      submid: submid,
      content: content
    }, () => {})
  }
}