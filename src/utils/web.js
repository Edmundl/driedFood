import axios from 'axios';
import urlBase from '../../config/config.js';
import Message from '../components/common/message/index'
import Loading from '../components/common/loading/index'
import Modal from '../components/common/modal/index'

axios.defaults.timeout = 50000;

export function fetchGet(path, params) {
  Loading.show()
  var timeout = 50000
  let timeoutPromsie = new Promise((resolve, reject) => {
    setTimeout(() => {
      Loading.hide()
      reject(new Error('fetch timeout'))
    }, timeout)
  })
  let fetchPromise = new Promise((resolve, reject) => {
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
    fetch(url, {
      method: 'GET',
      cache: 'no-cache',
      credentials: 'same-origin', // cookie同域发送
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.status === 200) {
        return response.json() // response.json()返回的是一个promise
      } else {
        reject(response.statusText)
      }
    }).then(data => {
      Loading.hide()
      if (data && data.errorCode === 0) {
        resolve(data)
      } else {
        Modal.info({
          content: data.errorMsg || data.errMsg // errMsg兼容gateway错误
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
  return Promise.race([fetchPromise, timeoutPromsie])
}

export function fetchPost(path, params = {}) {
  Loading.show()
  var timeout = 60000
  let timeoutPromsie = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('fetch timeout'))
      Loading.hide()
    }, timeout)
  })
  let fetchPromise = new Promise((resolve, reject) => {
    let url = urlBase.urlBase + path
    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        reject(response.statusText)
      }
    }).then(data => {
      Loading.hide()
      if (data && data.errorCode === 0) {
        resolve(data)
      } else {
        Modal.info({
          content: data.errorMsg || data.errMsg // errMsg兼容gateway错误
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
  return Promise.race([fetchPromise, timeoutPromsie])
}

export function reqGet(path, params = {}, isWhole) {
  Loading.show()
  return new Promise((resovle, reject) => {
    let url = urlBase.urlBase + path;
    if (isWhole) {
      url = path
    }
    axios.get(url, {
      params: params
    }).then((response) => {
      Loading.hide()
      let data = response.data
      if (data.errorCode === 0 || data.errCode === 0) {
        resovle(data)
      } else {
        Modal.info({
          content: data.errorMsg || data.errMsg // errMsg兼容gateway错误
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

export function reqPost(path, params = {}, ContentType) {
  Loading.show()
  return new Promise((resovle, reject) => {
      let url = urlBase.urlBase + path;
      axios({
          method: 'POST',
          url: url,
          data: ContentType ? params : qs(params),
          headers: {
             'Content-type': ContentType || 'application/x-www-form-urlencoded'
          },
          responseType: 'json'
      }).then((response) => {
        Loading.hide()
        let data = response.data
        if (data.errorCode === 0) {
          resovle(data)
        } else {
          Modal.info({
            content: data.errorMsg || data.errMsg // errMsg兼容gateway错误
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

function qs(data) {
  // Do whatever you want to transform the data
  var ret = ''
  for (var it in data) {
      ret += it + '=' + data[it] + '&'
  }
  return ret
}
