import axios from 'axios';
import urlBase from '../../config/config.js';
axios.defaults.timeout = 50000;

export function reqGet(path, params = {}, isWhole) {
  return new Promise((resovle, reject) => {
    let url = urlBase.urlBase + path;
    if (isWhole) {
      url = path
    }
    axios.get(url, {
      params: params
    }).then((response) => {
      resovle(response.data)
    }
    ).catch((error) => {
        reject(error)
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
      ).catch((error) => {
           reject(error)
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
