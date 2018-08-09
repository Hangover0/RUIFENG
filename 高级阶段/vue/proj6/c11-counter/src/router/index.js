import Vue    from 'vue'
import Router from 'vue-router'
import Home   from '@/components/paging/home'
import About  from '@/components/paging/about'
import News   from '@/components/paging/news'
import Course from '@/components/paging/course'
import Js     from '@/components/paging/js'
import Css    from '@/components/paging/css'
import Html   from '@/components/paging/html'
import Home1  from '@/components/paging/home1'
import Home2  from '@/components/paging/home2'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',  // 设置路由路径
      name: 'home',  // 设置路由名称
      components: {
        default: Home,
        Home1,
        Home2
      }
    },
    {
      path: '/about',  // 设置路由路径
      name: 'about',  // 设置路由名称
      component: About,
      props: (route) => ({ query: route.query.q })
    },
    {
      path: '/news/:name/:age/:job',  // 设置路由路径
      name: 'news',  // 设置路由名称
      component: News
    },
    {
      path: '/course',  // 设置路由路径
      name: 'course',  // 设置路由名称
      component:Course,
      alias: '/guanyu',
      redirect: '/course/html',  // 重定向
      children:[
        {
          path: 'html',  // 设置路由路径
          component: Html,
        },
        {
          path: 'css',  // 设置路由路径
          component: Css,
        },
        {
          path: 'js',  // 设置路由路径
          component: Js,
        }
      ]
    },
  ]
})
