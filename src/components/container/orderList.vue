<style lang="less" scoped>
.orderList {
  padding: 0 0.32rem;
  .item {
    padding: 0.39rem 0 0.34rem;
    border-bottom: 1px solid #eee;
    .topLine, .bottomLine {
      font-size: 0.3rem;
      display: flex;
      justify-content: space-between;
    }
    .left {
      .icon {
        width: 0.4rem;
        display: inline-block;
        vertical-align: middle;
      }
      .info {
        display: inline-block;
        vertical-align: middle;
      }
      .secondLine {
        margin-top: 0.29rem;
      }
      .thirdLine {
        margin-top: 0.13rem;
      }
    }
    .status {
      font-size: 0.3rem;
    }
    .price {
      font-size: 0.46rem;
      margin-top: 0.68rem;
      color: #fc6120;
    }
  }
}
</style>

<template>
  <div class="orderList">
    <div v-for="(item, index) in orderList" :key="index" class="item" @click="routeTo(index)">
      <div class="topLine">
        <div class="left">
          <img class="icon" :src="item.airlineIcon" />
          <span class="info medium">{{ item.airlineName + ' ' + item.flightNo }}</span>
        </div>
        <div class="status" :style="`color: ${item.orderColor};`">{{ item.orderStatus }}</div>
      </div>
      <div class="bottomLine">
        <div class="left">
          <div class="secondLine">
            <img class="icon" src="../../assets/img/adept_adest.png" />
            <span class="info">{{ item.deptAirport + '-' + item.destAirport }}</span>
          </div>
          <div class="thirdLine">
            <img class="icon" src="../../assets/img/tick.png" />
            <span class="info">{{ item.flightTime }}</span>
          </div>
        </div>
         <div class="price">{{ `¥${item.orderPrice/100}` }}</div>
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
      userId: '',
      orderList: []
    }
  },
  created() {
    // this.userId = query('userId') || ''
    // this.token = query('token') || ''
    let params = this.$route.query
    this.userId = params.userId
    this.token = params.token
    this.getData()
  },
  methods: {
    getData() {
      let url = 'flightupgrade/getupgradeorderlist'
      let params = {
        userId: this.userId
      }
      this.showLoading = true
      reqGet(url, params).then(res => {
        this.showLoading = false
        if (res.errorCode === 0) {
          this.orderList = res.object || {}
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
    routeTo(index) {
      let orderId = this.orderList[index].orderId
      this.$router.push({
        path: 'orderDetail',
        query: {
          userId: this.userId,
          token: this.token,
          orderId: orderId
        }
      })
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>
