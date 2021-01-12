<!-- 测试微信环境 -->
<template>
  <div>
    <div @click="toWeixin1">跳转到微信原生页</div>
    <div>微信回退后带回来的值: {{ backValue }}</div>
  </div>
</template>

<script>
  import wx from 'weixin-js-sdk'
  export default {
    components: {},
    data() {
      return {
        backValue: ''
      };
    },
    created() {},
    mounted() {},
    methods: {
      toWeixin1 () {
        console.log("判断环境")
        if (ua.match(/MicroMessenger/i) == 'micromessenger') { // 在微信环境
          console.log("在微信环境")
          wx.miniProgram.getEnv((res) => {
            if (res.miniprogram) {
              console.log("在微信小程序环境")
              wx.miniProgram.navigateTo({
                url: '/pages/face/face'
              })
            } else {
              console.log("在微信环境，但不在微信小程序环境")
            }
          })
        } else {
          console.log("不在微信环境")
        }
      }
    }
  }
</script>

<style scoped></style>