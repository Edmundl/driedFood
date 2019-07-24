<style>
  .Wrapper {
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
    font-size: 0.32rem;
    color: #5e5e5e;
  }

  .inputWrapper {
    font-size: 0.4rem;
    margin: 0.3rem 0;
  }

  table,th,td {
    border: 1px solid #000;
    padding: 0.05rem;
  }

  th {
    font-weight: bold;
  }

  .overDiv {
    width: 50%;
    margin-top: 0.3rem;
  }

  .allCenterDiv {
    position: relative;
    width: 100%;
    height: 1.5rem;
    border: 2px solid red;
    margin-top: 0.5rem;
  }

  .Column {
    margin-top: 0.5rem;
    width: 100%;
    height: 3rem;
    border: 2px solid blue;
    justify-content: space-around;
  }

  .flex2 {
    margin-top: 0.5rem;
    width: 100%;
    height: 1rem;
    border: 2px solid blue;
    justify-content: space-around;
    align-items: center;
  }

  .onePxWrapper {
    position: relative;
    width: 100%;
    height: 1.5rem;
    padding: 0.2rem 0.5rem;
  }

  .onePx {
    position: relative;
    width: 4rem;
    height: 1rem;
    padding-left: 0.2rem;
  }

  .onePx::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    border-top: 1px solid red;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  .onePx2 {
    position: relative;
    width: 4rem;
    height: 1rem;
    padding-left: 0.2rem;
  }

  .onePx2::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: 1px solid red;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }

  .onePx3 {
    position: relative;
    width: 4rem;
    height: 1rem;
    padding-left: 0.2rem;
    border: 1px solid red;
  }

  /* 横屏检测 */
  .landscape {
    display: none;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 50vh;
    margin: auto;
    line-height: 50vh;
    text-align: center;
    background: #d0edff;
    box-sizing: border-box;
  }

  @media (orientation: landscape) {
    .landscape {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000000;
      display: -ms-flexbox;
      display: flex;
      width: 100vw;
      height: 100vh;
    }
  }

  .landscape-image {
    width: 74vh;
    height: 70vh;
  }

  .landscapeImg {
    width: 100%;
    height: 100%;
  }

  .floatDiv {
    width: 100%;
  }

  .floatItem {
    width: 25%;
    float: left;
    border: 1px solid green;
    height: 1rem;
  }
</style>

<template>
  <div class="Wrapper">
    <div class="container">
      <h1>标题一：哈哈哈</h1>
      <div>随便写点啥文本之类的</div>
      <div class="inputWrapper"><input type="text" value="真的很傻,这是一个input" /></div>
      <table>
        <thead>
          <th>第一列</th>
          <th>第二列</th>
          <th>第三列</th>
          <th>第四列</th>
        </thead>
        <tbody>
          <tr>
            <td>第一列数据</td>
            <td>第二列数据</td>
            <td>第三列数据</td>
            <td>第四列数据</td>
          </tr>
          <tr>
            <td>第一列数据</td>
            <td>第二列数据</td>
            <td>第三列数据</td>
            <td>第四列数据</td>
          </tr>
        </tbody>
      </table>
      <ol style="margin: 0.3rem 0;">
        <li>有序列表：咖啡</li>
        <li>有序列表：牛奶</li>
        <li>有序列表：茶</li>
      </ol>
      <textarea name="一个文本区域" id="word" cols="40" rows="6">文本区域，尽管写字</textarea>
      <div class="overDiv elipsis">超出文本以省略号代替，超出文本以省略号代替，超出文本以省略号代替，超出文本以省略号代替，</div>
      <div class="allCenterDiv">
        <span class="allCenter">我要垂直水平居中</span>
      </div>
      <div class="allCenterDiv">
        <span class="horizontal_center">我只要水平居中</span>
      </div>
      <div class="allCenterDiv">
        <span class="vertical_center">我只要垂直居中</span>
      </div>
      <div class="flex_column Column">
        <div class="item">垂直flex1</div>
        <div class="item">垂直flex2</div>
        <div class="item">垂直flex3</div>
      </div>
      <div class="flex_flex flex2">
        <div>水平flex1</div>
        <div>水平flex2</div>
        <div>水平flex3</div>
      </div>
      <div class="onePxWrapper"><div class="onePx3 allCenter">研究1px问题，未处理的1px</div></div>
      <div class="onePxWrapper"><div class="onePx allCenter">研究1px问题，上侧有处理后的1px</div></div>
      <div class="onePxWrapper"><div class="onePx2 allCenter">研究1px问题，左侧有处理后的1px</div></div>
      <div class="floatDiv clearfix">
        <div class="floatItem">浮动1</div>
        <div class="floatItem">浮动2</div>
        <div class="floatItem">浮动3</div>
        <div class="floatItem">浮动4</div>
        <div class="floatItem">浮动5</div>
        <div class="floatItem">浮动6</div>
      </div>
    </div>
    <div class="landscape">
      <div class="landscape-image">
        <img :src="landscapeImg" alt="" class="landscapeImg">
      </div>
    </div>
  </div>
</template>
<script>
  import landscapeImg from '../../assets/img/landscapeImg.png'

	export default {
    data () {
      return {
        landscapeImg: landscapeImg
      }
    },
		created: function () {},
    methods: {}
	}
</script>