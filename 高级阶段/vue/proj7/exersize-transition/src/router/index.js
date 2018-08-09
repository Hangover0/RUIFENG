import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import News from '@/components/pages/news'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{index:0},
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      meta:{index:1},
      component: News
    }
  ]
})
