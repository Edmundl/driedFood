<!-- 最常用的提示框 -->
<template>
  <div v-show="visible" class="mask">
    <div class="modal-wrapper allCenter">
      <div class="modal-content">
        <div v-if="title.length > 0" class="modal-title">{{ title }}</div>
        <div class="modal-word">{{ modalWord }}</div>
      </div>
      <div class="modal-btnWrapper flex_flex">
        <div v-if="cancelWord.length > 0" @click="toCancel" class="modal-btn1 modal-no">{{ cancelWord }}</div>
        <div @click="toOk" class="modal-btn1">{{ okWord }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      cancelWord: {
        type: String,
        default: ''
      },
      okWord: {
        type: String,
        default: '确定'
      },
      modalWord: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        visible: this.value
      };
    },
    watch: {
      value (val) {
        this.visible = val;
      }
    },
    created() {},
    mounted() {
      console.log(this.visible)
      console.log(this.isShow)
    },
    methods: {
      toCancel: function() {
        this.$emit('onCancel')
      },
      toOk: function() {
        this.$emit('onOk')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .mask {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, @Alpha3);
    top: 0;
    left: 0;
    z-index: 200;
  }
  .modal-wrapper {
    width: 5.6rem;
    background: #fff;
    box-sizing: border-box;
    border-radius: @Corner2;
    z-index: 250;
  }
  .modal-close {
    position: absolute;
    width: 0.9rem;
    height: 0.7rem;
    line-height: 0.55rem;
    text-align: center;
    top: 0;
    right: 0;
    font-size: 0.5rem;
    color: @UIColor4;
  }
  .modal-content {
    box-sizing: border-box;
    width: 100%;
    padding: 0.48rem;
    text-align: center;
    font-size: @UIFontSize1;
    color: @UIColor1;
    line-height: 0.58rem;
  }
  .modal-title {
    line-height: 0.58rem;
    color: @UIColor1;
    padding-bottom: 0.24rem;
  }
  .modal-word {
    color: @UIColor3;
    line-height: 0.4rem;
  }
  .modal-btnWrapper {
    height: 1rem;
    width: 100%;
    justify-content: space-around;
    border-top: 1px solid @UIColor6;
    overflow: hidden;
  }
  .modal-btn1 {
    width: 100%;
    height: 1rem;
    line-height: 0.99rem;
    text-align: center;
    color: @UIColor9;
    font-size: @UIFontSize2;
    background: #fff;
    border-radius: @Corner2;
  }
  .modal-no {
    border-right: 1px solid @UIColor6;
    color: @UIColor3;
  }
</style>
