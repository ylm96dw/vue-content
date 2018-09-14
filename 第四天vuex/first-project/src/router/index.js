import Vue from 'vue'
import Router from 'vue-router'
//进度条
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import home from '../components/home'

const router = new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   component: home,
    //   name: 'home',
    //   meta:{
    //     title:'首页'
    //   }
    // },
    // {
    //   path:'/about/:id',
    //   component: ()=>import('../components/about'),
    //   name:'about',
    //   meta:{
    //     title:'详情页'
    //   }
    // },
    // {
    //   path:'/login',
    //   name:'login',
    //   component:()=>import('../components/login'),
    //   meta:{
    //     title:'登陆页'
    //   }
    // },
    {
      path:'/main',
      component:()=>import ('../views/Layout/index'),
      redirect:'/main/home',
      children:[
        {
          path: 'home',
          component: home,
          name: 'home1',
          meta:{
            title:'首页'
          }
        },
        {
          path:'about/:id',
          component: ()=>import('../components/about'),
          name:'about1',
          meta:{
            title:'详情页'
          }
        },
        {
          path:'login',
          name:'login1',
          component:()=>import('../components/login'),
          meta:{
            title:'登陆页'
          }
        },
        {
          path:'vuex',
          component:()=>import ('../components/vuex')
        }
      ]
    }
  ]
})
//router中的钩子,全局
router.beforeEach((to, from, next) => {
  Nprogress.start()
 if(to.meta.title){
   document.title = to.meta.title
 }
 next()
})
//全局的另一个钩子
router.afterEach( (to,from) => {
  Nprogress.done()
})
export default router
