<style scoped>
  .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding: 0.625rem 0 1.5rem 3.75rem;
  }

  .page p{
    line-height:3rem;
  }

  .line {
    font-size: 1.0625rem;
    color: #5e5e5e;
    padding: 1.5rem 0 0 0;
  }
</style>

<template>
  <div>
    <div class='banner'><img :src='banner' style='width:100%'></div>
    <Container :iconUrl="time" title="运行时间">
      <div slot='container-slot' class="page">
          <p>T2航站楼： 6:35-23:10</p>
          <p>T3航站楼： 6:20-22:50</p>
          <p>T3航站楼： 6:20-22:50</p>
      </div>
    </Container>

    <Container :iconUrl="clock" title="发车间隔">
      <div slot='container-slot' class="page">
        10分钟
      </div>
    </Container>

    <Container :iconUrl="route" title="行驶路线及票价">
        <div slot='container-slot' class="page line">
          <timelineUme :lineRoute="lineInfo.toDesArr"></timelineUme>
        </div>
    </Container>

    <Container :iconUrl="icon" title="乘坐位置">
       <div class="page" slot='container-slot'>
          <p>T2航站楼：2号停车楼地下二层</p>
          <p>T3航站楼：3号停车楼二层</p>
      </div>
    </Container>
  </div>

</template>

<script>
import Container from '../common/container';
import timelineUme from '../common/timelineUme'
import iconPath from '../../assets/img/icon.png';
import banner from '../../assets/img/tube.png';
import route from '../../assets/img/route.png';
import clock from '../../assets/img/clock.png';
import time from '../../assets/img/time.png';
import data from '../../data/subway.js';

export default {
    data() {
            return {
              icon: iconPath,
              banner:banner,
              clock: clock,
              time:time,
              route:route,
              lineInfo:data
            }
        },
        components: {
          Container,
          timelineUme
        },
        mounted:function(){
            this.$nextTick(function(){
                document.title='地铁';
            })
        }
}

</script>