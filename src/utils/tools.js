import Countly from 'countly-sdk-web'
import {
  callNative
} from '@umetrip/jsapi'

export function query(key) {
  let url = location.href
  const reg = new RegExp(`[?|&|#]${key}=([^&#]+)`)
  const match = url.match(reg)
  return match && match[1]
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
  let hashPath = location.hash.split('?')[0]
  Countly.init({
    app_key: '0ff9608b68551e60f2b0cfcf747f280f35cfc6d3',
    url: 'https://analytics.umetrip.com/'
  });
  // Countly.track_sessions();
  // Countly.track_pageview(location.pathname + location.hash);
  // Countly.track_errors();
  Countly.q.push(['track_sessions']);
  Countly.q.push(['track_pageview', location.pathname + hashPath]);
  Countly.q.push(['track_errors']);
}

export function clickEvent(key, ua) { // key:事件属性(二级目录),ua:浏览器类型(三级目录)
  let obj = {};
  obj[key] = ua;
  Countly.add_event({
    key: '', // Tag名称，需自定义
    segmentation: obj
  });
}

export function uploadH5Log() {
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

export function uploadH5LogBtn(bt) {
  let hashPath = location.hash.split('?')[0]
  var p = {
    ti: document.title,
    ul: location.pathname + hashPath,
    bt: bt
  }
  // console.log(p)
  callNative('uploadH5Log', {
    't': Date.now(),
    'p': p,
    'e': 7
  }, function(result) {
    console.log(result)
  })
}

export function record(hash) {
  countlyLog(hash)
  uploadH5Log(hash)
  // window.addEventListener('hashchange', function() {
  //   Countly.q.push(['track_pageview', location.pathname + location.hash]);
  //   uploadH5Log()
  // });
}
