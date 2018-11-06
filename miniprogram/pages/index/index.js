//index.js
const app = getApp()
const db = wx.cloud.database({
  env: 'dev-5ece68'
})
const usersCollection = db.collection('users')
const userResumeCollection = db.collection('userResume')
// [{
//   id: 1,
//   title: '第一个简历',
//   content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
//   date: "208-10-24"
// },
// {
//   id: 2,
//   title: '第一个简历',
//   content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
//   date: "208-10-24"
// },
//   {
//     id: 3,
//     title: '第一个简历',
//     content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
//     date: "208-10-24"
//   }
// ]
Page({
  data: {
    list: null,
    tags: [{
        color: 'green',
        checked: true,
        name: '查看',
        type: 'activity'
      },
      {
        color: 'green',
        checked: true,
        name: '编辑',
        type: 'brush_fill'
      },
      {
        color: 'green',
        checked: true,
        name: '二维码',
        type: 'tailor'
      },
      {
        color: 'green',
        checked: true,
        name: '记录',
        type: 'barrage'
      },
      {
        color: 'red',
        checked: true,
        name: '删除',
        type: 'delete'
      },
    ],
    showQrcode: true,
  },
  showQrcode: function() {
    var showQrcodeState = this.data.showQrcode ? false : true
    this.setData({
      showQrcode: showQrcodeState
    })
  },
  onShow: function() {
    var openid = app.globalData.openid
    if(this.data.list==null&&openid){
      this.getUserResume(openid)
    }
  },
  onLoad: function() {
    if (wx.cloud) {
      var that=this;
      var openid = app.globalData.openid
      if (!openid) {
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'login',
          // 传递给云函数的参数
          data: {}
        }).then(function(e) {
          var openid = e.result.openid
          app.globalData.openid = openid
          that.getUserResume(openid)
        })
      }
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  //获取用户的简历
  getUserResume:function(e){
    var that=this;
    userResumeCollection.where({
      _openid:e
    }).get().then(function(e){
      var data = e.data;
      data.forEach((v,i)=>{
        var day = v.date.getDate() < 10 ? "0" + v.date.getDate() : v.date.getDate()
        var date = v.date.getFullYear() + "-" + (v.date.getMonth() + 1) + "-" + day;
        data[i].date=date
      })
      that.setData({
        list: data
      })
    })
  },
  createResume:function(){

  },
  onChange: function(e) {
    var id = e.currentTarget.dataset.id;
    var clickType = e.detail.name;
    var url;
    var that = this;
    switch (Number(clickType)) {
      case 0:
        url = "/pages/index/page?id=" + id
        break;
      case 2:
        that.setData({
          showQrcode: that.data.showQrcode ? false : true
        })
        break;
    }
    wx: wx.navigateTo({
      url: url,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})