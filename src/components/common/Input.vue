<style lang="less" scoped>
@import "../../assets/css/base.less";
.inputwrapper {
  padding-left: 0.32rem;
}
.inputItem {
  background: #fff;
  padding: 0.33rem 0.32rem 0.33rem 0;
  line-height: 0.34rem;
  color: @UIColor1;
  display: flex;
  border-bottom: 1px solid @UIColor6;
  .name {
    width: 1.62rem;
    font-size: @UIFontSize4;
  }
  .value {
    height: 100%;
    flex-grow: 1;
    font-size: @UIFontSize5;
  }
  .optional {
    font-size: @UIFontSize5;
    color: @UIColor4;
  }
}
</style>

<template>
  <div class="inputwrapper">
    <div v-if="type==1" class="inputItem">
      <span class="name">{{ name }}</span>
      <input class="value" :placeholder="placeholder" v-model="value" @change="change"/>
    </div>
    <div v-else-if="type==2" class="inputItem">
      <span class="name">{{ name }}</span>
      <div class="value">{{ value }}</div>
      <div @click="$emit('chooseItem')">
        <span class="optional" v-if="optional">选填</span>
        <img class="IconSizeXS" src="../../assets/img/icon-rightArrow.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: '1'
    },
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      temp_value: this.value
    }
  },
  watch: {
    value: function(newVal) {
      this.temp_value = newVal
    }
  },
  methods: {
    change() {
      this.$emit()
    }
  }
}
</script>
