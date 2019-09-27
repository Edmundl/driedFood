<!-- 常用按钮 -->
<template>
  <div @click="todoBtn" :class="'btn '+ typeMap[bgType]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      bgType: {
        type: Number,
        default: 0 // 0:  绿色,一级常态按钮；1: 白色，二级常态按钮；2: 白色，三级常态按钮；3: 灰色,不可点击状态；4: 不可点击较弱状态；5: 取消按钮；6: 确认按钮
      }
    },
    data() {
      return {
        typeMap: ['green', 'second', 'third', 'gray', 'weakGreen', 'smallCancel', 'smallConfirm']
      };
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
  .btn {
    margin: 0 auto;
    width: 6.86rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 0.34rem;
    text-align: center;
    color: #fff;
    border-radius: 1rem;
    background: @UIColor5;
    &.gray {
      background: @UIColor5;
    }
    &.weakGreen {
      background: @UIColor9;
      opacity: 0.5;
    }
    &.green {
      background: @UIColor9;
    }
    &.second {
      background: #fff;
      border: 1px solid #ddd;
      color: @UIColor9;
    }
    &.third {
      background: #fff;
      border: 1px solid #ddd;
      color: @UIColor3;
    }
    &.smallCancel {
      width: 3.27rem;
      background: #fff;
      border: 1px solid @UIColor5;
      border-radius: 0.45rem;
      color: @UIColor9;
      margin: 0;
    }
    &.smallConfirm {
      width: 3.27rem;
      background: @UIColor9;
      border-radius: 0.45rem;
      color: #fff;
      margin: 0;
    }
  }
</style>