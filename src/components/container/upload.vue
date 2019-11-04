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
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toFetchGetSuccess">get Success</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toFetchPostSuccess">post Success</a>
  </div>
</template>
<script>
import { reqGet, reqPost, fetchGet, fetchPost } from '../../utils/web'
const userId = '24435124'
const clientId = '98b9ef73af77b4fcfb68cb428dd6c31dc'
const token = 'sJHqpAkG1SvvV9EW0EDXNsEa'
export default {
  methods: {
    toGet() {
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      reqGet(url, params).then(res => {
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
      reqPost(url, params, 'application/json').then(res => {
        console.log(res)
      })
    },
    toFetchGet() {
      let url = 'getguide'
      let params = {
        userId,
        token,
        clientId
      }
      fetchGet(url, params).then(res => {
        console.log(res)
      })
    },
    toFetchPost() {
      let url = 'test'
      let params = {
        userId,
        token,
        clientId
      }
      fetchPost(url, params).then(res => {
        console.log(res)
      })
    },
    toFetchGetSuccess() {
      let url = 'flightupgrade-gate/queryorderlist'
      let params = {
        userId: '24435124',
        token: 'VczLISdFA2antDd2IuxGzNEa'
      }
      fetchGet(url, params).then(res => {
        console.log(res)
      })
    },
    toFetchPostSuccess() {
      let url = 'flightupgrade-gate/queryorderlist'
      let params = {
        userId: '24435124',
        token: 'VczLISdFA2antDd2IuxGzNEa'
      }
      fetchPost(url, params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
