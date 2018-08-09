<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      <div class="search-box">
        <input v-model="keywords" class="search" type="search" placeholder="请输入您想查找的图书名称进行搜索...">
        <Icon type="ios-search" class="iconSearch" @click="filterArr"></Icon>
      </div>
      <div class="wrap">
        <ul class="shoplist">
          <li>
            <div class="box" @click="goDetails" v-for="(shop, index) in filterArr()" :key="index" :data-page="index">
              <div class="imgbox">
                <img :src="shop.imgs[0]" alt="">
              </div>
              <div class="infor">
                <p class="title">{{shop.title}}</p>
                <p class="des">{{shop.des}}</p>
                <p class="price">{{shop.price | addMoney}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Search',
  data(){
    return {
      contentlists:'',
      keywords: '',
      searchs: []
    }
  },
  components: {
    NavigationBar
  },
  filters:{
    addMoney(val){
      return '￥' + val;
    }
  },
  created(){
    this.get();

  },
  methods:{
    get(){
      this.$axios.get('../../../static/json/oppoKind.json',{
        params:{
          count: 10,
          start: 0
        }
      })
      .then(res => {
        this.contentlists = res["data"];
        this.contentlists.forEach((item, index) => {
          item.infolist.forEach((item, index) => {
            this.searchs.push(item);
          })
        })
      })
      .catch(error => {
        console.log(error);
      })
    },
    goDetails(e){
      let index = e.currentTarget.dataset.page;
      sessionStorage.shopinfos = JSON.stringify(this.searchs[index]);
      this.$router.push('details');
    },
    filterArr(){
      let _this = this;
      return this.searchs.filter((search) => {
        let reg = new RegExp(_this.keywords);
        return reg.test(JSON.stringify(search));
      })
    }
  }
}
</script>


<style scoped>
.container{
  overflow-y: scroll;
}
.content{
  width: 100%;
}
.search-box{
  width: 100%;
  padding: 10px 20px;
  position: relative;
}
.search-box input{
  width: 100%;
  font-size: 14px;
  color: #333333;
  cursor: text;
  height: 40px;
  border: 1px solid #333333;
  border-radius: 8px;
  padding-left: 8px;
}
.search-box .iconSearch{
  font-size: 25px;
  position: absolute;
  right: 35px;
  top: 18px;
}
.wrap{
  padding: 10px;
  width: 100%;
}
.wrap .box{
  width: 100%;
  height: 130px;
  margin-bottom: 20px;
  display: inline-block;
}
.imgbox{
  width: 130px;
  height: 100%;
  display: inline-block;
  float: left;
}
.imgbox img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.box .infor{
  display: inline-block;
  float: right;
  width: 220px;
  height: 100%;
}
.box .infor p{
  display: block;
}
.box .infor .title{
  font-size: 12px;
  line-height: 2;
  color: #333333;
}
.box .infor .des{
  color: #FF6621;
}
.box .infor .price{
  color: red;
  font-size: 15px;
  font-weight: bold;
}
</style>
