// miniprogram/pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      showAuthBtn: true,
    switch1: false
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
      var that=this;
      wx.getSetting({
          success(res) {
              if(res.authSetting['scope.userInfo']){
                  wx.getUserInfo({
                      success: function (res) {
                          var userInfo = res.userInfo
                          var nickName = userInfo.nickName
                          var avatarUrl = userInfo.avatarUrl
                          var gender = userInfo.gender //性别 0：未知、1：男、2：女
                          var province = userInfo.province
                          var city = userInfo.city
                          var country = userInfo.country
                          that.setData({
                              userInfo:userInfo
                          })
                      }
                  })
              }else{
                  that.setData({
                      showAuthBtn:false
                  })
              }
          }
      })
  },
    getUserInfo:function(e){
        var userInfo = e.detail.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        this.setData({
            userInfo: userInfo,
          showAuthBtn: true
        })
     
  },
  onChange(event) {
    const detail = event.detail;
    this.setData({
      'switch1': detail.value
    })

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