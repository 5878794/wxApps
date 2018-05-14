//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    //搜索框
    search:'',
    //banner
    banner:[
      {
        imgSrc:'aa.png',
        url:'pages/index/index1'
      },
      {
        imgSrc:'aa.png',
        url:'pages/index/index2'
      },
      {
        imgSrc:'aa.png',
        url:'pages/index/index3'
      }
    ]
  },
  onLoad: function () {

  },
  searchInput:function(e){
    let val = e.detail.value;

    //this 指向page对象
    this.setData({
      'search':val
    });
  },
  bannerTap:function(e){
    let url = e.currentTarget.dataset.url;
    console.log(url);
  }
});
