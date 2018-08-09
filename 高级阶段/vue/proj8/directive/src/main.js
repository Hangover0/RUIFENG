// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Carousel,CarouselItem,} from 'element-ui'
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
// 全局注册组件
Vue.component('Hello', {
  template: '<h1>Hello, 欢迎来到王者农药！</h1>'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
