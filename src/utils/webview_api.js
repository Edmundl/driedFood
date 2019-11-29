/* eslint-disable */

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
  var user_agent = navigator.userAgent.toLowerCase();
  var IS_ANDROID = -1 != user_agent.indexOf("android");
  var IS_IOS = -1 != user_agent.indexOf("iphone") || -1 != user_agent.indexOf("ipad");
  if (IS_ANDROID) {
    try {
      if (window.WebViewJavascriptBridge) {
        WebViewJavascriptBridge.callHandler(api_name, conf, function(result) {
          if (result && typeof result === 'string') {
            var result = JSON.parse(result)
          }
          callback(result)
        })
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            WebViewJavascriptBridge.callHandler(api_name, conf, function(result) {
              if (result && typeof result === 'string') {
                var result = JSON.parse(result)
              }
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
          if (result && typeof result === 'string') {
            var result = JSON.parse(result)
          }
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

function registerHandler(api_name, callback) {
  var user_agent = navigator.userAgent.toLowerCase();
  var IS_ANDROID = -1 != user_agent.indexOf("android");
  var IS_IOS = -1 != user_agent.indexOf("iphone") || -1 != user_agent.indexOf("ipad");
  if (IS_ANDROID) {
    try {
      if (window.WebViewJavascriptBridge) {
        WebViewJavascriptBridge.registerHandler(api_name, function(result, responseCallback) {
          callback(result, responseCallback)
        })
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            WebViewJavascriptBridge.registerHandler(api_name, function(result, responseCallback) {
              callback(result, responseCallback)
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
        bridge.registerHandler(api_name, function(result, responseCallback) {
          callback(result, responseCallback)
        })
      })
     } catch (error) {
      alert('WebViewJavascriptBridgeReady初始化错误')
    }
  } else {
    alert("请在航旅纵横中打开链接")
  }
}

function validArgs (name, params) {
   if(params.length === 0) {
    alert("请检查参数，参数不能为空")
   } else if (params.length === 1) {
    if(typeof(params[0]) === 'function'){
      callHandler(name, {}, params[0])
    } else {
      alert("请检查参数是否正确")
    }
  } else {
    if(typeof(params[0]) === 'object' && typeof(params[1]) === 'function'){
      callHandler(name, params[0], params[1])
    } else {
      alert("请检查参数是否正确")
    }
  }
}

export function chooseContact() {
  validArgs("chooseContact", arguments)
}

export function getLocation() {
  validArgs("getLocation", arguments)
}

export function getNetworkType() {
  validArgs("getNetworkType", arguments)
}

export function getReqHeader() {
  validArgs("getReqHeader", arguments)
}

export function getUserInfo() {
  validArgs("getUserInfo", arguments)
}

export function clearCache() {
  validArgs("clearCache", arguments)
}

export function onRefresh() {
  validArgs("onRefresh", arguments)
}

export function onReturn() {
  validArgs("onReturn", arguments)
}

export function onClosed() {
  validArgs("onClosed", arguments)
}

export function getGuestCard() {
  validArgs("getGuestCard", arguments)
}

export function noSlider() {
  validArgs("noSlider", arguments)
}

export function getAirportList() {
  validArgs("getAirportList", arguments)
}

export function getAirlineList() {
  validArgs("getAirlineList", arguments)
}

export function getCertInfo() {
  validArgs("getCertInfo", arguments)
}

export function commonPay() {
  validArgs("commonPay", arguments)
}

export function getBluetooth() {
  validArgs("getBluetooth", arguments)
}

export function Accelerated() {
  validArgs("Accelerated", arguments)
}

export function getPhoto() {
  validArgs("getPhoto", arguments)
}

export function finishWebView() {
  validArgs("finishWebView", arguments)
}

export function callNative(api_name, conf = {}, callback) {
  callHandler('getReqHeader', {}, function(result) {
    if (typeof result === 'string') {
      result = JSON.parse(result)
    }
    if (result.status === 11111) {
      try {
        var rcver = result.data.rcver // 'IOS_i03_05.09.1018', 'AND_a01_05.09.1010'
        var version = rcver.split('_')[2] // '05.09.1018
        version = Number(version.split('.').slice(0, 2).join('')) // number: 509
        if (version > 510) {
          var newConf = conf
          newConf.methodName = api_name
          callHandler('callNative', newConf, callback) // 为配合客户端兼容weex
        } else {
          callHandler(api_name, conf, callback)
        }
      } catch (error) {
        alert(error)
      }
    }
  })
}

export function registerService(api_name, callback) {
  registerHandler(api_name, callback)
}

export default {
  callNative
}
