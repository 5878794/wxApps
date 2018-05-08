const regeneratorRuntime = require('../../utils/runtime.js');
const jq = require('../../utils/jq.js');
const wxApp =require('../../utils/wxApp.js');
const pageFn = require('../../utils/pagePublish');
const data = require('../../utils/art_space_data');


global.jq = jq;
global.app = wxApp;

Page({
	data:{
		loading_pre:10,
		menu:[
			{name:'HOME PAGE',url:'111'},
			{name:'ART SHOW',url:'222'},
			{name:'ARTIST',url:'333'},
			{name:'GALLERY',url:'444'},
			{name:'ABOUT AURA',url:'555'},
			{name:'CONTACT',url:'666'}
		],



	},
	onLoad:function(){


		// let newMenuData = [];
		// this.data.menu1.map(rs=>{
		// let new2Menu = [];
		//    newMenuData.push(new2Menu);
		//    rs.split('').map(text=>{
		//    	new2Menu.push(text);
		//    });
		// });
		// console.log(newMenuData)
		// this.setData({menu:newMenuData});
	}
});