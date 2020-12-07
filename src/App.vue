<template>
<<<<<<< HEAD
  <div id="container" style="height:100%; width: 100%;">
    <router-view></router-view>
=======
  <div id="container" style="height:100%;">
    <keep-alive >
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
>>>>>>> e3944b30158d375b21d14fec10949a875a7c495c
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}
</script>
