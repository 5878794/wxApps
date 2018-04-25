const regeneratorRuntime = require('../../utils/libs/runtime.js');
const jq = require('../../utils/libs/jq.js'); 
global.jq = jq;
Page({
    data:{
        
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
    }
});