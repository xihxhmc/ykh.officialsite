<template>
  <header class="cp-header">
      <img src="static/image/icon4.png" alt="" class="logo">
      <div class="list">
        <p @click="changeItem(item)" v-for="(item,index) in list" :class="{'active': index == ins}" :key="index" class="item">{{item.name}}</p>
      </div>
    <img src="static/image/search.png" alt="" class="search">
  </header>
</template>
 
<script>
export default {
    name: 'cp-header',
    props: {          
      ins: {
          type: Number,
          default: 0
      },
  },
  data () {
    return {
      list: [
        { name: '集团简介', url: '/introduce'},
        { name: '集团文化', url: '/culture'},
        { name: '主营业务', url: '/business'},
        { name: '集团优势', url: '/superiority'},
        { name: '合作伙伴', url: '/cooperate'},
        { name: '招募英才', url: '/advertise'},
      ],
    }
  },
  methods: {
    changeItem(item) {
      window.scrollTo(0, 0)
      this.$router.replace(item.url)
    }
  }
}
</script>

<style scoped lang="scss">
.cp-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.79rem;
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,.1) ;
  z-index: 2;
  .logo {
    width: 1.81rem;
    height: 0.4rem;
  }
  .list {
    margin: 0 0.87rem 0 3.29rem;
    line-height: 0.8rem;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    .item {
      width: 1.2rem;
      text-align: center;
      font-size: 0.18rem;
      color: #444444;
      font-weight:500;
      &.active {
        background-color: #3A84CA;
        color: #fff;
      }
    }
  }
  .search {
    width: 0.25rem;
    height: 0.25rem;
  }
}
</style>
