// miniprogram/pages/index/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'info', 
    oneChecked: false,
    scrollTop:2000,
    showQrcode:true,
    height:50,
    tags: [
      {
        name: '标签一',
        checked: false,
        color: 'default'
      },
      {
        name: '标签二',
        checked: false,
        color: 'red'
      },
      {
        name: '标签三',
        checked: false,
        color: 'blue'
      },
      {
        name: '标签4️',
        checked: false,
        color: 'green'
      }
    ],
    skilltags: [
      {
        name: 'php(熟练)',
        checked: true,
        color: 'green'
      },
      {
        name: 'JavaScript(一般)',
        checked: true,
        color: 'yellow'
      },
      {
        name: 'html(精通)',
        checked: true,
        color: 'blue'
      },
      {
        name: 'vue(了解)',
        checked: true,
        color: 'red'
      }
    ]
  },
  showQrcode:function(){
    var showQrcodeState=this.data.showQrcode?false:true
    this.setData({
      showQrcode:showQrcodeState
    })
  },
  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scrollTop: 10000
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  setTop:function(){
    console.log(this.data.scrollTop)
    this.setData({
      scrollTop: 10000
    })
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '这是我的简历，请查看',
      path: '/pages/index/page?id=123',
      imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541484179093&di=273dc5bdc751ba58d7044d1f9f01b1b1&imgtype=0&src=http%3A%2F%2Fimg.zybus.com%2Fuploads%2Fallimg%2F140610%2F1-140611145K8.jpg'
    }
  },
  callPhone:function(){
    wx.makePhoneCall({
      phoneNumber: '18018260611' //仅为示例，并非真实的电话号码
    })
  }
})