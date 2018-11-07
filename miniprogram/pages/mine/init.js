// miniprogram/pages/mine/init.js
const app = getApp()
const usersCollection = app.openTable('users')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    visible: false,
    sex: [{
        name: '男',
      },
      {
        name: '女'
      }
    ],
    userInfo: {
      name: '',
      sex: '',
      height: '',
      weight: '',
      phone: '',
      age: '',
      email: '',
      edu: '',
      politics: '',
      wechat: '',
      school: '',
      address: '',
      evaluate: '',
    }
  },
  handleOpen: function() {
    this.setData({
      visible: true
    })
  },
  handleCancel() {
    this.setData({
      visible: false
    });
  },
  handleClickItem: function(e) {
    var key = e.detail.index
    var val = this.data.sex[key].name
    this.setData({
      "userInfo.sex": val,
      visible: false
    })
  },
  setValue: function(e) {
    var val = e.detail.detail.value;
    var key = e.currentTarget.dataset.input;
    var userInfo = this.data.userInfo;
    userInfo[key] = val
    this.setData({
      userInfo: userInfo
    })
  },
  setInitInfo: function(e) {
    var userInfo = this.data.userInfo

    var that = this;
    var isOk = true
    try {
      Object.keys(userInfo).forEach(function(key) {
     
        if (userInfo[key] == '') {
          that.checkInputValue(key)
          throw new Error("StopIteration");
        } else {
          isOk = true;
        }
      });
    } catch (e) {
      isOk = false
      console.log(e.message);
    }
    if (isOk) {
      var uid = wx.getStorageSync('uid')
      if (uid) {
        usersCollection.doc(wx.getStorageSync('uid')).get().then(res => {
          var data = res.data;
          that.updateUserInit()
        }).catch(function(e) {
          console.log(e)
        })
      }else{
        console.log(uid)
      }
    }
  },
  updateUserInit: function(e) {
    var uid = e ? e : wx.getStorageSync('uid')
    var userInfo = this.data.userInfo;
    userInfo.updatetime = new Date();
    userInfo.status = 1;
    usersCollection.doc(uid).update({
        data: userInfo
      })
      .then(e => {
        if (e.stats.updated > 0) {
          wx.showToast({
            title: '更新成功',
          })
        }
      })
      .catch(console.error)
  },
  checkInputValue: function(e) {
    var msg;
    switch (e) {
      case "name":
        msg = "姓名不能为空";
        break;
      case "age":
        msg = "年龄不能为空";
        break;

      case "height":
        msg = "请填写身高";
        break;
      case "weight":
        msg = "请填写体重";
        break;
      case "phone":
        msg = "手机不能为空";
        break;
      case "email":
        msg = "邮箱不能为空";
        break;
      case "politics":
        msg = "请填写政治面貌";
        break;
      case "wechat":
        msg = "请填写微信号";
        break;
      case "edu":
        msg = "请填写学历";
        break;
      case "school":
        msg = "请填写毕业院校";
        break;
      case "address":
        msg = "请填写居住地址";
        break;
      case "evaluate":
        msg = "请填写自我评价";
        break;
    }
    wx.showToast({
      title: msg,
      icon: 'none'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    var openid= wx.getStorageSync('openid')
    if(openid){
      this.updateUserInfo(openid)
    }else{
      wx.cloud.callFunction({
        // 要调用的云函数名称
        name: 'login',
        // 传递给云函数的参数
        data: {}
      }).then(function (e) {
        openid = e.result.openid
        wx.setStorageSync("openid", openid)
        that.updateUserInfo(openid)
      })
    }

  },
  updateUserInfo:function(e){
    var that=this;
    usersCollection.where({ _openid: e }).field({
      name: true,
      sex: true,
      height: true,
      weight: true,
      phone: true,
      age: true,
      email: true,
      politics: true,
      wechat: true,
      edu: true,
      school: true,
      address: true,
      evaluate: true,
    }).get().then(res => {
      var data = res.data;
      if (data.length > 0) {
        data = data[0]
        wx.setStorageSync('uid', data._id)
        delete data._id
        data = Object.assign(that.data.userInfo, data)
        that.setData({
          userInfo: data
        })
      } else {
        usersCollection.add({
          data: {
            addtime: new Date()
          }
        }).then(e => {
          wx.setStorageSync('uid', e._id)
        })
      }

    }).catch(function (e) {
      console.log(e)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})