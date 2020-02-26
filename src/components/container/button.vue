<style lang="less" scoped>
@import '../../assets/css/base.less';
.button_example {
  background: #fff;
  .btn {
    margin-top: 0.3rem;
  }
  .small_btn {
    padding: 0 0.32rem;
  }
}
</style>

<template>
  <div class="button_example">
    <ume-btn :bgType="0" @click="clickEvent('一级')">B1 一级常态按钮</ume-btn>
    <ume-btn :bgType="1" @click="clickEvent('二级')">B2 二级常态按钮</ume-btn>
    <ume-btn :bgType="2" @click="clickEvent('三级')">B3 三级常态按钮</ume-btn>
    <ume-btn :bgType="3">B4 不可点击按钮置灰</ume-btn>
    <ume-btn :bgType="4">B5 不可点击较弱状态</ume-btn>
    <div class="small_btn flex_flex flex_justify_content_between">
      <ume-btn :bgType="5">取消订单</ume-btn>
      <ume-btn :bgType="6">继续支付</ume-btn>
    </div>
  </div>
</template>
<script>
import { clickEvent } from '../../utils/tools.js'
export default {
  methods: {
    clickEvent(key) {
      console.log('hihdowec')
      clickEvent(key)
    }
  }
}
</script>
