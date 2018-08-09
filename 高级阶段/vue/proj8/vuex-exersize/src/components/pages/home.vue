<template>
  <div class="container">
    <NavigationBar/>
    <div class="content">
      <!-- 轮播图 -->
      <div class="banner">
        <Carousel autoplay loop>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://img5.imgtn.bdimg.com/it/u=2526923883,3232524600&fm=11&gp=0.jpg" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://img0.imgtn.bdimg.com/it/u=3750574182,1238783500&fm=11&gp=0.jpg" alt="图片走丢了...">
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://img3.imgtn.bdimg.com/it/u=1226110690,2495141891&fm=11&gp=0.jpg" alt="图片走丢了...">
                </div>
            </CarouselItem>
        </Carousel>
      </div>
      <!-- 消息通知 -->
      <div class="notice-box">
        <Icon class="notice" type="android-notifications-none"></Icon>
        <span v-for="(notice,index) in notificas" :key="index" :class="index == 0 ? 'show info' : 'info'">{{notice}}</span>
      </div>
      <!-- 商品 -->
      <div class="wrap">
        <div class="shoplist" v-for="(contentlist, index) in contentlists" :key="index" :data-page="index">
          <h1>{{contentlist.title}}</h1>
          <div class="listbox">
            <section @click="goDetails" :data-smallpage="index" class="lists" v-for="(shop, index) in contentlist.infolist" :key="index">
              <div class="boximg">
                <img :src="shop.imgs[0]" alt="">
              </div>
              <p class="title">{{shop.title}}</p>
              <p class="price">{{shop.price | addMoney}}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Home',
  data(){
    return {
      contentlists: '',
      notificas: [
        "R15 梦境红梦境紫降价300，陶瓷黑降价200",
        "R15 幻色粉，清新粉色渐变|AI智能拍照",
        "超视野全面屏|AI智能美颜"
      ]
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
  mounted(){
     this.notice();
  },
  methods:{
    // 请求数据
    get(){
      this.$axios.get('../../../static/json/oppoKind.json', {
        params:{
          count: 10,
          start: 0
        }
      })
      .then(res => {
        this.contentlists = res['data'];
      })
      .catch(error => {
        console.log(error);
      })
    },
    goDetails(e){
      let sIndex = e.currentTarget.dataset.smallpage;
      let bIndex = e.currentTarget.parentElement.parentElement.dataset.page;
      sessionStorage.shopinfos = JSON.stringify(this.contentlists[bIndex].infolist[sIndex]);
      this.$router.push('details');
    },
    // 广告切换
    notice() {
      let $notices = $(".notice-box .info");
      let index    = 0;
      setInterval(() => {
        if(index == 2) {
            index = 0;
        }else {
            index++;
        }
        $notices.eq(index).addClass("show").siblings().removeClass("show");
      }, 1000);
    },
  },
}
</script>


<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 616474 */
  src: url('//at.alicdn.com/t/font_616474_j6sn09gf4ql.eot');
  src: url('//at.alicdn.com/t/font_616474_j6sn09gf4ql.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_616474_j6sn09gf4ql.woff') format('woff'),
  url('//at.alicdn.com/t/font_616474_j6sn09gf4ql.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_616474_j6sn09gf4ql.svg#iconfont') format('svg');
}
.iconfont{
  font: normal 22px/30px "iconfont";
  color: orange;
  margin-right: 10px;
  vertical-align: middle;
}
.container{
  overflow-y: scroll;
}
.banner{
  height: 177px;
  background: #333333;
}
.demo-carousel{
  height: 177px;
}
.demo-carousel img{
  width: 100%;
  height: 100%;
}
.notice-box{
  margin-top: 20px;
  position: relative;
}
.notice-box .info {
  display: none;
  box-sizing: border-box;
  padding-left: 32px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #333;
  margin-left: 10px;
}
.notice-box .info.show {
  display: block;
}

.notice-box .notice {
  font-size: 22px;
  color: orange;
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.wrap{
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.shoplist h1{
  font-weight: normal;
  font: bolder 15px "宋体";
  margin-bottom: 10px;
}
.listbox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.lists{
  width: 48%;
  display: inline-block;
  margin-bottom: 20px;
}
.boximg{
  height: 160px;
  width: 160px;
}
.boximg img{
  height: 100%;
  width: 100%;
  vertical-align: middle;
}
.lists .title{
  width: 100%;
  height: 60px;
  padding: 10px 0px;
  overflow: hidden;
}
.lists .price{
  margin-top: 10px;
  color: red;
  font-size: 16px;
}
</style>
