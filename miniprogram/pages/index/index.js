//index.js
const app = getApp()
const usersCollection = app.openTable('users')
const resumesCollection = app.openTable('resumes')
Page({
  data: {
    list: null,
    tags: [{
        color: '#011935',
        checked: true,
        name: '查看',
        type: 'activity'
      },
      {
        color: '#011935',
        checked: true,
        name: '编辑',
        type: 'brush_fill'
      },
      {
        color: '#011935',
        checked: true,
        name: '记录',
        type: 'barrage'
      },
      {
        color: '#d81e06',
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

  },
  onLoad: function() {
    if (wx.cloud) {
      var that = this;
      var openid = wx.getStorageSync('openid')
      if (!openid) {
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'login',
          // 传递给云函数的参数
          data: {}
        }).then(function(e) {
          openid = e.result.openid
          wx.setStorageSync("openid", openid)
          that.getUserData(openid)
        })
      }else{
        that.getUserData(openid)
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
  getUserData:function(e){
    var that=this;
    usersCollection.where({
      _openid: e
    }).get({
      success: function (res) {
        var uid;
        var data = res.data
        if (data.length == 0) {
          usersCollection.add({
            data: {
              addtime: new Date()
            }
          }).then(e => {
            that.getUserResume(e)
            wx.setStorageSync('uid', e._id)
          })
        } else {
          wx.setStorageSync('uid', data[0]._id)
          that.getUserResume(e)
        }
      },
      fail: function (e) {
        console.log(e)
      }
    })
  }
  ,
  //获取用户的简历
  getUserResume: function(res) {
    var that = this;
    // resumesCollection.add({
    //   data:{
    //       title:'简历建立',
    //       content:"简历那么吊 你爸妈知道吗？",
    //       date:new Date()
    //   }
    // }).then(e=>{
    //   console.log(e)
    // })
    try {
      resumesCollection.where({ _openid: res}).get().then(function(e) {
        var data = e.data;
        console.log(data)
        if (data) {
          data.forEach((v,i) => {
           
            var day = v.date.getDate() < 10 ? "0" + v.date.getDate() : v.date.getDate()
            var date = v.date.getFullYear() + "-" + (v.date.getMonth() + 1) + "-" + day;
            console.log(date)
            data[i].date=date
          })
          that.setData({
            list: data
          })
        }
      })
    } catch (e) {
      console.log(e)
    }

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
  },
  createResume:function(){
    wx.navigateTo({
      url: '/pages/index/createResume',
    })
  }
})