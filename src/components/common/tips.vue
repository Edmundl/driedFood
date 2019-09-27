<!-- 提示导航栏 -->
<template>
  <div class="tipsWrapper" @click="toArrow" ref="tipsWrapper">
    <span v-if="tipIcon" class="IconTip"></span>
    <div :class="overflow ? 'tipsWord overflow' : 'tipsWord'" ref="tipsWord">
      <p ref="tipsLine" class="tipsLine" style="left: 0px"><slot></slot></p>
    </div>
    <span v-if="close" class="IconClose" @click="toClose"></span>
    <span v-if="rightarrow" class="IconArrow IconSizeXS"></span>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {
      tipIcon: {
        type: Boolean,
        default: true
      },
      close: {
        type: Boolean,
        default: false
      },
      rightarrow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        overflow: false
      };
    },
    created() {},
    mounted() {
      if (this.rightarrow) {
        this.animated()
      } else {
        let tipsWord = this.$refs.tipsWord
        tipsWord.style.whiteSpace = 'normal'
      }
    },
    methods: {
      toClose: function() {
        this.show = false
      },
      toArrow: function() {
        this.$emit('toArrow')
      },
      animated() {
        let tipsWord = this.$refs.tipsWord
        let tipsWrapper = this.$refs.tipsWrapper
        let tipsLine = this.$refs.tipsLine
        tipsWrapper.style.paddingLeft = '0.32rem'
        console.log(tipsWord.scrollWidth, tipsWord.offsetWidth)
        if (tipsWord.scrollWidth > tipsWord.offsetWidth) {
          // this.overflow = true
          let left, scrollWidth = tipsWord.scrollWidth
          window.intervalId = setInterval(() => {
            left = Number(tipsLine.style.left.split('px')[0])
            if (Math.abs(left) > scrollWidth) {
              tipsLine.style.left = '0px'
            } else {
              tipsLine.style.left = (left - 5) + 'px'
            }
          }, 100)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/base.less";
  .tipsWrapper {
    width: 100%;
    background: @UIColor16;
    padding: 0.16rem 0.2rem 0.16rem 0.72rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  .tipsWord {
    flex-grow: 1;
    font-size: 0.28rem;
    overflow: hidden;
    white-space: nowrap;
    .tipsLine {
      line-height: 0.4rem;
      color: @UIColor17;
      position: relative;
    }
    &.overflow {
      .tipsLine {
        animation: scroll 5s linear infinite;
      }
    }
  }
  .IconTip:extend(.IconSizeTips) {
    margin-right: 0.14rem;
    position: absolute;
    left: 0.32rem;
    top: 0.23rem;
  }
  .IconClose:extend(.IconSizeClose) {
    flex-shrink: 0;
    margin-left: 0.18rem;
  }
  .IconArrow:extend(.IconSizeXS) {
    flex-shrink: 0;
    margin-left: 0.18rem;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
