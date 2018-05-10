const jq = require('./jq');
const data = require('./art_space_data');
const loadImg = require('./art_space_loading_imgs');
const wxApp = require('./wxApp');
const regeneratorRuntime = require('./runtime.js');


module.exports = {
	page:null,
	loaded:0,
	//入口函数
	allInit(page,id){
		this.setData({loading_pre:'0'});
		this.showLoading();

		let imgData = loadImg(page,id);
		this.page = page;
		this.setData({
			loading_imgs:imgData
		});

		this.createMenuAnimateArray();
		this.bindMenuData(page);
		this.topEventBind();
		this.menuEventBind();
	},
	createMenuAnimateArray(){
		let menuData = data.menu,
			newData = [];

		menuData.map(rs=>{
			let _itemData = [],
				itemText = rs.name;

			itemText.split('').map(t=>{
				_itemData.push(0);
			});

			newData.push(_itemData);
		});

		this.__menu_data_back = newData;
		this.setData({
			menu_list_opacity_animate:newData
		});
	},

	bindMenuData(page){
		this.setData({
			menu:data.menu,
			nowPage:page
		});


	},

	loadingImgLoaded(){
		let length = loadImg(this.page).length,
			loaded = this.loaded + 1;
		this.loaded = loaded;

		this.setData({
			loading_pre:parseInt(loaded*100/length)
		});

		if(length == loaded){
			setTimeout(()=>{
				if(this.loadedOk){
					this.loadedOk();
				}
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
		let _this = this;
		jq(this,'home_btn').tap(function(){
			wxApp.closeAndOpenUrl('../index/index');
		});
		jq(this,'menu_btn').tap(function(){
			_this.showMenu();
		});
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
			if(_this.data.nowPage == url){return;}

			wxApp.openUrl('../'+url+'/index');
		});
	},
	showMenu(){
		let _this = this;
		_this.isHinded = false;

		// jq(_this,'menu').cssAnimateStopToEnd();
		// jq(_this,'menu_body').cssAnimateStopToEnd();
		jq(_this,'menu').css({
			display:'block'
		});

		setTimeout(function(){
			jq(_this,'menu').cssAnimate({
				background:'rgba(0,0,0,0.5)'
			},300,'linear',function(){
				_this.showMenuText();
			});
			jq(_this,'menu_body').cssAnimate({
				transform:'translateX(0)'
			},300,'linear')
		},10)
	},
	hideMenu(){
		let _this = this;
		// jq(_this,'menu').cssAnimateStopToEnd();
		// jq(_this,'menu_body').cssAnimateStopToEnd();

		setTimeout(function(){
			jq(_this,'menu').cssAnimate({
				background:'rgba(0,0,0,0)'
			},300,'linear',function(){
				jq(_this,'menu').css({
					display:'none'
				});
				_this.isHinded = true;
				setTimeout(function(){
					_this.hideMenuText();
				},100);
			});
			jq(_this,'menu_body').cssAnimate({
				transform:'translateX(100%)'
			},300,'linear')
		},10)

	},
	async showMenuText(){
		let data = this.data.menu_list_opacity_animate,
			randomArray = [],
			_this = this;

		//2唯转1唯 用于随机取值用
		for(let y=0,yl=data.length;y<yl;y++){
			for(let x=0,xl=data[y].length;x<xl;x++){
				randomArray.push({x,y});
			}
		}

		while(randomArray.length !=0){
			let n = parseInt(Math.random()*randomArray.length),
				p = randomArray.splice(n,1)[0];
			data[p.y][p.x] = 1;
			await _this.showText(data)
		}
	},
	showText(data){
		let _this= this;
		return new Promise(success=>{
			setTimeout(function(){
				_this.setData({
					menu_list_opacity_animate:data
				});
				success();
			},(_this.isHinded)?0:30)
		})
	},
	hideMenuText(){
		this.setData({
			menu_list_opacity_animate:this.__menu_data_back
		})
	}

};
