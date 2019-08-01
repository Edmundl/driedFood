<style lang="less">
  @import "../../assets/css/base.less";
  .contain {
    width: 100%;
    height: 100%;
  }
  .title {
    color: @green-base;
  }
  .appBtn {
    margin: 0.2rem 0.5rem;
    padding: 0.1rem 0.2rem;
  }
  .item {
    width: 100%;
    border: 1px solid @black-c;
    padding: 0.1rem 0;
    margin: 0.1rem 0;
  }
  .item2 {
    padding-top: 0.1rem;
    padding-bottom: 0.5rem;
  }
  .areaTest {
    width: 100%;
    height: 100%;
    padding: 0.15rem;
  }
</style>
<template>
  <div>
    <div class="title">
      基本base.less的使用示例；<br />
      接口getGet和getPost的使用示例；<br />
      基础开发组件的示例；<br />
    </div>
    <div class="item">
      <div>温馨提示示例：</div>
      <tips>温馨提示：1.仅支持在已认证的证件下添加行程</tips>
      <div style="width: 100%;height:0.15rem"></div>
      <tips close>温馨提示：1.仅支持在已认证的证件下添加行程</tips>
      <div style="width: 100%;height:0.15rem"></div>
      <tips rightarrow @toArrow="toArrow">温馨提示：该条数据有点击回调，可跳转到指定页面</tips>
    </div>
    <div class="item">
      <div>常用按钮示例：</div>
      <greenBtn :isGray="isGray" @hasBtn="btnCallback">{{ btnWord }}</greenBtn>
      <button class="appBtn" @click="changeBtn">改变按钮状态</button>
    </div>
    <div class="item">
      <div>常用弹窗示例：</div>
      <modal :value.sync="modal1" okWord="去抢购吧" cancelWord="放弃" modalWord="是否要去抢购？是否要去抢购？是否要去抢购？" @onOk="onOk1" @onCancel="onCancel1"></modal>
      <button class="appBtn" @click="toModal">有两个按钮的弹框</button>
      <modal :value.sync="modal2" title="对话框标题2" okWord="去抢购吧" modalWord="是否要去抢购？是否要去抢购？是否要去抢购？" @onOk="onOk2"></modal>
      <button class="appBtn" @click="toModal2">只有一个按钮的弹框</button>
    </div>
    <div class="item">
      <loading v-show="loading"></loading>
      <button class="appBtn" @click="toLoading">显示loading 3s</button>
    </div>
    <div class="item item2">
      <div>多文本输入交互示例：</div>
      <div class="areaTest">
        <autoTextarea placeholder="请写下您对本机场的评审报告" :value="reportWord" @onChange="getText2" :maxLength="maxLength"></autoTextarea>
      </div>
    </div>
  </div>
</template>
<script>
  import { reqGet } from '../../utils/web.js'
  import greenBtn from '../common/greenBtn.vue';
  import modal from '../common/modal.vue';
  import tips from '../common/tips.vue';
  import loading from '../common/loading.vue';
  import autoTextarea from '../common/autoTextarea.vue';
  import { setTimeout } from 'timers';
	export default {
    components: {
      greenBtn,
      modal,
      tips,
      loading,
      autoTextarea
    },
		data () {
			return {
        isGray: 1,
        btnWord: '尚未开放抢购',
        modal1: false,
        modal2: false,
        loading: false,
        reportWord: '',
        maxLength: 400,
				headers: {
					appid: 'UmetripTicketBaseServices',
					methodName: 'getAvaliableList',
					pageUrl: location.pathname,
					serviceName: 'ticketChangeSVC'
				}
			}
		},
		created: function () {},
    methods: {
      getMethod: function (url, params) {
        reqGet(url, params).then(res => {
        }).catch(() => {
        })
      },
      changeBtn: function () {
        if (this.isGray == 0) {
          this.isGray = 1;
          this.btnWord = '尚未开放抢购';
        } else {
          this.isGray = 0;
          this.btnWord = '立即抢购';
        }
      },
      btnCallback: function () {
        alert('按钮被有效点击')
      },
      onOk1: function() {
        alert('点击了确定')
        this.modal1 = false
      },
      onCancel1: function() {
        alert('点击了取消')
        this.modal1 = false
      },
      toModal: function() {
        this.modal1 = true
      },
      toModal2: function() {
        this.modal2 = true
      },
      onOk2: function() {
        alert('点击了确定')
        this.modal2 = false
      },
      toArrow: function() {
        alert('点击了有向右箭头的提示，此为回调')
      },
      toLoading: function() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 3000)
      },
      getText2: function(item, word) {
        this.reportWord = word
      }
    }
	}
</script>