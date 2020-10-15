<!-- 获取数据示例 -->
<template>
  <div>
    演示获取到的数据
  </div>
</template>

<script>
  import { fetchHeader } from '../../utils/web'
  export default {
    components: {},
    data() {
      return {};
    },
    created() {},
    mounted() {
      fetchHeader('get', 'queryentertainactivitylist').then((res) => {
        console.log('前端接收数据：')
        console.log(res)
      }).catch((error) => {
        console.log('前端接收error数据：')
        console.log(error.toString())
      })
    },
    methods: {}
  }
</script>

<style scoped></style>