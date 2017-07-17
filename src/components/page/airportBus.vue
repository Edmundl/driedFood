<style scoped>
  .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding: 0 0 0 3.75rem;
    color: #5e5e5e;    
  }
  .page_item {
    position: relative;
    height: 3.375rem;
    line-height: 3.375rem;
    box-sizing: border-box;
  }
  .pageContent .page_item {
    border-bottom: 0.08rem solid #e6e6e6;
  }
  .pageContent .page_item:last-child {
    border-bottom: none;
  }
  .pageLocation .pageLocation_item {
    height: 2.5rem;
    line-height: 4.2rem;
  }
  .pageLocation .pageLocation_item:last-child {
    height: 4rem;
  }
  .rightIcon {
    right: 1rem;
    width: 0.65rem;
  }
  .tip {
    width: 100%;
    box-sizing: border-box;
    border-top: 0.08rem solid #e6e6e6;
    margin-top: -0.47rem;
    background: #fff;
    margin-bottom: 0.47rem;
    padding: 1rem 1rem 1rem 3.75rem;
    line-height: 1.2rem;
    color: #5e5e5e;
  }
</style>

<template>
  <div>
    <Container :iconUrl="iconRoute" title="线路信息">
      <div slot='container-slot' class="page pageContent">
        <div class="page_item" v-for="item in list" @click="itemRouter(item)">
          <div>{{item.lineName}}</div>
          <img :src="iconRight" class="rightIcon vertical_center">
        </div>
      </div>
    </Container>
    <div class="tip" style='font-size:0.875rem'><span style='color:red'>* </span>备注：空港巴士线路、站点、时刻的调整以北京空港开远有限公司公布信息为准。乘车欢迎使用市政交通一卡通。</div>

    <Container :iconUrl="icon" title="乘坐位置">
      <div slot='container-slot' class="page pageLocation">
        <div class="pageLocation_item" v-for="item in locationList">
          <div>{{item.location}}</div>
        </div>
      </div>
    </Container>
  </div>

</template>

<script>
import Container from '../common/container';
import iconPath from '../../assets/img/icon.png';
import iconRoute from '../../assets/img/route.png';
import rightArrow from '../../assets/img/rightArrow.png';

import numList from '../../data/airportBus.js';

export default {
  data() {
    return {
      icon: iconPath,
      iconRoute: iconRoute,
      iconRight: rightArrow,
      list: [],
      locationList: []
    }
  },
  mounted () {
    this.list = numList.airportBusList
    this.locationList = numList.locationList
    this.$nextTick(function(){
        document.title='空港巴士';
    })
  },
  methods: {
    itemRouter: function (item) {
      this.$router.push({path: '/airportItem', query: { theme: item.name }})
    }
  },
  components: {
    Container
  }
}
</script>
