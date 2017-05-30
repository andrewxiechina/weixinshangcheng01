Page({
  data: {
    imgUrls: [
      'http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2017_5_19_1495174115476',
      'http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2017_5_19_1495174386313',
      'http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2017_2_6_1486352315488', 
      'http://image.huanqiuxiaozhen.com/%E7%84%A6%E7%82%B9%E5%9B%BE/2016_9_18_1474194376998'
    ],
    recommendedUrls:[
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494917892270',
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494917926060',
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494926657165',
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494926955020',
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494918074908',
      'http://image.huanqiuxiaozhen.com/%E4%B8%BB%E9%A2%98%E9%A6%86%E5%9B%BE/2017_5_16_1494918103781'
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})