const jq = require('./jq');
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
	}
};
