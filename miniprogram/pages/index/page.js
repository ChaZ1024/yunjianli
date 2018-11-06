// miniprogram/pages/index/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 'info', 
    oneChecked: false,
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

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
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