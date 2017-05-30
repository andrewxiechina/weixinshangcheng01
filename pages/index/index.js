var app = getApp();

Page({
  data: {
    userInfo: {},
    current: 1,
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
        color: "计划一天或者处理邮件。虽然很讨厌，但是积压的事情必须完成。"
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
      console.log(data);
    });
  }
})