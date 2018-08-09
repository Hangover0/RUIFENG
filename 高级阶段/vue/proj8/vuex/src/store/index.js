import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  // 状态属性，存储数据
  state:{
    left: '0',
    title: '主页'
  },
  // 提交修改，修改状态属性
  mutations: {
    changeTitle(state, title){
      state.title = title;
    },
    changeLeft(state, left){
      state.left = left;
    }
  }
})
