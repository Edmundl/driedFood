<style scoped>
  .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding:0.625rem 0 1.5rem 3.75rem;
  }

  .page p{
    line-height:3rem;
  }

  .banner{
    padding: 1rem 2rem;
    font-size: 1.0625rem;
  }

  .line {
    font-size: 1.0625rem;
    color: #5e5e5e;
    padding: 1.5rem 0 0 0;
  }

  .shuttleTip {
    width: 100%;
    box-sizing: border-box;
    padding: 0.375rem 1.1rem 0.44rem 1.1rem;
    font-size: 0.94rem;
    color: #858585;
    line-height: 1.25rem;
  }
</style>

<template>
  <div>
    <div class='shuttleTip'>如果您需要在各航站楼之间往来，可以乘坐我们为您免费提供的陆侧中转摆渡车</div>
    <Container :iconUrl="time" title="运行时间">
      <div slot='container-slot' class="page">
          <p>06:00 ～ 23:00 ： 不超过10分钟每班</p>
          <p>23:00 ～ 01:00 ： 不超过15分钟一班车</p>
          <p>01:00 ～ 05:00 ： 不超过30分钟一班车</p>
          <p>05:00 ～ 06:00 ： 不超过15分钟一班车</p>
      </div>
    </Container>

    <Container :iconUrl="route" title="行驶路线及票价">
        <div slot='container-slot' class="page line">
          <timelineUme :lineRoute="lineInfo.toDesArr"></timelineUme>
          <div class="page">全程行驶时间约20分钟</div>
        </div>
    </Container>

    <Container :iconUrl="icon" title="乘坐位置">
       <div class="page" slot='container-slot'>
          <p>T1航站楼：一层7号门外</p>
          <p>T2航站楼：一层7号门外</p>
          <p>T3航站楼：到达层5号门</p>
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
import data from '../../data/shuttleBus.js';

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
                document.title='免费摆渡车';
            })
        }
}

</script>

