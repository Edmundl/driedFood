import Countly from 'countly-sdk-web'
import { callNative } from '@umetrip/jsapi'

export function query(name) {
  // var params = location.search.substr(1);
  var params = location.href.split('?')[1] || ''
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
	var value = params.match(reg)
	if (value) {
		return decodeURIComponent(value[2])
	}
	return null
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
  let d = function() {
    setTimeout(function() {
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
  if (!Countly.app_key) {
    Countly.init({
      app_key: 'a4cf64ed5bebc726f389b9e0f3c5b79e8406b210',
      url: 'http://10.5.150.36/'
    });
    // track sessions automatically
    Countly.track_sessions();
    // track pageviews automatically
    Countly.track_pageview();
    Countly.track_errors();
  } else {
    hashLog()
  }
}

export function hashLog() {
  Countly.track_pageview();
}

export function clickEvent(ob) {
  Countly.add_event({
    key: 'asyncButtonClick', 
    segmentation: {
      id: ob.id
    }
  });
}

export function uploadH5Log() {
  var p = {
    ti: document.title,
    ul: location.pathname + location.hash,
    bt: ''
  }
  callNative('uploadH5Log', {
    't': Date.now(),
    'p': p,
    'e': 6
  })
}

export function record() {
  countlyLog()
  uploadH5Log()
  // window.addEventListener('hashchange', function() {
  //   Countly.q.push(['track_pageview', location.pathname + location.hash]);
  //   uploadH5Log()
  // });
}