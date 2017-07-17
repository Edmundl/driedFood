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
    font-size: 1.0625rem;
  }
  .pageLocation .pageLocation_item:last-child {
    height: 4rem;
  }
  .rightIcon {
    right: 1rem;
    width: 0.65rem;
  }
  .alert{
    padding: 0.5rem 1.25rem 1.0625rem 3.75rem;
    line-height: 1.4375rem;
    font-size: 1.0625rem;
  }
  .text1{
    padding-top:0.78rem ;
  }
  .phone{
    padding-top: 1.375rem;
    padding-bottom: 2.375rem;
    font-size: 1.0625rem;
  }
  .phoneContent>div{
    color:#858585;
    line-height: 0.9375rem;
    padding-top: 0.78rem;
  }
  .bar {
    position: relative;
    background: #fff;
    width: 100%;
    height: 2.87rem;
  }
  .toDes,.toAirport{
    position: absolute;
    width: 40%;
    height: 2.87rem;
    line-height: 2.87rem;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.0625rem;
    color: #858585;
  }
  .toDes {
    left: 1.5rem;
  }
  .toAirport {
    right: 1.5rem;
  }
  .toDes.active,.toAirport.active {
    border-bottom: 0.2rem solid #4fad31;
    color: #4fad31;
  }
</style>

<template>
  <div>
    <div class='banner'><img :src='banner' style='width:100%'></div>

    <div class="bar">
      <div class="toDes elipsis" @click="clickDes" :class="toDes[flag]">市内机场巴士</div>
      <div class="toAirport elipsis" @click="clickAirport" :class="toAirport[flag]">省际机场巴士</div>
    </div>
    
    <div v-show="flag === 0">
      <Container :iconUrl="icon" title="购票位置">
        <div slot='container-slot' class="page pageLocation">
          <div class="pageLocation_item" v-for="item in buyPosList">
            <div>{{item}}</div>
          </div>
        </div>
      </Container>

      <Container :iconUrl="iconRoute" title="线路信息">
        <div slot='container-slot' class="page pageContent">
          <div class="page_item" v-for="item in list" @click="itemRouter(item)">
            <div>{{item.lineName}}</div>
            <img :src="iconRight" class="rightIcon vertical_center">
          </div>
        </div>
      </Container>
   
      <Container :iconUrl="iconAlert" title="温馨提示">
        <div slot='container-slot' class="page pageLocation alert">
          <div class="text1" v-for="item in alert">
            <div>{{item}}</div>
          </div>
        </div>
      </Container>

      <Container :iconUrl="iconPhone" title="联系电话">
        <div slot='container-slot' class="page pageContent phone">
        市内机场巴士服务热线:
          <div class="pageLocation_item phoneContent" v-for="item in cityPhoneList">
            <div><a :href=tel+item>{{item}}</a></div>
          </div>
        </div>
      </Container>
    </div>

    <div v-show="flag === 1">
      <Container :iconUrl="icon" title="购票位置">
        <div slot='container-slot' class="page pageLocation">
          <div class="pageLocation_item" v-for="item in buyPosList">
            <div>{{item}}</div>
          </div>
        </div>
      </Container>

      <Container :iconUrl="iconRoute" title="线路信息">
        <div slot='container-slot' class="page pageContent">
          <div class="page_item" v-for="item in list" @click="provinItemRouter(item)">
            <div>{{item.lineName}}</div>
            <img :src="iconRight" class="rightIcon vertical_center">
          </div>
        </div>
      </Container>
   
      <Container :iconUrl="iconAlert" title="温馨提示">
        <div slot='container-slot' class="page pageLocation alert">
          <div class="text1" v-for="item in alert">
            <div>{{item}}</div>
          </div>
        </div>
      </Container>

      <Container :iconUrl="iconPhone" title="联系电话">
        <div slot='container-slot' class="page pageContent phone">
        市内机场巴士服务热线:
          <div class="pageLocation_item phoneContent" v-for="item in cityPhoneList">
            <div><a :href=tel+item>{{item}}</a></div>
          </div>
        </div>
      </Container>
    </div>
  </div>

</template>

<script>
import Container from '../common/container';
import iconPath from '../../assets/img/icon.png';
import iconAlert from '../../assets/img/alert.png';
import iconPhone from '../../assets/img/phone.png';
import iconRoute from '../../assets/img/route.png';
import rightArrow from '../../assets/img/rightArrow.png';
import banner from '../../assets/img/BusBanner.png';

import numList from '../../data/cityBusData.js';
import proDataList from '../../data/interProvincialData.js';

export default {
    data() {
      return {
        icon: iconPath,
        iconRoute: iconRoute,
        iconAlert: iconAlert,
        iconPhone: iconPhone,
        iconRight: rightArrow,
        banner:banner,
        list:[],
        toDes: ['active', ''],
        toAirport: ['', 'active'],
        buyPosList:[],
        cityPhoneList:[],
        locationList:[],
        alert:[],
        flag: 0,
        tel:'tel:',
        barChoose: [[],[]],
      }
    },
    watch: {
      flag(oldVal,Val){
        this.buyPosList = this.barChoose[this.flag].buyPosList;
        this.cityPhoneList = this.barChoose[this.flag].cityPhoneList;
        this.list = this.barChoose[this.flag].cityBusList;
        this.alert = this.barChoose[this.flag].alert;
      }
    },
    mounted(){
      this.$nextTick(function(){
        document.title='机场巴士';
        this.barChoose[0] = numList;
        this.barChoose[1] = proDataList;
        this.buyPosList = numList.buyPosList;
        this.cityPhoneList = numList.cityPhoneList;
        this.list = numList.cityBusList;
        this.alert = numList.alert;
      })
    },
    methods: {
      itemRouter: function (item) {
        this.$router.push({path: '/busItem', query: { theme: item.name }})
      },
      provinItemRouter: function (item) {
        this.$router.push({path: '/provinBusItem', query: { theme: item.name }})
      },
      clickDes: function () {
        this.flag = 0
      },
      clickAirport: function () {
        this.flag = 1
      }
    },
    components: {
      Container
    },
}

</script>
