import Vue from 'vue'
import Router from 'vue-router'
import Directive from '@/components/directive'
import Ui from '@/components/ui'
import Swiper from '@/components/swiper'
import Echarts from '@/components/echarts'
import Iview from '@/components/iview'
import Lazyload from '@/components/lazyload'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Directive',
      component: Directive
    },
    {
      path: '/ui',
      name: 'Ui',
      component: Ui
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/iview',
      name: 'Iview',
      component: Iview
    },
    {
      path: '/echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/lazyload',
      name: 'Lazyload',
      component: Lazyload
    }
  ]
})
