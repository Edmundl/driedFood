import Modal from './Modal.vue'
import Vue from 'vue'

// const prefixCls = 'ume-modal-confirm';
Modal.newInstance = properties => {
  const _props = properties || {}
  const instance = new Vue({
    data: Object.assign({}, _props, {
      visible: false,
      title: '',
      content: '',
      okText: undefined,
      cancelText: undefined
    }),
    methods: {
      cancel() {
        this.$children[0].visible = false;
        this.remove()
        this.onCancel();
      },
      ok() {
        this.$children[0].visible = false;
        this.remove()
        this.onOk();
      },
      onCancel() {},
      onOk() {},
      onRemove() {},
      remove () {
        setTimeout(() => {
          this.destroy();
        }, 300);
      },
      destroy () {
        this.$destroy();
        document.body.removeChild(this.$el);
        this.onRemove();
      }
    },
    render(h) {
      return h(Modal, {
        props: Object.assign({}, _props, {
          content: this.content,
          title: this.title,
          okText: this.okText,
          cancelText: this.cancelText
        }),
        domProps: {
          value: this.visible
        },
        on: {
          'on-cancel': this.cancel,
          'on-ok': this.ok
        }
      })
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
          modal.$parent.content = props.content;
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

      if ('onRemove' in props) {
        modal.$parent.onRemove = props.onRemove;
    }
      modal.visible = true;
    },
    remove() {
      modal.visible = false;
      modal.$parent.remove();
    }
  }
}
export default Modal