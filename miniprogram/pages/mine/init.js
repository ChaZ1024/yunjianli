// miniprogram/pages/mine/init.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    sex: [
      {
        name: '男',
      },
      {
        name: '女'
      }
    ],
    userInfo:{
     
    }
  },
  handleOpen:function(){
    this.setData({
      visible:true
    })
  },
  handleCancel() {
    this.setData({
      visible: false
    });
  },
  handleClickItem:function(e){
    var key = e.detail.index
    var val= this.data.sex[key].name
    this.setData({
      "userInfo.sex":val,
      visible: false
    })
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
  setInitInfo:function(e){

    console.log(this.data.userInfo)

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