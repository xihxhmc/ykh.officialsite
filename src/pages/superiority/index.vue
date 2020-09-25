<template>
    <section class="container">
        <cp-header :ins=3></cp-header>
        
        <section class="content flex-c flex-as">
            <div class="left">
                <p class="common flex-s">所获荣誉<span></span></p>
                <div class="list">
                    <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2019年江西省龙头服务行业</p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2018年南昌市龙头服务企业</p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p> 2017年国家高新技术企业 </p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2016年度荣获江西省软件行业协会会员单位殊荣</p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2013年度荣获中国江西金牌服务代理商荣誉称号</p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2012年度荣获中国营销策划品牌价值十强企业</p>
                    </div>
                     <div class="item flex-s">
                        <img src="static/image/superiority1.png" alt="" class="banner-1">
                        <p>2011年度荣获江西十大金牌代理荣誉称号</p>
                    </div>
                </div>
                <p class="common">以“政府、生产企业、消费者共赢”为建设目标<span class="lengs"></span></p>
                <img src="static/image/superiority2.png" alt="" class="banner-2">
                <p class="text">本平台结合区块链、物联网、云计算、大数据以及LBS地理定位等技术，通过感知设备、通讯网络、RFID防伪标签以及二维码识别等设备。例如：用先进技术为农产品建立“身份证”制度，实现源头、加工、流通、消费等信息的全程可追溯，追溯包括生产周期的图片信息、环境数据、使用记录、实时监控数据，以及政府监管生产过程信息收集、产品质量检验、承保信息等，最终以“一物一码一保单”的形式展示给终端消费者。建设一套基于区块链的产品合格证与产品溯源二码合一平台解决方案，助力政府企业打造地方特色品牌，带动地方经济飞速发展。</p>
            </div>
            <div class="right">
                <p class="common flex-s">加盟优势<span></span></p>
                <p class="text1">我们拥有着资深专家团队协作支持</p>
                <p class="text2">目前，盈科行在职员工近600人，预计2022年发展至1000人以上的规模企业，智慧物业管理系统开发、区块链技术开发、社区O2O运营、大型房地产项目管理，大数据营销、品牌推广团队，本科及研究生团队为主，在各自技术领域都属于资深人士。核心管理团队主要来自知名商学院，并且拥有世界500强企业中高层管理经验和央企工作经历。</p>
                <p class="text1">从运用出发，着眼用户体验</p>
                <p class="text2">我司大力投入孵化“福物通”“智慧社区、“智慧物业”信息管理SaaS云平台系统，不仅仅只是为了提高相关方的工作效率，也为社区居民的吃、喝、玩、乐、住、行等提供一站式便捷式智慧服务，提升社区居民的生活品质。与此同时，通过各类可视设备，实现信息直达，投放广告，增加营收；对接O2O平台，通过线上引流，线下服务的方式，满足社区居民的个性化需求，提高平台营收，打造智慧社区新型商业模式。</p>
                <div class="flex-s icon-1">
                    <img src="static/image/superiority3.png" alt="" class="banner-2">
                    <img src="static/image/superiority4.png" alt="" class="banner-2">
                </div>
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
