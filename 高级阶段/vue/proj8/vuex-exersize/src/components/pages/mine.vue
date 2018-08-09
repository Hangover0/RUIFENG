<template>
  <div class="container">
    <NavigationBar :goBack="true"/>
    <div class="content">
      <div class="headPor">
        <div class="mark">
          <img src="http://img1.imgtn.bdimg.com/it/u=1235297379,3759771938&fm=27&gp=0.jpg" alt="图片走丢了...">
          <p>{{name}}</p>
        </div>
      </div>
      <div class="infor">
        <section class="item">
            <Collapse>
                <Panel name="1">
                    设置个人资料
                    <p slot="content">
                      <i-Input>
                          <span slot="prepend">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
                      </i-Input>
                      <br>
                      <i-Input>
                          <span slot="prepend">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span>
                      </i-Input>
                      <br>
                      <i-Input>
                          <span slot="prepend">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日</span>
                      </i-Input>
                      <br>
                      <i-Input>
                          <span slot="prepend">身份证号</span>
                      </i-Input>
                      <br>
                      <i-Input>
                          <span slot="prepend">个人描述</span>
                      </i-Input>
                      <br>
                    </p>
                </Panel>
                <Panel name="2">
                    收货地址管理
                    <p slot="content">
                      <i-Input style="margin-bottom:10px">
                          <span slot="prepend">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span>
                      </i-Input>
                      <i-Input style="margin-bottom:10px">
                          <span slot="prepend">联系电话</span>
                      </i-Input>
                      <i-Input style="margin-bottom:10px">
                          <span slot="prepend">邮编地址</span>
                      </i-Input>
                      <Select style="width:111px;margin-bottom:10px">
                          <Option v-for="item in province" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <Select style="width:111px;margin-bottom:10px">
                          <Option v-for="item in city" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <Select style="width:111px;margin-bottom:10px">
                          <Option v-for="item in classify" :value="item.value" :key="item.value">{{ item.label }}</Option>
                      </Select>
                      <i-Input style="margin-bottom:10px">
                          <span slot="prepend">详细地址</span>
                      </i-Input>
                      <Button type="success" style="width:350px;">确认地址</Button>
                    </p>
                </Panel>
            </Collapse>
        </section>
        <section class="item">
          <Collapse>
                <Panel name="1">
                    我的订单
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                </Panel>
                <Panel name="2">
                    我的评价
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                </Panel>
            </Collapse>
        </section>
        <section class="item">
          <Collapse>
                <Panel name="1">
                    商品收藏
                    <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
                </Panel>
                <Panel name="2">
                    店铺收藏
                    <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
                </Panel>
                <Panel name="3">
                    浏览记录
                    <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
                </Panel>
            </Collapse>
        </section>
        <div class="btn">
          <button type="button" @click="logOut">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import NavigationBar from '../navigationBar'
export default {
  name: 'Mine',
  data(){
    return {
      isLogin: false,
      province: [
        {value: '四川省',label: '四川省'},
        {value: '广州省',label: '广州省'},
        {value: '广西省',label: '广西省'},
        {value: '浙江省',label: '浙江省'},
        {value: '福建省',label: '福建省'},
        {value: '湖南省',label: '湖南省'},
        {value: '湖北省',label: '湖北省'},
        {value: '河北省',label: '河北省'},
        {value: '河南省',label: '河南省'},
        {value: '...',label: '...'},
      ],
      classify: [
        {value: '武侯区',label: '武侯区'},
        {value: '金牛区',label: '金牛区'},
        {value: '高新区',label: '高新区'},
        {value: '锦江区',label: '锦江区'},
        {value: '青羊区',label: '青羊区'},
        {value: '双流区',label: '双流区'},
        {value: '...',label: '...'},
      ],
      city: [
        {value: '成都市',label: '成都市'},
        {value: '绵阳市',label: '绵阳市'},
        {value: '泸州市',label: '泸州市'},
        {value: '广元市',label: '广元市'},
        {value: '达州市',label: '达州市'},
        {value: '邛崃市',label: '邛崃市'},
        {value: '雅安市',label: '雅安市'},
        {value: '...',label: '...'},
      ],
      name: ''
    }
  },
  components: {
    NavigationBar
  },
  mounted() {
    if(!sessionStorage.loginState) {
      this.$router.push('loginRegister');
    }
  },
  created() {
    this.getname();
  },
  methods: {
    logOut(){
      sessionStorage.removeItem("loginState");
      this.$router.push('loginRegister');
    },
    getname(){
      let nikename = JSON.parse(sessionStorage.loginState);
      this.name = nikename.nikename;
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
}
.headPor{
  width: 100%;
  height: 165px;
  background: url('http://img1.imgtn.bdimg.com/it/u=1235297379,3759771938&fm=27&gp=0.jpg') no-repeat center center;
  background-size: cover;
}
.headPor .mark img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.headPor .mark{
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .5);
  position: relative;
}
.headPor .mark p{
  color: orangered;
  font-size: 18px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.infor .item{
  margin: 10px 0px;
}
.infor .btn{
  display: block;
  width: 330px;
  margin: 0 auto;
}
.infor .btn button{
  display: inline-block;
  width: 100%;
  height: 45px;
  margin: 25px auto;
  background: rgb(204, 51, 51);
  color: #ffffff;
  text-align: center;
  line-height: 45px;
  letter-spacing: 12px;
  font-size: 14px;
  border-radius: 8px;
}
</style>
