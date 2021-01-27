<template>
  <div class="container">
    promise学习
  </div>
</template>

<script>
  export default {
      data() {
          return {}
      },
      mounted() {
          // this.testA()
          // 1、Promise的基本了解和使用
          // this.promiseA()
          // 2、Promise的静态方法还可以串联
          // this.promiseB()
          // 3、Promise.all
          // this.promiseC()
          // 4、Promise.race
          // this.promiseD()
          // 5、Promise.finally
          // this.promiseE()
          // 6、async
          // const result = this.fn1()
          // console.log(result)
          // 7、async函数使用.then来进行回调，并抛出错误，执行 onRejected() 且 reason 为错误信息为“我是错误”
          // this.fn2().then(
          //     value => { console.log('onResolved()', value) },
          //     reason => { console.log('onRejected()', reason) } // onRejected() 我是错误
          // )
          // 8、await表达式
          // this.fn5()
          // 9、await 必须写在 async 函数中, 但 async 函数中可以没有 await，如果 await 的 Promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理。
          // this.fn7()
          // 10、await和async例子
          // this.useTest()
          // 11、await和async例子
          // this.useTest2()
          this.aaa()
      },
      methods: {
          testA() {
              setTimeout(function () {
                  // 这个函数就是callback回调函数
                  console.log('setTimeout回调函数')
              }, 1000)
          },
          // 1、Promise的基本了解和使用
          promiseA() {
              // 之前说到在未决阶段拥有将事情推向已决阶段的能力
              // 所以这个函数参数又接收系统丢过来的resolve和reject参数用来手动将状态推向已决
              var myPromise = new Promise((resolve, reject) => {
                  /*
                  这个函数中的代码会立即执行, 所以ajax请求等异步操作可以放在这儿
                  我们也称这个函数为未决阶段
                  通过调用resolve函数将Promise推向已决的resolved状态
                  通过调用rejected将Promise推向已决的rejected状态
                  resolve和reject都可以传递最多一个参数, 表示推向状态的数据
                  */
                  // 执行完resolve就跳出函数了，不会执行reject了
                  // resolve('resolveDa/**/ta');
                  reject('rejectData');
              })

              console.log(myPromise); // 看看Promise实例

              myPromise.then(result => {
                  console.log('result:', result)
                  /*
                  这是thenable函数, 如果当前的Promise已经是resolved状态, 该函数会立即执行,
                  如果当前是未决状态, 则会加入作业队列, 等待Promise状态变为resolved会立即执行
                  */
              }).catch(err => {
                  console.log('err:', err)
              })
          },
          // 2、Promise的静态方法还可以串联
          promiseB() {
              // const myPromise = new Promise((resolve, reject) => {
              //     resolve('helloWorld');
              // })
              //
              // myPromise.then(resp => {
              //     console.log(resp); // 这个后续处理没出错, 所以下面的then会拿到这个处理函数的返回值
              //     return 1;
              // }).then(resp => {
              //     // 这是上一个Promise的then方法返回的新的Promise
              //     console.log(resp); // 输出1
              // })
              //
              const myPromise2 = new Promise((resolve, reject) => {
                  reject('helloWorld reject');
              })

              myPromise2.then(resp => {
                  console.log('helloWorld');
                  // 上方触发了reject, 这里却没有相对应的处理catchable函数
                  // 所以会将错误直接抛给下一个Promise并触发下一个Promise的rejected状态
              }).catch(error => {
                  console.log('error:', error);
                  // return new Promise((resolve, reject) => {
                  //     resolve('helloWorld reject');
                  // });
                  return 1;
              }).then(res => {
                  console.log('test:', res)
              })
          },
          // 3、Promise.all
          promiseC() {
              // 我们拿之前小明向多个女神表白的案例来说
              const getGirlResponse = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve(Math.random() > 0.5 ? '1同意了' : '1拒绝表白');
                      // reject(Math.random() > 0.5 ? '1同意了' : '1拒绝表白');
                  }, 1000)
              })

              const getSecGirlResponse = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve(Math.random() > 0.5 ? '2同意了' : '2拒绝表白');
                      // reject(Math.random() > 0.5 ? '2同意了' : '2拒绝表白');
                  }, 1000)
              })

              const getTrdGirlResponse = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      // resolve(Math.random() > 0.5 ? '3同意了' : '3拒绝表白');
                      reject(Math.random() > 0.5 ? '3同意了' : '3拒绝表白');
                  }, 1000)
              })

              // 我们将三个女神相关的Promise实例放进一个数组, 作为Promise.all的参数(参数必须是个数组)
              // 1.如果有一个没有回复（不论是resolve还是reject），就不会收到结果
              // 2.[getGirlResponse, getSecGirlResponse, getTrdGirlResponse]按顺序执行，如果有一个reject，直接返回出来，结果进去catch
              // 3.[getGirlResponse, getSecGirlResponse, getTrdGirlResponse]按顺序执行，三个都返回resolve，进入then，并将数据按照数组返回
              Promise.all([getGirlResponse, getSecGirlResponse, getTrdGirlResponse]).then(resp => {
                  console.log('then:', resp);
              }).catch(error => {
                  console.log('catch:', error);
              })
          },
          // 4、Promise.race
          promiseD() {
              const P1 = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve('test1')
                      // reject()
                  }, 3000)
              })
              const P2 = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve('test2')
                      // reject()
                  }, 5000)
              })
              const P3 = new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve('test3')
                      // reject()
                  }, 1500)
              })
              Promise.race([P1, P2, P3])
                  .then(res => {
                      console.log(res);
                  })
                  .catch(err => {
                      console.log(err, 'Promise.race错啦');
                  })
          },
          // 5、Promise.finally
          // promiseE() {
          //     const P1 = new Promise((resolve, reject) => {
          //         resolve('test1')
          //         // reject('11')
          //     })
          //     P1.then(res => console.log(res))
          //         .catch(err => console.log(err))
          //         .finally(() => {
          //             console.log('finally的执行与状态无关')
          //         });
          // },
          // 6、async
          async fn1() {
              // return 1
          },
          // 7、async函数使用.then来进行回调，并抛出错误，执行 onRejected() 且 reason 为错误信息为“我是错误”
          async fn2() {
              // 直接return值和return Promise.resolve(1)结果一致，都进入到value中
              // return 1
              // return Promise.resolve(1)
              // return Promise.reject(2)和throw的效果一致，都进入到reason中
              // return Promise.reject(2)
              throw '我是错误'
          },
          // 8、await表达式
          fn3() {
              return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      resolve(5000)
                  }, 5000);
              })
          },
          fn4() {
              return 6
          },
          async fn5() {
              const value = await this.fn3() // await 右侧表达式为Promise，得到的结果就是Promise成功的value
              console.log('value', value)
              const value2 = await '还可以这样'
              const value3 = await this.fn4()
              console.log(value2)
              console.log(value3)
          },
          // 9、await 必须写在 async 函数中, 但 async 函数中可以没有 await，如果 await 的 Promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理。
          fn6() {
              return new Promise((resolve, reject) => {
                  setTimeout(() => {
                      // resolve(1000)
                      reject(1000)
                  }, 1000);
              })
          },
          async fn7() {
              try {
                  const value = await this.fn6()
                  console.log('成功的结果：', value)
              } catch (error) {
                  console.log('失败的结果：', error)
              }
          },
          // 10、await和async
          test1() {
              return new Promise((resolve, reject) => {
                  console.log('test1')
                  // 不写resolve或者reject就会阻塞;reject之后不会进入正常流程会进入catch中
                  resolve('成功返回')
                  // reject('失败返回')
              })
          },
          async useTest() {
              // 如果不写async，那await就会报错
              this.test1().then(res => {
                  console.log(res)
              })
              console.log(111)
          },
          // 11、await和async执行
          test2() {
              return new Promise((resolve) => {
                  setTimeout(() => {
                      console.log(3000)
                      resolve()
                  }, 3000)
              })
          },
          test3() {
              return new Promise((resolve) => {
                  setTimeout(() => {
                      console.log(1000)
                      resolve()
                  }, 1000)
              })
          },
          async useTest2() {
              // test2方法明明比test3方法慢，却现输出
              await this.test2()
              await this.test3()
              // 同时执行
              // this.test2()
              // this.test3()
              // 解决调接口是需要等上一个接口的数据回来后，使用调用下一个接口的情况
          },
          async aaa() {
              await this.test2()
              let self = this
              async function a() {
                  console.log('fdsfd')
                  await self.test3()
              }
              await a()
          }
      }
  }
</script>

<style scoped>
.container {
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
</style>
