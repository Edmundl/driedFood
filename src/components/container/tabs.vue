<style lang="less" scoped>
.tabs-demo {
  background: #f5f5f5;
  .tabsWrapper {
    margin-bottom: 0.2rem;
  }
}
</style>

<template>
  <div class="tabs-demo">
    <Tab :tabs-type=1 :tab-items="tabItems1"></Tab>
    <Tab :tabs-type=2 :tab-items="tabItems2"></Tab>
    <Tab :tabs-type=3 :tab-items="tabItems3"></Tab>
  </div>
</template>
<script>
import Tab from '../common/tab.vue'
export default {
  components: {
    Tab
  },
  data () {
    return {
      tabItems1: ['未成功', '已成功'],
      tabItems2: [{
        main: '待出行',
        num: 1
      }, {
        main: '已结束',
        num: 348
      }, {
        main: 'OPEN票',
        num: 2
      }, {
        main: '无效票',
        num: 1
      }],
      tabItems3: ['今日', '近7日', '近30日']
    }
  }
}
</script>
