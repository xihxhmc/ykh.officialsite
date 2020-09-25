<template>
    <section class="container">
      
    </section>
</template>
<script>
export default {
    components: { },
    data() {
        return {
           
        };
    },
   // 视图未渲染
    created() {
        this.runEnvironment()
    },
    mounted(){
        
    },
    methods: {
       runEnvironment() {
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                // this.mobileScreen(window, document)
                this.$router.replace('/mobiles')
            }else {
                // this.computerScreen(window, document)
                this.$router.replace('/introduce')
            }
        },
        mobileScreen(window, document) {
            function resize() {
                var ww = window.innerWidth
                if (ww > window.screen.width) {
                window.requestAnimationFrame(resize)
                } else {
                if (ww > 750) {
                    ww = 750
                }
                let base = (ww * 200) / 750
                document.documentElement.style.fontSize = base + 'px'
                }
            }
            resize()
            window.addEventListener('resize', resize)
        },
        computerScreen(window, document) {
            function resize() {
                var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
                winWidth = winWidth < 1366 ? 1366 : winWidth
                var oHtml = document.getElementsByTagName('html')[0]
                oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'

                // window.addEventListener('resize', function () {
                //   var winWidth = document.documentElement.offsetWidth || document.body.offsetWidth
                //   winWidth = winWidth < 1400 ? 1400 : winWidth
                //   var oHtml = document.getElementsByTagName('html')[0]
                //   oHtml.style.fontSize = 100 * winWidth / 1920 + 'px'
                // })
            }
            resize()
            window.addEventListener('resize', resize)
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
