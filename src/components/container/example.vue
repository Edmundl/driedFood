<style lang="less">
  @import "../../assets/css/base.less";
  .mainWrapper {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    background: #fff;
  }
  .ume-navbar {
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .ume-navbar_item {
      flex-grow: 1;
      text-align: center;
      font-size: @UIFontTitleSize1;
      height: 1rem;
      line-height: 1rem;
      position: relative;
      .after {
        content: ' ';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        bottom: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        transform: scaleX(0.5);
      }
      &.active {
        background: @UIColor6;
      }
    }
  }
  .ume-tab_panel {
    background: @UIColor6;
  }
</style>
<template>
  <div class="mainWrapper">
    <div class="ume-navbar">
      <div :class="pageIndex === 0 ? 'ume-navbar_item active': 'ume-navbar_item'" @click="routeTo(0)">反馈<span class="after"></span></div>
      <div :class="pageIndex === 1 ? 'ume-navbar_item active': 'ume-navbar_item'" @click="routeTo(1)">表单<span class="after"></span></div>
      <div :class="pageIndex === 2 ? 'ume-navbar_item active': 'ume-navbar_item'" @click="routeTo(2)">上传<span class="after"></span></div>
      <div :class="pageIndex === 3 ? 'ume-navbar_item active': 'ume-navbar_item'" @click="routeTo(3)">其他</div>
    </div>
    <div class="ume-tab_panel">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
	export default {
		data () {
			return {
        pageIndex: 0,
        test: ''
			}
    },
    methods: {
      routeTo(index) {
        this.pageIndex = index
        if (index === 0) {
          this.$router.push('/example/feedback')
        } else if (index === 1) {
          this.$router.push('/example/form')
        } else if (index === 2) {
          this.$router.push('/example/upload')
        }
      }
    }
	}
</script>