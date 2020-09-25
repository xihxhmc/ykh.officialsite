<template>
     <section v-cloak @touchmove="touchmove($event)" @touchstart="touchstart($event)" @touchend="touchend($event)" id="box">
       <header class="header flex-be">
        <img src="static/mimage/logo.png" alt="" class="header-logo">
        <div class="header-search flex-b" :class="{'active-focus': isfocus}">
          <form action="" v-if="isfocus">
            <input type="search" @keyup.enter="keyupEnter()" v-model="searchKey" placeholder="请输入搜索字段" class="header-input"/>
            <input type="text" style="display:none" />
          </form>
          <div v-else class="unfocus"></div>
          <img @click="isfocus = true" src="static/mimage/sousuo.png" alt="" class="search">
        </div>
      </header>
      <img src="static/mimage/banner1.png" alt="" class="banner1" >
      <!-- 集团简介 -->
      <section class="common common-1" id="cover-1">
        <div class="title flex"><span class="title-content">集团简介</span><span class="line"></span></div>
        <div class="cus flex-b">
          <img src="static/mimage/cus.png" alt="" class="banner2" >
          <p class="content">
            盈科行企业集团（WINKEY）股票代码：837118，国家高新技术企业、国家级双软认证，江西省龙头企业、江西省首家挂牌的网络信息科技企业，主要以互联网+产业服务+智慧社区，及金融投资、创业产业园运营、品牌整合推广、房地产营销策划、新媒体代理运营等多维一体的全产业链运营服务商，专注将物联网、区域块、人工智能、全流程云计算云存储、大数据分析等新一代信息技术应用于公司业务领域。凭借丰富的大型项目运作经验，以及优秀的互联网创新和全产业链运营能力，已连续5年名列中国网络信息科技服务企业十强
          </p>
        </div>
      </section>
      <!-- 集团文化 -->
      <section class="common common-2" id="cover-2">
        <div class="title flex"><span class="title-content">集团文化</span><span class="line"></span></div>
        <div class="cus flex-s">
          <div class="item item-1">
            <img src="static/mimage/banner-1.png" alt="" class="banner-1" >
            <p class="content-1 fw-500">集团愿景</p>
            <p class="content-2">为13亿人安居乐业带来福祉</p>
          </div>
          <div  class="item item-2">
            <img src="static/mimage/banner-2.png" alt="" class="banner-1" >
            <p class="content-1 fw-500">集团使命</p>
            <p class="content-2">为中国健康人居做贡献,做中国房地产业最卓越的价值连接者</p>
          </div>
          <div  class="item item-3">
            <img src="static/mimage/banner-3.png" alt="" class="banner-1" >
            <p class="content-1 fw-500">集团愿景</p>
            <p class="content-2">敬畏、责任开放、共享</p>
          </div>
        </div>
        <div class="tip flex-s">
            <div class="tip-item">
              <div class="tip-title flex">
                <p>敬畏</p>
                <img src="static/mimage/no-1-icon.png" alt="" class="tip-icon" >
              </div>
              <p class="content-1">心怀敬畏，正念前行谦虚谨慎，坦诚沟通忠于职守，追求卓越</p>
              <img src="static/mimage/no-1.png" alt="" class="no-1" >
            </div>
            <div class="tip-item">
              <div class="tip-title flex">
                <p>责任</p>
                <img src="static/mimage/no-2-icon.png" alt="" class="tip-icon" >
              </div>
              <p class="content-2">接受任务、勇于挑战、承担责任 独立思考、复盘自省、突破自我 顺境逆境看襟怀，大事难事看担当</p>
              <img src="static/mimage/no-2.png" alt="" class="no-1" >
            </div>
        </div>
        <div class="tip flex-s">
          <div class="tip-item">
            <div class="tip-title flex">
              <p>开放</p>
              <img src="static/mimage/no-3-icon.png" alt="" class="tip-icon" >
            </div>
            <p class="content-2">拥抱变化、拓宽视野、换位思考以利他和共赢的精神帮助他人成长决策前集思广益，决策后坚决执行 </p>
            <img src="static/mimage/no-3.png" alt="" class="no-1" >
          </div>
          <div class="tip-item">
            <div class="tip-title flex">
              <p>共享</p>
              <img src="static/mimage/no-4-icon.png" alt="" class="tip-icon" >
            </div>
            <p class="content-2">共享知识、分享喜悦共享带来活力和创造力创造富足才能共享进步</p>
            <img src="static/mimage/no-4.png" alt="" class="no-1" >
          </div>
        </div>
      </section>
      <!-- 主营业务 -->
      <section class="common common-3" id="cover-3">
        <div class="title flex"><span class="title-content">主营业务</span><span class="line"></span></div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white"  @change="onChange">
          <van-swipe-item class="swiper-item" v-for=" index of 8" :key="index">
            <van-image
              class="van-image"
              fit="cover"
              :src="'static/mimage/swiper-'+index+'.png'"
            />
          </van-swipe-item>
          <template #indicator><div class="custom-indicator"></div></template>
        </van-swipe>
        <div class="info">
          <p class="text">{{swiper[current]}}</p>
          <div class="point flex-c">
            <p class="item" v-for="index of 8" :key="index" :class="{'current-point': (index-1) == current}"></p>
          </div>
       </div>
      </section>  
      <!-- 所获荣誉 -->
      <section class="common common-4" id="cover-4">
        <div class="title flex"><span class="title-content">所获荣誉</span><span class="line"></span></div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2019年江西省龙头服务行业</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2018年南昌市龙头服务企业</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2017年国家高新技术企业</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2016年度荣获江西省软件行业协会会员单位殊荣</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p> 2013年度荣获中国江西金牌服务代理商荣誉称号</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2012年度荣获中国营销策划品牌价值十强企业</p>
        </div>
        <div class="item flex">
          <img src="static/mimage/sense.png" alt="" class="no-1" >
          <p>2011年度荣获江西十大金牌代理荣誉称号</p>
        </div>
      </section>
      <!-- 建设目标 -->
      <section class=" common-5" id="cover-5">
        <div class="title">
          <p class="title-content">以“政府、生产企业、消费者共赢”为建设目标
            <span class="lines"></span>
          </p>
        </div>
        <div class="content">
          <img src="static/mimage/banner-4.png" alt="" class="no-1" >
          <p>本平台结合区块链、物联网、云计算、大数据以及LBS地理定位等技术，通过感知设备、通讯网络、RFID防伪标签以及二维码识别等设备。例如：用先进技术为农产品建立“身份证”制度，实现源头、加工、流通、消费等信息的全程可追溯，追溯包括生产周期的图片信息、环境数据、使用记录、实时监控数据，以及政府监管生产过程信息收集、产品质量检验、承保信息等，最终以“一物一码一保单”的形式展示给终端消费者。建设一套基于区块链的产品合格证与产品溯源二码合一平台解决方案，助力政府企业打造地方特色品牌，带动地方经济飞速发展。</p>
        </div>
      </section>
      <!-- 加盟优势 -->
      <section class="common common-6" id="cover-6">
        <div class="title flex"><span class="title-content">加盟优势</span><span class="line"></span></div>
        <div class="item">
          <p class="text-1">我们拥有着资深专家团队协作支持</p>
          <div class="content flex-bs">
            <p class="text-2">目前，盈科行在职员工近600人，预计2022年发展至1000人以上的规模企业，智慧物业管理系统开发、区块链技术开发、社区O2O运营、大型房地产项目管理，大数据营销、品牌推广团队，本科及研究生团队为主，在各自技术领域都属于资深人士。核心管理团队主要来自知名商学院，并且拥有世界500强企业中高层管理经验和央企工作经历。</p>
            <img src="static/mimage/banner-5.png" alt="" class="no-1" >
          </div>
          
        </div>
        <div class="item item-2 ">
          <p class="text-1">从应用出发，着眼用户体验</p>
          <div class="content flex-bs">
            <img src="static/mimage/banner-6.png" alt="" class="no-1" >
            <p class="text-2">我司大力投入孵化“福物通”“智慧社区、“智慧物业”信息管理SaaS云平台系统，不仅仅只是为了提高相关方的工作效率，也为社区居民的吃、喝、玩、乐、住、行等提供一站式便捷式智慧服务，提升社区居民的生活品质。与此同时，通过各类可视设备，实现信息直达，投放广告，增加营收；对接O2O平台，通过线上引流，线下服务的方式，满足社区居民的个性化需求，提高平台营收，打造智慧社区新型商业模式。</p>
          </div>
        </div>
      </section>
      <!-- 合作伙伴 -->
      <section class="common common-7" id="cover-7">
        <div class="title flex"><span class="title-content">合作伙伴</span><span class="line"></span></div>
        <div class="icon"><img src="static/mimage/banner-7.png" alt="" class="no-1" ></div> 
      </section>
      <!-- 招聘信息 -->
      <section class="common common-8" id="cover-8">
        <div class="title flex"><span class="title-content">招聘信息</span><span class="line"></span></div>
        <!-- 筛选 -->
        <div class="select">
          <div class="item item-1"> 
            <p class="tip">招聘性质</p>
            <div class="list">
              <p @click="changeItem(item, 1)" :class="{isselect: item.isTrue}" v-for="item in AdData.source" :key="item.id">{{item.name}}</p>
            </div>
          </div>
          <div class="item item-2"> 
            <p class="tip">工作地点</p>
            <div class="list">
              <p @click="changeItem(item, 2)" :class="{isselect: item.isTrue}" v-for="item in AdData.place" :key="item.id">{{item.name}}</p>
            </div>
          </div>
          <div class="item item-3"> 
            <p class="tip">职位类别</p>
            <div class="list">
              <p @click="changeItem(item, 3)" :class="{isselect: item.isTrue}" v-for="item in AdData.job" :key="item.id">{{item.name}}</p>
            </div>
          </div>
          <div class="item item-4"> 
            <p class="tip">更新时间</p>
            <div class="list">
              <p @click="changeItem(item, 4)" :class="{isselect: item.isTrue}" v-for="item in AdData.updata" :key="item.id">{{item.name}}</p>
            </div>
          </div>
        </div>
        <!-- 招聘列表 -->
        <div class="details" v-if="AdData.detail.length > 0">
          <div v-for="item in AdData.detail" :key="item.id" class="items">
            <div class="head">
              <p class="post">{{item.name}}</p>
              <p class="price">{{item.salary}}</p>
            </div>
            <div class="ask">
              <p>工作地点：{{item.workPlace.city}}</p>
              <p>招聘{{item.peopleQty}}人</p>
              <p>{{item.educationRequirement | resEducationRequirement}}</p>
              <p>{{item.jopExperience}}</p>
            </div>
            <p class="time">发布于 {{item._CreationTime | timer}}</p>
            <div v-if="!item.more" @click="item.more = true" class="scan-more">
              <p class="" >查看详情</p>
              <img src="static/mimage/more.png" alt="" class="no-1" >
            </div>
            <div v-if="item.more" class="scan">
              <div class="scan-item">
                <p class="head">工作内容</p>
                <p class="content" v-for="jtem in item.content" :key="jtem">{{jtem}}</p>
              </div>
              <div class="scan-item">
                <p class="head">职位要求</p>
                <p class="content" v-for="jtem in item.request" :key="jtem">{{jtem}}</p>
              </div>
              <p class="contact contact-email">投递邮箱：<span v-for="jtem in item.email" :key="jtem">{{jtem}}</span></p>
              <p class="contact">联系电话：<span v-for="(jtem,jndex) in item.phone" :key="jndex">{{jtem}}</span></p>
              <div class="scan-more" @click="item.more = false">
                <p class="" >收起详情</p>
                <img  src="static/mimage/slow.png" alt="" class="no-1" >
              </div>
            </div>
          </div>
        </div>
        <p class="nomore" v-else>-- 暂无相关招聘 --</p>
      </section>
      <!-- 公司地址 -->
      <footer class="common footer" id="cover-9">
        <div class="title flex"><span class="title-content">联系我们</span><span class="line"></span></div>
        <div class="content flex-b">
          <div class="content-left">
            <div class="item  flex-st">
              <img src="static/mimage/icon-1.png" alt="" class="no-1" >
              <p>联系电话：0791-87317999</p>
            </div>
            <div class="item  flex-st">
              <img src="static/mimage/icon-2.png" alt="" class="no-1" >
              <p>联系邮箱：yingkehang@flm158.com</p>
            </div>
            <div class="item flex-st flex-wrap">
              <img src="static/mimage/icon-3.png" alt="" class="no-1" >
              <p>公司地址：</p>
              <p class="text-2">江西省南昌市红谷滩新区前湖大道梦立方广场18楼</p>              
            </div>
          </div>
          <img src="static/mimage/banner-8.png" alt="" class="qrcode" >
        </div>
      </footer>
      <!-- fixed类目 -->
      <section class="mask" v-show="visible">
          <div class="op"></div>
          <div class="abs">
            <ul>
              <li @click="changePage(index)" :class="{'currentpage': index == page, 'borcurrentpage': index == 0 }" v-for="(item,index) in list" :key="index">{{item}}</li>
            </ul>
          </div>
         
      </section>
    </section>
</template>
<script>
import Http from "@/assets/service/ad";
import { Swipe, SwipeItem, Image as VanImage, List } from '../../../static/vant/vant.min.js'
export default {
    components: {[Swipe.name]:Swipe,[SwipeItem.name]:SwipeItem, [VanImage.name]:VanImage, [List.name]: List },
    data() {
        return {
            // 搜索
            isfocus: false,
            searchKey: '',
            // swiper
            current: 0,
            swiper: ['区块链', '不动产金融', '大数据营销&策划', '广告传媒','区块链','商业运营管理', '战略策划&产业规划', '智慧社区',],
            // fixed菜单
            visible: true,
            page: 0,
            list: ['集团简介','集团文化','主营业务','所获荣誉','建设目标','加盟优势', '合作伙伴','招聘信息', '联系我们'],
            elementList: [],
            AdData: {
              source: [{name: '全部',id: null, isTrue: true},{name: '社会招聘',id: 0,isTrue: false}, {name: '校园招聘',id: 1,isTrue: false}],
              place: [],
              job: [],
              updata: [{id:null,name: '全部', isTrue: true},{id:0,name:"1周内",isTrue: false},{id:1,name:'1个月内',isTrue: false},{id:2,name:'3个月内',isTrue: false},{id:3,name:'半年内',isTrue: false}],
              detail: []
            },
            param: {
              recruitNature: -1,  //招聘性质
              city: '',   //工作地点
              jobCategoryId: '',  //职位类别
              timeScopePara: -1,  //更新时间
              PageSize: 100,
              PageIndex:1
            }
        };
    },
    filters: {
        timer(time) {
          // time = time.replace(/-/g, '/');
          console.log('time',time);
          let myDate = new Date(time)
          var year = myDate.getFullYear();
          var month = myDate.getMonth() + 1;
          var day = myDate.getDay();
          var hours = myDate.getHours()
          var minute = myDate.getMinutes()

          return year+"."+month+"."+day;    
        },
         resEducationRequirement(value) {
          let Education
          switch (value) {
            case 0:
              Education = '博士后';
              break;
            case 1:
              Education = '博士';
              break;
            case 2:
              Education = 'EMBA';
              break;
            case 3:
              Education = 'MBA';
              break;
            case 4:
              Education = '硕士';
              break;
            case 5:
              Education = '本科';
              break;
            case 6:
              Education = '大专';
              break;
            case 7:
              Education = '中专';
              break;
            case 8:
              Education = '高中';
              break;
            case 9:
              Education = '无';
              break;
            default:
              break;
          }
          return Education
        }
    },
   // 视图未渲染
    created() {
      // alert( document.documentElement.clientWidth)
      this.GetJobCategoryList();
      
    },
    mounted(){
        let arr = []
        for(let i=1;i<10; i++) {
          let id = 'cover-' + i
          var oDiv = document.getElementById(id)
          let offsetTop = oDiv.offsetTop
          arr.push(offsetTop)
        }
        this.elementList = JSON.parse(JSON.stringify(arr))
        // console.log(arr);
        window.addEventListener("scroll", (e) => {

          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          let centerLine = scrollTop + window.innerHeight/1.6;
          switch (true) {
            case centerLine < arr[1]:
              this.page = 0
              break;
            case arr[1] < centerLine && centerLine < arr[2]:
              this.page = 1
              break;
            case arr[2] < centerLine && centerLine < arr[3]:
              this.page = 2
              break;
            case arr[3] < centerLine && centerLine < arr[4]:
              this.page = 3
              break;
            case arr[4] < centerLine && centerLine < arr[5]:
              this.page = 4
              break;
            case arr[5] < centerLine && centerLine < arr[6]:
              this.page = 5
              break;
            case arr[6] < centerLine && centerLine < arr[7]:
              this.page = 6
              break;
            case arr[7] < centerLine && centerLine < arr[8]:
              this.page = 7
              break;
            case arr[8] > centerLine :
              this.page = 8
              break;
            default:
                break;
          }
        },true);
    },
    methods: {
        // 字符串转数组
        returnList(data){
          let arr = data.split('；');
          let resList = [];
          for (let  i = 0; i < arr.length; i++) {
              if(arr[i].split(';').length > 1){
                  let arr1 =  arr[i].split(';');
                  for(let  j = 0; j < arr1.length; j++){
                      resList.push(arr1[j])  
                  }
              }else{
                  resList.push(arr[i]) 
              }
          }
          return resList;
        },
        // 切换招聘筛选项
        changeItem(item, ins) {
          let Items
          let key    // param的参数
          let value   // 定义全部时的对应参数设置的值
          switch (ins) {
              case 1 :
                  Items = this.AdData.source;
                  key = 'recruitNature';
                  value = -1
                  break;
              case 2 :
                  Items = this.AdData.place;
                  key = 'city';
                  value = '';
                  break;
              case 3 :
                  Items = this.AdData.job;
                  key = 'jobCategoryId';
                  value = '';
                  break;
              case 4 :
                  Items = this.AdData.updata;
                  key = 'timeScopePara';
                  value = -1;
                  break;
              default:
                  break;
          }
          Items.forEach(el=> {
            el.isTrue = false;
            if (el.name == item.name) {
              el.isTrue = true;
              this.param[key] = el.id == 0 || el.id && el.id != null? el.id: value
            }
          })
          this.GetRecruitDeailListPage()
        },
        // 职业类别
        GetJobCategoryList() {
          Http.GetJobCategoryList(res=> {
            this.AdData.job = res.map(el=> {
              return {
                name: el.name,
                id: el.id, 
                isTrue: false
              }
            })
            this.AdData.job.unshift({
              name: '全部',
              id: null, 
              isTrue: true
            })
            this.GetWorkPlaceListPage()
          },err=> {

          })
        },
        // 工作地点
        GetWorkPlaceListPage() {
          Http.GetWorkPlaceListPage(res=> {
             this.AdData.place = res.map(el=> {
              return {
                name: el.city,
                id: el.city, 
                isTrue: false
              }
            })
            this.AdData.place.unshift({
              name: '全部',
              id: null, 
              isTrue: true
            })
            this.GetRecruitDeailListPage()
          },err=> {

          })
        },
        // 招聘详情
        GetRecruitDeailListPage() {
          Http.GetRecruitDeailListPage(this.param, res=> {
            res.data.forEach(el=> {
              el.more = false;
              el.phone = this.returnList(el.phone);
              el.email = this.returnList(el.email);
              el.content = this.returnList(el.jopContent);
              el.request = this.returnList(el.jopRequirement);
            })
            this.AdData.detail = res.data;
          },err=> {

          })
        },
        // 点击滑至相应高度
        changePage(index) {
          if (index == 0) {
            // window.scrollTo(0, 0)
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
          } else if (index == 8) {
            var t = document.body.clientHeight;
            window.scroll({ top: t, left: 0, behavior: 'smooth' });
          } else {
            window.scroll({ top: this.elementList[index] - window.innerHeight/1.7 , left: 0, behavior: 'smooth' });
            // window.scrollTo(0, this.elementList[index] - window.innerHeight/1.7) 
          }
        },
        // 滑动
        touchmove(e) {
          this.isfocus = false;
          this.visible = false;
        },
        // 滑动开始
        touchstart(e) {
        },
        // 滑动结束
        touchend(e) {
          this.visible = true;
        },
        // 切换swiper
        onChange(index) {
          this.current = index;
        },
        // 输入法点击确定
        keyupEnter() {
          this.isfocus = false;
        },
    },
    computed:{},
    watch:{} 

};
</script>

<style lang='scss' scoped>
@import '@/assets/style/base.scss';
@import './index.scss';

</style>
