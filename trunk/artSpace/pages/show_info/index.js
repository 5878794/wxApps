const regeneratorRuntime = require('./../include/runtime');
const jq = require('./../include/jq');
const wxApp = require('./../include/wxApp');
const data = require('./../include/art_space_data');
const all = require('./../include/art_space_all');

global.jq = jq;

wxApp.ready({
	data:{
		title:'',
		title1:'',
		address:[],
		name:'',
		date:'',
		imgUrl:'',
		info:[]
	},
	loadedOk:function(){

	},
	onLoad:function(opt){
		Object.assign(this,all);
		this.allInit('show_info',opt.id);

		let data = this.getPageData(opt.id);
		this.setData({
			title:data.name,
			title1:data.info,
			address:data.address,
			name:data.organizer,
			date:data.time,
			imgUrl:data.img,
			info:data.text
		});

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

