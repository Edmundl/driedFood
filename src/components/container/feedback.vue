<style lang="less">
  @import "../../assets/css/base.less";
  .page_feedback {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
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
  <div class="page_feedback flex_column">
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toModal1">Alert</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toModal2">Confirm</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toToast">Toast</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toLoading">Loading</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toPicker">Picker</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toDatePicker">DatePicker</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toTips">Tips</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toButton">Button</a>
    <a href="javascript:;" class="ume-btn ume-btn_default" @click="toTabs">Tabs</a>
    <ume-modal :value="modal1" okText="确定" title="自定义标题" content="自定义标题的alert" @on-ok="onOk1" @on-cancel="onCancel1"></ume-modal>
    <ume-modal :value="modal2" okText="确定" cancelText="取消" title="自定义标题" content="自定义标题的confirm" @on-ok="onOk2" @on-cancel="onCancel2"></ume-modal>
    <ume-loading v-show="showLoading"></ume-loading>
    <ume-picker :visibility="showPicker" :pick-list="pickList" :cur-value="curValue" @pickerCancel="pickerCancel" @pickerConfirm="pickerConfirm"></ume-picker>
    <ume-date-picker :visibility="showDatePicker" :in-options="options" @pickerCancel="pickerCancel" @pickerConfirm="pickerConfirm"></ume-date-picker>
  </div>
</template>
<script>
  // import umeModal from '../common/modal/Modal.vue';
  // import umeLoading from '../common/loading/Loading.vue';
  // import Picker from '../common/picker/Picker.vue';
  // import DatePicker from '../common/datePicker/DatePicker.vue';
  import { clickEvent } from '../../utils/tools.js'
	export default {
    components: {
      // umeModal,
      // umeLoading,
      // Picker,
      // DatePicker
    },
		data () {
			return {
        modal1: false,
        modal2: false,
        showLoading: false,
        showPicker: false,
        showDatePicker: false,
        showTips: false,
        showButton: false,
        btnText: '尚未开放抢购',
        bgType: -1,
        curValue: [],
        pickList: [],
        options: {
          start: 1990,
          end: 2030
        }
			}
		},
		created: function () {
      setTimeout(() => {
        this.pickList = [[
          {
            label: '全部',
            value: 'all'
          },
          {
            label: '卡折',
            value: 'card'
          },
          {
            label: '证件',
            value: 'credentials'
          },
          {
            label: '钱包箱包',
            value: 'wallet'
          },
          {
            label: '数码产品',
            value: 'digital'
          },
          {
            label: '衣物鞋包',
            value: 'clothes'
          },
          {
            label: '其他',
            value: 'others'
          }
        ]]
        this.curValue = ['wallet']
        // this.options = {
        //   start: 2010,
        //   end: 2025,
        //   value: [2019, 9, 10]
        // }
      }, 500);
    },
    methods: {
      onOk1: function() {
        console.log('点击了确定')
        this.modal1 = false
      },
      onCancel1: function() {
        console.log('点击了取消')
        this.modal1 = false
      },
      toModal1: function() {
        this.modal1 = true
      },
      toModal2: function() {
        this.modal2 = true
      },
      onOk2: function() {
        console.log('点击了确定')
        this.modal2 = false
      },
      onCancel2: function() {
        console.log('点击了取消')
        this.modal2 = false
      },
      toToast() {
        this.$Message.info({
          content: '复制链接成功',
          duration: 2
        })
      },
      toLoading() {
        this.showLoading = true
        setTimeout(() => {
          this.showLoading = false
        }, 2000)
      },
      toPicker() {
        this.showPicker = true
      },
      toDatePicker() {
        this.showDatePicker = true
      },
      pickerCancel() {
        this.showPicker = false
        this.showDatePicker = false
      },
      pickerConfirm(index, item) {
        console.log(index, item)
      },
      toTips() {
        // this.showTips = true
        this.$router.push('/example/tip')
      },
      toButton() {
        // this.bgType = (this.bgType + 1) % 6
        // if (this.bgType === 1 || this.bgType === 2) {
        //   this.btnText = '立即抢购';
        // } else {
        //   this.btnText = '尚未开放抢购';
        // }
        // this.showButton = true
        // if (this.bgType === 5) {
        //   this.showButton = false
        // }
        this.$router.push('/example/button')
      },
      toTabs() {
        clickEvent({
          id: 'test12345'
        })
        this.$router.push('/example/tabs')
      }
    }
	}
</script>