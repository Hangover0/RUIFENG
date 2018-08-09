import Vue from 'vue';
import '../static/css/index.css';


let model = {
  name: 'VV',
  age : 'twenty-one',
  gender: 'girl',
  hobby: '<h3>唱歌，逛街，旅游，攀岩......</h3>',
  headimg: 'http://img2.imgtn.bdimg.com/it/u=260159937,2526240275&fm=27&gp=0.jpg',
  imgTitle: '图片走丢了...',
  isHidden: true,
  signature: '签名：我认识的人越多，就越喜欢动物。',
  message: '.女：在不？男：我无处不在！女：晕哦。男：来，往我怀里晕，Comeonbaby!女：呵呵;你叫什么？男：我没叫啊，你又没非礼我？女：我是问你姓名。男：噢耶～我复姓南宫叫鹏友，简称南鹏友！'
  
  

}
new Vue({
  el: "#app",
  data: model 
})
