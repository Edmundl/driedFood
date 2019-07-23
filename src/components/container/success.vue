<style lang="less" scoped>
.successWrapper {
  padding: 0.9rem 0.32rem 0;
  text-align: center;
  img {
    width: 2.2rem;
    vertical-align: middle;
  }
  .payComplete {
    font-size: 0.36rem;
    color: #666;
    margin-top: 0.4rem;
  }
  .tips {
    font-size: 0.28rem;
    color: #999;
    margin-top: 0.2rem;
  }
  .btnWrapper {
    margin-top: 0.8rem;
  }
}
</style>

<template>
  <div class="successWrapper">
    <img src="../../assets/img/paySuccess.png" />
    <p class="payComplete medium"> 支付完成</p>
    <p class="tips">您可点击下方查看订单详情，也可以在【我的-我的订单】中查看升舱订单</p>
    <div class="btnWrapper">
      <div class="btn medium active" @click="routeTo">查看订单详情</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    routeTo() {
      this.$router.go(-1)
    }
  }
}
</script>
