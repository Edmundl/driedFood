<style lang="less" scoped>
  @import "../../../assets/css/base.less";
  .ume-loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  .loadEffect {
    display: block;
    margin: 4rem auto;
    width: 2.66rem;
    height: 2.66rem;
    position: relative;
  }
  .loadingItem {
    display: inline-block;
    width: 0.426rem;
    height: 0.426rem;
    border-radius: 50%;
    background: @UIColor9;
    position: absolute;
    animation: load 1.04s ease infinite;
  }

  @keyframes load {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
  .loadEffect .loadingItem:nth-child(1) {
    left: 0;
    top: 50%;
    margin-top: -0.213rem;
    animation-delay: 0.13s;
  }
  .loadEffect .loadingItem:nth-child(2) {
    left: 0.373rem;
    top: 0.373rem;
    animation-delay: 0.26s;
  }
  .loadEffect .loadingItem:nth-child(3) {
    left: 50%;
    top: 0;
    margin-left: -0.213rem;
    animation-delay: 0.39s;
  }
  .loadEffect .loadingItem:nth-child(4) {
    top: 0.373rem;
    right: 0.373rem;
    animation-delay: 0.52s;
  }
  .loadEffect .loadingItem:nth-child(5) {
    right: 0;
    top: 50%;
    margin-top: -0.213rem;
    animation-delay: 0.65s;
  }
  .loadEffect .loadingItem:nth-child(6) {
    right: 0.373rem;
    bottom: 0.373rem;
    animation-delay: 0.78s;
  }
  .loadEffect .loadingItem:nth-child(7) {
    bottom: 0;
    left: 50%;
    margin-left: -0.213rem;
    animation-delay: 0.91s;
  }
  .loadEffect .loadingItem:nth-child(8) {
    bottom: 0.373rem;
    left: 0.373rem;
    animation-delay: 1.04s;
  }
</style>

<template>
  <transition name="fade">
    <div class="ume-loading">
      <div class="loadEffect">
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
        <span class="loadingItem"></span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    fix: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
