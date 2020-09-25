<template>
    <section class="container">
        <cp-header :ins=1></cp-header>
        
        <section class="content">
            <div class="content-1 flex-c flex-as">
                <div class="item">
                    <p class="text-1">集团愿景</p>
                    <p class="text-2">为13亿人安居乐业带来福祉</p>
                    <img src="static/image/culture1.png" alt="" class="banner-1">
                </div>
                <div class="item">
                    <p class="text-1">集团使命</p>
                    <p class="text-2">为中国健康人居做贡献,做中国房地产业最卓越的价值连接者</p>
                    <img src="static/image/culture2.png" alt="" class="banner-1">
                </div>
                <div class="item">
                    <p class="text-1">集团价值观</p>
                    <p class="text-2">敬畏 &nbsp; &nbsp; 责任 &nbsp; &nbsp; 开放 &nbsp; &nbsp; 共享</p>
                    <img src="static/image/culture3.png" alt="" class="banner-1">
                </div>
            </div>
            <div class="content-2 flex-c flex-as">
                <div class="odiv flex-c flex-as">
                    <div class="item">
                        <div class="title flex-s">
                            <p>敬畏</p>
                            <img src="static/image/culture4.png" alt="" class="banner-1">
                        </div>
                        <p class="text text-1">心怀敬畏，正念前行谦虚谨慎，坦诚沟通忠于职守，追求卓越</p>
                        <img src="static/image/culture8.png" alt="" class="banner-2">
                    </div>
                    <div class="item">
                        <div class="title flex-s">
                            <p>责任</p>
                            <img src="static/image/culture5.png" alt="" class="banner-1">
                        </div>
                        <p class="text text-2">接受任务、勇于挑战、承担责任独立思考、复盘自省、突破自我顺境逆境看襟怀，大事难事看担当 </p>
                        <img src="static/image/culture9.png" alt="" class="banner-2">
                    </div>
                    <div class="item">
                        <div class="title flex-s">
                            <p>开放</p>
                            <img src="static/image/culture6.png" alt="" class="banner-1">
                        </div>
                        <p class="text text-3">拥抱变化、拓宽视野、换位思考以利他和共赢的精神帮助他人成长决策前集思广益，决策后坚决执行 </p>
                        <img src="static/image/culture10.png" alt="" class="banner-2">
                    </div>
                    <div class="item">
                        <div class="title flex-s">
                            <p>共享</p>
                            <img src="static/image/culture7.png" alt="" class="banner-1">
                        </div>
                        <p class="text text-4">共享知识、分享喜悦共享带来活力和创造力创造富足才能共享进步</p>
                        <img src="static/image/culture11.png" alt="" class="banner-2">
                    </div>
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
