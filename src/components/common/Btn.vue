<!-- 常用按钮 -->
<template>
  <div class="btnWrapper">
    <div @click="todoBtn" :class="'btn '+ typeMap[bgType]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      bgType: {
        type: Number,
        default: 0 // 0: 灰色,不可点击状态；1: 弱绿,不可点击较弱状态；2: 绿色,一级常态按钮；3: 白色，二级常态按钮；4: 白色，三级常态按钮
      }
    },
    data() {
      return {
        typeMap: ['gray', 'weakGreen', 'green', 'second', 'third']
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
  .btnWrapper {
    width: 100%;
    height: 0.9rem;
    padding: 0 0.32rem;
  }
  .btn {
    width: 100%;
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
  }
</style>