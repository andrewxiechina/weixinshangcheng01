var app = getApp();

Page({
  data: {
    userInfo: {},
    x: 0,
    y: 0,
    z: 0,
    time: 0,
    timeStr: "00:00:00",
    timer: null,
    current: null,
    isScreenFacingDown: false,
    isTimerStarted: false,
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
        isTimerStarted: true
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
    var t = this.data.time;
    var hour, minute, second = 0;
    var addDigit = function(n){
      if (n < 10) {
        return "0" + n;
      }else{
        return "" + n;
      }
    }
    var hour = addDigit(Math.floor(t /3600));
    var minute = addDigit(Math.floor(t%3600/60));
    var second = addDigit(t - 3600*hour - 60*minute);
    this.setData({
      timeStr: "" + hour + ":" + minute + ":" + second
    });
  },
  stopTimer: function() {
    console.log("flag");
    wx.stopAccelerometer();
    this.pauseTimer();

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