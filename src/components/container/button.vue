<style lang="less" scoped>
.button_example {
  background: #fff;
  .btn {
    margin-top: 0.3rem;
  }
}
</style>

<template>
  <div class="button_example">
    <Btn :bgType="0">B1 一级常态按钮</Btn>
    <Btn :bgType="1">B2 二级常态按钮</Btn>
    <Btn :bgType="2">B3 三级常态按钮</Btn>
    <Btn :bgType="3">B4 不可点击按钮置灰</Btn>
    <Btn :bgType="4">B5 不可点击较弱状态</Btn>
    <div style="display: flex; justify-content: space-between; padding: 0 0.32rem;">
      <Btn :bgType="5">取消订单</Btn>
      <Btn :bgType="6">继续支付</Btn>
    </div>
  </div>
</template>
<script>
import Btn from '../common/Btn.vue';
export default {
  components: {
    Btn
  }
}
</script>
