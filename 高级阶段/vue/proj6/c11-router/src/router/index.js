import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/home'
import News from '@/pages/news'
import Course from '@/pages/course'
import About from '@/pages/about'
import Css from '@/pages/css'
import Html from '@/pages/html'
import Js from '@/pages/js'
import HomeCt1 from '@/pages/home1'
import HomeCt2 from '@/pages/home2'


Vue.use(Router)

export default  new Router({
  linkActiveClass: 'active',
  routes:[
    {
      path:'/',//设置路由路径
      name:'home',//设置路由名称
      components:{
          default:Home,
          HomeCt1,
          HomeCt2
      }
    },
    {
      path:'/news/:name/:age/:job',//设置路由路径
      name:'news',//设置路由名称
      component:News
    },
    {
      path:'/course',//设置路由路径
      name:'course',//设置路由名称
      component:Course,
      redirect:'/course/html',
      children:[
          {
            path:'css',//设置路由路径
            component:Css,
          },
          {
            path:'html',//设置路由路径
            component:Html,
          },
          {
            path:'js',//设置路由路径
            component:Js,
          },
      ]
    },
    {
      path:'/about',//设置路由路径
      name:'about',//设置路由名称
      alias:'/guanyu',
      component:About,
      props: (route) => ({ query: route.query.q })
    },
  ]
})
