import axios from 'axios';
import urlBase from '../../config/config.js';
import { Message, Loading, Modal } from '@umetrip/ume-ui'
import { callNative } from '@umetrip/jsapi'

axios.defaults.timeout = 50000;
var sessionid = '', rcuuid = ''
function getHeader() {
  let p1 = new Promise((resolve, reject) => {
    if (sessionid && rcuuid) {
      resolve({
        sessionid,
        rcuuid
      })
    } else {
      callNative('getUserInfo', {}, (result) => { // 经测试，这个异步api一般在100ms以内
        if (typeof result === 'string') {
          result = JSON.parse(result)
        }
        if (result.status === 11111) {
          sessionid = result.data.sessionId
          rcuuid = result.data.rcuuid
        }
        resolve({
          sessionid,
          rcuuid
        })
      })
    }
  })
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        sessionid,
        rcuuid
      })
    }, 2000)
  })
  return Promise.race([p1, p2])
}

export async function fetchHeader(method, path, params = {}, headers = {}) {
  let data = await getHeader(), promise
  if (/get/i.test(method)) {
    promise = fetchGet(path, params, {
      sessionid: data.sessionid,
      rcuuid: data.rcuuid,
      ...headers
    })
  } else {
    promise = fetchPost(path, params, {
      sessionid: data.sessionid,
      rcuuid: data.rcuuid,
      ...headers
    })
  }
  return promise
}

export async function axiosHeader(method, path, params = {}, headers = {}) {
  let data = await getHeader(), promise
  if (/get/i.test(method)) {
    promise = reqGet(path, params, {
      sessionid: data.sessionid,
      rcuuid: data.rcuuid,
      ...headers
    })
  } else {
    promise = reqPost(path, params, {
      sessionid: data.sessionid,
      rcuuid: data.rcuuid,
      ...headers
    })
  }
  return promise
}

export function fetchGet(path, params = {}, headers = {}) {
  Loading.show()
  var timeout = 50000
  let timeoutPromsie = new Promise((resolve, reject) => {
    setTimeout(() => {
      Loading.hide()
      reject(new Error('fetch timeout'))
    }, timeout)
  })
  let url = urlBase.urlBase + path
  if (params) {
    let paramsArray = [];
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
    } else {
        url += '&' + paramsArray.join('&')
    }
  }
  if (window.fetch) {
    let fetchPromise = fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin', // cookie同域发送
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json() // response.json()返回的是一个promise
      }
      throw new Error(response.statusText)
    })
    return new Promise((resolve, reject) => {
      Promise.race([fetchPromise, timeoutPromsie]).then(data => {
        Loading.hide()
        if (data.errCode === 0 || data.errorCode === 0) {
          resolve(data)
        } else {
          Modal.info({
            content: data.errMsg || data.errorMsg // errMsg兼容gateway错误
          })
        }
      }).catch(error => {
        Loading.hide()
        console.error(error.toString())
        Message.info({
          content: '网络错误，请稍后再试！',
          duration: 2
        })
      })
    })
  } else {
    return hackFetch('GET', url, params, headers)
  }
}

export function fetchPost(path, params = {}, headers = {}) {
  Loading.show()
  var timeout = 60000
  let timeoutPromsie = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('fetch timeout'))
      Loading.hide()
    }, timeout)
  })
  let url = urlBase.urlBase + path
  if (window.fetch) {
    let fetchPromise = fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(params)
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      }
      throw new Error(response.statusText)
    })
    return new Promise((resolve, reject) => {
      Promise.race([fetchPromise, timeoutPromsie]).then(data => {
        Loading.hide()
        if (data.errCode === 0 || data.errorCode === 0) {
          resolve(data)
        } else {
          Modal.info({
            content: data.errMsg || data.errorMsg // errMsg兼容gateway错误
          })
        }
      }).catch(error => {
        Loading.hide()
        console.error(error.toString())
        Message.info({
          content: '网络错误，请稍后再试！',
          duration: 2
        })
      })
    })
  } else {
    return hackFetch('POST', url, params, headers)
  }
}

function hackFetch(type, url, params, headers) {
  return new Promise((resolve, reject) => {
    let requestObj, sendData = ''
    if (type === 'POST') {
      sendData = JSON.stringify(params)
    }
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest()
    } else {
      requestObj = new ActiveXObject('Microsoft.XMLHTTP') // eslint-disable-line
    }
    requestObj.timeout = 5000
    requestObj.open(type, url, true)
    requestObj.setRequestHeader('Content-type', 'application/json')
    for (let key in headers) {
      requestObj.setRequestHeader(key, headers[key])
    }   
    // requestObj.onprogress = function(event) {
    //   if (event.lengthComputable) {
    //     console.log(`received ${event.loaded} in ${event.total} bytes`)
    //   }
    // }
    requestObj.send(sendData)
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState === 4) {
        if (requestObj.status === 200) {
          Loading.hide()
          let data = requestObj.response
          if (typeof data !== 'object') {
            data = JSON.parse(data)
          }
          if (data.errCode === 0 || data.errorCode === 0) {
            resolve(data)
          } else {
            Modal.info({
              content: data.errMsg || data.errorMsg // errMsg兼容gateway错误
            })
          }
        } else {
          reject(requestObj)
        }
      }
    }
  }).catch(error => {
    Loading.hide()
    console.error(error.toString())
    Message.info({
      content: '网络错误，请稍后再试！',
      duration: 2
    })
  })
}

export function fetchStream(response) { // response.body是个ReadableStream
  const contentLength = response.headers.get('Content-Length')
  const reader = response.body.getReader() // 原始数据流
  let received = 0
  return reader.read().then(
    function pump({ done, value }) {
      if (done) {
        console.log('Stream complete')
        return
      }
      received += value.byteLength
      console.log(`received ${received} in ${contentLength} bytes`)
      return reader.read().then(pump)
    }
  )
}

export function reqGet(path, params = {}, headers = {}) {
  Loading.show()
  return new Promise((resovle, reject) => {
    let url = urlBase.urlBase + path;
    axios({
      url: url,
      params: params,
      headers: {
        ...headers
      }
    }).then((response) => {
      Loading.hide()
      let data = response.data
      if (data.errorCode === 0 || data.errCode === 0) {
        resovle(data)
      } else {
        Modal.info({
          content: data.errMsg || data.errorMsg // errMsg兼容gateway错误
        })
      }
    }
    ).catch(() => {
      Loading.hide()
      Message.info({
        content: '网络错误，请稍后再试！',
        duration: 2
      })
    });
  })
}

export function reqPost(path, params = {}, headers = {}) {
  Loading.show()
  return new Promise((resovle, reject) => {
      let url = urlBase.urlBase + path;
      axios({
          method: 'POST',
          url: url,
          data: params,
          headers: {
             'Content-type': 'application/json',
              ...headers
          },
          responseType: 'json'
      }).then((response) => {
        Loading.hide()
        let data = response.data
        if (data.errCode === 0 || data.errorCode === 0) { // errCode是gateway报错，errorCode是业务方报错需要统一
          resovle(data)
        } else {
          Modal.info({
            content: data.errMsg || data.errorMsg // errMsg兼容gateway错误
          })
        }
      }).catch(() => {
        Loading.hide()
        Message.info({
          content: '网络错误，请稍后再试！',
          duration: 2
        })
      }
    );
  })
}
