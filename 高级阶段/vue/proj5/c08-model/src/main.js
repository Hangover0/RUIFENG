import Vue from 'vue';
import '../static/css/index.css';
new Vue({
  el: "#app",
  data: {
    value: '嗨喽',
    checkMsg: '',
    heros: [],
    selected: '',
  },
  watch: {
    value(val){
      console.log(val);
    }
  }
})
