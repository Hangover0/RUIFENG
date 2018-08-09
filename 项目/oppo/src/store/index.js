import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    title: '主页',
    left: '0',
    isShowTar: true
  },
  mutations:{
    changeTitle(state, title){
      state.title = title;
    },
    changeLeft(state, left){
      state.left = left;
    },
    changeIsShowTar(state, isShowTar){
      state.isShowTar = isShowTar;
    }
  }
})
