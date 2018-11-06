// miniprogram/pages/mine/init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible1: false,
    actions1: [
      {
        name: '男',
      },
      {
        name: '女'
      }
    ],
    userInfo:{
      name:'李狗蛋',
      sex:'男',
      pingjia:'超屌的一个人',
      school:"",
      address:''
    }
  },
  handleOpen:function(){
    this.setData({
      visible1:true
    })
  },
  handleCancel() {
    this.setData({
      visible1: false
    });
  },
  handleClickItem:function(e){
    var key = e.currentTarget.dataset.input
    console.log(key)
  },
  setValue:function(e){
   var val = e.detail.detail.value;
   var key=e.currentTarget.dataset.input;
    var userInfo=this.data.userInfo;
    userInfo[key]=val
    this.setData({
      userInfo:userInfo
    })
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