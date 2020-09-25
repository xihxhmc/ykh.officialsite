<template>
    <section class="container">
        <cp-header :ins=4></cp-header>
        
        <section class="content flex-c">
            <img src="static/image/cooperate.png" alt="" class="banner-1">
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
