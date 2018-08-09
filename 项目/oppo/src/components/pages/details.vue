<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content" v-for="(shopinfo, index) in shopinfos" :key="index">
      <!-- 轮播图 -->
      <div class="img-box" >
        <Carousel autoplay loop>
            <CarouselItem>
                <div class="demo-carousel">
                  <img :src="shopinfo.imgs[0]" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img :src="shopinfo.imgs[1]" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img :src="shopinfo.imgs[2]" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img :src="shopinfo.imgs[3]" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img :src="shopinfo.imgs[4]" alt="图片走丢了...">
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <!-- 价格 -->
      <div class="price-box">
        <section>
          <span class="price">{{shopinfo.price | addMoney}}</span>
          <span class="hart">心动价</span>
          <span class="hart">淘金币抵5%</span>
        </section>
        <section>
          <span class="head-f">价格</span>
          <span class="barginprice">{{shopinfo.barginprice | addMoney}}</span>
        </section>
      </div>
      <!-- 商品信息 -->
      <div class="title-box">
        <p class="des">{{shopinfo.des}}</p>
        <h3 class="title">{{shopinfo.title}}</h3>
      </div>
      <!-- 其他 -->
      <div class="other-box">
        <section class="item">
          <span class="head-flag">月销量</span>
          <span style="color:#FF0036">{{shopinfo.sales}}</span>
        </section>
        <section class="item">
          <span class="head-flag">累积评价</span>
          <span style="color:#FF0036">{{shopinfo.evaluation}}</span>
        </section>
        <section class="item">
          <span class="head-flag">送天猫积分</span>
          <span style="color:#280">38</span>
        </section>
      </div>
      <!-- 天猫优惠 -->
      <div class="ticket-box">
        <img src="../../assets/ticket.png" alt="图片走丢了...">
        <span>全天猫实物商品通用</span>
        <span class="full">满3000减50劵</span>
      </div>
      <!-- 购买信息 -->
      <div class="infos-box">
        <section class="item">
          <span class="head-flag">存储容量</span>
          <div class="size" @click="size">
            <span @click="setSlect">4+128G</span>
            <span @click="setSlect">6+128G</span>
          </div>
        </section>
        <section class="item">
          <span class="head-flag">颜色</span>
          <div class="colors">
            <span @click="setSlect">星空紫</span>
            <span @click="setSlect">雪盈白</span>
            <span @click="setSlect">星云版</span>
            <span @click="setSlect">幻境粉</span>
          </div>
        </section>
        <section class="item address-box">
          <span class="head-flag">运费</span>
          <span>广东至</span>
          <select class="sel-city">
            <option>成都</option>
            <option>上海</option>
            <option>重庆</option>
            <option>深圳</option>
            <option>北京</option>
            <option>西安</option>
          </select>
          <span>快递：0.00</span>
        </section>
        <section class="item">
          <span class="head-flag">数量</span>
          <div class="counter-box">
            <span class="couter-btn reduce" @click="reduce">-</span>
            <input type="text" class="couter-input" v-model="value">
            <span class="couter-btn increase" @click="increase" :max="shopinfo.stock">+</span>
          </div>
          <span>件</span>
          <span>库存：{{shopinfo.stock}}</span>
        </section>
      </div>
      <!-- 购买按钮 -->
      <div class="btn-box">
        <button type="button" class="buy">立刻购买</button>
        <button type="button" class="shoppingcar" @click="setShopping">加入购物车</button>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Details',
  data(){
    return {
      shopinfos: [],
      value: 1,
    }
  },
  components: {
    NavigationBar
  },
  created(){
    this.shoplist();
  },
  filters:{
    addMoney(val){
      return '￥' + val;
    }
  },
  methods:{
    shoplist(){
      this.shoplists = JSON.parse(sessionStorage.shopinfos);
      return this.shopinfos.push(this.shoplists);
    },
    reduce() {
      if (this.value > 1) {
        this.value--;
      }
    },
    increase() {
      this.value++;
    },
    size(e){
      $(e.currentTarget).addClass('selected').siblings().removeClass('selected');
    },
    setSlect(e){
      $(e.currentTarget).addClass('selected').siblings().removeClass('selected');
    },
    setShopping(){
      let phoneInfos = {
        "size" : $(".size .selected").text(),
        "color": $(".colors .selected").text(),
        "city" : $(".sel-city").val(),
        "num"  : $(".couter-input").val(),
        "price": $(".price").text(),
        "img"  : this.shopinfos[0].imgs[0],
        "title": $(".title-box .title").text(),
      };
      let shoppingcar = null;
      if(localStorage.shoppingcar) {
          shoppingcar = JSON.parse(localStorage.shoppingcar);
      }else {
          shoppingcar = [];
      }
      if(!phoneInfos.size || !phoneInfos.color){
        alert("请完善信息！");
        return;
      }
      let flag = false;
      for(let i = 0, len = shoppingcar.length; i < len; i++) {
        console.log(phoneInfos.title);
          if(shoppingcar[i].title == phoneInfos.title) {
              flag = true;
              break;
          }
      }
      if(flag) {
          alert("购物车已存在该商品！");
          this.$router.push('shopcar');
          return;
      }
      shoppingcar.push(phoneInfos);
      localStorage.shoppingcar = JSON.stringify(shoppingcar);
      if(sessionStorage.loginState){
        this.$router.push('shopcar');
      }else{
        alert("你还没有登录！");
        this.$router.push('loginRegister');
        return;
      }
      alert("添加商品成功！")
      this.$router.push('shopcar');
    }
  }
}
</script>


<style scoped>
.content .size span.selected,
.content .colors span.selected
 {
    border-color: #000;
}
.content{
  background: #F8F7F8;
}
.demo-carousel{
  width: 100%;
  height: 370px;
}
.demo-carousel img{
  width: 100%;
  height: 100%;
}
/* 商品详情 */
.head-f{
  color: #999;
  font-size: 12px;
  text-align: left;
}
.head-flag {
    color: #999;
    font-size: 12px;
    text-align: left;
    float: left;
    width: 69px;
    margin: 0 0 0 8px;
}
.price-box{
  margin-top: 10px;
  padding: 0px 5px;
  background: #ffffff;
}
.price-box .price{
  color: #FF6621;
  font-size: 18px;
}
.price-box .hart{
  background: #FDD6C3;
  color:#FF6621;
  font-size: 12px;
  font-weight: lighter;
  border-radius: 5px;
}
.price-box .barginprice{
  text-decoration: line-through;
}
.title-box{
  background: #ffffff;
  padding: 10px 5px;
  margin-bottom: 10px;
}
.title-box .title{
  line-height: 1.3;
  font-size: 14px;
  font-weight: normal;
  color: #000;
}
.title-box .des{
  font-size: 12px;
  color: #FF6621;
}
.other-box{
  background: #ffffff;
  margin-bottom: 10px;
}
.other-box .item{
  line-height: 30px;
  display: inline-block;
}
.ticket-box{
  padding: 10px 5px;
  margin-bottom: 10px;
  background: #ffffff;
}
.ticket-box img{
  width: 50px;
  vertical-align: text-top;
}
.ticket-box .full{
  background: #FDD6C3;
  color:#FF6621;
  font-size: 12px;
  font-weight: lighter;
  border-radius: 5px;
}
.content .size span, .content .colors span {
    display: inline-block;
    width: 58px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border: 1px solid #ccc;
    color: #404040;
    font-size: 12px;
    cursor: pointer;
}
.infos-box{
  background: #ffffff;
  padding: 10px 5px;
}
.infos-box .item{
  height: 35px;
  margin: 12px 0;
}
.infos-box .item span{
  display: inline-block;
  line-height: 35px;
  vertical-align: text-bottom;
}
.btn-box{
  width: 90%;
  height: 40px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content [type="button"] {
    width: 50%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    outline: none;
    font-size: 15px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
}
.content [type="button"]:first-child {
    background: linear-gradient(to right, #FFC701, #FF9602);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}
.content [type="button"]:last-child {
    background: linear-gradient(to right, #FF7301, #FF4A01);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
.counter-box {
  width: 100px;
  height: 35px;
  border: 1px solid #eeeeee;
  display: inline-block;
}
.couter-btn,
.couter-input {
  height: 100%;
  box-sizing: border-box;
  float: left;
}
.couter-btn {
  display: inline-block;
  width: 30%;
  background: #eeeeee;
  text-align: center;
  line-height: 35px
}
.couter-input {
  width: 40%;
  margin: 0;
  padding: 0;
  text-align: center;
  outline: none;
  border: none;
}
.content .address-box {
  font-size: 13px;
}
.item.address-box .sel-city{
  vertical-align: top;
  margin-top: 7px;
  width: 100px;
  padding-left: 25px;
}
</style>
