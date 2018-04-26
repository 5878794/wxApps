const regeneratorRuntime = require('../../utils/libs/runtime.js');
const jq = require('../../utils/libs/jq.js'); 
const app =require('../../utils/app.js')

global.jq = jq;
global.app = app;

Page({
    data:{
        bookList:[1,2,3],
        imgUrls:[
            // {
            //     imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            //     src:'http://www.baidu.com'
            // },
            // {
            //     imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            //     src:'#'
            // },
            // {
            //     imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            //     src:'http://bensxu.duapp.com'
            // }
            
        ]
        // ccc:'aaa'
    },
    aaa(e){
        console.log(e)
    },
    onLoad:function(){
        global.a = this;
        jq(this,'open').addClass('red');
        this.bb().then(rs=>{
            // jq(this,'open').removeClass('red');

        });

        

        // var animation = wx.createAnimation({
        //     duration: 1000,
        //     timingFunction: 'ease',
        // })


        // animation.scale(2,2).rotate(45).step();
        // let aa = animation.export();
        // this.setData({
        //     __jq: {open:{
        //         animation: aa
        //     }}
        // })
    },
    bb:async function(){
        
        console.log(1);
        await this.stop(4000);
        console.log(2);
    },
    stop:function(time){
        return new Promise(success=>{
            setTimeout(function(){
                success();
            },time)
        })
    },
    go(e){
        console.log(e.target.dataset.url)
    }
});