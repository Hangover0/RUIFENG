// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
  handleInput(event){
    if(event.target.id == 'username'){
      this.setData({
        username: event.detail.value
      })
    }else{
      this.setData({
        password: event.detail.value
      })
    }
  },
  btnLogin(event){
    let username = this.data.username;
    let password = this.data.password;
    if(!username || !password){
      wx.showToast({
        title: '请完善信息！',
        icon: 'none'
      })
    }else if(username == 'admin' && password == '123'){
      wx.switchTab({
        url: '../home/home',
      });
    }else{
      wx.showToast({
        title: '账号或密码错误！',
        icon: 'none'
      })
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})