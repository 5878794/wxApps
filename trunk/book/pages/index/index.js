//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        appList:[
            {name:'小说',url:'../book/index'},
            {name:'测试',url:'../test/index'}
        ]
    },
    openUrl:function(event){
        let data = event.target.dataset,
            url = data.iturl;

        wx.navigateTo({ url: url }); 
    },
    onLoad: function () {
        
    }
})
