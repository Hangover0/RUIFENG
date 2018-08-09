import Vue from 'vue';
import '../static/css/index.css';
let model = {
  editIndex: 0,
  hero:[
    {
      name: '',
      location: '',
      skill: '',
      orientation: '',  
    }],
  keywords: '',
  heros:[
    {
      name: '后羿',
      location: '射手',
      skill: '炙热箭风',
      orientation: '下路',   
    },
    {
      name: '安琪拉',
      location: '法师',
      skill: '混沌火种',
      orientation: '中路',  
    },
    {
      name: '猴三棒',
      location: '战士',
      skill: '如意金箍',
      orientation: '下路',   
    },
  ]   
}
new Vue({
  el: '#app',
  data: model,
  methods: {
    //添加
    add(){
      for(let i = 0; i < this.heros.length; i++){
        if(this.hero.name == this.heros[i].name){
          alert('角色重复！');
        }
        return;
      }
      if(this.hero.name && this.hero.location && this.hero.skill && this.hero.orientation){
        this.heros.push(this.hero);
      }
    },
    //删除
    remove(e){
      let index = e.target.parentElement.parentElement.parentElement.dataset.index;
      this.heros.splice(index, 1);
    },
    //修改
    modifi(e){
      let index = e.target.parentElement.parentElement.parentElement.dataset.index;
      this.hero = this.heros[index];
    },
    //过滤数据
    filterArr(){
      let _this = this;
      return this.heros.filter((hero) => {
        let reg = new RegExp(_this.keywords);
        return reg.test(JSON.stringify(hero));
      })
    }
  }
})
