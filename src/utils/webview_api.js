/* eslint-disable */
var user_agent = navigator.userAgent.toLowerCase();
// var platform = navigator.platform.toLowerCase();
// match 匹配字符串返回的就是[0] = 字符串的数组                                             
// var desktop = !(!platform.match("mac") && !platform.match("win")); // => 等同于 platform.match("mac") || platform.match("win")                                    // => v
// var IS_UMETRIP = -1 != user_agent.indexOf("umetrip");
var IS_ANDROID = -1 != user_agent.indexOf("android");
var IS_IOS = -1 != user_agent.indexOf("iphone") || -1 != user_agent.indexOf("ipad");

function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function() {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

function callHandler(api_name, conf, callback) {
  if (IS_ANDROID) {
    try {
      if (window.WebViewJavascriptBridge) {
        WebViewJavascriptBridge.callHandler(api_name, conf, function(result) {
          var result = JSON.parse(result)
          callback(result)
        })
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            WebViewJavascriptBridge.callHandler(api_name, conf, function(result) {
              callback(result)
            })
          },
          false
        );
      }
    } catch (error) {
      alert('WebViewJavascriptBridgeReady初始化错误')
    }    
  } else if (IS_IOS) {
    try {
      setupWebViewJavascriptBridge(function(bridge) {
        bridge.callHandler(api_name, conf, function(result) {
          var result = JSON.parse(result)
          callback(result)
        })
      })
    } catch (error) {
      alert('WebViewJavascriptBridgeReady初始化错误')
    }
  } else {
    alert("请在航旅纵横中打开链接")
  }
}

// match匹配正则表达式，数组[1] 获取的是子表达式内容，也就是(\d+\.\d+\.\d+)版本号内容
var client_version = function() { // => z
  var a = user_agent.match(/safari\/(\d+\.\d+\.\d+)/) || user_agent.match(/safari\/(\d+\.\d+)/);
  return a ? a[1] : ""
}();

// export function webViewApi(name, conf = {}, callback) {
//   callHandler(name, conf, callback)
// }

export function chooseContact(conf = {}, callback) {
  callHandler('chooseContact', conf, callback)
}

export function getLocation(conf = {}, callback) {
  callHandler('getLocation', conf, callback)
}

export function getNetworkType(conf = {}, callback) {
  callHandler('getNetworkType', conf, callback)
}

export function getReqHeader(conf = {}, callback) {
  callHandler('getReqHeader', conf, callback)
}

export function getUserInfo(conf = {}, callback) {
  callHandler('getUserInfo', conf, callback)
}

export function clearCache(conf = {}, callback) {
  callHandler('clearCache', conf, callback)
}

export function onRefresh(conf = {}, callback) {
  callHandler('onRefresh', conf, callback)
}

export function onReturn(conf = {}, callback) {
  callHandler('onReturn', conf, callback)
}

export function onClosed(conf = {}, callback) {
  callHandler('onClosed', conf, callback)
}
export function getGuestCard(conf = {}, callback) {
  callHandler('getGuestCard', conf, callback)
}
export function noSlider(conf = {}, callback) {
  callHandler('noSlider', conf, callback)
}
export function getAirportList(conf = {}, callback) {
  callHandler('getAirportList', conf, callback)
}
export function getAirlineList(conf = {}, callback) {
  callHandler('getAirlineList', conf, callback)
}
export function getCertInfo(conf = {}, callback) {
  callHandler('getCertInfo', conf, callback)
}
export function commonPay(conf = {}, callback) {
  callHandler('commonPay', conf, callback)
}
export function getBluetooth(conf = {}, callback) {
  callHandler('getBluetooth', conf, callback)
}
export function Accelerated(conf = {}, callback) {
  callHandler('Accelerated', conf, callback)
}
export function getPhoto(conf, callback) {
  callHandler('getPhoto', conf, callback)
}
export function getTemp(conf = {}, callback) {
  callHandler('getTemp', callback)
}