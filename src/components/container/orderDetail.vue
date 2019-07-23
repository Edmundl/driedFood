<style lang="less" scoped>
.orderDetail {
  padding: 0.4rem 0.32rem;
  .status {
    font-size: 0.46rem;
  }
  .payWrapper {
    .item {
      padding-top: 0.3rem;
      width: 100%;
      display: flex;
      .left {
        font-size: 0.28rem;
        width: 1.42rem;
        color: #999;
        display: inline-block;
      }
      .right {
        font-size: 0.3rem;
        color: #333;
      }
    }
  }
  .btnWrapper {
    padding: 0.5rem 0 0.4rem;
    border-bottom: 1px solid #eee;
    .tips {
      margin-top: 0.4rem;
      font-size: 0.28rem;
      color: #666;
      text-align: center;
      span {
        color: #41b24e;
      }
    }
    &.timeout {
      font-size: 0.28rem;
      color: #fc6129;
      text-align: center;
    }
  }
  .introWrapper {
    .item {
      margin-top: 0.3rem;
      .title {
        font-size: 0.3rem;
        color: #333;
      }
      .content {
        margin-top: 0.2rem;
        font-size: 0.28rem;
        color: #858585;
      }
    }
    .more {
      text-align: center;
      margin-top: 0.4rem;
      color: #41b24e;
      text-decoration: underline;
      font-size: 0.28rem;
    }
  }
}
</style>

<template>
  <div class="orderDetail">
    <p class="status" :style="`color:${orderDetail.orderColor}`">{{ orderDetail.orderStatus }}</p>
    <div class="payWrapper">
      <p class="item">
        <span class="left">升舱航段</span>
        <span class="right">{{ orderDetail.deptAirport+'-'+orderDetail.destAirport }}</span>
      </p>
      <p class="item">
        <span class="left">订单号</span>
        <span class="right">{{ orderDetail.orderId }}</span>
      </p>
      <p class="item">
        <span class="left">订单时间</span>
        <span class="right">{{ orderDetail.createTime }}</span>
      </p>
      <p class="item">
        <span class="left">航班号</span>
        <span class="right">{{ orderDetail.flightNo }}</span>
      </p>
      <p class="item">
        <span class="left">航班日期</span>
        <span class="right">{{ orderDetail.flightTime }}</span>
      </p>
      <p class="item">
        <span class="left">乘机人</span>
        <span class="right">{{ orderDetail.passengerName }}</span>
      </p>
      <p class="item">
        <span class="left">客票号</span>
        <span class="right">{{ orderDetail.tktNo }}</span>
      </p>
      <p class="item">
        <span class="left">升舱价格</span>
        <span class="right">{{ `¥${orderDetail.orderPrice}` }}</span>
      </p>
    </div>
    <div v-if="orderDetail.statusFlag == '0'" class="btnWrapper">
      <div class="btn medium active" @click="toPay">继续支付</div>
      <div class="tips">
        请您在<span>{{ formatTime }}</span>分钟内支付
      </div>
    </div>
    <div v-else-if="orderDetail.statusFlag == '1'" class="btnWrapper timeout">订单已超时</div>
    <div class="introWrapper">
      <div v-for="(item, index) in orderDetail.notice" :key="index" class="item">
        <p class="title medium">{{ item.title }}</p>
        <p class="content" v-html="item.content"></p>
      </div>
      <p class="more" @click="routeTo">更多升舱规则及退改签说明，请点此查看</p>
    </div>
    <show-modal v-show="showModal" :content="errMsg" primary-text="我知道了" @primaryFn="closeModal"></show-modal>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
import { getTime } from '../../utils/tools.js'
import { reqGet } from '../../utils/web.js'
import { commonPay } from '@umetrip/jsapi'
import showModal from '../common/modal.vue'
import loading from '../common/loading.vue'
export default {
  components: {
    showModal,
    loading
  },
  data () {
    return {
      showModal: false,
      errMsg: '',
      showLoading: false,
      orderId: '',
      token: '',
      time: 0,
      formatTime: '',
      orderDetail: {
        deptAirport: '',
        destAirport: '',
        orderPrice: '',
        statusFlag: '0', // 0:待支付订单,1:已超时,2:其他（升舱成功或者柜台升舱已退款等)
        notice: []
      },
      payParams: {}
    }
  },
  created() {
    // this.orderId = query('orderId') || '' // query('orderId'), this.$route.params.orderId
    // this.token = query('token') || ''
    let params = this.$route.query
    this.orderId = params.orderId
    this.token = params.token
    this.getData()
  },
  methods: {
    getData() {
      let url = 'flightupgrade-counter/getflightupgradeorderinfo'
      let params = {
        orderId: this.orderId,
        token: this.token
      }
      this.showLoading = true
      reqGet(url, params).then(res => {
        this.showLoading = false
        if (res.errorCode === 0) {
          console.log(res)
          let obj = res.object || {}
          this.orderDetail = obj.orderInfoDetailBean
          this.orderDetail.notice = obj.titleBeans || []
          this.payParams = obj.payParams
          this.orderDetail.orderPrice = this.orderDetail.orderPrice / 100
          this.payParams.amount = this.payParams.amount / 100
          // 将多少秒的时间格式化, 对于带支付订单需要显示支付按钮以及倒计时信息
          if (this.orderDetail.statusFlag === '0') {
            let paymentTimeout = this.payParams.paymentTimeout
            if (paymentTimeout <= 0) {
              paymentTimeout = 0
            }
            let minutes = Math.floor(paymentTimeout / 60)
            let seconds = paymentTimeout % 60
            if (minutes < 10) {
              minutes = '0' + minutes.toString()
            }
            if (seconds < 10) {
              seconds = '0' + seconds.toString()
            }
            this.time = paymentTimeout
            this.formatTime = minutes + ':' + seconds
            this.setTime()
          }
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
    setTime() {
      if (this.payParams.paymentTimeout <= 0) {
        this.orderDetail.statusFlag = '1'
        this.orderDetail.orderStatus = '已取消'
        this.orderDetail.orderColor = '#333'
      } else {
        window.intervalId = setInterval(() => {
          var time = this.time, temp
          if (time === 0) {
            clearInterval(window.intervalId)
            this.orderDetail.statusFlag = '1'
            this.orderDetail.orderStatus = '已取消'
            this.orderDetail.orderColor = '#333'
          } else {
            temp = getTime(0, time)
            this.formatTime = temp.formatTime
            this.time = temp.time
          }
        }, 1000)
      }
    },
    toPay() {
      let params = this.payParams
      let isSupportAliPay, isSupportWeChatPay
      params.supportPaymentList.forEach(element => {
        if (element === '301') {
          isSupportAliPay = true
        } else if (element === '302') {
          isSupportWeChatPay = true
        }
      })
      let payParams = {
        'accountId': params.accountId,
        'amount': params.amount,
        'orderId': params.orderId,
        'isSupportAliPay': isSupportAliPay,
        'isSupportWeChatPay': isSupportWeChatPay,
        'productDesc': params.productDesc,
        'productName': params.productName,
        'tenantId': params.tenantId,
        'paymentTimeout': this.time * 1000 // 客户端需要ms
      }
      commonPay(payParams, (result) => {
        if (typeof result === 'string') {
          result = JSON.parse(result)
        }
				if (result.status === 11111) {
				  this.$router.push('success')
				}
			})
    },
    closeModal() {
      this.showModal = false
    },
    routeTo() {
      location.href = this.orderDetail.upgradeRulerlUrl
    }
  }
}
</script>
