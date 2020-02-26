<style lang="less" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 6rem;
}
.test {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
<template>
  <div class="wrapper">
    <div class="test" ref="test">origin origin origin</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: 'i am test'
    }
  },
  created() {
  },
  mounted() {
    let test = this.$refs.test
    test.style['-webkit-transform'] = 'translate(-50%, -50%)'
  }
}
</script>
