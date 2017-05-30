var app = getApp();

Page({
  data: {
    userInfo: {}
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