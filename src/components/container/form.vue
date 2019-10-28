<style lang="less" scoped>
  .form_item {
    width: 100%;
    margin: 0.05rem 0;
    background: #fff;
  }
</style>
<template>
  <div class="page_form">
    <div class="form_item">
      <ume-input type="1" name="出生日期" placeholder="请写下您对本机场的评审报告" :value="value1"/>
      <ume-input type="2" name="国籍/地区" :value="value2" @chooseItem="showPicker=true"/>
      <ume-input type="2" name="居住地" :value="value3" :optional="true" @chooseItem="showPicker=true"/>
      <ume-input type="1" name="详细地址" placeholder="填写街道名、门牌号、小区、楼号、单元、室等" :value="value4" :rows="2" />
    </div>
    <div class="form_item" style="padding:0.32rem">
      <ume-auto-textarea placeholder="请写下您对本机场的评审报告" :value="reportWord" @onChange="getText2" :maxLength="maxLength"></ume-auto-textarea>
    </div>
    <div class="form_item">
      <ume-list :list-type="1" :list=" noIconList"></ume-list>
    </div>
    <div class="form_item">
      <ume-list :list-type="2" :list="iconList"></ume-list>
    </div>
    <div class="form_item">
      <ume-list :list-type="3" :list="iconListWithTwo"></ume-list>
    </div>
    <ume-picker :visibility="showPicker" :pick-list="pickList" :cur-value="[value2]" @pickerCancel="showPicker=false" @pickerConfirm="pickerConfirm"></ume-picker>
  </div>
</template>
<script>
  import { reqGet } from '../../utils/web.js'
  // import AutoTextarea from '../common/AutoTextarea.vue';
  // import List from '../common/list/List.vue';
  // import Input from '../common/input/Input.vue';
  // import Picker from '../common/picker/Picker.vue';
  var iconMessage = require('../../assets/img/icon-message.png');
  var iconDelay = require('../../assets/img/icon-delay.png');
	export default {
    components: {
      // AutoTextarea,
      // List,
      // Input,
      // Picker
    },
		data () {
			return {
        reportWord: '',
        value1: '',
        value2: '中国大陆',
        value3: '',
        value4: '',
        showPicker: false,
        pickList: [[
          {
            label: '中国大陆',
            value: '中国大陆'
          },
          {
            label: '中国港/澳',
            value: '中国港/澳'
          },
          {
            label: '中国台湾',
            value: '中国台湾'
          },
          {
            label: '国外',
            value: '国外'
          }
        ]],
        maxLength: 400,
        list: [],
        listType: 1,
        noIconList: [
          {
            title: '主标题文案主标题文案主标题文案主标题文案'
          },
          {
            title: '主标题文案',
            subTitle: '可变色副文案',
            subType: 0
          },
          {
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subColor: '#ff801a',
            subType: 1
          }
        ],
        iconList: [
          {
            icon: iconMessage,
            iconWidth: '0.4rem',
            title: '主标题文案'
          },
          {
            icon: iconMessage,
            iconWidth: '0.4rem',
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subType: 1
          },
          {
            icon: iconMessage,
            iconWidth: '0.4rem',
            title: '主标题文案',
            subTitle: '可变色较弱文案',
            subColor: '#ff801a',
            subType: 1
          },
          {
            icon: iconMessage,
            iconWidth: '0.4rem',
            title: '主标题文案',
            subTitle: '默认较弱文案不加箭头',
            subType: 1,
            hideArrow: true
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
      getText2: function(word) {
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
      },
      pickerConfirm(value) {
        this.value2 = value[0]
        this.showPicker = false
      }
    }
	}
</script>