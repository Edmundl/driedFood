<style lang="less" scoped>
.modalWrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  font-family: "PingFangSC-Regular", "Microsoft YaHei", Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  .contentWrapper {
    width: 5.6rem;
    background: #fff;
    border-radius: 6px;
    .content {
      padding: 0.48rem;
      border-bottom: 1px solid #eee;
      font-size: 0.36rem;
      color: #333;
      .contentText {
        text-align: center;
      }
    }
    .modalBtn {
      flex-grow: 1;
      text-align: center;
      color: #666;
      font-size: 0.34rem;
      &.primary {
        color: #41b24e;
      }
    }
    .modalBtnWrapper {
      display: flex;
      justify-content: center;
      padding: 0.26rem 0;
    }
  }
}
</style>

<template>
  <div class="modalWrapper">
    <div class="contentWrapper">
      <div class="content">
        <p class="contentText">{{ content }}</p>
        <slot name="content"></slot>
      </div>
      <div class="modalBtnWrapper">
        <button class="primary modalBtn" @click="$emit('primaryFn')">{{ primaryText }}</button>
        <button v-show="subText" class="sub modalBtn" @click="$emit('subFn')">{{ subText }}</button>
      </div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    primaryText: {
      type: String,
      default: '我知道了'
    },
    subText: {
      type: String,
      default: ''
    }
  }
}
</script>
