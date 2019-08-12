<style lang="less" scoped>
@import "../../assets/css/base.less";
.listWrapper {
  padding-left: @Space1;
  .listItem {
    padding: 0.34rem 0.32rem 0.31rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid @UIColor6;
    .title {
      font-size: @UIFontSize3;
      color: @UIColor2;
      img, span {
        display: inline-block;
        vertical-align: middle;
      }
    }
    .leftWrapper {
      margin-right: 0.38rem;
      display: flex;
      align-items: center;
      .title {
        font-family: " PingFangSC-Medium", "Microsoft YaHei", Arial, sans-serif;
        font-size: @UIFontSize4;
        color: @UIColor1;
      }
      .contentWrapper {
        margin-left: 0.22rem;
        .content {
          font-size: @UIFontSize6;
          color: @UIColor4;
        }
      }
    }
    .sub {
      flex-shrink: 0;
      .subText {
        display: inline-block;
        vertical-align: middle;
        &.copy {
          font-size: @UIFontSize3;
          color: @UIColor4;
        }
        &.weak {
          font-size: @UIFontSize6;
          color: @UIColor11;
        }
      }
      .IconArrow:extend(.IconSizeXS) {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>

<template>
  <div class="listWrapper">
    <div v-for="(item, index) in list" :key="index" class="listItem">
      <div v-if="listType==1 || listType==2" class="title">
        <img v-if="item.icon" :src="item.icon" :style="`width: ${item.iconWidth};`" /><span>{{ item.title }}</span>
      </div>
      <div v-else class="leftWrapper">
        <img v-if="item.icon" :src="item.icon" :style="`width: ${item.iconWidth};`" />
        <div class="contentWrapper">
          <p class="title">{{ item.title }}</p>
          <p class="content line-clamp-1">{{ item.content }}</p>
        </div>
      </div>
      <div class="sub">
        <span :class="item.subType == 0 ? 'subText copy' : 'subText weak'">{{ item.subTitle }}</span><span class="IconArrow"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listType: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: function() {
        return {}
      }
    }
  }
}
</script>
