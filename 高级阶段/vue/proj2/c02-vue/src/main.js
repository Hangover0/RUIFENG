import Vue from 'vue';
import '../static/css/index.css';
new Vue({
  el: "#app",
  data: {
    time: new Date().toLocaleString(),
    address: '四川省成都市',
    weather: '多云转晴 32℃',
    htmlStr: '<h1>不逼自己一下，怎么知道自己这么没用。</h1>',
    imgStr : 'http://img5.imgtn.bdimg.com/it/u=2555050421,2733138496&fm=27&gp=0.jpg',
    imgTitle: '图片走丢了',
    isHidden: true
  }
})

