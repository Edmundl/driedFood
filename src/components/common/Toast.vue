<style lang="less">
@import "../../assets/css/base.less";
.toast {
  padding: 0.24rem 0.42rem;
  background: #000;
  border-radius: @Corner2;
  color: #fff;
  font-size: @UIFontSize3;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div v-show="visible" class="toast">{{ text }}</div>
</template>
<script>
export default {
  props: {
    showToast: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    timeout: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      visible: false
    }
  },
  watch: {
    showToast: function(newVal) {
      this.visible = newVal
      if (this.visible) {
        setTimeout(() => {
          this.visible = false
          this.$emit('close')
        }, this.timeout);
      }
    }
  }
}
</script>
