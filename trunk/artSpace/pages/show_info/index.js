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
		let data = this.getPageData(this.opt.id);
		this.setData({
			title:data.name,
			title1:data.info,
			address:data.address,
			name:data.organizer,
			date:data.time,
			imgUrl:data.img,
			info:data.text
		});

		this.bindEvent();
	},
	onLoad:function(opt){
		opt = (opt.id)? opt : {id:1};
		this.opt = opt;
		Object.assign(this,all);
		this.allInit('show_info',opt.id);



	},
	getPageData(id){
		let pageData = null;
		data.show.map(rs=>{
			if(rs.id == id){
				pageData = rs;
			}
		});

		return pageData;
	},
	bindEvent(){
		jq(this,'go_action').tap(function(){
			wxApp.openUrl('../contact/index')
		});
	},
	pageScroll(){
		this.scrollEffect().then(rs=>{console.log(rs)}).catch(rs=>console.log(rs));

	},
	pageScrollInterval(){
		let _this = this;

		this.inter = setInterval(function(){
			_this.scrollEffect().then(rs=>{console.log(rs)}).catch(rs=>console.log(rs));
		},10);

		this.setTimer = setTimeout(function(){
			clearInterval(_this.inter);
			_this.inter = null;
			_this.setTimer = null;
		},5000);
	},
	pageScrollClearInterval(){
		if(this.inter){
			console.log('clear in')
			clearInterval(this.inter);
		}
		if(this.setTimer){
			console.log('clear time')
			clearTimeout(this.setTimer);
		}

	},
	async scrollEffect(){
		let {top} = await wxApp.getScrollState(),
			opacity = (300-top)/300;

		opacity = (opacity<0)? 0 : opacity;
		opacity = (opacity>1)? 1 : opacity;

		if(top>=0){
			jq(this,'texts').cssAnimate({
				transform:'translateY('+top/3+'px)',
				opacity:opacity
			},50)
		}
	}
});

