const regeneratorRuntime = require('./include/runtime');
const jq = require('./include/jq');
const wxApp = require('./include/wxApp');
const data = require('./include/art_space_data');


wxApp.ready({
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


		list:[],
		nowImgSrc:''
	},
	onLoad:function(){

		let data = this.getData();
		this.setData({
			list:data,
			nowImgSrc:data[0]
		});

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
	},
	getData(){
		return data.pavilion;
	},
	imageLoad(e){
		console.log(e.detail.width)
		console.log(e.detail.height)
	}
});