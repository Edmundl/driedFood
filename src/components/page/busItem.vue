<template>
  <div class="airportItem routerClass">
    <div class="bar">
      <div class="toDes elipsis" @click="clickDes" :class="toDes[flag]">去往{{lineInfo.toDesDirec}}</div>
      <div class="toAirport elipsis" @click="clickAirport" :class="toAirport[flag]">去往首都机场</div>
    </div>
    <div v-show="flag === 0">
      <Container :iconUrl="timepng" title="运行时间">
        <div slot='container-slot' class="page pageTime">
          <span v-show="lineInfo.toDesFirstTime">首班车：{{lineInfo.toDesFirstTime}}&nbsp;&nbsp;&nbsp;</span>
          <span v-show="lineInfo.toDesLastTime">末班车：{{lineInfo.toDesLastTime}}</span>
          <div v-show="lineInfo.toDesRunTime">
            <div v-for="time in lineInfo.toDesRunTime" :key="time.id">{{time}}</div>
          </div>
        </div>
      </Container>
      <Container :iconUrl="clockpng" title="发车间隔" v-if="lineInfo.intervalTime">
        <div slot='container-slot' class="page pageTime">
          <div>{{lineInfo.intervalTime}}</div>
        </div>
      </Container>
      <Container :iconUrl="iconRoute" title="行驶路线">
        <div slot='container-slot' class="page line">
          <timelineUme :lineRoute="lineInfo.toDesArr"></timelineUme>
        </div>
      </Container>
    </div>
    <div v-show="flag === 1">
      <Container :iconUrl="timepng" title="运行时间">
        <div slot='container-slot' class="page pageTime">
          <span v-show="lineInfo.toAirportFirstTime">首班车：{{lineInfo.toAirportFirstTime}}&nbsp;&nbsp;&nbsp;</span>
          <span v-show="lineInfo.toAirportLastTime">末班车：{{lineInfo.toAirportLastTime}}</span>
          <div v-show="lineInfo.toAirRunTime">
            <div v-for="time in lineInfo.toAirRunTime" :key="time.id">{{time}}</div>
          </div>
        </div>
      </Container>
      <Container :iconUrl="clockpng" title="发车间隔" v-if="lineInfo.intervalTime">
        <div slot='container-slot' class="page pageTime">
          <div>{{lineInfo.intervalTime}}</div>
        </div>
      </Container>
      <Container :iconUrl="iconRoute" title="行驶路线">
        <div slot='container-slot' class="page line">
          <timelineUme :lineRoute="lineInfo.toAirportArr"></timelineUme>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../common/container'
import timelineUme from '../common/timelineUme'
import numList from '../../data/cityBusData.js'
import timepng from '../../assets/img/time.png'
import clockpng from '../../assets/img/clock.png'
import iconRoute from '../../assets/img/route.png'
export default {
  name: 'airportItem',
  data () {
    return {
      lineInfo: [],
      flag: 0,
      toDes: ['active', ''],
      toAirport: ['', 'active'],
      timepng: timepng,
      clockpng: clockpng,
      iconRoute: iconRoute
    }
  },
  watch: {
    '$route' (to, from) {
      var theme = this.$route.query.theme
      this.lineInfo = numList[theme]
    }
  },
  mounted () {
    var theme = this.$route.query.theme
    this.lineInfo = numList[theme]
  },
  methods: {
    clickDes: function () {
      this.flag = 0
    },
    clickAirport: function () {
      this.flag = 1
    }
  },
  components: {
    Container,
    timelineUme
  }
}
</script>

<style>
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
  .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding: 0 0 0 3.75rem;
  }
  .pageTime {
    padding: 1.3rem 1rem 1.3rem 3.75rem;
    font-size:1.0625rem;
    color: #5e5e5e;
    line-height: 1.5rem;
  }
  .line {
    font-size: 1.0625rem;
    color: #5e5e5e;
    padding: 1.5rem 0 0 0;
  }
</style>
