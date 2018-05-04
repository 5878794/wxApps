const regeneratorRuntime = require('../../utils/runtime.js');
const jq = require('../../utils/jq.js');
const wxApp =require('../../utils/wxApp.js');
const pageFn = require('../../utils/pagePublish');

global.jq = jq;
global.app = wxApp;

Page({
    data:{
	    loading_pre:10
    },
    onLoad:function(){

    }
});