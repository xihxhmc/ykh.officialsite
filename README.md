盈科行官网

运行npm run dev 
编译打包 npm run build

1.根据设备类型（mobile或PC）自适配屏幕尺寸rem: 适配函数在index.html内
2.获取元素所在页面的高度，点击按钮滚动至相应高度


使用Vant和elementUI 组件，组件库文件放在本地

vant:
    index.html 文件中引入本地库css文件：<link rel="stylesheet" href="/static/vant/vant.css">
    页面内引入组件：import { Swipe, SwipeItem, Image as VanImage } from '../../../static/vant/vant.min.js' && 
    components: {[Swipe.name]:Swipe,[SwipeItem.name]:SwipeItem, [VanImage.name]:VanImage },

element：
    1. index.html 文件中引入本地库css文件：<link rel="stylesheet" href="/static/elementUI/index.css">
    2.注意：elementUI的引入依赖vue库。因此需要在index.html内通过CND方式先引入<script src="https://unpkg.com/vue/dist/vue.js"></script>
    3.在webpack.base.conf.js文件内添加 externals: { vue: 'Vue','element-ui': 'ELEMENT' }
    4.页面内引入库文件: import { ELEMENT } from "../../../static/elementUI/index.js";
    5.element本地库css需要配合fonts的二进制文件element-icons.woff展示icon


所有的UI组件库js文件都可在index.html文件内引入。