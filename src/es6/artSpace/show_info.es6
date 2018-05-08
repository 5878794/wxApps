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

		title:'',
		title1:'',
		address:[],
		name:'',
		date:'',
		imgUrl:'',
		info:[]



	},
	onLoad:function(opt){

		let data = this.getPageData(opt.id);
		this.setData({
			title:data.name,
			title1:data.info,
			address:data.address,
			name:data.organizer,
			date:data.time,
			imgUrl:'../../'+data.img,
			info:data.text
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
	getPageData(id){
		id = id || 1;
		let pageData = null;
		data.show.map(rs=>{
			if(rs.id == id){
				pageData = rs;
			}
		});

		return pageData;
	}
});