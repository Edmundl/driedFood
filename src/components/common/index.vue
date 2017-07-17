<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
html,body{
  font-family: '黑体';
  background: #f3f3f3;
  -moz-user-select:none;
  -webkit-user-select:none;
  -ms-user-select:none;
  -khtml-user-select:none;
  user-select:none;
}
.grid-line{
  display: flex;
  display: -webkit-flex;
}
.grid-line-item{
  flex:1;
  -webkit-flex:1;
  background: #ffffff;
  padding-bottom: 33%;

  position: relative;
  left: 0;
  top: 0;
}
.grid-line-item{
    border: 1px solid #f3f3f3;
}
.grid-eight{
  border-right-color: #fff!important;
}
.grid-top{
  border-left-color: #fff!important;
}
.router-icon{
  width: 2.5rem;
  position: absolute;
  left: 50%;
  top: 45%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
}
.router-title{
  width: 100%;
  position: absolute;
  left: 50%;
  top: 82%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  font-size: 1rem;
  color: #646464;
  font-weight: 400;
  text-align: center;
}
</style>
<template>
  <div>
    <div class="grid-line">
      <router-link class="grid-line-item" to="/taxi">
        <img class="router-icon" src="../../assets/img/taxi.png" alt="taxi">
        <h5 class="router-title">出租车</h5>
      </router-link>

      <router-link class="grid-line-item" to="/bus">
        <img class="router-icon" src="../../assets/img/bus.png" alt="bus">
        <h5 class="router-title">机场巴士</h5>
      </router-link>

      <router-link class="grid-line-item" to="/subway">
        <img class="router-icon" src="../../assets/img/subway.png" alt="subway">
        <h5 class="router-title">地铁</h5>
      </router-link>

    </div>
    <div class="grid-line">
      <router-link class="grid-line-item" to="/parkinglot">
        <img class="router-icon" src="../../assets/img/parkinglot.png" alt="parkinglot">
        <h5 class="router-title">停车场</h5>
      </router-link>

      <router-link class="grid-line-item" to="/shuttleBus">
        <img class="router-icon" src="../../assets/img/shuttleBus.png" alt="shuttleBus">
        <h5 class="router-title">免费摆渡车</h5>
      </router-link>

      <router-link class="grid-line-item" to="/carRental">
        <img class="router-icon" src="../../assets/img/carRental.png" alt="carRental">
        <h5 class="router-title">汽车租赁</h5>
      </router-link>

    </div>
    <div class="grid-line">
      <router-link class="grid-line-item" to="/airportBus">
        <img class="router-icon" src="../../assets/img/airportBus.png" alt="airportBus">
        <h5 class="router-title">空港巴士</h5>
      </router-link>

      <div class="grid-line-item grid-eight"></div>
      <div class="grid-line-item grid-nine"></div>
    </div>
  </div>
</template>

<script>
  import busImg from '../../assets/img/bus.png';
  export default {
      mounted:function(){
          this.$nextTick(function(){
              document.title='机场交通';
          })
      }
  }

</script>
