import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store'
import iView  from 'iview';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/normalnize.css'
import 'iview/dist/styles/iview.css'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import 'jquery'
import './components/key'
import {
  InputNumber,
  Popover,
  Button,
  MessageBox,
  Message
} from 'element-ui';
Vue.use(InputNumber)
Vue.use(Popover)
Vue.use(Button)
Vue.use(MessageBox)
Vue.use(Message)
Vue.prototype.$axios = Axios
Vue.use(iView)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
