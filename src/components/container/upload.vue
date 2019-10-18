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
export default {
  methods: {
    toGet() {
      let url = 'flightupgrade-gate/createorder' // 'flightupgrade-gate/getupgradedetail'
      let params = {
        token: '',
        price: 198,
        seatNoUpgrade: '11A'
      }
      reqGet(url, params).then(res => {
        console.log(res)
      })
    },
    toPost() {
      let url = 'flightupgrade-gate/test'
      reqPost(url).then(res => {
        console.log(res)
      })
    },
    toFetchGet() {
      let url = 'flightupgrade-gate/createorder' // 'flightupgrade-gate/getupgradedetail'
      let params = {
        token: '',
        price: 198,
        seatNoUpgrade: '11A'
      }
      fetchGet(url, params).then(res => {
        console.log(res)
      })
    },
    toFetchPost() {
      let url = 'flightupgrade-gate/test'
      fetchPost(url).then(res => {
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
