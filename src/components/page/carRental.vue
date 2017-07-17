<style scoped>
 .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding: 0.625rem 1rem 1.5rem 3.75rem;
  }

  .page p{
    line-height:3rem;
  }

  .carRentalTip {
    width: 100%;
    box-sizing: border-box;
    padding: 0.375rem 1.1rem 0.44rem 1.1rem;
    font-size: 0.94rem;
    color: #858585;
    line-height: 1.25rem;
  }

  .carRentalTimePage {
    padding: 1.2rem 1.1rem 1.2rem 3.75rem;
  }
</style>

<template>
  <div>
    <div class="carRentalTip">
      首都机场的汽车租赁柜台可提供商务长期租车、商务短期用车、旅游用车、庆典及大型活动用车、个人租车等服务。
    </div>
    <Container :iconUrl="icon" title="乘坐位置">
      <div slot='container-slot' class="page">
          <p>2号航站楼：一层到达大厅中央区（神州租车）</p>
          <p>2号停车楼：一层到达大厅中央区（神州租车）</p>
          <p>3号航站楼：一层汽车租赁体验厅（神州租车、首汽租车、一嗨租车）</p>
      </div>
    </Container>

    <Container :iconUrl="timepng" title="运行时间">
      <div slot='container-slot' class="page carRentalTimePage">
        每天 08:00 ~ 22:00
      </div>
    </Container>
  </div>

</template>

<script>
import Container from '../common/container';
import iconPath from '../../assets/img/icon.png';
import timepng from '../../assets/img/time.png'

export default {
    data() {
            return {
              icon: iconPath,
              timepng: timepng
            }
        },
        components: {
          Container
        },
        mounted:function(){
            this.$nextTick(function(){
                document.title='汽车租赁';
            })
        }
}

</script>
