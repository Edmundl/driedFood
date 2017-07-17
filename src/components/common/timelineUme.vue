<template>
  <div class="timelineUme">
    <ul class="ume-timeline">
      <li v-for="(item,index) in lineRoute" class="ume-timeline-item">
        <div v-show="index < lineRoute.length - 1" class="ume-timeline-item-tail"></div>
        <div class="ume-timeline-item-head" :class="cal(index)"></div>
        <div class="ume-timeline-item-content">
          <div class="ume-timeline-each" :class="bottom(index)">
            <span class="ume-content">{{item.platform}}</span>
            <span v-show="item.price" class="ume-money">{{item.price}}</span>
            <span v-show="item.tip" class="ume-tip">{{item.tip}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'timelineUme',
  props: {
    lineRoute: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  methods: {
    cal (index) {
      let len = this.lineRoute.length;
      console.log(len)
      if (index === 0) {
        return 'greenCircle'
      } else if (index === len - 1) {
        return 'redCircle'
      } else {
        return 'green'
      }
    },
    bottom (index) {
      let len =  this.lineRoute.length;
      if (index === len - 1) {
        return 'last'
      }
    }
  }
}
</script>

<style>
.ume-timeline {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ume-timeline-item {
  margin: 0 !important;
  padding: 0 0 0.75rem 0;
  list-style: none;
  position: relative; 
}
.ume-timeline-item-tail {
  height: 100%;
  border-left: 1px solid #19be6b;
  position: absolute;
  left: 1.835rem;
  top: 0;
}
.ume-timeline-item-head {
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  border: 1px solid transparent;
  position: absolute;
  left: 1.43rem;
}
.greenCircle {
  border-color: #19be6b;
  color: #19be6b;
  background-color: #fff;  
}
.green {
  border-color: #19be6b;
  color: #19be6b;
  background-color: #19be6b;
}
.redCircle {
  border-color: #ff8686;
  background-color: #fff;   
}
.ume-timeline-item-content {
  padding: 1px 1px 0 3.75rem;
  position: relative;
  top: -0.19rem;
}

.ume-timeline-each{
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #e6e6e6;
}
.last {
  border-bottom: none;
  padding-bottom: 0;
}
.ume-money {
  position: absolute;
  right: 1.5rem;
  top: 0;
}
.ume-tip {
  position: absolute;
  left: 11rem;
  top: 0.11rem;
}
</style>
