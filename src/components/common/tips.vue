<!-- 提示导航栏 -->
<template>
  <div v-if="show" class="tipsWrapper" @click="toArrow">
    <img :src="tips" alt="" class="tipImg">
    <img v-if="close" :src="closeimg" alt="" class="closeImg" @click="toClose">
    <img v-if="rightarrow" :src="arrowimg" alt="" class="rightarrow">
    <div class="tipsWord" :style="close || rightarrow ? 'padding-right:0.52rem' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import tips from '../../assets/img/tips.png'
  import closeimg from '../../assets/img/close.png'
  import arrowimg from '../../assets/img/rightarrow.png'
  export default {
    components: {},
    props: {
      close: {
        type: Boolean,
        default: false
      },
      rightarrow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tips: tips,
        closeimg: closeimg,
        arrowimg: arrowimg,
        show: true
      };
    },
    created() {},
    mounted() {},
    methods: {
      toClose: function() {
        this.show = false
      },
      toArrow: function() {
        this.$emit('toArrow')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .tipsWrapper {
    position: relative;
    width: 100%;
    background: @yellow-bk;
    padding: 0.16rem 0.28rem 0.2rem 0.72rem;
  }
  .tipsWord {
    font-size: 0.28rem;
    line-height: 0.38rem;
    color: @yellow-word;
  }
  .tipImg {
    position: absolute;
    width: 0.26rem;
    height: 0.26rem;
    top: 0.23rem;
    left: 0.32rem;
  }
  .closeImg {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    top: 0.2rem;
    right: 0.2rem;
  }
  .rightarrow {
    position: absolute;
    width: 0.4rem;
    height: 0.4rem;
    top: 0.2rem;
    right: 0.2rem;
  }
</style>
