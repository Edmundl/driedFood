import Toast from '../components/common/Toast.vue'
import Vue from 'Vue'
Toast.newInstance = properties => {
  const _props = properties || {};
  const Instance = new Vue({
    render (h) {
      return h(Toast, {
          props: _props
      })
    }
  })
    const component = Instance.$mount();
    document.body.appendChild(component.$el);
    const notification = Instance.$children[0];
    return {
      notice (noticeProps) {
        notification.add(noticeProps);
      },
      remove (name) {
        notification.close(name);
      },
      component: notification,
      destroy (element) {
        notification.closeAll();
        setTimeout(function() {
            document.body.removeChild(document.getElementsByClassName(element)[0]);
        }, 500);
      }
  };
}
export default Toast