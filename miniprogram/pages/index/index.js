//index.js
const app = getApp()

Page({
  data: {
    list: [{
        id: 1,
        title: '第一个简历',
        content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
        date: "208-10-24"
      },
      {
        id: 2,
        title: '第一个简历',
        content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
        date: "208-10-24"
      },
      {
        id: 3,
        title: '第一个简历',
        content: '这是一份很吊的简历，吊到让我也不知道怎么写简介。就是特别吊，不信你自己看',
        date: "208-10-24"
      }
    ],
    tags: [{
        color: 'blue',
        checked: true,
        name: '查看',
        type: 'activity'
      },
      {
        color: 'blue',
        checked: true,
        name: '编辑',
        type: 'brush_fill'
      },
      {
        color: 'blue',
        checked: true,
        name: '二维码',
        type: 'tailor'
      },
      {
        color: 'blue',
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
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
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