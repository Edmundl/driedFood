<style lang="less" scoped>
.counterUpgrade {
  .headWrapper {
    position: relative;
    height: 3.56rem;
    .headImg {
      width: 100%;
    }
    .notice {
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.72rem;
      line-height: 0.72rem;
      bottom: 0;
      font-size: 0.28rem;
      text-align: center;
      background: rgba(33, 33, 33, 0.7);
      .left {
        color: #fff;
      }
      .right {
        color: #ff9c00;
      }
    }
  }
  .mainWrapper {
    padding: 0.4rem 0.32rem;
    .flightInfo {
      background: #f8f9fa;
      border: 1px solid #eee;
      border-radius: 6px;
      padding: 0 0.3rem 0.3rem;
      .item {
        padding-top: 0.3rem;
        font-size: 0.3rem;
        .left {
          width: 1.9rem;
          color: #999;
          display: inline-block;
        }
        .right {
          color: #333;
        }
      }
    }
    .upgradeProcess {
      font-size: 0.28rem;
      color: #999;
      margin-top: 0.3rem;
    }
    .btnWrapper {
      margin-top: 0.7rem;
    }
    .agreeWrapper {
      margin-top: 0.26rem;
      font-size: 0.28rem;
      .check {
        width: 0.28rem;
        vertical-align: middle;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
      .left {
        color: #999;
      }
      .right {
        color: #41b24e;
      }
    }
    .serviceWrapper {
      margin-top: 0.8rem;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.28rem;
        color: #999;
        .line {
          width: 0.34rem;
          height: 2px;
          background: #d8d8d8;
        }
        .middle {
          margin: 0 0.1rem;
        }
      }
      .serviceDetail {
        display: flex;
        justify-content: center;
        margin-top: 0.4rem;
        .item {
          .icon {
            width: 0.54rem;
            display: block;
            margin: 0 auto;
          }
          .name {
            font-size: 0.26rem;
            color: #333;
            margin-top: 0.08rem;
          }
          &:first-child {
            margin-right: 0.87rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="counterUpgrade">
    <div class="headWrapper">
      <img class="headImg" :src="upgradeInfo.pictureUrl" />
      <p class="notice">
        <span class="left">{{ upgradeInfo.leftTitle }}</span>
        <span class="right medium">{{ upgradeInfo.rightTitle }}</span>
      </p>
    </div>
    <div class="mainWrapper">
      <div class="flightInfo">
        <p class="item">
          <span class="left">升舱航班号</span>
          <span class="right">{{ upgradeInfo.flightNo }}</span>
        </p>
        <p class="item">
          <span class="left">升舱航段</span>
          <span class="right">{{ upgradeInfo.deptAirport + '-' + upgradeInfo.destAirport }}</span>
        </p>
        <p class="item">
          <span class="left">升至</span>
          <span class="right">{{ upgradeInfo.newcabin }}</span>
        </p>
        <p class="item">
          <span class="left">价格</span>
          <span class="right">{{ '¥' + upgradeInfo.orderPrice }}</span>
        </p>
      </div>
      <div class="upgradeProcess">升舱流程：1.立刻抢购 - 2.选择座位 - 3.支付完成 - 4.柜台兑换登记牌</div>
      <div class="btnWrapper">
        <div :class="upgradeInfo.isuse == 1 && isAgree ? 'btn medium active':'btn medium'" @click="btnClick">{{ upgradeInfo.isuse==1?'立即抢购':'尚未开放抢购' }}</div>
      </div>
      <div class="agreeWrapper">
        <img class="check" :src="isAgree ? checkActive:check" @click="checkFn" />
        <span class="left">我已同意</span>
        <span class="right" @click="routeTo">《柜台升舱相关协议及规则》</span>
      </div>
      <div class="serviceWrapper">
        <p class="title">
          <span class="line"></span>
          <span class="middle">升舱后即可享受</span>
          <span class="line"></span>
        </p>
        <div class="serviceDetail">
          <div v-for="(item, index) in upgradeInfo.servicesList" :key="index" class="item">
            <img class="icon" :src="item.url" />
            <p class="name">{{ item.title }}</p>
          </div>
          <!-- <div class="item">
            <img class="icon" src="../../assets/img/airplaneService.png" />
            <p class="name">公务舱机上服务</p>
          </div>
          <div class="item">
            <img class="icon" src="../../assets/img/undergroundService.png" />
            <p class="name">公务舱地面服务</p>
          </div> -->
        </div>
      </div>
    </div>
    <show-modal v-show="showModal" :content="errMsg" primary-text="我知道了" @primaryFn="closeModal"></show-modal>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
import { reqGet } from '../../utils/web.js'
// import { query } from '../../utils/tools.js'
import showModal from '../common/modal.vue'
import loading from '../common/loading.vue'
var check = require('../../assets/img/check.png')
var checkActive = require('../../assets/img/check_active.png')
export default {
  components: {
    showModal,
    loading
  },
  data () {
    return {
      userId: '',
      token: '',
      showLoading: false,
      showModal: false,
      errMsg: '',
      isAgree: false,
      check: check,
      checkActive: checkActive,
      upgradeInfo: {
        deptAirport: '',
        destAirport: '',
        orderPrice: '',
        servicesList: []
      }
    }
  },
  created () {
    this.showLoading = true
    // this.userId = query('userId') || ''
    // this.token = query('token') || ''
    let params = this.$route.query
    this.userId = params.userId
    this.token = params.token
    this.getData()
  },
  methods: {
    getData() {
      let url = 'flightupgrade-counter/getflightupgradeinfo'
      let params = {
        userId: this.userId,
        token: this.token
      }
      reqGet(url, params).then(res => {
        this.showLoading = false
        if (res.errorCode === 0) {
          this.upgradeInfo = res.object || {}
          console.log(res.object)
          this.upgradeInfo.orderPrice = this.upgradeInfo.orderPrice / 100
        } else {
          this.showModal = true
          this.errMsg = res.errorMsg
        }
      }).catch(() => {
        this.showLoading = false
        this.showModal = true
        this.errMsg = '网络错误，请稍后再试！'
      })
    },
    routeTo() {
      // this.$router.push({
      //   path: 'protoRule'
      // })
      location.href = this.upgradeInfo.upgradeRulerlUrl
    },
    checkFn() {
      if (this.isAgree) {
        this.upgradeInfo.name = '尚未开放抢购'
      } else {
        this.upgradeInfo.name = '立即抢购'
      }
      this.isAgree = !this.isAgree
    },
    btnClick() {
      // this.$router.replace({
      //   path: 'orderDetail'
      // })
      if (this.upgradeInfo.isuse === '1' && this.isAgree) {
        let url = 'flightupgrade/createupgradeorder'
        let params = {
          token: this.token
        }
        reqGet(url, params).then(res => {
          if (res.errorCode === 0) {
            let orderId = res.object.orderInfoDetailBean.orderId
            // this.$router.push({
            //   path: `/orderDetail/${orderId}`
            // })
            this.$router.replace({ // 这里需要用replace，将当前页面在栈中替换，这样可以保证从orderDetail页直接返回到native入口页
              path: 'orderDetail',
              query: {
                token: this.token,
                userId: this.userId,
                orderId: orderId
              }
            })
          } else {
            this.showModal = true
            this.errMsg = res.errorMsg
          }
        }).catch(() => {
          this.showLoading = false
          this.showModal = true
          this.errMsg = '网络错误，请稍后再试！'
        })
      }
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
