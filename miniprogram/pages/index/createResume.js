// miniprogram/pages/index/createResume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    verticalCurrent: 2,
    resume:{
      title:"",
      content:'',
      baseInfo:{},
      eduInfo:[],
      workInfo:[],
      projectInfo:[]

    },
    visible: false,
    sex: [{
      name: '男',
    },
    {
      name: '女'
    }
    ]
  },

  handleOpen: function () {
    this.setData({
      visible: true
    })
  },
  handleCancel() {
    this.setData({
      visible: false
    });
  },
  handleClickItem: function (e) {
    var key = e.detail.index
    var val = this.data.sex[key].name
    this.setData({
      "resume.baseInfo.sex": val,
      visible: false
    })
  },


  handleClick() {
    let addCurrent = this.data.current + 1;
    let current = addCurrent > 4 ? 0 : addCurrent;
    this.setData({
      'current': current
    })
  },
  backClick:function(){
    let addCurrent = this.data.current - 1;
    let current = addCurrent <= 0 ? 0 : addCurrent;
    this.setData({
      'current': current
    })
  },
  setValue:function(e){
    var val = e.detail.detail.value;
    var key = e.currentTarget.dataset.input;
    var resume = this.data.resume;
    resume[key] = val
    this.setData({
      resume: resume
    })
  },
  setBaseValue: function (e) {
    var val = e.detail.detail.value;
    var key = e.currentTarget.dataset.input;
    var resume = this.data.resume;
    resume.baseInfo[key] = val
    this.setData({
      resume: resume
    })
  },
  addEdu:function(){

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