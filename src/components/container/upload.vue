<style lang="less" scoped>
@import "../../assets/css/base.less";
  .page_upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .ume-btn {
    width: 3rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: @UIFontSize3;
    border-radius: 4px;
    margin: 10px 0;
    text-decoration: none;
    font-weight: bold;
  }
  .ume-btn_default {
    background: @UIColor6;
    color: @UIColor9;
  }
</style>

<template>
  <div class="page_upload">
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toGet">get请求</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toPost">post请求</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toFetchGet">fetch get</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toFetchPost">fetch post</a>
  </div>
</template>
<script>
import { fetchHeader, axiosHeader } from '../../utils/web'
import { clickEvent } from '../../utils/tools.js'
const userId = '1343'
const clientId = 'qwelhqlwehque'
const token = 'RJot5HqLNXWDXLG2uOdu1QEa'
export default {
  created() {
    this.toFetchGet()
  },
  methods: {
    toGet() {
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      axiosHeader('get', url, params).then(res => {
        console.log(res)
      })
    },
    toPost() {
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      axiosHeader('post', url, params).then(res => {
        console.log(res)
      })
    },
    toFetchGet() {
      clickEvent('toFetchGet')
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      fetchHeader('get', url, params).then(res => {
        console.log(res)
      })
    },
    toFetchPost() {
      clickEvent('toFetchPost')
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      fetchHeader('post', url, params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
