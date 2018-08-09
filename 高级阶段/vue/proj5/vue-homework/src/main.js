import Vue from 'vue';
import '../static/css/index.css';
import Qs from 'qs';
import Axios from 'axios';
Vue.prototype.HOST = '/api';
// 将axios挂载到Vue原型上
Vue.prototype.$axios = Axios;




new Vue({
  el: "#app",
  data: {
    contentlist: [],
    musiclist: [],
    ghostlists: [],
  },
  created(){
    // 1.GET
    this.get();
    // 2.post
    this.post();
  },
  filters: {
    addSymble(val){
      return '￥' + val;
    }
  },
  methods: {
    // get请求
    get(){
      this.$axios.get('../static/json/data.json', {
        params:{
          count: 10,
          start: 0
        }
      })
      // 异常处理机制
      // try...catch
      .then(res => {
        this.contentlist = res['data'];
      })
      .catch(error => {
        console.log(error);
      })
    },
    post(){
      this.$axios.post("http://route.showapi.com/955-1", Qs.stringify({
        showapi_appid: '70347',
        showapi_sign: '0f0672cc1a11487c83627ab77aa1024e',
        page: 1,
        type: 'dp'
      }))
      .then(res => {
        this.ghostlists = res["data"]["showapi_res_body"]["pagebean"]["contentlist"];
        console.log(res["data"]["showapi_res_body"]["pagebean"]["contentlist"]);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
})
