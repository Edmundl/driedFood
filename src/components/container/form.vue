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
      <Input type="1" placeholder="请写下您对本机场的评审报告" name="出生日期" :value="value1"/>
      <Input type="2" name="国籍/地区" :value="value2" @chooseItem="showPicker=true"/>
      <Input type="2" name="国籍/地区" :value="value3" :optional="true" @chooseItem="showPicker=true"/>
    </div>
    <div class="form_item" style="padding:0.32rem">
      <AutoTextarea placeholder="请写下您对本机场的评审报告" :value="reportWord" @onChange="getText2" :maxLength="maxLength"></AutoTextarea>
    </div>
    <div class="form_item">
      <List :list-type="listType" :list="list"></List>
    </div>
    <Picker v-show="showPicker" :pick-list="pickList" :cur-value="[value2]" @pickerCancel="showPicker=false" @pickerConfirm="pickerConfirm"></Picker>
  </div>
</template>
<script>
  import { reqGet } from '../../utils/web.js'
  import AutoTextarea from '../common/AutoTextarea.vue';
  import List from '../common/List.vue';
  import Input from '../common/Input.vue';
  import Picker from '../common/Picker.vue';
  var iconMessage = require('../../assets/img/icon-message.png');
  var iconDelay = require('../../assets/img/icon-delay.png');
	export default {
    components: {
      AutoTextarea,
      List,
      Input,
      Picker
    },
		data () {
			return {
        reportWord: '',
        value1: '',
        value2: '中国大陆',
        value3: '',
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