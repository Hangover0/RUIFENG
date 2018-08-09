<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      <section class="item">
        <h1>商品信息确认</h1>
        <div class="box">
          <p class="title">价格信息</p>
          <p class="info"><span>商品总价：<span>{{price | addMoney}}</span></span></p>
          <p class="info"><span>运送费：<span>{{freight | addMoney}}</span></span></p>
          <p class="info"><span>订单总价：</span><span>{{price + freight | addMoney}}</span></p>
        </div>
        <div class="box">
          <p class="title">收货信息</p>
          <p class="info">
            <span>收货地址：</span>
            <span>四川省 成都市 高新区 锦城大道东段希望大厦10层1810号</span>
          </p>
          <p class="info"><span>收货人：</span><span>{{name}}</span></p>
          <p class="info"><span>邮编：</span><span>610000</span></p>
          <p class="info"><span>电话：</span><span>183****5313</span></p>
          <p class="way"><span>修改地址</span><Icon class="icon" type="ios-arrow-forward" style="right: -255px;"/></p>
          <p class="way"><span>新增地址</span><Icon class="icon" type="ios-arrow-forward" style="right: -255px;"/></p>
        </div>
      </section>
      <section class="item">
        <h1 class="title">选择支付方式</h1>
        <p class="way"><img src="../../assets/weixin.png" alt=""><span>微信付</span><Icon class="icon" type="ios-arrow-forward" /></p>
        <p class="way"><img src="../../assets/zhifu.png" alt=""><span>支付宝</span><Icon  class="icon" type="ios-arrow-forward" /></p>
        <p class="way"><img src="../../assets/yinhang.png" alt=""><span>银行卡</span><Icon class="icon" type="ios-arrow-forward" /></p>
        <p class="way"><img src="../../assets/xinyong.png" alt=""><span>信用卡</span><Icon class="icon" type="ios-arrow-forward" /></p>
        <p class="way"><img src="../../assets/visa.png" alt=""><span>VISA</span><Icon class="icon" type="ios-arrow-forward" style="right: -244px;"/></p>
      </section>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Close',
  data(){
    return {
      price: 4999,
      freight: 10,
      name: ''
    }
  },
  components: {
    NavigationBar
  },
  created(){
    this.getname();
  },
  methods: {
    getname(){
      this.name = JSON.parse(sessionStorage.loginState).nikename;
    },
  },
  filters:{
    addMoney(val){
      return '￥' + val.toFixed(2);
    }
  }
}
</script>


<style scoped>
.container{
  overflow-y: scroll;
}
.content{
  background: #eeeeee;
  padding: 15px;
}
.item{
  border-bottom: 1px solid #eeeeee;
}
.item h1{
  margin-bottom: 10px;
}
.item .title{
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  padding-top: 10px;
}
.item p{
  background: #ffffff;
  line-height: 45px;
  font-size: 15px;
  color: #333333;
  padding: 0px 10px;
  box-sizing: border-box;
  display: block;
}
.item p img{
  width: 35px;
  height: 35px;
  vertical-align: middle;
  display: inline-block;
}
.icon{
  position: relative;
  right: -235px;
}
.way{
  height: 45px;
  border-top: 1px solid #eeeeee;
}
.info{
  line-height: 35px;
  border-top: 1px solid #eeeeee;
}
</style>
