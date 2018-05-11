const regeneratorRuntime = require('./../include/runtime');
const jq = require('./../include/jq');
const wxApp = require('./../include/wxApp');
const data = require('./../include/art_space_data');
const all = require('./../include/art_space_all');


wxApp.ready({
	data:{



		list:[],
		nowImgSrc:'',
		imgStyle:'',
		divStyle:''
	},
	now:0,
	onLoad:function(){
		Object.assign(this,all);
		this.allInit('gallery');


		let data = this.getData();
		this.imgDatas = data;
		this.setData({
			list:data,
			nowImgSrc:data[0]
		});

		this.device = wxApp.device();

		this.bindEvent();
	},
	getData(){
		return data.pavilion;
	},
	imageLoad(e){
		let winW = this.device.windowWidth,
			winH = this.device.windowHeight,
			imgW = e.detail.width,
			imgH = e.detail.height,
			newImgW = winH*imgW/imgH,
			left = (newImgW-winW)/2;
		this.left = left;
		this.setData({
			imgStyle:'width:'+newImgW+'px;height:'+winH+'px;position:relative;left:-'+left+'px;'
		});
	},
	bindEvent(){
		let _this = this;
		wx.onAccelerometerChange(function(res) {
			if(_this.left<0){return;}

			let left = -_this.left*res.x;
			_this.setData({
				divStyle:'transform:translateX('+left+'px)'
			})
		});

		jq(this,'left_btn').tap(function(){
			_this.now--;
			_this.changeImg();
		});
		jq(this,'right_btn').tap(function(){
			_this.now++;
			_this.changeImg();
		});
	},
	changeImg(){
		let now = this.now,
			all = this.data.list.length;
		now = (now>=all)? 0 : now;
		now = (now<0)? all-1 : now;
		this.now = now;
		this.setData({
			nowImgSrc:this.imgDatas[now]
		})

	}
});