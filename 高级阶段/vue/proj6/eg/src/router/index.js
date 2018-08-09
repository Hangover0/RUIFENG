import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
Vue.use(Router)
export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: 'Home'
    },
    {
      path: '/news',
      name: 'news',
      component: 'News'
    },
    {
      path: '/about',
      name: 'about',
      component: 'About'
    },
    {
      path: '/course',
      name: 'course',
      component: 'Course'
    }
  ]
})


