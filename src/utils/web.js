import axios from 'axios';
import urlBase from '../../config/config.js';
import Message from '../components/common/message/index'
import Loading from '../components/common/loading/index'
axios.defaults.timeout = 50000;

export function reqGet(path, params = {}, isWhole) {
  Loading.show()
  return new Promise((resovle, reject) => {
    Loading.hide()
    let url = urlBase.urlBase + path;
    if (isWhole) {
      url = path
    }
    axios.get(url, {
      params: params
    }).then((response) => {
      resovle(response.data)
    }
    ).catch(() => {
        Message.info({
          content: '网络错误，请稍后再试！',
          duration: 2
        })
      }
    );
  })
}

export function reqPost(path, params = {}, ContentType) {
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
         resovle(response)
        }
      ).catch(() => {
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
