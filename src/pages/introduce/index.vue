<template>
    <section class="container">
        <cp-header :ins=0></cp-header>
        
        <section class="content">
            <img src="static/image/banner1.png" alt="" class="banner-1">
            <div class="bulk flex-c">
                <div class="icon">
                    <img src="static/image/banner2.png" alt="" class="banner-2">
                </div>
               
                <div class="info">
                    <p class="text-1">837118</p>
                    <p class="text-2">股票代码</p>
                    <p class="text-3">盈科行企业集团</p>
                </div>
                <p class="text">国家高新技术企业、国家级双软认证，江西省龙头企业、江西省首家挂牌的网络信息科技企业，主要以互联网+产业服务+智慧社区，及金融投资、创业产业园运营、品牌整合推广、房地产营销策划、新媒体代理运营等多维一体的全产业链运营服务商，专注将物联网、区域块、人工智能、全流程云计算云存储、大数据分析等新一代信息技术应用于公司业务领域。凭借丰富的大型项目运作经验，以及优秀的互联网创新和全产业链运营能力，已连续5年名列中国网络信息科技服务企业十强</p>
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
           
        };
    },
   // 视图未渲染
    created() {
       
    },
    mounted(){
        
    },
    methods: {
       
    },
    computed:{},
    watch:{} 

};
</script>

<style lang='scss' scoped>
@import '@/assets/style/base.scss';
@import './index.scss';

</style>
