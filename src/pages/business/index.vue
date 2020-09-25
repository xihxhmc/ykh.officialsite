<template>
    <section class="container">
        <cp-header :ins=2></cp-header>
        <section class="content">
             <img src="static/image/business8.png" alt="" class="banner-1">
             <div class="info flex-c">
                 <div class="left">
                    <p @click="changeItem(index)" v-for="(item,index) in list" :key="index" :class="{'active': index == ins}">{{item}}</p>
                 </div>
                  <img :src="'static/image/business'+ins+'.png'" alt="" class="banner-2">
             </div>
        </section>
        <cp-footer></cp-footer>
    </section>
</template>

<script>
import cpHeader  from '@/assets/components/header'
import cpFooter  from '@/assets/components/footer'
export default {
    components: { cpHeader, cpFooter },
    data() {
        return {
            ins: 0,
            list: ['区块链技术开发','智慧社区','战略策划&产业规划','大数据营销&策划','投资顾问服务','不动产金融','广告传媒','商业运营管理']
        };
    },
   // 视图未渲染
    created() {
       
    },
    mounted(){
        
    },
    methods: {
        changeItem(index) {
            this.ins = index;
        }
    },
    computed:{},
    watch:{} 

};
</script>

<style lang='scss' scoped>
@import '@/assets/style/base.scss';
@import './index.scss';

</style>
