import Modal from './Modal.vue'
import Vue from 'vue'

Modal.newInstance = properties => {
  const _props = properties || {}
  const instance = new Vue({
    data: Object.assign({}, _props, {
      visible: false,
      title: '',
      okText: undefined,
      cancelText: undefined,
    }),
    render(h) {
      return h(Modal, {
        props: Object.assign({}, _props, {
          width: this.width
        }),
        domProps: {
          value: this.visible
        },
        on: {
          'on-cancel': this.cancel,
          'on-ok': this.ok
        }
      })
    },
    methods: {
      cancel() {
        this.$children[0].visible = false;
        this.onCancel();
      },
      ok() {
        this.$children[0].visible = false;
        this.$emit('on-ok');
      },
      onCancel() {},
      onOk() {}
    }
  })
  const component = instance.$mount()
  document.body.appendChild(component.$el)
  const modal = instance.$children[0]
  return {
    show(props) {
      if ('title' in props) {
        modal.$parent.title = props.title;
      }

      if ('content' in props) {
          modal.$parent.body = props.content;
      }

      if ('okText' in props) {
          modal.$parent.okText = props.okText;
      }

      if ('cancelText' in props) {
          modal.$parent.cancelText = props.cancelText;
      }

      if ('onCancel' in props) {
          modal.$parent.onCancel = props.onCancel;
      }

      if ('onOk' in props) {
          modal.$parent.onOk = props.onOk;
      }
    }
  }
}
