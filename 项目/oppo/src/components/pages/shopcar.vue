<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      <div class="handle-btn">
        <el-button slot="reference" size="small" @click="cancle" v-if="isEditing">取消</el-button>
        <el-popover
          placement="top"
          width="160"
          v-model="visible2" v-if="isEditing"  class="btn delete">
          <p>你要抛弃我吗？你不要我了吗？你舍得吗？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false;remove()">确定</el-button>
          </div>
          <el-button slot="reference" size="small">删除</el-button>
        </el-popover>
        <el-button type="primary" icon="el-icon-edit" circle @click="edit" v-if="!isEditing"></el-button>
      </div>
      <ul class="orderList">
        <li v-for="(orderList, index) in orderLists" :key="index" data-id="index">
          <div class="checkbox hidden">
            <Checkbox v-model="checked[index]" @click="checked[index] = !checked[index]" class="checked"></Checkbox>
          </div>
          <div class="imgbox">
            <img :src="orderList.img" alt="">
          </div>
          <div class="infos">
            <p class="title">{{orderList.title}}</p>
            <p class="specification">规格：</p>
            <p class="size">{{orderList.size}}</p>
            <p class="color">{{orderList.color}}</p>
            <p class="price">{{orderList.price}}</p>
            <p class="nums">
              <el-input-number v-model="orderList.num" :min="1" :max="100" size=small></el-input-number>
            </p>
          </div>
        </li>
      </ul>
      <div class="payBtn">
        <button type="button" @click="payBtn">前往支付</button>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Shopcar',
  data(){
    return {
      orderLists: [],
      isEditing: false,
      checked: [],
      visible2: false,
    }
  },
  components: {
    NavigationBar
  },
  created(){
    this.getorderList();
  },
  methods:{
    getorderList(){
      if(localStorage.shoppingcar){
        this.orderLists = JSON.parse(localStorage.shoppingcar);
        if(this.orderLists.length == 0){
          alert("你还没有添加商品！继续逛逛");
          this.$router.push('/');
        }
      }else{
        return [];
      }
    },
    payBtn(){
      if(sessionStorage.loginState){
        this.$router.push('closePage');
      }else{
        this.$router.push('loginRegister');
        alert("你还没有登录！");
      }
    },
    check(){
      this.checked = true;
    },
    cancle(){
      this.isEditing = false;
      $(".checkbox").addClass("hidden");
      $(".payBtn").removeClass("hidden");
    },
    remove(){
      this.orderLists.forEach((item, index) => {
        item.del = this.checked[index];
      });
      let arr = [];
      this.orderLists.forEach((item, index) => {
        if (!item.del) {
          arr.push(item)
        }
      });
      this.checked = [];
      this.shoppingcar = arr;
      localStorage.shoppingcar = JSON.stringify(this.shoppingcar);
      this.getorderList();
    },
    edit(){
      this.isEditing = true;
      $(".checkbox").removeClass("hidden");
      $(".payBtn").addClass("hidden");
    },
  }
}
</script>


<style scoped>
.container{
  overflow-y: scroll;
  background: #eeeeee;
}
.checkbox {
  height: 100%;
  width: 30px;
  float: left;
  position: relative;
}
.hidden{
  display: none;
}
.checkbox .checked{
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
}
.handle-btn {
    height: 50px;
    margin: 0px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.handle-btn .btn {
    font-size: 15px;
    margin-left: 16px;
}
.handle-btn .edit,
.handle-btn .cancle {
    color: rgb(5, 105, 155)
}
.handle-btn .delete {
    color: orange;
}
.orderList{
  margin: 10px;
}
.orderList li{
  height: 120px;
  padding: 10px;
  box-sizing: border-box;
  background: #ffffff;
  margin-bottom: 20px;
}
.orderList li .imgbox{
  width: 100px;
  height: 100px;
  display: inline-block;
  vertical-align: top;
}
.orderList li .imgbox img{
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.orderList li .infos{
  padding-left: 10px;
  display: inline-block;
  width: 200px;
  position: relative;
}
.orderList .infos .title{
  font-size: 15px;
  height: 45px;
  overflow: hidden;
}
.orderList .infos .specification{
  display: inline-block;
  font-size: 14px;
  color: #666666;
}
.orderList .infos .size{
  display: inline-block;
  font-size: 14px;
  color: #666666;
}
.orderList .infos .color{
  display: inline-block;
  font-size: 14px;
  color: #666666;
}
.orderList .infos .price{
  color: red;
  font-size: 16px;
  font-weight: bold;
}
.orderList .infos .nums{
  position: absolute;
  right: -10px;
  bottom: -12px;
  width: 100px;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payBtn{
  height: 45px;
  width: 345px;
  margin: 20px auto;
  text-align: center;
  line-height: 45px;
  border-radius: 8px;
  background: rgb(53, 154, 53);
}
.payBtn button{
  background: rgb(53, 154, 53);
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 2px;
}
</style>
