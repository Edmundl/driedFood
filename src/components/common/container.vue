<style scoped>
  .container-gap{
    margin-bottom: 0.47rem;
  }
  .container-main{
    position: relative;
    left: 0;
    top: 0;
    padding: 0 0 0 3.75rem;
    background: #ffffff;
  }
  .container-icon{
    width: 1.38rem;
    position: absolute;
    top: 50%;
    left: 1.1rem;
    transform: translate(0,-50%);
  }
  .container-title{
    border-bottom: 0.08rem solid #e6e6e6;
    box-sizing: border-box;
    text-align: left;
    font-size: 1.125rem;
    color: #5e5e5e;
    height: 3.38rem;
    line-height: 3.38rem;
  }

</style>

<template>
  <div class="container-gap">
    <div class="container-main">
      <img class="container-icon" :src="iconUrl" :alt="iconUrl">
      <div class="container-title">{{title}}</div>
    </div>
    <slot name="container-slot"></slot>
  </div>
</template>

<script>

export default {
  name: 'container',
  props: {
      title: {
          validator (value) {
              return value
          }
      },
      iconUrl: {
        validator (value) {
            return value
        }
      }
    }

}
</script>
