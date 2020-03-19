/**
 * Created by ZQ on 2019/7/12.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import FastClick from 'fastclick'
import './assets/js/umeH5Flexible.js';
import './assets/css/umeH5Flexible.less';
import {
  record,
  changeTitle,
  initH5Service
} from './utils/tools'
import configVar from './utils/configVar.js'; 

// import umeUI from '@umetrip/ume-ui'
// import '@umetrip/ume-ui/dist/ume-ui.css'
// Vue.use(umeUI)

import { Modal, Message, Loading, Picker, DatePicker, Tip, Tab, Input, AutoTextarea, List, Button } from '@umetrip/ume-ui'
Vue.component(Modal.name, Modal)
Vue.component(Message.name, Message)
Vue.component(Loading.name, Loading)
Vue.component(Picker.name, Picker)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Tip.name, Tip)
Vue.component(Tab.name, Tab)
Vue.component(Input.name, Input)
Vue.component(AutoTextarea.name, AutoTextarea)
Vue.component(List.name, List)
Vue.component(Button.name, Button)

Vue.prototype.$Message = Message
Vue.prototype.$Loading = Loading
Vue.prototype.$Modal = Modal

if (configVar.vConsoleOpen) {
  var VConsole = require('vconsole/dist/vconsole.min.js');
  var vConsole = new VConsole();
}

FastClick.attach(document.body)
router.beforeEach((to, from, next) => {
  record(to.path)
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    if (/[iphone|ipad]/i.test(navigator.userAgent)) {
      changeTitle(to.meta.title) // 解决ios标题不改变的问题，通过iframe hack
      if (configVar.onBack) {
        initH5Service().then(data => { // 接下来要进入的页面可能会再次调用h5Service，两个异步操作，所以需要保证顺序
          next()
        })
      }
    } else {
      if (to.meta.title) {
        document.title = to.meta.title
      }
      next()
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
