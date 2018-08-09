// 引入vue
import Vue  from  'vue';
// 引入jQuery
import $ from "jquery";

// 定义model
let model = {
  message: 'Hello, world!',
  name   : '',
  info   : {}
}
// 创建vue实例
let vm = new Vue({
  // 挂载元素
  el: "#app",
  // 挂载Model(是一个对象)
  data: model,
  // 生命周期：实例被创建（ES6的语法）
  // 生命周期函数不要使用箭头函数，否则this指向有误
  // this指向当前实例
  created() {
    console.log(this);
    console.log('vue实例被创建！');
    let _this = this; // this 指向->console.log('vue实例被创建！')这个实例
    $.ajax({
      url: "http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php",
      type: "GET",
      success(response){
        _this.info = response['banner'][2];
      }
    })
  },
  // 生命周期：$el挂载 进行DOM操作
  mounted() {

  }
})
// 修改model层
// vm.$data = model
// vm.$el = document.getElementById('app')   // => true
vm.$data.message = "Hello, girl!";
vm.$data.name = "vv";
console.log(vm.$el);

