<style scoped>
  .page{
    background: #ffffff;
    font-size: 1.0625rem;
    padding: 0.625rem 1.5rem 1.5rem 3.75rem;
    color:#5e5e5e;
  }

  .page div{
     padding:0.3rem 0rem 0.3rem 0;
  }

  .stardar,div span{
      color:#858585;
  }

  .page p{
    line-height:3rem;
  }

</style>

<template>
  <div>
    <div class='banner'><img :src='banner' style='width:100%'></div>
    <Container :iconUrl="icon" title="乘坐位置">
        <div slot='container-slot' class="page">
            <p>T1航站楼：一层1号门外外车道</p>
            <p>T2航站楼：一层5-9号门外中车道</p>
            <p>T3航站楼：B1层出租车候车区（请参照航站楼内指示牌）</p>
        </div>
    </Container>

    <Container :iconUrl="money" title="收费标准">
      <div slot='container-slot' class="page">
         <div>基本标准：</div>
         <div class='stardar'>3公里以内收费13元，基本单价2.3元/公里；23：00(含)至次日5：00(不含)运营时，每公里租价加收20%费用。</div>
         <div>燃油附加费：<span class='addition'>每运次1元</span></div>
         <div>低速行驶和等候费：</div>
         <div class='stardar'>时速低于12公里时，每5分钟早晚高峰期间7:00（含）-9:00（不含），17:00（含）-19:00 （不含）加收2公里租价（不含空驶费），其他时段加收1公里租价（不含空驶费）。</div>
         <div>预约叫车服务费：</div>
         <div class='stardar'>提前4小时以上预约每次6元，4小时以内预约每次5元。</div>
         <div>空驶费：</div>
         <div class='stardar'>单程载客15公里以上部分，每公里租价加收50%费用；</div>
         <div class='stardar'>往返载客(即起点和终点在2公里（含）范围以内)不加收空驶费。</div>
         <div style='font-size:0.875rem'><span style='color:red'>*</span>上述内容仅供参考，以出租车管理部门的实际规定为准</div>
      </div>
    </Container>

    <Container :iconUrl="tip" title="温馨提示">
        <div slot='container-slot' class="page">
           <div>乘坐出租车注意事项：</div>
           <div class='stardar'>1. 您在乘坐出租车中，过路费、过桥费由您负担；</div>
           <div class='stardar'>2. 在您所乘坐的出租车车窗两侧应贴有收费标准收费办法和出租车汽车驾驶员服务监督卡；</div>
           <div class='stardar'>3. 下车时敬请您向司机索要发票，需要时可记住所乘坐出租车的车牌号；</div>
           <div class='stardar'>4. 在首都机场乘车时，请您到出租车站乘坐正规的出租车，下车时请您携带好随身物品。</div>
        </div>
    </Container>

    <Container :iconUrl="tel" title="联系电话">
       <div slot='container-slot' class="page">
           <div>机场统一出租车调度管理电话：</div>
           <div class='stardar'><a href="tel:010-64558892">010-64558892</a></div>
        </div>
    </Container>
  </div>

</template>

<script>
import Container from '../common/container';
import banner from '../../assets/img/taxiBanner.png';
import iconPath from '../../assets/img/icon.png';
import tel from '../../assets/img/phone.png';
import tip from '../../assets/img/alert.png';
import money from '../../assets/img/money.png';

export default {
    data() {
            return {
              icon: iconPath,
              tel: tel,
              tip:tip,
              banner:banner,
              money:money,
            }
        },
        components: {
          Container
        },
        mounted:function(){
            this.$nextTick(function(){
                document.title='出租车';
            })
        }
}

</script>
