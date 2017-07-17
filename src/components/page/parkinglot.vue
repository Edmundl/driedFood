<style scoped>
.page{
  background: #ffffff;
  font-size: 1.0625rem;
  padding: 0 0 0 3.75rem;
}
.pageContent{
  padding:1rem 1rem 1rem 0;
}
.pageContent p {
  margin-bottom: 1rem;
}
.payContent{
  width: 86%;
  border: #53ab3a 1.5px solid;
  border-radius: 6px;
  padding: 0rem 0rem 1rem 0rem;
  box-sizing: border-box;
}
.payLabel{
  margin-right: 1.8rem;
  margin-left: 1.5rem;
}
.payLabel-half{
  margin-right: 0.8rem;
  margin-left: 1.5rem;
}
.payInput{
  display: inline-block;
  width: 9rem;
}
.payContentItem{
  margin-top: 1.5rem;
}
.payContentBlock{
  display: flex;
  display: -webkit-flex;
  text-align: center;
  font-size: .88rem;
}
.payContentBlockColumn{
   flex-direction:column;
   text-align: left;
   padding: 1rem;
}
.payContentBlockItem{
  flex:1;
  -webkit-flex:1;
  border: #53ab3a 1px solid;

}
.payContentBlockLeft{
  margin-left: -0.5px;
}
.payContentBlockRight{
  margin-right: -0.5px;
}
.textMiddle{
  line-height: 4.5rem;
}
</style>

<template>
  <Tabs value="name1">
        <Tab-pane label="T1航站楼" name="name1">
          <Container :iconUrl="icon" title="停车场">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <p>1号停车场:&nbsp;&nbsp;位于首都机场1号航站楼南侧</p>
                <p>5号停车场:&nbsp;&nbsp;位于首都机场1号航站楼西南侧,紧邻1号停车场</p>
              </div>
            </div>
          </Container>

          <Container :iconUrl="icon2" title="收费标准">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentItem">
                    <span class="payLabel">车型</span>
                    <v-select :on-change="calc1" class="payInput"  :value.sync="cartype1" :options="carTypeList1" ></v-select>
                  </div>

                  <div class="payContentItem">
                    <span class="payLabel">天数</span>
                    <Input class="payInput" v-model="days1" @on-change="calc1" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel-half">小时数</span>
                    <Input class="payInput" v-model="hours1" @on-change="calc1" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel">价格</span>
                    <span  v-model="cartype1">￥{{result1}}</span>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T1航站楼计时停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:right;border-right:0;">车</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;">型</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle">每30分钟</div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>2.5元</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上<div>5元</div></div>
                  </div>

                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、停车不足半小时按半小时计；</div>
                    <div>2、物价监督电话：12358；</div>
                    <div>3、服务单位监督电话：64535811。</div>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T1航站楼长期停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:right;border-right:0;">车</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;">型</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle">每天</div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>80元</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上<div>160元</div></div>
                  </div>

                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、长期停车为连续停放16小时以上车辆；</div>
                    <div>2、首都机场保留优惠价格的解释权和调整权。</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Tab-pane>
        <Tab-pane label="T2航站楼" name="name2">
          <Container :iconUrl="icon" title="停车场">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <p>2号停车楼:&nbsp;&nbsp;位于首都机场2号航站楼前</p>
              </div>
            </div>
          </Container>

          <Container :iconUrl="icon2" title="收费标准">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentItem">
                    <span class="payLabel">车型</span>
                      <v-select :on-change="calc2" class="payInput" :value.sync="cartype2" :options="carTypeList2" ></v-select>
                  </div>

                  <div class="payContentItem">
                    <span class="payLabel">首次</span>
                    <v-select :on-change="calc2" class="payInput" :value.sync="firsttype2" :options="firstTypeList2" ></v-select>
                  </div>

                  <div class="payContentItem">
                    <span class="payLabel">天数</span>
                    <Input class="payInput" v-model="days2" @on-change="calc2" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel-half">小时数</span>
                    <Input class="payInput  payModel" v-model="hours2" @on-change="calc2" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel">价格</span>
                    <span  v-model="cartype2">￥{{result2}}</span>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T2航站楼计时停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem " style="text-align:left;border-right:0;"></div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:center;border-right:0;border-left:0;">车型</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;"></div>
                  </div>


                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle"></div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>首次</div></div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>非首次</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">30分钟以内</div>
                    <div class="payContentBlockItem ">0元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">5元</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">30-60分钟</div>
                    <div class="payContentBlockItem">6元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">5元</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">以后每30分钟</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">10元</div>
                  </div>


                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、停车不足半小时按半小时计；</div>
                    <div>2、物价监督电话：12358；</div>
                    <div>3、服务单位监督电话：64535811。</div>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T2航站楼长期停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:right;border-right:0;">车</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;">型</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle">每天</div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>80元</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上<div>160元</div></div>
                  </div>

                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、长期停车为连续停放8小时以上车辆；</div>
                    <div>2、请您将车辆停放在长期停车区(B2/B3/B4)，计时车区不享受该优惠价格；</div>
                    <div>3、首都机场保留优惠价格的解释权和调整权。</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Tab-pane>
        <Tab-pane label="T3航站楼" name="name3">
          <Container :iconUrl="icon" title="停车场">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <p>3号停车楼:&nbsp;&nbsp;位于首都机场3号航站楼南侧</p>
              </div>
            </div>
          </Container>

          <Container :iconUrl="icon2" title="收费标准">
            <div slot='container-slot' class="page">
              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentItem">
                    <span class="payLabel">车型</span>
                      <v-select :on-change="calc3" class="payInput" :value.sync="cartype3" :options="carTypeList3" ></v-select>
                  </div>

                  <div class="payContentItem">
                    <span class="payLabel">首次</span>
                      <v-select :on-change="calc3" class="payInput"  :value.sync="firsttype3" :options="firstTypeList3" ></v-select>
                  </div>

                  <div class="payContentItem">
                    <span class="payLabel">天数</span>
                    <Input class="payInput" v-model="days3" @on-change="calc3" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel-half">小时数</span>
                    <Input class="payInput  payModel" v-model="hours3" @on-change="calc3" placeholder="" number></Input>
                  </div>
                  <div class="payContentItem">
                    <span class="payLabel">价格</span>
                    <span  v-model="cartype3">￥{{result3}}</span>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T3航站楼计时停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem " style="text-align:left;border-right:0;"></div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:center;border-right:0;border-left:0;">车型</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;"></div>
                  </div>


                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle"></div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>首次</div></div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>非首次</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">30分钟以内</div>
                    <div class="payContentBlockItem ">0元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">5元</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">30-60分钟</div>
                    <div class="payContentBlockItem">6元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">5元</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">以后每30分钟</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem">5元</div>
                    <div class="payContentBlockItem payContentBlockRight">10元</div>
                  </div>


                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、停车不足半小时按半小时计；</div>
                    <div>2、物价监督电话：12358；</div>
                    <div>3、服务单位监督电话：64535811。</div>
                  </div>
                </div>
              </div>

              <div class="pageContent">
                <div class="payContent">
                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft payContentBlockRight">T3航站楼长期停车收费标准</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft">停车时间</div>
                    <div class="payContentBlockItem payContentBlockRight" style="text-align:right;border-right:0;">车</div>
                    <div class="payContentBlockItem " style="text-align:left;border-left:0;">型</div>
                  </div>

                  <div class="payContentBlock">
                    <div class="payContentBlockItem payContentBlockLeft textMiddle">每天</div>
                    <div class="payContentBlockItem">小型车19座以下（含）<div>80元</div></div>
                    <div class="payContentBlockItem payContentBlockRight">大型车19座以上<div>160元</div></div>
                  </div>

                  <div class="payContentBlock  payContentBlockColumn">
                    <div>备注：</div>
                    <div>1、长期停车为连续停放8小时以上车辆；</div>
                    <div>2、请您将车辆停放在长期停车区(A\D\E\H区)，计时车区不享受该优惠价格；</div>
                    <div>3、首都机场保留优惠价格的解释权和调整权。</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Tab-pane>
    </Tabs>


</template>

<script>
import vSelect from 'vue-select'
import Container from '../common/container';
import locationPath from '../../assets/img/icon.png';
import payPath from '../../assets/img/money.png';

export default {
    data() {
            return {
              icon: locationPath,
              icon2: payPath,
              carTypeList1:[
                {label: '小型车', value: '小型车'},
                {label: '大型车', value: '大型车'}
              ],
              cartype1: "小型车",
              days1: 0,
              hours1: 0,
              result1: 0,

              cartype2: "小型车",
              days2: 0,
              hours2: 0,
              result2: 0,
              firsttype2: "非首次",

              carTypeList2:[
                {label: '小型车', value: '小型车'},
                {label: '大型车', value: '大型车'}
              ],
              firstTypeList2:[
                {label: '非首次', value: '非首次'},
                {label: '首次', value: '首次'}
              ],

              cartype3: "小型车",
              days3: 0,
              hours3: 0,
              result3: 0,
              firsttype3: "非首次",

              carTypeList3:[
                {label: '小型车', value: '小型车'},
                {label: '大型车', value: '大型车'}
              ],
              firstTypeList3:[
                {label: '非首次', value: '非首次'},
                {label: '首次', value: '首次'}
              ]

            }
        },
        components: {
          Container,
          vSelect
        },
        mounted () {
          this.$nextTick(function(){
              document.title='停车场';
          })
        },
        methods: {
          formateHour:function (h) {
            // let h = h.toString();
            let result = h;
            if(h.toString().indexOf(".")>-1){
               if(h.toString().split(".")[1]>5){
                 result = Math.ceil(new Number(h));
               }else{
                 result = parseInt(new Number(h))+0.5;
               }
            }
            return result
          },

          calc1: function (val) {
            if(val.value==="小型车"||val.value==="大型车"){
              this.cartype1 = val.value
            }
            if( this.hours1>=24){
              this.days1 = parseInt(this.days1)+parseInt(this.hours1/24)
              this.hours1 = this.hours1%24
            }
              let type = this.cartype1;
              let day = this.days1;
              let hour = this.hours1;
              let result = '';

              if(hour<=16){
                if(type=="大型车"){
                   result = (day*160)+(this.formateHour(hour)*2*5);
                }else{
                   result = (day*80)+(this.formateHour(hour)*2*2.5);
                }
              }else{
                this.hours1 = 0;
                this.days1 = parseInt(this.days1)+1;
                if(type=="大型车"){
                  result = (this.days1+1)*160;
                }else{
                   result = (this.days1+1)*80;
                }
              }
              if(result>0){
                this.result1 = result;
              }else{
                this.result1 = 0;
              }
            },
            calc2: function (val) {
              if(val.value==="非首次"||val.value==="首次"){
                this.firsttype2 = val.value
              }
              if(val.value==="小型车"||val.value==="大型车"){
                this.cartype2 = val.value
              }
              if( this.hours2>=24){
                this.days2 = parseInt(this.days2)+parseInt(this.hours2/24)
                this.hours2 = this.hours2%24
              }
                let type = this.cartype2;
                let firsttype = this.firsttype2;
                let day = this.days2;
                let hour = this.hours2;
                let result = '';
                if(day==0&&hour<=8){
                  if(type=="大型车"){
                    if(hour<1&&hour>=0.5){
                      result =10;
                    }else if(hour<0.5&&hour>0){
                      result =5;
                    }else{
                      result = (day*160)+((this.formateHour(hour)-1)*2*10+10);

                    }
                  }else{
                    if(firsttype=="非首次"){
                      if(hour<1&&hour>=0.5){
                        result =10;
                      }else if(hour<0.5&&hour>0){
                        result =5
                      }else if(hour==0){
                        result=0;
                      }else{
                      result = (day*80)+((this.formateHour(hour))*2*5);
                     }
                    }else{
                      if(hour<1&&hour>=0.5){
                        result = 6;
                      }else if(hour<0.5&&hour>0){
                        result = 0;
                      }else{
                        result = (day*80)+((this.formateHour(hour)-1)*2*5+6);
                      }
                    }
                  }
                }else if(day>0&&hour<=8){
                  if(type=="大型车"){
                    if(hour<1&&hour>=0.5){
                      result =(day*160)+10;
                    }else if(hour<0.5&&hour>0){
                      result =(day*160)+5;
                    }else{
                     result = (day*160)+(this.formateHour(hour)*2*10);
                   }
                  }else{
                    if(firsttype=="非首次"){
                      if(hour<1&&hour>=0.5){
                        result =(day*80)+10;
                      }else if(hour<0.5&&hour>0){
                        result =(day*80)+5;
                      }else{
                      result = (day*80)+(this.formateHour(hour)*2*5);
                     }
                    }else{
                      if(hour<1&&hour>=0.5){
                        result =(day*80)+6;
                      }else if(hour<0.5&&hour>0){
                        result =(day*80);
                      }else{
                        result = (day*80)+(this.formateHour(hour)*2*5);
                      }
                    }
                  }
                }else{
                  this.hours2 = 0;
                  this.days2 = parseInt(this.days2)+1;
                  if(type=="大型车"){
                    result = (this.days2)*160;
                  }else{
                     result = (this.days2)*80;
                  }
                }
                if(result>=0){
                  this.result2 = result;
                }else{
                  this.result2 = 0;
                }
              },
              calc3: function (val) {
                if(val.value==="非首次"||val.value==="首次"){
                  this.firsttype3 = val.value
                }
                if(val.value==="小型车"||val.value==="大型车"){
                  this.cartype3 = val.value
                }
                if( this.hours3>=24){
                  this.days3 = parseInt(this.days3)+parseInt(this.hours3/24)
                  this.hours3 = this.hours3%24
                }
                  let type = this.cartype3;
                  let firsttype = this.firsttype3;
                  let day = this.days3;
                  let hour = this.hours3;
                  let result = '';
                  console.log(type,firsttype,day,hour)
                  if(day==0&&hour<=8){
                    if(type=="大型车"){
                      if(hour<1&&hour>=0.5){
                        result =10;
                      }else if(hour<0.5&&hour>0){
                        result =5;
                      }else if(hour==0){
                        result=0;
                      }else{
                        result = (day*160)+((this.formateHour(hour)-1)*2*10+10);
                      }
                    }else{
                      if(firsttype=="非首次"){
                        if(hour<1&&hour>=0.5){
                          result =10;
                        }else if(hour<0.5&&hour>0){
                          result =5
                        }else if(hour==0){
                          result=0;
                        }else{
                        result = (day*80)+((this.formateHour(hour))*2*5);
                       }
                      }else{
                        if(hour<1&&hour>=0.5){
                          result = 6;
                        }else if(hour<0.5&&hour>0){
                          result = 0;
                        }else{
                          result = (day*80)+((this.formateHour(hour)-1)*2*5+6);
                        }
                      }
                    }
                  }else if(day>0&&hour<=8){
                    if(type=="大型车"){
                      if(hour<1&&hour>=0.5){
                        result =(day*160)+10;
                      }else if(hour<0.5&&hour>0){
                        result =(day*160)+5;
                      }else{
                       result = (day*160)+(this.formateHour(hour)*2*10);
                     }
                    }else{
                      if(firsttype=="非首次"){
                        if(hour<1&&hour>=0.5){
                          result =(day*80)+10;
                        }else if(hour<0.5&&hour>0){
                          result =(day*80)+5;
                        }else{
                        result = (day*80)+(this.formateHour(hour)*2*5);
                       }
                      }else{
                        if(hour<1&&hour>=0.5){
                          result =(day*80)+6;
                        }else if(hour<0.5&&hour>0){
                          result =(day*80);
                        }else{
                          result = (day*80)+(this.formateHour(hour)*2*5);
                        }
                      }
                    }
                  }else{
                    this.hours3 = 0;
                    this.days3 = parseInt(this.days3)+1;
                    if(type=="大型车"){
                      result = (this.days3)*160;
                    }else{
                       result = (this.days3)*80;
                    }
                  }
                  if(result>=0){
                    this.result3 = result;
                  }else{
                    this.result3 = 0;
                  }
                }
          }
}

</script>
