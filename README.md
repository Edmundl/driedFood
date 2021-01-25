****__笔记
https://blog.csdn.net/weixin_44238796/article/details/103159716
同步：就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；
异步：每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。
function a() {
    console.log(111);
}
function b() {
    console.log(222);
}

1. 过去操作异步任务的缺陷
在es6的Promise出来之前, 我们大多数时候是在使用回调函数(callback)和事件来处理一些异步问题
    1. 事件: 某个对象的属性是一个函数, 当发生一件事时, 运行该函数
        var div = document.querySelector('#app');
        div.addEventListener('click', function() {
            // 点击div以后执行该函数
        }, false)
    2. callback回调函数: 运行某个函数以实现某个功能的时候, 传入一个函数作为参数, 当某个特定的条件下的时候, 就会触发该函数
        setTimeout(function() {~~~~
            // 这个函数就是callback回调函数
        }, 10)
        
    使用回调函数不当造成的问题(回调函数的缺陷)
    问题: 回调地狱（某个异步操作需要等到之前的操作完成, 当这样的需求多了以后, 使的代码进入无尽的嵌套）
        // 来看下面这个需求: 
        // 1.我需要通过小明的学号请求到小明所在班级的信息
        // 2. 然后通过小明所在班级信息中的班主任的工号请求到关于这个班主任的一些资料
        // 3. 通过班主任的一些资料我希望拿到班主任毕业院校的id, 然后通过id去找到该院校的资料
        
        // 利用回调函数大多数人势必会这样写
        $ajax({
            url: '/api/getClassInfo',
            success: function(result) {
                $ajax({
                    url: '/api/getTeacherInfo',
                    data: {
                        id: result.teacher.id
                    },
                    success: function(result) {
                        $ajax({
                            url: '/api/getSchoolInfo',
                            data: {
                                id: result.school.id
                            },
                            success: function(result) {
                                console.log(result.info);
                            }
                        })
                    }
                })
            }
        })
        回调地狱的问题：回调地狱使得我们的代码非常的难以阅读, 同时导致代码可维护性大大降低
        解决方案：使用promise
        
Promise介绍
第一种解释：Promise 实际上是ES6提供的一个新的构造函数，我们需要用new构造Promise实例, 同时在Promise上有一些原型方法和一些静态方法供我们更加精准的来控制和处理异步任务
第二种解释：Promise 是异步编程的一种解决方案：从语法上讲，promise是一个对象，从它可以获取异步操作的消息；从本意上讲，它是承诺，承诺它过一段时间会给你一个结果。promise有三种状态： pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。创造promise实例后，它会立即执行。
promise 是一个类；在使用的时候需要new Promise();
ES6提出的异步模型；啥是模型: 模型粗浅的理解你可以认为是解决方案
    1）es官方认为, 任何一件可能发生异步操作的事情, 都会分为两个阶段: Unsettled和Settled
        1.Unsettled: 未决阶段, 表示事情还在进行前期的处理（比如网络请求还在请求的过程中, dom事件绑定但是用户还未进行点击）, 在处理中也就意味着这个事情还没有发生通向结果的那件事,就是还没有结果呗（事情正在发生的过程）
        2.Settled: 已决阶段, 事情的结果已经有了（比如网络请求的数据已经来到, 用户已经点击按钮）, 既然有了结果, 那么就是已决阶段, 同时无论这个结果是好是坏, 整件事情都无法逆转（事情已经有了答案）
    2）同时在这套异步模型中, 官方提出将异步处理分为两个阶段以外, 还提供三个状态: pedding和resolved, rejected
        1.pedding: 挂起状态（或者称之为等待状态）, 未决阶段的状态, 代表事情还在未决, 结果还没出来（Unsettled）
        2.resolved: 已处理（或者称之为处理成功）, 已决阶段的状态, 代表事情已经产生结果, 而且这个结果是一个可以按照预定逻辑走下去的结果（Settled）
        3.rejected: 已拒绝（或者称之为处理失败）, 已决阶段的状态, 代表事情已经产生结果, 但是这个结果跟预想的不太一样, 通常为发生错误（Settled）
        例子：拿一个网络请求来说, 请求的过程中为未决阶段: 状态为pedding, 而请求到了数据状态码为OK则是resolved状态, 而请求失败500服务器错误则是rejected状态
    1. 我们把事情推向已决阶段的resolved状态的方法叫做resolve, 推向该状态时可以传递一些数据
    2. 我们把事情推向已决阶段的rejected状态的方法叫做reject, 通常会附带一些错误信息
    确定状态后进入后续的操作：
        当事情发生到已决阶段的resolved状态的时候, 我们做的后续处理叫做thenable, 后续处理就是函数, thenable就是给他的称呼
        当事情发生到已决阶段的rejected状态的时候, 我们做的后续处理叫做catchable
根据上方的一套模型（一套对异步的处理方案）, ES6设计出了Promise

// 关闭eslint校验'prefer-promise-reject-errors': 0
1、Promise的基本了解和使用
    Promise的原型上常用方法: （1）then    （2）catch
    Promise的常用静态方法: （1）all      （2）race     （3）finally
    then:接收两个参数, 一个thenable,意为绑定Promise成功的回调 一个catchable,意为Promise失败的回调 注册的两个函数何时执行由Promise的状态决定, 一旦Promise的状态走向已决的resolved状态则thenable函数执行, 走向rejected状态则catchabale执行
    catch:接收一个参数, 意为绑定Promise任务失败的回调, 一旦整个Promise的实例走向了rejected, catchable一定会执行,
    const myPromise = new Promise((resolve, reject) => {
        // 我在这里直接触发resolve
        resolve('我是成功要传递的数据');
    })
    myPromise.then((data) => {
        console.log(data);
    }, err => {
        console.log(err);
    })
    const myPromise2 = new Promise((resolve, reject) => {
        // 我在这里直接触发resolve
        reject('我是失败要传递的错误');
    })
    // then方法的第二个参数可以不传
    myPromise2.then(data => {
        console.log(data);
    })
    myPromise2.catch(err => {
        console.log(err);
    })
    注意: 在创建Promise实例传入的函数参数中, 如果代码报错, 则会立即触发reject方法
    const myPromise = new Promise((resolve, reject) => {
        console.log(lastName); // 压根没有lastName会报错
    })
    myPromise.catch(err => {
        console.log(err); // 上面报错这里会直接触发, 且整个Promise实例处于rejected状态
    })
    Promise的静态方法还可以串联
    无论是then方法还是catch方法结束一个都会返回一个新的Promise实例, 新的Promise实例具有以下特征:
    1）如果当前的Promise是未决阶段的pedding状态, 那么得到的新的Promise也一定是pedding状态
    2）如果上一个Promise已经是已决状态, 那么会相应的去处理后续函数(then或者catch), 并将后续处理函数的返回值作为新的Promise的resolved状态数据,同时如果在处理后续函数的过程中出错了, 则把返回值作为rejected的状态数据应用到新的Promise中
    3）如果上一个Promise触发了rejected, 但是却没有相对应的处理函数（catchable）的话, 会将错误信息直接抛入新的Promise的catchable, 也意味着新的Promise会直接触发rejected
    all
    Promise.all其实还是比较简单的, 当我们需要同时等待多个Promise异步操作完成以后再做某件事的话可以用到Promise.all
    结果：可以看到我们得到了所有女神的回复, 如果其中有一个没回复, Promise.all就不会给我们结果
    Promise.all可以用到我们比如一个入口组件, 同时请求多个api的数据, 然后分发给其他子组件, 如果有一个数据没有到来, 页面就显示loading, 只有所有数据都到来的时候, 页面才呈现出来, 这个时候就可以使用Promise.all
    官方说法：总结（都成功则返回成功（也是一个数组，返回顺序和调用顺序一致），只要有一个失败立马返回失败）
    all(iterable): 这个方法返回一个新的Promise对象, 该promise对象在iterable参数对象里所有的promise对象都成功的时候才会被触发成功, 一旦有任何一个在iterable里的promise对象失败则立马触发该promise对象的失败, 这个新的promise对象在触发成功状态以后, 会把一个包含iterable里所有promise返回值的数组作为成功回调的返回值, 顺序跟iterable保持一致,如果这个新的promise对象触发了失败状态, 那么他会把iterable里第一个触发失败的promise对象的失败信息作为他的失败错误信息, Promise.all方法常被用于处理多个promise对象的状态集合
    race
    race就是竞争的意思，数组内的Promise实例，谁执行的快，就返回谁的执行结果，不管是成功还是失败，其他慢的就终止执行
    finally
    finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。

2、async 与 await
https://www.cnblogs.com/jiangweichen88/p/13528218.html
解决方法：链式调用（串联，通过多个.then来解决）
终极解决方法：async/await，用同步的写法处理异步的操作
async function request() {
    try {
        const result = await doSomething()
        const newResult = await doSomethingElse(result)
        const finalResult = await doThirdThing(newResult)
        console.log('Got the final result: ' + finalResult)
    } catch (error) {
        failureCallback(error)
    }
}

Async/await 实际上只是一种基于 promises 的糖衣语法糖，Async/await 和 promises 一样，都是非堵塞式的，Async/await 让异步代码更具同步代码风格，这也是其优势所在。

async function 用来定义一个返回 AsyncFunction 对象的异步函数。异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果，。如果你在代码中使用了异步函数，就会发现它的语法和结构会更像是标准的同步函数。

await 操作符用于等待一个 Promise 对象。它只能在异步函数 async function 中使用。

async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

1）async函数
    1.async 函数的返回值为 Promise 对象，async 函数返回的 Promise 的结果由函数执行的结果决定
    2.既然是 Promise 对象，那么我们用 then 来调用，并抛出错误，执行 onRejected() 且 reason 为错误信息为“我是错误”
    报错：Expected an object to be thrown
    解决：在.eslintrc.js中配置'no-throw-literal': 0
2）await表达式
    await 右侧的表达式一般为 promise 对象, 但也可以是其它的值
    1、如果表达式是 promise 对象, await 返回的是 promise 成功的值
    2、如果表达式是其它值, 直接将此值作为 await 的返回值

await 必须写在 async 函数中, 但 async 函数中可以没有 await，如果 await 的 Promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理。

总结：
Async/await 比 Promise 更优越的表现
1、简洁干净，使用 async/await 能省去写多少行代码
2、错误处理，async/wait 能用相同的结构和好用的经典 try/catch 处理同步和异步错误，错误堆栈能指出包含错误的函数。
3、调试，async/await 的一个极大优势是它更容易调试，使用 async/await 则无需过多箭头函数，并且能像正常的同步调用一样直接跨过 await 调用。****__


aaa函数和bbb函数中如果都有异步，不一定哪个会先回来；这样的话就会有顺序问题；
Async/await就可以解决这个问题，await aaa()就会先等aaa函数中的内容执行完再去执行bbb函数中的内容
