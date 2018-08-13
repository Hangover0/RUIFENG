// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  request(){
    wx.request({
      url: 'https://route.showapi.com/955-1',
      data: {
        'showapi_appid': '70347',
        'showapi_sign': '0f0672cc1a11487c83627ab77aa1024e',
        'page': 10,
        'type': 'dp'
      },
      success:function(res) {
        console.log(res);
        // 将数据缓存到本地
        wx.setStorage({
          key: 'contentlist',
          data: res['data']['showapi_res_body']['pagebean']['contentlist']
        })
      }
    })
  },

  getContents(){
    let _this = this;
    return wx.getStorage({
      key: 'contentlist',
      success: function(res) {
        console.log(res);
        _this.setData({
          contentlist: res.data
        })
      },
    })
  },
  onLoad() {
    this.request();
    this.getContents();
    

    wx.getNetworkType({
      success: function(res) {
        console.log(res.networkType);
        if(res.networkType == 'none'){
          // 无网络状态
        }else{
          // 直接进行数据请求
        }
      }
    })
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