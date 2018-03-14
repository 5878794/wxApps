// pages/book/index.js
const app = getApp();


Page({

    /**
     * 页面的初始数据
     */
    data: {
        bookList:[
            { name: 'aa', notReaded:0,url:'http://www.baidu.com'},
            { name: 'bb', notReaded: 0, url: 'http://www.baidu.com' }
        ]        
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.getBookList();
    },

    getBookList:function(){
        let _this = this;
        app.getLocalData('bookList', function (rs) {
            _this.setData({ bookList: rs });
        });
    },
    saveBookToList:function(data){
        let _this = this;
        app.setLocalData('bookList',data,function(){
            _this.setData({ bookList: rs });
        });
    }

})