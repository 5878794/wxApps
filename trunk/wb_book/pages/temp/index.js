//index.js
//获取应用实例
const app = getApp();

Page({
	data: {
        pages:[
           {
                name: '首页',
                url: '../index/index'
           },
           {
               name: '章节订阅',
               url: '../buy/index'
           },
           {
               name: '个人中心',
               url: '../center/index'
           },
           {
               name: '详情',
               url: '../detail/index'
           },
           {
               name: '目录',
               url: '../dir/index'
           },
           {
               name: '限时免费',
               url: '../free/index'
           },
           {
               name: '书库',
               url: '../library/index'
           },
           {
               name: '排行',
               url: '../ranking/index'
           },
           {
               name: '章节阅读',
               url: '../read/index'
           },
           {
               name: '读过',
               url: '../readed/index'
           },
           {
               name: '充值',
               url: '../recharge/index'
           },
           {
               name: '搜索',
               url: '../search/index'
           }
        ]


	},
	onLoad: function () {


	},
	aaa(e){
        let url = e.currentTarget.dataset.url;
        wx.navigateTo({
            url: url
        })
	}
});
