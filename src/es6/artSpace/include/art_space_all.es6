const jq = require('./jq');
const data = require('./art_space_data');
const loadImg = require('./art_space_loading_imgs');

module.exports = {
	page:null,
	loaded:0,
	//入口函数
	allInit(page){
		this.setData({loading_pre:'0'});
		this.showLoading();
		let imgData = loadImg[page];
		this.page = page;
		this.setData({
			loading_imgs:imgData
		});

		this.bindMenuData();
		this.topEventBind();
		this.menuEventBind();
	},
	bindMenuData(){
		this.setData({
			menu:data.menu
		});


	},

	loadingImgLoaded(){
		let length = loadImg[this.page].length,
			loaded = this.loaded + 1;
		this.loaded = loaded;

		this.setData({
			loading_pre:parseInt(loaded*100/length)
		});

		if(length == loaded){
			setTimeout(()=>{
				this.hideLoading();
			},500);
		}

	},
	showLoading(){
		jq(this,'loading').css({
			display:'flex',
			opacity:1
		});
	},
	hideLoading(){
		jq(this,'loading').css({
			display:'none'
		});
		jq(this,'page').cssAnimate({
			opacity:1
		},500);
	},

	topEventBind(){

	},

	menuEventBind(){
		let _this = this;
		jq(this,'menu').tap(function(){
			_this.hideMenu();
		});
		jq(this,'menu_body').tap(function(){

		});
		jq(this,'menu_close').tap(function(){
			_this.hideMenu();
		});

		jq(this,'menu_list').tap(function(e){
			let url = e.currentTarget.dataset.url;
			console.log(url)

		});
	},
	showMenu(){
		let _this = this;
		jq(_this,'menu').css({
			display:'block'
		});

		setTimeout(function(){
			jq(_this,'menu').cssAnimate({
				background:'rgba(0,0,0,0.5)'
			},500,'linear',function(){
				jq(_this,'menu_body').cssAnimate({
					transform:'translateX(0)'
				},500,'linear')
			});
		},10)
	},
	hideMenu(){
		let _this = this;
		jq(_this,'menu').cssAnimate({
			background:'rgba(0,0,0,0)'
		},500,'linear',function(){
			jq(_this,'menu').css({
				display:'none'
			});
		});
		jq(_this,'menu_body').cssAnimate({
			transform:'translateX(100%)'
		},500,'linear')
	}

};
