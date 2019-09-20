<style lang="less">
@import "../../../assets/css/base.less";
.ume-message-notice {
  text-align: center;
}
.ume-message-notice-content {
  display: inline-block;
  padding: 0.24rem 0.42rem;
  background: #000;
  border-radius: @Corner2;
  color: #fff;
  font-size: @UIFontSize3;
  text-align: center;
}
.move-up-enter-active, .move-up-appear {
  animation: umeMoveUpIn 0.3s ease both;
}
.move-up-leave-active {
  animation: umeMoveUpOut 0.3s ease both;
}

@keyframes umeMoveUpIn {
    0% {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform-origin: 0 0;
        transform: translateY(0%);
        opacity: 1;
    }
}

@keyframes umeMoveUpOut {
    0% {
        transform-origin: 0 0;
        transform: translateY(0%);
        opacity: 1;
    }
    100% {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0;
    }
}
</style>

<template>
  <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave" appear>
    <div :class="classes" :style="styles">
        <template>
            <div class="ume-message-notice-content" ref="content" v-html="content"></div>
        </template>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    prefixCls: {
        type: String,
        default: ''
    },
    type: {
      type: String
    },
    duration: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      required: true
    },
    content: {
        type: String,
        default: ''
    },
    onClose: {
      type: Function
    },
    styles: {
      type: Object,
      default: function() {
          return {
              right: '50%'
          };
      }
    },
    className: {
      type: String
    },
    transitionName: {
      type: String
    }
  },
  computed: {
    baseClass () {
      return `${this.prefixCls}-notice`;
    },
    classes () {
      return [
        this.baseClass,
        {
            [`${this.className}`]: !!this.className,
            [`${this.baseClass}-closable`]: this.closable,
            [`${this.baseClass}-with-desc`]: this.withDesc
        }
      ];
    }
  },
  mounted() {
    this.clearCloseTimer()
    if (this.duration !== 0) {
      console.log(this.duration)
        this.closeTimer = setTimeout(() => {
          this.close();
        }, this.duration * 1000);
    }
  },
  methods: {
    clearCloseTimer () {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    },
    close () {
      this.clearCloseTimer();
      this.onClose();
      this.$parent.close(this.name);
    },
    handleEnter (el) {
      if (this.type === 'message') {
        el.style.height = el.scrollHeight + 'px';
      }
    },
    handleLeave (el) {
      if (this.type === 'message') {
        // 优化一下，如果当前只有一个 Message，则不使用 js 过渡动画，这样更优美
        if (document.getElementsByClassName('ume-message-notice').length !== 1) {
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        }
      }
    },
    beforeDestroy () {
      this.clearCloseTimer();
    }
  }
}
</script>
