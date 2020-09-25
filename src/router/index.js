import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/index', },
    { path: '/', redirect: '/index', },
    { 
      path: '/index', 
      name: 'index',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/index'], resolve),          
      meta: {
          title: '盈科行',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/mobiles', 
      name: 'mobiles',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/mobiles'], resolve),          
      meta: {
          title: '盈科行',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/introduce', 
      name: 'introduce',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/introduce'], resolve),          
      meta: {
          title: '集团简介',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/culture', 
      name: 'culture',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/culture'], resolve),          
      meta: {
          title: '集团文化',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/business', 
      name: 'business',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/business'], resolve),          
      meta: {
          title: '主营业务',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/superiority', 
      name: 'superiority',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/superiority'], resolve),          
      meta: {
          title: '集团优势',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/cooperate', 
      name: 'cooperate',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/cooperate'], resolve),          
      meta: {
          title: '合作伙伴',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    { 
      path: '/advertise', 
      name: 'advertise',  // 默认子路由不需要写name
      component: resolve => require(['@/pages/advertise'], resolve),          
      meta: {
          title: '招募英才',
          keepAlive: false, // 此组件需要被缓存
          requireAuth: false,  // 此路由是需要登录的
      }, 
    },
    
  ]
})
