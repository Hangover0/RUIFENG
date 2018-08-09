import Vue from 'vue';
import '../static/css/index.css';
new Vue({
  el: "#app",
  data: {
      username: "",
      showTips: false,
      error: false
  },
  watch: {
      username: function (newValue) {
          if(!/^[0-9A-Za-z_]*$/.test(newValue)) {
              this.showTips = this.error = true;
          }else  {
              this.showTips = this.error = false;
          }
      }
  }
});
