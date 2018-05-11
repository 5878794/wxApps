const regeneratorRuntime = require('./../include/runtime');
const jq = require('./../include/jq');
const wxApp = require('./../include/wxApp');
const data = require('./../include/art_space_data');
const all = require('./../include/art_space_all');


wxApp.ready({
	data:{
		list:{
			text:[],
			name:'',
			works:[]
		},
		listTopData:[]
	},
	domTop:[],
	loadedOk:function(){
		this.setData({
			list:this.pageData
		});

		let device = wxApp.device();
		this.winHeight = device.windowHeight;

		this.addEffect().then(rs=>console.log(rs)).catch(rs=>console.log(rs));
		this.bindEvent();
	},
	onLoad:function(opt){
		if(!opt.id){
			opt.id = 2;
		}

		Object.assign(this,all);
		this.allInit('artist_info',opt.id);


		this.pageData = this.getPageData(opt.id);

	},
	getPageData(id){
		id = id || 2;
		let pageData = null;
		data.artist.map(rs=>{
			if(rs.id == id){
				pageData = rs;
			}
		});

		return pageData;
	},
	async addEffect(){
		await this.getDomOffsetTop();
		jq(this,'list').addClass('show_list_down11');
		await wxApp.sleep(500);

		this.showDom(0);

	},
	async getDomOffsetTop(){
		let listData = this.pageData.works,
			listLength = listData.length;

		for(let i=0;i<listLength;i++){
			let p = await wxApp.getDomParam('#list_'+i);
			this.domTop.push(p.top);
		}
	},
	showDom(n){
		let data1 = this.data.listTopData;
		data1[n] = 'opacity:1;transform:translateY(0);';

		this.setData({
			listTopData:data1
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
	},
	bindEvent(){
		let _this = this;
		jq(this,'show_text_arrow').tap(function(){
			if(jq(_this,'show_text').hasClass('select')){
				jq(_this,'show_text').removeClass('select');
			}else {
				jq(_this, 'show_text').addClass('select');
			}
		})
	}
});