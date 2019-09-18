<style lang="less">
@import "../../assets/css/base.less";
.ume-message {
  position: fixed;
  left: 0;
  width: 100%;
  top: 50%;
}
</style>

<template>
  <div class="ume-message" :style="wrapStyles">
    <Notice v-for="notice in notices"
    :key="notice.name"
    :prefix-cls="prefixCls"
    :content="notice.content"
    :duration="notice.duration"
    :type="notice.type"
    :name="notice.name"
    :styles="notice.styles"
    :transition-name="notice.transitionName"
    :on-close="notice.onClose">
    </Notice>
  </div>
</template>
<script>
import Notice from './Notice.vue'
const prefixCls = 'ume-notification';
export default {
  components: {
    Notice
  },
  props: {
    prefixCls: {
      type: String,
      default: prefixCls
    },
    styles: {
      type: Object,
      default: function () {
        return {
          top: '65px',
          left: '50%'
        };
      }
    }
  },
  data () {
    return {
      tIndex: 1,
      notices: []
    }
  },
  computed: {
    wrapStyles () {
      let styles = Object.assign({}, this.styles);
      styles['z-index'] = 1010 + this.tIndex;
      return styles;
    }
  },
  mounted() {},
  methods: {
    add (notice) {
      const name = notice.name
      let _notice = Object.assign({
          styles: {
              right: '50%'
          },
          content: '',
          duration: 1.5,
          closable: false,
          name: name
      }, notice);
      this.notices.push(_notice);
    },
    close(name) {
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
    closeAll () {
      this.notices = [];
    }
  }
}
</script>
