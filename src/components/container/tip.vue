<style lang="less" scoped>
.tip_example {
  background: #fff;
}
.tipsWrapper {
  margin-top: 0.2rem;
}
</style>

<template>
  <div class="tip_example">
    <Tips :close="true">最新一期我的2018出炉啦,点击查看详情</Tips>
    <Tips>温馨提示：仅限添加您本人的行程</Tips>
    <Tips :tipIcon="false" :rightarrow="true">最新一期我的2018出炉啦,最新一期我的2018出炉啦,点击查看吧</Tips>
    <Tips>温馨提示：1.仅支持在已认证的证件下添加行程  2.提交认证的证件通常需1-2个工作日，请耐心等待</Tips>
  </div>
</template>
<script>
import Tips from '../common/tips.vue'
export default {
  components: {
    Tips
  }
}
</script>
