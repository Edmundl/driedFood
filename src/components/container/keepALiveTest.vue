<style scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #f4f8fb;
}
.content {
  width: 100%;
  margin-bottom: 0.2rem;
  background-color: #ffffff;
  padding: 0 0.6rem;
}
.content .content_tips {
  width: 100%;
  height: 1.09rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* font-family: PingFangSC-Regular; */
  font-size: 0.26rem;
  color: #333333;
  letter-spacing: 0;
}
.content .content_tips .airportcode {
  flex-grow: 1;
  margin-left: 0.3rem;
  height: 100%;
}
.content_tips .airportcode::-webkit-input-placeholder {
  color: #999999;
}
.content_tips .airportcode::-moz-placeholder {
  color: #999999;
}
.content_tips .airportcode:-moz-placeholder {
  color: #999999;
}
.content_tips .airportcode:-ms-input-placeholder {
  color: #999999;
}
.content .line {
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
}
.content_tips .select {
  color: #999999;
  display: flex;
  align-items: center;
  height: 100%;
}
.content_tips .select img {
  margin-left: 0.27rem;
  width: 0.25rem;
  transform: rotate(-90deg);
}
.bottom {
  position: absolute;
  bottom: 1.31rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
.bottom_button {
  width: 6.7rem;
  height: 0.74rem;
  background: #33d0a9;
  border-radius: 0.06rem;
  text-align: center;
  font-size: 0.3rem;
  color: #ffffff;
}
</style>
<template>
  <div class="page">
    <div class="content">
      <div class="content_tips">
        <span>按航班号</span>
        <input v-model="params.flightNum" class="airportcode" type="text" placeholder="请输入航班号">
      </div>
      <div class="line"></div>
      <div class="content_tips">
        <span>起飞机场</span>
        <input v-model="params.adept" class="airportcode" type="text" placeholder="请输入起飞机场">
      </div>
      <div class="line"></div>
      <div class="content_tips">
        <span>到达机场</span>
        <input v-model="params.adest" class="airportcode" type="text" placeholder="请输入到达机场">
      </div>
    </div>
    <div class="bottom" @click="onJump">
      <input class="bottom_button" type="botton" value="跳转"/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navBarStyle: {
        backgroundColor: '#1ABC9C ', // navbar 背景颜色
        titleWordColor: '#FFFFFF', // navbar 标题颜色
        btnColor: '#FFFFFF', // navbar 上按钮颜色
        topColor: 0 // 状态栏字体颜色
      },
      visibility: false,
      params: {},
      dateSelectType: ''
    }
  },
  methods: {
    onJump() {
      this.$router.push({path: '/example'})
    }
  }
}
</script>