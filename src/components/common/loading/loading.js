import Loading from './Loading.vue'
import Vue from 'vue'

Loading.newInstance = properties => {
  const _props = properties || {}
  const instance = new Vue({
    data: _props,
    render(h) {
      let vnode = h(Loading, {
        props: {
          fix: true
        }
      });
      return h('div', {
        class: 'ume-loading-fullscreen',
        style: {
          'z-index': 2011
        }
      }, [vnode])
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  const loading = instance.$children[0]
  console.log(loading)
  return {
    show() {
      loading.visible = true
    },
    remove(cb) {
      loading.visible = false
      setTimeout(function() {
        loading.$parent.$destroy();
        if (document.getElementsByClassName('ume-loading-fullscreen')[0] !== undefined) {
          document.body.removeChild(document.getElementsByClassName('ume-loading-fullscreen')[0]);
        }
        cb();
      }, 500);
    },
    component: loading
  }
}
export default Loading