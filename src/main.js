/**
 * Created by ZQ on 2019/7/12.
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import FastClick from 'fastclick'
import './assets/js/umeH5Flexible.js';
import './assets/css/umeH5Flexible.less';

var VConsole = require('vconsole/dist/vconsole.min.js');
var vConsole = new VConsole();

FastClick.attach(document.body)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
