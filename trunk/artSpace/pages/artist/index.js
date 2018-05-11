const regeneratorRuntime = require('./../include/runtime');
const jq = require('./../include/jq');
const wxApp = require('./../include/wxApp');
const data = require('./../include/art_space_data');
const all = require('./../include/art_space_all');

wxApp.ready({
	data:{
		list:[],
		listTopData:[],
		listClassData:[]
	},
	domTop:[],
	loadedOk:function(){
		let device = wxApp.device();
		this.winHeight = device.windowHeight;

		let data = this.getData();
		this.setData({
			list:data
		});


		let length = data.length,
			classData = [];
		for(let i=0,l=length;i<l;i++){
			classData.push('');
		}
		this.setData({
			listClassData:classData
		});

		this.bindEvent();
		this.addEffect().then(rs=>console.log(rs)).catch(rs=>console.log(rs));

	},
	onLoad:function(){
		Object.assign(this,all);
		this.allInit('artist');

	},
	getData(){
		return data.artist;
	},
	async addEffect(){
		await this.getDomOffsetTop();
		jq(this,'list').addClass('show_list_down11');
		await wxApp.sleep(500);

		this.showDom(0);

	},
	async getDomOffsetTop(){
		let listData = data.artist,
			listLength = listData.length;

		for(let i=0;i<listLength;i++){
			let p = await wxApp.getDomParam('#list_'+i);
			this.domTop.push(p.top);
		}
	},
	showDom(n){
		let data = this.data.listTopData;
		data[n] = 'opacity:1;transform:translateY(0);';

		this.setData({
			listTopData:data
		})
	},
	async scollerScroll(){
		let {top} = await wxApp.getScrollState();
		let	line_height = top + this.winHeight*3/4;

		let newDomTop = this.domTop.map(rs=>{
			return rs-line_height;
		});

		newDomTop.map((rs,i)=>{
			if(rs<=0){
				this.showDom(i);
			}
		})
	},
	bindEvent(){
		jq(this,'list').tap(function(e){
			let id = e.currentTarget.dataset.id;
			wxApp.openUrl('../artist_info/index?id='+id)
		})
	},

	pageScrollInterval(){
		let _this = this;

		this.inter = setInterval(function(){
			_this.scollerScroll().then(rs=>{console.log(rs)}).catch(rs=>console.log(rs));
		},100);

		this.setTimer = setTimeout(function(){
			clearInterval(_this.inter);
			_this.inter = null;
			_this.setTimer = null;
		},2000);
	},
	pageScrollClearInterval(){
		if(this.inter){
			clearInterval(this.inter);
		}
		if(this.setTimer){
			clearTimeout(this.setTimer);
		}
	}

});