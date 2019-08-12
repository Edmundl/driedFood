<!-- 提示导航栏 -->
<template>
  <div v-if="show" class="tipsWrapper" @click="toArrow">
    <span class="IconTip"></span>
    <span v-if="close" class="IconClose IconSizeTips" @click="toClose"></span>
    <span v-if="rightarrow" class="IconArrow IconSizeXS"></span>
    <div class="tipsWord">
      <slot></slot>
    </div>
  </div>
</template>

<script>
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
    display: flex;
    align-items: center;
    width: 100%;
    background: @UIColor16;
    padding: 0.16rem 0.2rem 0.16rem 0.32rem;
  }
  .tipsWord {
    font-size: 0.28rem;
    line-height: 0.38rem;
    color: @UIColor17;
  }
  .IconTip:extend(.IconSizeTips) {
    margin-right: 0.14rem;
  }
  .IconClose:extend(.IconSizeTips) {
    margin-left: 0.18rem;
  }
  .IconArrow:extend(.IconSizeXS) {
    margin-left: 0.18rem;
  }
</style>
