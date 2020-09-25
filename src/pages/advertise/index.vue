<template>
  <section class="container">
    <cp-header :ins="5"></cp-header>
    <section class="content">
      <!-- 条件筛选 -->
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
      <!-- 职位总数 -->
      <p class="total">共{{AdData.total}}个职位</p>
      <!-- 招聘列表 -->
      <div class="ad" v-for="item in AdData.detail" :key="item.id">
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
              <p class="desc" v-for="jtem in item.content" :key="jtem">{{jtem}}</p>
            </div>
            <div class="scan-item">
              <p class="head">职位要求</p>
              <p class="desc" v-for="jtem in item.request" :key="jtem">{{jtem}}</p>
            </div>
            <p class="contact contact-email">投递邮箱：<span v-for="jtem in item.email" :key="jtem">{{jtem}}</span></p>
            <p class="contact">联系电话：<span v-for="(jtem,jndex) in item.phone" :key="jndex">{{jtem}}</span></p>
            <div class="scan-more" @click="item.more = false">
              <p class="" >收起详情</p>
              <img  src="static/mimage/slow.png" alt="" class="no-1" >
            </div>
          </div>
      </div>
      <!-- 翻页 -->
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :page-size="param.PageSize"
        :current-page.sync="param.PageIndex"
        @current-change="onPage"
        :total="AdData.total">
      </el-pagination>
    </section>
    <cp-footer></cp-footer>
  </section>
</template>
<script>
import { ELEMENT } from "../../../static/elementUI/index.js";
import cpHeader from "@/assets/components/header";
import cpFooter from "@/assets/components/footer";
import Http from "@/assets/service/ad";
export default {
  components: { cpHeader, cpFooter},
  data() {
    return {
        AdData: {
            source: [{name: '全部',id: null, isTrue: true},{name: '社会招聘',id: 0,isTrue: false}, {name: '校园招聘',id: 1,isTrue: false}],
            place: [],
            job: [],
            updata: [{id:null,name: '全部', isTrue: true},{id:0,name:"1周内",isTrue: false},{id:1,name:'1个月内',isTrue: false},{id:2,name:'3个月内',isTrue: false},{id:3,name:'半年内',isTrue: false}],
            detail: [],
            total: 0
        },
        param: {
            recruitNature: -1,  //招聘性质
            city: '',   //工作地点
            jobCategoryId: '',  //职位类别
            timeScopePara: -1,  //更新时间
            PageSize: 5,
            PageIndex:1
        }
    };
  },
    filters: {
        timer(time) {
            // time = time.replace(/-/g, '/');
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
    this.GetJobCategoryList();
  },
  mounted() {},
  methods: {
    // 翻页
    onPage(e){      
      this.param.PageIndex = e;  
      this.GetRecruitDeailListPage();
    },
    // 字符串转数组
    returnList(data) {
      let arr = data.split("；");
      let resList = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(";").length > 1) {
          let arr1 = arr[i].split(";");
          for (let j = 0; j < arr1.length; j++) {
            resList.push(arr1[j]);
          }
        } else {
          resList.push(arr[i]);
        }
      }
      return resList;
    },
    // 切换招聘筛选项
    changeItem(item, ins) {
      let Items;
      let key; // param的参数
      let value; // 定义全部时的对应参数设置的值
      switch (ins) {
        case 1:
          Items = this.AdData.source;
          key = "recruitNature";
          value = -1;
          break;
        case 2:
          Items = this.AdData.place;
          key = "city";
          value = "";
          break;
        case 3:
          Items = this.AdData.job;
          key = "jobCategoryId";
          value = "";
          break;
        case 4:
          Items = this.AdData.updata;
          key = "timeScopePara";
          value = -1;
          break;
        default:
          break;
      }
      Items.forEach((el) => {
        el.isTrue = false;
        if (el.name == item.name) {
          el.isTrue = true;
          this.param[key] = el.id == 0 || el.id && el.id != null ? el.id : value;
        }
      });
      this.GetRecruitDeailListPage();
    },
    // 职业类别
    GetJobCategoryList() {
      Http.GetJobCategoryList(
        (res) => {
          this.AdData.job = res.map((el) => {
            return {
              name: el.name,
              id: el.id,
              isTrue: false,
            };
          });
          this.AdData.job.unshift({
            name: "全部",
            id: null,
            isTrue: true,
          });
          this.GetWorkPlaceListPage();
        },
        (err) => {}
      );
    },
    // 工作地点
    GetWorkPlaceListPage() {
      Http.GetWorkPlaceListPage(
        (res) => {
          this.AdData.place = res.map((el) => {
            return {
              name: el.city,
              id: el.city,
              isTrue: false,
            };
          });
          this.AdData.place.unshift({
            name: "全部",
            id: null,
            isTrue: true,
          });
          this.GetRecruitDeailListPage();
        },
        (err) => {}
      );
    },
    // 招聘详情
    GetRecruitDeailListPage() {
      Http.GetRecruitDeailListPage(
        this.param,
        (res) => {
          res.data.forEach((el) => {
            el.more = false;
            el.phone = this.returnList(el.phone);
            el.email = this.returnList(el.email);
            el.content = this.returnList(el.jopContent);
            el.request = this.returnList(el.jopRequirement);
          });
          this.AdData.detail = res.data;
          this.AdData.total = res.total;
        },
        (err) => {}
      );
    },
  },
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/base.scss";
@import "./index.scss";
</style>
