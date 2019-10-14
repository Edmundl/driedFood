<style lang="less" scoped>
@import "../../assets/css/base.less";
* {
  box-sizing: border-box;
}
.pickerWrapper {
  .ume-mask {
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .ume-picker {
    background: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 101;
    transition: all 0.3s ease;
  }
  .ume-picker-ht {
    display: flex;
    padding: 0 0.32rem;
    align-items: center;
    justify-content: space-between;
    height: 1.2rem;
    font-size: @UIFontSize3;
    .ume-picker-cancel {
      color: @UIColor3;
    }
    .ume-picker-confirm {
      color: @UIColor9;
    }
  }
  .ume-picker-bd {
    height: 5rem;
    display: flex;
    .ume-picker-group {
      position: relative;
      flex-grow: 1;
      overflow: hidden;
      .ume-picker-mask {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2rem;
        z-index: 2;
        &.top {
          top: 0;
          background: linear-gradient(-180deg, #fff 0%, rgba(255, 255, 255, 0.6) 54%);
        }
        &.bottom {
          bottom: 0;
          background: linear-gradient(0deg, #fff 0%, rgba(255, 255, 255, 0.6) 54%);
        }
      }
      .ume-picker-indicator {
        position: absolute;
        left: 0;
        width: 100%;
        top: 2rem;
        height: 1rem;
        z-index: 2;
        &::before, &::after {
          content: ' ';
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          color: @UIColor6;
        }
        &::before {
          top: 0;
          border-top: 1px solid @UIColor6;
        }
        &::after {
          bottom: 0;
          border-bottom: 1px solid @UIColor6;
        }
      }
      .ume-picker-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        .ume-picker-item {
          height: 1rem;
          line-height: 1rem;
          text-align: center;
          color: @UIColor3;
          font-size: @UIFontSize1;
          &.active {
            color: @UIColor9;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div v-show="visibilityControl" class="pickerWrapper">
    <div class="ume-mask" @click="cancelFn"></div>
    <div class="ume-picker" :style="translate">
      <div class="ume-picker-ht">
        <span class="ume-picker-cancel" @click="cancelFn">取消</span>
        <span class="ume-picker-confirm" @click="confirmFn">确定</span>
      </div>
      <div class="ume-picker-bd">
        <div v-for="(group, groupIndex) in pickList" :key="groupIndex" ref="pickerGroup" class="ume-picker-group">
          <div class="ume-picker-mask top"></div>
          <div class="ume-picker-mask bottom"></div>
          <div class="ume-picker-indicator"></div>
          <div ref="pickerContent" class="ume-picker-content">
            <div v-for="(item, index) in group" :key="index" :class="index == curIndex[groupIndex] ? 'ume-picker-item active' : 'ume-picker-item'">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { findIndex } from '../../utils/tools.js'
import { scroll } from '../../utils/scroll.js'
export default {
  props: {
    pickList: {
      type: Array,
      default: function() {
        return [] // 二维数组
      }
    },
    curValue: {
      type: Array,
      default: function() {
        return []
      }
    },
    visibility: {
      type: Boolean,
      default: function() {
        return false
      }
    }
  },
  data () {
    return {
      curIndex: [],
      visibilityControl: false,
      defaults: {
        isMulti: false,
        offset: 2,
        rowHeight: 1, // 单位是rem, 1rem = 100px
        bodyHeight: 5 * 1
      },
      translate: 'transform: translate3d(0, 100%, 0);'
    }
  },
  watch: {
    curValue: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getData()
      }
    },
    pickList: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$nextTick(() => { // nextTick dom更新了
          this.initTouch()
        })
      }
    },
    visibility: function(newVal, oldVal) {
      if (newVal) {
        this.visibilityControl = newVal;
        setTimeout(() => {
          this.translate = this.getTranslate(0)          
        }, 50);
      } else {
        this.translate = this.getTranslate(100)
        setTimeout(() => {
          this.visibilityControl = newVal;
        }, 300);
      }
    }
  },
  created() {
    this.getData()
  },
  mounted () {
    this.initTouch()
    this.visibilityControl = this.visibility;
  },
  methods: {
    getTranslate(x) {
      return `transform: translate3d(0, ${x}%, 0);`
    },
    getData() {
      this.pickList.forEach((item, index) => {
        let curIndex = findIndex(item, 'value', this.curValue[index])
        this.curIndex[index] = curIndex
      })
    },
    initTouch() {
      var pickerGroup, pickerContent
      pickerContent = this.$refs.pickerContent
      let result = scroll(this.defaults, pickerContent, this.curIndex, this.pickList)
      for (let index = 0; index < this.pickList.length; index++) {
        result.initPos(index)
        pickerGroup = this.$refs.pickerGroup[index]
        pickerGroup.addEventListener('touchstart', result.touchstart)
        pickerGroup.addEventListener('touchmove', (event) => {
          result.touchmove(event, index)
        })
        pickerGroup.addEventListener('touchend', (event) => {
          this.curIndex[index] = result.touchend(event, index)
          this.$forceUpdate()
        })
      }
    },
    cancelFn() {
      this.$emit('pickerCancel')
    },
    confirmFn() {
      let results = []
      this.pickList.forEach((item, index) => {
        let curIndex = this.curIndex[index]
        results.push(item[curIndex].value)
      })
      this.$emit('pickerConfirm', results)
    }
  }
}
</script>
