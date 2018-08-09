import Vue           from 'vue'
import store         from '../store'
import Router        from 'vue-router'
import Home          from '@/components/pages/home'
import Search        from '@/components/pages/search'
import Shopcar       from '@/components/pages/shopcar'
import Mine          from '@/components/pages/mine'
import Details       from '@/components/pages/details'
import LoginRegister from '@/components/pages/loginRegister'
import ClosePage     from '@/components/pages/closePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', 'oppo官方旗靓店');
        store.commit('changeLeft', '0');
        next();
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '搜索');
        store.commit('changeLeft', '25%');
        next();
      }
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: Shopcar,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '订单');
        store.commit('changeLeft', '50%');
        next();
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '个人中心');
        store.commit('changeLeft', '75%');
        next();
      }
    },
    {
      path: '/details',
      name: 'details',
      component: Details,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '商品详情');
        next();
      }
    },
    {
      path: '/loginRegister',
      name: 'loginRegister',
      component: LoginRegister,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '登录/注册');
        next();
      }
    },
    {
      path: '/closePage',
      name: 'closePage',
      component: ClosePage,
      beforeEnter:(to, from, next) => {
        store.commit('changeTitle', '结算中心');
        next();
      }
    },
  ]
})
