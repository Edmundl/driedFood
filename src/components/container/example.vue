<style lang="less">
  @import "../../assets/css/base.less";
  .contain {
    width: 100%;
    height: 100%;
  }
  .title {
    color: @UIColor9;
  }
  .changeBtn {
    margin-top: 0.1rem;
    display: flex;
    justify-content: space-evenly;
  }
  .appBtn {
    margin: 0.2rem 0.5rem;
    padding: 0.1rem 0.2rem;
  }
  .item {
    width: 100%;
    border: 1px solid @UIColor5;
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
      <Btn :bgType="bgType" @hasBtn="btnCallback">{{ btnWord }}</Btn>
      <div class="changeBtn">
        <span @click="changeBtn(0)">bgType传0</span>
        <span @click="changeBtn(1)">bgType传1</span>
        <span @click="changeBtn(2)">bgType传2</span>
        <span @click="changeBtn(3)">bgType传3</span>
        <span @click="changeBtn(4)">bgType传4</span>
      </div>
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
    <div class="item item2">
      <div>列表示例：
        <span @click="changeList(1)">L1 不带icon单行条目</span>
        <span @click="changeList(2)">L2 带icon单行条目（一级页面）</span>
        <span @click="changeList(3)">L3 带icon两行条目（一二级页面）</span>
      </div>
      <List :list-type="listType" :list="list"></List>
    </div>
  </div>
</template>
<script>
  import { reqGet } from '../../utils/web.js'
  import Btn from '../common/Btn.vue';
  import modal from '../common/modal.vue';
  import tips from '../common/tips.vue';
  import loading from '../common/loading.vue';
  import autoTextarea from '../common/autoTextarea.vue';
  import List from '../common/List.vue';
  import { setTimeout } from 'timers';
  var iconMessage = require('../../assets/img/icon-message.png');
  var iconDelay = require('../../assets/img/icon-delay.png');
	export default {
    components: {
      Btn,
      modal,
      tips,
      loading,
      autoTextarea,
      List
    },
		data () {
			return {
        bgType: 0,
        btnWord: '尚未开放抢购',
        modal1: false,
        modal2: false,
        loading: false,
        reportWord: '',
        maxLength: 400,
        list: [],
        listType: 1,
        noIconList: [
          {
            title: '主标题文案'
          },
          {
            title: '主标题文案',
            subTitle: '可变色副文案',
            subType: 0
          },
          {
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subType: 1
          }
        ],
        iconList: [
          {
            icon: iconMessage,
            iconWidth: '0.6rem',
            title: '主标题文案'
          },
          {
            icon: iconMessage,
            iconWidth: '0.6rem',
            title: '主标题文案',
            subTitle: '可变色副文案',
            subType: 0
          },
          {
            icon: iconMessage,
            iconWidth: '0.6rem',
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subType: 1
          }
        ],
        iconListWithTwo: [
          {
            icon: iconDelay,
            iconWidth: '0.82rem',
            title: '主标题文案',
            content: '说明文案说明文案说明文案说明文案说明'
          },
          {
            icon: iconDelay,
            iconWidth: '0.82rem',
            title: '主标题文案',
            subTitle: '可变色副文案',
            subType: 0,
            content: '说明文案说明文案说明文案说明文案说明说明文案说明文案说明文案说明文案说明'
          },
          {
            icon: iconDelay,
            iconWidth: '0.82rem',
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subType: 1
          }
        ]
			}
		},
		created: function () {
      this.list = this.noIconList
    },
    methods: {
      getMethod: function (url, params) {
        reqGet(url, params).then(res => {
        }).catch(() => {
        })
      },
      changeBtn: function (index) {
        this.bgType = Number(index)
        if (this.bgType === 1 || this.bgType === 2) {
          this.btnWord = '立即抢购';
        } else {
          this.btnWord = '尚未开放抢购';
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
      },
      changeList(type) {
        this.listType = type
        if (type === 1) {
          this.list = this.noIconList
        } else if (type === 2) {
          this.list = this.iconList
        } else {
          this.list = this.iconListWithTwo
        }
        console.log(this.list)
      }
    }
	}
</script>