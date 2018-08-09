import Vue from 'vue';


let model = {
  fruit: '',
  keywords: '',
  stus :[
    {name:'小红',gender:'男',address:'四川省成都市'},
    {name:'小蓝',gender:'男',address:'四川省成都市'},
    {name:'小红帽',gender:'男',address:'四川省成都市'},
    {name:'马云',gender:'男',address:'四川省成都市'},
    {name:'谢娜',gender:'女',address:'四川省成都市'},
    {name:'鑫鑫',gender:'女',address:'四川省成都市'}
  ],
  infos:{
    name: 'vv',
    age: '18',
    address: '四川省成都市',
    school: '四川工商职业技术学院',
    job: 'student'
  },
  fruits: ["香蕉","苹果","鸭梨","樱桃","荔枝"],
  goods: [
    {name:'钢笔', price: 188},
    {name:'铅笔', price: 1.2},
    {name:'毛笔', price: 288},
    {name:'硬笔', price: 99.9},
    {name:'软笔', price: 66.6},
  ]
}
new Vue({
  el: "#app",
  data: model,
  filters:{
    addSymble(val){
      return '￥' + val;
    }
  },
  methods: {
    // 添加
    add() {
      if(this.fruit){
        this.fruits.push(this.fruit);
      }
    },
    // 删除
    remove() {
      this.fruits.pop();
    },
    // 修改
    modify() {
      // this.fruits[0] = "榴莲";
      this.$set(this.fruits, 0, '榴莲');
    },
    // 过滤数据
    filterArr() {
      return this.stus.filter((stu) => {
        let reg = new RegExp(this.keywords);
        return reg.test(stu.name);
      })
    }
  }
})