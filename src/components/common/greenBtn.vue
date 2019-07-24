<!-- 常用按钮 -->
<template>
  <div class="btnWrapper">
    <div @click="todoBtn" class="greenBtn" :class="isGray ? ' grayBtn' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      isGray: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {
      todoBtn: function () {
        if (!this.isGray) {
          this.$emit('hasBtn')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .btnWrapper {
    width: 100%;
    height: 0.9rem;
    padding: 0 0.32rem;
  }
  .greenBtn {
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.34rem;
    text-align: center;
    color: #fff;
    border-radius: 1rem;
    background: @green-base;
  }
  .grayBtn {
    background: @black-c;
  }
</style>