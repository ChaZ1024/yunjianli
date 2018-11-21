// miniprogram/pages/index/createResume.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        text: '步骤一',
        desc: '描述信息'
      },
      {
        text: '步骤二',
        desc: '描述信息'
      },
      {
        text: '步骤三',
        desc: '描述信息'
      },
      {
        text: '步骤四',
        desc: '描述信息'
      }
    ],
    active: 0,
    resume: {
      title: "",
      content: '',
      baseInfo: {},
      eduInfo: [{
          id: 1,
          school: '五道口职业技术学院',
          edutype: "本科",
          major: "计算机技术与应用",
          startTime: "2010-09",
          endTime: "2014-06"
        },
        {
          id: 1,
          school: '五道口职业技术学院',
          edutype: "本科",
          major: "计算机技术与应用",
          startTime: "2010-09",
          endTime: "2014-06"
        },
        {
          id: 1,
          school: '五道口职业技术学院',
          edutype: "本科",
          major: "计算机技术与应用",
          startTime: "2010-09",
          endTime: "2014-06"
        }
      ],
      workInfo: [{
          id: 1,
          company: '阿里爷爷',
          job: "打酱油",
          content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
          startTime: "2010-09",
          endTime: "2014-06"
        },
        {
          id: 1,
          company: '阿里爷爷',
          job: "打酱油",
          content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
          startTime: "2010-09",
          endTime: "2014-06"
        },
        {
          id: 1,
          company: '阿里爷爷',
          job: "打酱油",
          content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
          startTime: "2010-09",
          endTime: "2014-06"
        }
      ],
      projectInfo: [{
        id: 1,
        project: '淘尼玛',
        work: "打酱油",
        content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
        startTime: "2010-09",
        endTime: "2014-06"
      },
        {
          id: 1,
          project: '淘尼玛',
          work: "打酱油",
          content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
          startTime: "2010-09",
          endTime: "2014-06"
        },
        {
          id: 1,
          project: '淘尼玛',
          work: "打酱油",
          content: "美国中央情报局的简称。是美国最大的情报机构（美国政府的间谍和反间谍机构，是美国庞大情报系统的总协调机关），主要任务是公开和秘密",
          startTime: "2010-09",
          endTime: "2014-06"
        }]

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
      "resume.baseInfo.sex": val,
      visible: false
    })
  },


  nextStep() {
    let addActive = this.data.active + 1;
    let active = addActive > 3 ? 0 : addActive;
    this.setData({
      'active': active
    })
  },
  backStep: function() {
    let addActive = this.data.active -1;
    let active = addActive <= 0 ? 0 : addActive;
    this.setData({
      'active': active
    })

  },
  setValue: function(e) {
    console.log(e)
    var val = e.detail
    var key = e.currentTarget.dataset.input;
    var resume = this.data.resume;
    resume[key] = val
    this.setData({
      resume: resume
    })
  },
  setBaseValue: function(e) {
    console.log(e)
    var val = e.detail;
    var key = e.currentTarget.dataset.input;
    var resume = this.data.resume;
    resume.baseInfo[key] = val
    this.setData({
      resume: resume
    })
  },
  addEdu: function() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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