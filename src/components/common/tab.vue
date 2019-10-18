<style lang="less" scoped>
@import "../../assets/css/base.less";
.tabsWrapper {
  background: #fff;
  .tabsBox {
    display: flex;
    justify-content: center;
    color: @UIColor4;
    font-size: @UIFontSize4;
    height: 0.8rem;
    padding-top: 0.19rem;
    .tabItem {
      &:first-child {
        margin-right: 1.76rem;
      }
      &.active:extend(.font-medium) {
        color: @UIColor9;
        position: relative;
        &::after {
          content: ' ';
          display: inline-block;
          position: absolute;
          width: 0.4rem;
          height: 0.05rem;
          background: @UIColor9;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 0.03rem;
        }
      }
    }
    &.tabsType2 {
      font-size: @UIFontSize5;
      padding: 0 0.32rem;
      justify-content: space-between;
      align-items: center;
      height: 1rem;
      .tabItem {
        margin: 0;
        &.active:extend(.font-medium) {
          font-size: @UIFontSize1;
          color: @UIColor1;
        }
        &::after {
          bottom: -0.25rem;
        }
      }
    }
    &.tabsType3 {
      font-size: @UIFontSize5;
      color: @UIColor4;
      height: 1.1rem;
      .tabsOne {
        border: 1px solid #ddd;
        border-radius: 4px;
        display: flex;
        height: 0.58rem;
        line-height: 0.58rem;
        align-items: center;
      }
      .tabItem {
        margin: 0;
        border-right: 1px solid #ddd;
        min-width: 1.32rem;
        text-align: center;
        &:last-child {
          border-right: 0;
        }
        &.active {
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="tabsWrapper">
    <div v-if="tabsType==1" class="tabsBox">
      <div v-for="(item, index) in tabItems" :class="currentIdx ==index ? 'tabItem active' : 'tabItem'" :key="index" @click="tab(index)">
        <span>{{ item }}</span>
      </div>
    </div>
    <div v-else-if="tabsType==2" :class="'tabsBox tabsType'+tabsType">
       <div v-for="(item, index) in tabItems" :class="currentIdx ==index ? 'tabItem active' : 'tabItem'" :key="index" @click="tab(index)">
        <span>{{ item.main }}</span>
        <span>{{ item.num }}</span>
      </div>
    </div>
    <div v-else-if="tabsType==3" :class="'tabsBox tabsType'+tabsType">
      <div class="tabsOne">
        <div v-for="(item, index) in tabItems" :class="currentIdx ==index ? 'tabItem active' : 'tabItem'" :key="index" @click="tab(index)">
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabsType: {
      type: Number,
      default: 1
    },
    tabItems: {
      type: Array,
      default: function() {
        return []
      }
    },
    defaultIdx: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentIdx: 0
    }
  },
  watch: {
    defaultIdx: function(newVal, oldVal) {
      this.currentIdx = newVal
    }
  },
  created () {
    this.currentIdx = this.defaultIdx
  },
  methods: {
    tab(index) {
      this.currentIdx = index
    }
  }
}
</script>
