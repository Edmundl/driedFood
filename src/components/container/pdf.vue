<template>
  <div class="cont">
    <button class="pdftest" @click="toJump">查看pdf文件</button>
    <img src="data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAPBAtEDASIAAhEBAxEB/8QAHAAAAwADAQEBAAAAAAAAAAAAAAECAwQFBgcI/8QAUBAAAQMCBAMFBQUECAQGAQEJAQACEQMhBBIxQVFhcQUTIoGRBjKhscEUQlLR8CNicuEHFTOCksLS8SQ0Q6IWJVNzk7JEY4MXNVRVZHTilP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgIDAQEBAQEBAAAAAAABAhESMQMhQQRRE2EjUv/aAAwDAQACEQMRAD8A+fMYBynkuj2Z2c7tDFCnmy0hLqj9MrRqVnDexQb08a6eNRo+i6GC7fwHZ+Gq0KPZYiq0tqOdVkuBteRpB0U9sx5/tvtE9pY5z2AtosaGUWx7rW6QPiuP3byCQ1wHMfr9SvVjtDsqkB3fY7AG7OruPrddvH1exMBhsO5nZdMYjEsbVNOq4uyNI3nXSNtFfa62+cCk9puIGpnReg9muxana/alKiWOdSb4qjhMBo57TouxV7XwojL2V2eBxdQDvmslL2mq4ZhZhmUKIcZilSa0TGsbpqpPTz3bePf2l2lWqiG0wclJv4WiQBG3HrK5hoVnOkMJHEBesq+1ePL3ObXDSRBIY2fkuo/2lx+G9mcNUrVGjF4l7jTdlALaYtmjSZ05FNUeCHZ2Mf8A2eHqu0u1jj8gul2d7N9q4zFU6P2SqxjiM1R9NzWtbuSTr0W4faTHCQ/GYkmLeNw5bJH2gxVVt8TVIMa1CfqrqksdD2o7D7Vq9pM" alt="">
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    created() {},
    mounted() {},
    methods: {
      toJump() {
        console.log('点击事件')
        window.location.href = 'https://gray.umetrip.com/app/testopen.pdf'
      }
    }
  }
</script>
<style scoped>
.cont {
  width: 100%;
  height: 100%;
}
.pdftest {
  width: 90%;
  height: 200px;
  line-height: 200px;
  border: 2px solid red;
}
</style>