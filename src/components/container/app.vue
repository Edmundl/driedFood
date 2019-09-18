<style lang="less">
  @import "../../assets/css/base.less";
  .contain {
    width: 100%;
    height: 100%;
    font-size: 0.32rem;
    .title {
      color: @UIColor9;
    }
    .item {
      border: 0.02rem solid @UIColor5;
      width: 100%;
      height: 1rem;
      line-height: 0.96rem;
      color: @UIColor3;
      margin: 0.3rem 0;
    }
  }
</style>
<template>
  <div class="contain">
    <div class="title">
      单页面框架
    </div>
    <router-link to="/example">
      <div class="item">
        to组件化实例
      </div>
    </router-link>
    <div class="item" @click="toFlexible">
      to适配实例
    </div>
    <div class="item" @click="getData">
      网络catch示例
    </div>
  </div>
</template>
<script>
  import { reqGet } from '../../utils/web'
	export default {
		data () {
			return {}
		},
		created: function () {
      this.getData()
    },
    methods: {
      getData() {
        let url = 'test'
        reqGet(url).then(res => {
          console.log(res)
        })
      },
      toFlexible: function() {
        this.$router.push({
          path: 'flexible'
        })
      }
    }
	}
</script>