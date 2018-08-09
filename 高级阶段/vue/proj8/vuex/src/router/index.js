import Vue     from 'vue'
import Router  from 'vue-router'
import store   from '../store'
import Home    from '@/components/pages/home'
import Shopcar from '@/components/pages/shopcar'
import Mine    from '@/components/pages/mine'
import Search  from '@/components/pages/search'
import Details from '@/components/pages/details'
Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '主页');
        store.commit('changeLeft', '0');
        next();
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '搜索');
        store.commit('changeLeft', '25%');
        next();
      }
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '购物车');
        store.commit('changeLeft', '50%');
        next();
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '个人');
        store.commit('changeLeft', '75%');
        next();
      }
    },
    {
      path: '/details/:msg',
      name: 'Details',
      component: Details,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '主页');
        next();
      }
    }
  ]
})
