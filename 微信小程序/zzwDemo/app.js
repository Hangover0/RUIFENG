//app.js
App({
  // 程序的生命周期
  onLaunch: function () {
    console.log("onLaunch")
  },
  onShow(){
    console.log("show")
  },
  onHide(){
    console.log("onHide")
  },
  // 全局变量
  globalData: {
    userInfo: null
  }
})