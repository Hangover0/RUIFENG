<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      <div class="login-register">
        <div class="tab-btn">
          <span class="btn login-btn selected" data-flag="login" @click="loginRegister">登录</span>
          <span class="btn register-btn" data-flag="register" @click="loginRegister">注册</span>
        </div>
        <form action="javascript:;" name="myform">
          <section class="item">
            <Icon class="icon" type="ios-person-outline"></Icon>
            <Input v-model="account" placeholder="请输入账号" clearable size="large" class="input"/>
          </section>
          <section class="item" v-if="isRegister">
            <Icon class="icon" type="ios-personadd-outline"></Icon>
            <Input v-model="nikename" placeholder="请输入昵称" clearable size="large" class="input"/>
          </section>
          <section class="item">
            <Icon class="icon" type="ios-locked-outline"></Icon>
            <Input v-model="password" placeholder="请输入密码" clearable size="large" class="input"/>
          </section>
          <section class="item" v-if="isRegister">
            <Icon class="icon" type="iphone"></Icon>
            <Input v-model="tel" placeholder="请输入手机号" clearable size="large" class="input"/>
          </section>
          <section class="item" v-if="isRegister">
            <Icon class="icon" type="ios-email-outline"></Icon>
            <Input v-model="email" placeholder="请输入邮箱" clearable size="large" class="input"/>
          </section>
          <Button type="primary" class="clickbtn" @click="loginRegisterClick">登录</Button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'LoginRegister',
  data(){
    return {
      isRegister: false,
      account: "",
      password: "",
      nikename: "",
      tel: "",
      email: "",
      alert: null
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    loginRegister(e){
      let $target = $(e.target);
      this.isRegister = $target.attr("data-flag") == "login" ? false : true;
      $(".clickbtn").text($target.text());
      $target.addClass("selected").siblings().removeClass("selected");
      // 清空输入框
      this.clearInput();
    },
    clearInput() {
      this.account  = "";
      this.password = "";
      this.nikename = "";
      this.tel      = "";
      this.email    = "";
    },
    loginRegisterClick(){
      if(this.isRegister){
        this.register();
      }else{
        this.login();
      }
    },
    login(){
      if(!this.judge()){
        this.$Message.info('请输入账号或者密码！');
        return;
      }
      let _this = this;
      Bmob.User.logIn(this.account, this.password, {
        success: function(user) {
          alert("登录成功！");
          sessionStorage.loginState = JSON.stringify(user);
          _this.$router.push('mine');
        },
        error: function(user, error){
          alert("用户名不存在或密码错误！")
        }
      })
    },
    register(){
      if(!this.judge()){
        this.$Message.info('请完善信息再进行注册！');
        return;
      };
      if(/^[A-Za-z0-9_-]{4,16}$/.test(this.account)){
        alert("账号不正确！")
      }
      else if(/^[A-Za-z0-9_-]{4,16}$/.test(this.password)){
        alert("密码不正确！")
      }
      else if(/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/.test(tel)){
        alert("手机号不正确！")
      }
      else if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email)){
        alert("邮箱不正确！")
      }
      let _this = this;
      let user = new Bmob.User();
      // 配置用户对象
      user.set("username", this.account);
      user.set("password", this.password);
      user.set("email", this.email);
      user.set("phone", this.tel);
      user.set("nikename", this.nikename);
      // 注册用户
      user.signUp(null, {
        success: function(user){
          alert("恭喜您，注册成功！");
          _this.$router.push('mine');
        },
        error: function(user, error){
          switch(error.code){
            case 202: {alert("用户名已经被注册！")}break;
            case 203: {alert("邮箱已经被注册！"  )}break;
            case 209: {alert("手机已经被注册！"  )}break;
          }
        }
      })
    },
    judge(){
      let isThrough = true;
      let $input = $(".item input");
      for(let i = 0, len = $input.length; i < len; i++){
        if($input.eq(i).val() == ""){
          isThrough = false;
          break;
        }
      }
      return isThrough;
    },
  }
}
</script>


<style scoped>
.container{
  background: url("http://img3.imgtn.bdimg.com/it/u=2843752448,917543893&fm=27&gp=0.jpg")center center;
  background-size: cover;
}
.tab-btn .btn.selected {
    border-bottom: 1px solid #2D8CF0;
    color: #2D8CF0;
}
.login-register{
  padding: 0px 20px 20px 20px;
}
.tab-btn{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  justify-content: space-between;

}
.btn{
  width: 50%;
  display: inline-block;
  text-align: center;
  color: #2D8CF0;
  font-size: 18px;
  font-family: "微软雅黑";
}
.item{
  height: 52px;
  line-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
}
.input{
  width: 280px;
}
.item .icon{
  font-size: 30px;
  width: 30px;
  text-align: center;
  color: #333333;
  vertical-align: middle;
  margin-right: 10px;
}
.clickbtn{
  display: block;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  letter-spacing: 5px;
  color: #ffffff;
  font-weight: bolder;
  margin-top: 40px;
}
</style>
