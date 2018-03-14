//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
        success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
        })
        // 获取用户信息
        wx.getSetting({
        success: res => {
            if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
                success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                }
                }
            })
            }
        }
        })
    },
    globalData: {
        bookList:null,
        dirList:null
    },
    getLocalData:function(type,success){
        let _this = this;

        if (this.globalData[type]){
            return this.globalData[type];
        }
        
        wx.getStorage({
            key:type,
            complete:function(rs){
                if(rs.data){
                    _this.globalData[type] = rs.data;
                    success(rs.data)
                }else{
                    // _this.alert(rs.errMsg)
                }
            }
        })
            
    },
    serverUrl: "https://bensxu.duapp.com/api/",
    ajax: function (opt) {
        wx.request({
            url: opt.url,
            dataType: 'json',
            data: JSON.stringify(opt.data),
            method: "post",
            success: function (rs) {
                rs = rs.data;
                rs = JSON.parse(rs);
                if (rs.state == 1) {
                    opt.success(rs.data);
                } else {
                    opt.error(rs.msg);
                }
            },
            error: function (rs) {
                opt.error(rs);
            }
        })

    },
    loading: {
        show: function (text) {
            wx.showLoading({
                title: text,
                mask: true
            });
        },
        hide: function () {
            wx.hideLoading();
        }
    },
    alert: function (msg, title, success) {
        success = success || function () { };
        title = title || "系统提示";
        wx.showModal({
            title: title,
            content: msg,
            showCancel: false,
            confirmText: "确定",
            success: success
        })
    },
    setTitle: function (title) {
        wx.setNavigationBarTitle({
            title: title,
        })
    },
    openUrl: function (url) {
        wx.navigateTo({ url: url });
    },
    tel: function (tel) {
        wx.makePhoneCall({
            phoneNumber: tel
        })
    } 
})