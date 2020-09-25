<template>
  <footer class="cp-footer">
      <div class="left">
        <p class="title">联系方式<span></span></p>
        <div class="item">
           <img src="static/image/footer4.png" alt="" class="logo">
           <p>联系电话：</p>
           <p>0791-87317999</p>
        </div>
         <div class="item">
           <img src="static/image/footer5.png" alt="" class="logo">
           <p>联系邮箱：</p>
           <p>yingkehang@flm158.com</p>
        </div>
         <div class="item">
           <img src="static/image/footer6.png" alt="" class="logo">
           <p>公司地址：</p>
           <p>江西省南昌市红谷滩新区前湖大道梦立方广场18楼</p>
        </div>
      </div>
      <div class="right">
        <div class="item">
           <img src="static/image/footer0.png" alt="" class="logo">
           <p>关注微信公众号</p>
        </div>
        <div class="item">
           <img src="static/image/footer1.png" alt="" class="logo">
           <p>福物通ios下载</p>
        </div>
        <div class="item">
           <img src="static/image/footer2.png" alt="" class="logo">
           <p>福物通安卓下载</p>
        </div>
        <div class="item">
           <img src="static/image/footer3.png" alt="" class="logo">
           <p>关注微信公众号</p>
        </div>
      </div>
  </footer>
</template>
 
<script>
export default {
  name: 'cp-footer',
  data () {
    return {
     
    }
  },
  methods: {
   
  }
}
</script>

<style scoped lang="scss">
.cp-footer {
  // position: fixed;
  // bottom: 0;
  // left: 0;
  width: 100%;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2B3A4F;
  color: #fff;
  // z-index: 2;
  .left {
    .title{
      font-size: 0.3rem;
      display: flex;
      justify-content: start;
      align-items: center;
      margin-bottom: 0.3rem;
      span {
        display: inline-block;
        width: 0.6rem;
        height: 0.03rem;
        background-color: #fff;
      }
    }   
    .item {
    
      display: flex;
      justify-content: start;
      align-items: center;
      &:not(:last-child) {
        margin-bottom: 0.16rem;
      }
      img {
        width: 0.13rem;
        height: 0.12rem;
        margin-right: 0.07rem;
      }
      p {
        color: #B2B2B2;
        font-size: 0.14rem;
      }
    }              
  } 
  .right {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 3.65rem;
    .item {
       &:not(:last-child) {
        margin-right: 0.2rem;
      }
      img {
        width: 1.1rem;
        height: 1.1rem;
        margin: auto;
      }
      p {
        font-size: 0.14rem;
        text-align: center;
        margin-top: 0.12rem;
      }
    }
  }
}
</style>
