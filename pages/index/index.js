var app = getApp();

Page({
  data: {
    userInfo: {},
    time: 0,
    timeStr: "00:00:00",
    timer: null,
    current: null,
    isScreenFacingDown: false,
    isTimerStarted: false,
    log: [],
    category: [
      {
        id: "学",
        description: "专注于学习，不为外物分神，不听任何东西。",
        color: "green"
      },
      {
        id: "工",
        description: "专注于工作，迅速完成任务以后再开始玩。",
        color: "yellow"
      },
      {
        id: "运",
        description: "每天运动，运动是享受生活的一种方式。",
        color: "lightblue"
      },
      {
        id: "嗨",
        description: "尽情享受快乐时光。",
        color: "blue"
      },
      {
        id: "费",
        description: "参加烦人的会议，做不得不做的事情。",
        color: "red"
      },
      {
        id: "约",
        description: "珍惜和家人、朋友在一起的时光。",
        color: "pink"
      },
      {
        id: "休",
        description: "休息一下。",
        color: "orange"
      },
      {
        id: "计",
        description: "计划一天或者处理邮件。虽然很讨厌，但是积压的事情必须完成。",
        color: "purple"
      },
      {
        id: "睡",
        description: "睡觉觉了。",
        color: "grey"
      }
    ]
  },
  onLoad: function() {
    var that = this;
    app.getUserInfo(function(data){
      that.setData({
        userInfo: data
      });
    });

    wx.getStorage({
      key: 'log',
      success: function (res) {
        that.setData({
          log: res.data
        })
      }
    })
  },
  handleTap: function(e){
    var that = this;
    this.setData({
      current: e.target.dataset.index,
    });
    wx.onAccelerometerChange(this.processAccelerometerChange);
  },
  processAccelerometerChange: function(res){
    this.setData({
      x: res.x,
      y: res.y,
      z: res.z
    });
    // if(true){
    if (res.z > 0.9) {  
      this.startTimer();
      this.setData({
        isScreenFacingDown: true,     
      });
    }else{
      this.setData({
        isScreenFacingDown: false,
      });
      this.pauseTimer();
    }
  },
  startTimer: function() {
    var that = this;
    if (!this.data.isTimerStarted){
      this.setData({
        isTimerStarted: true,
        startTime: new Date()
      })
      this.timer = setInterval(function () {
        that.setData({
          time: that.data.time + 1,
        })
        that.updateTimeStr();
      }, 1000);
    }  
  },
  pauseTimer: function() {
    if (this.data.isTimerStarted) {
      clearInterval(this.timer);
      this.setData({
        isTimerStarted: false
      });
    }     
  },
  updateTimeStr: function() {
    var timeStr = this.parseTimeStr(this.data.time);
    this.setData({
      timeStr: timeStr
    });
  },
  parseTimeStr: function(t) {
    var t = this.data.time;
    var hour, minute, second = 0;
    var addDigit = function (n) {
      if (n < 10) {
        return "0" + n;
      } else {
        return "" + n;
      }
    }
    var hour = addDigit(Math.floor(t / 3600));
    var minute = addDigit(Math.floor(t % 3600 / 60));
    var second = addDigit(t - 3600 * hour - 60 * minute);
    return "" + hour + ":" + minute + ":" + second;
  },
  stopTimer: function() {
    this.setData({
      log: [...this.data.log, {
        category: this.data.current,
        duration: this.data.time,
        startTime: this.data.startTime,
        endTime: new Date()
      }]
    });
    // 存储数据
    try {
      wx.setStorageSync('log', this.data.log)
    } catch (e) {
    }
    wx.stopAccelerometer();
    this.pauseTimer();

    // 参数还原
    this.setData({
      isTimerStarted: false,
      isScreenFacingDown: false,
      time: 0,
      timeStr: "00:00:00",
      timer: null,
      current: null,
    });

    
  }
  

})