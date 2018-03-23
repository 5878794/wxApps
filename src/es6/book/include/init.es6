const regeneratorRuntime = require('regenerator-runtime');
const app = getApp();

let fn = {
	run(page){
		//转换onload函数
		page.onLoad = function(opt){
			this.init(opt).then().catch(rs=>{
				console.log(rs);
				if(typeof rs == 'string'){
					app.alert(rs);
				}else{
					app.alert(JSON.stringify(rs));
				}
			});
		};

		//自动带上input的数据绑定功能
		//input的 id、name、{{value}} 三个值设置成一样的
		//input 加 bindinput = 'inputChange'
		page.inputChange = function(e){
			let id = e.target.id,
				val = e.detail.value,
				newObj = {};

			newObj[id] = val;

			//this 指向page对象
			this.setData(newObj);
		};


		Page(page);
	},


	//ajax  promise
	//opt={
	//  url:'',
	//  data:{}
	// }
	ajax(opt){
		return new Promise((success,error)=>{
			wx.request({
				url: opt.url,
				dataType:'json',
				data: JSON.stringify(opt.data),
				method: "post",
				success: function (rs) {
					rs = rs.data;
					success(rs.html)
				},
				error: function (rs) {
					error(rs);
				}
			})
		});
	},


	//获取某个url的html内容
	async getUrlHtml(url){
		return await this.ajax({
			url:'https://bensxu.duapp.com/book/api/getHtml',
			data:{
				url:url
			}
		})
	},


	//alert promise
	//@param:msg     str
	//@param:title   str
	alert(msg,title){
		msg = (typeof msg == 'string')? msg : JSON.stringify(msg);

		return new Promise(success=>{
			title = title || "系统提示";
			wx.showModal({
				title:title,
				content:msg,
				showCancel:false,
				confirmText:"确定",
				success:function(){
					success();
				}
			})
		});
	},


	//info.show(text);
	//info.hide()
	info:{
		show(msg){
			wx.showToast({
				title: msg,
				icon: 'none',
				duration: 2000
			})
		},
		hide(){
			wx.hideToast()
		}
	},


	//loading.show(text)
	//loading.hide();
	loading:{
		show:function(text='极速加载中'){
			wx.showLoading({
				title:text,
				mask:true
			});
		},
		hide:function(){
			wx.hideLoading();
		}
	},


	//设置标题
	//#param:title  str
	setTitle(title){
		wx.setNavigationBarTitle({
			title: title,
		})
	},

	//设置顶部系统条颜色
	//@param  fontColor:str   '#ffffff'
	//@param  bgColor:str     '#ffffff'
	//注意其中fontColor 只能是#ffffff 或  #000000
	setNavigationBarColor(fontColor,bgColor){
		wx.setNavigationBarColor({
			frontColor: fontColor,
			backgroundColor: bgColor,
			animation: {
				duration: 0,
				timingFunc: 'easeIn'
			}
		})
	},


	//打开新页面
	//@param:url   str
	openUrl(url){
		wx.navigateTo({ url: url });
	},
	//返回前几页
	//@param  number:number
	goBack(number = 1){
		wx.navigateBack({
			delta: number
		})
	},


	//打电话
	//@param:tel   number
	tel(tel){
		wx.makePhoneCall({
			phoneNumber:tel
		})
	},


	//本地数据缓存  promise 一堆
	//10M空间
	//@param   key:str
	//@param   val:str/obj
	setLocalData(key,val){
		return new Promise((success,error)=>{
			wx.setStorage({
				key:key,
				data:val,
				success:function(){
					success();
				},
				error:function(msg){
					error(msg);
				}
			})
		});
	},
	//@param   key:str
	getLocalData(key){
		return new Promise(success=>{
			wx.getStorage({
				key:key,
				complete:function(obj){
					obj = obj || {};
					obj = obj.data || '';
					success(obj)
				}
			})
		});
	},
	//@param   key:str
	delLocalData(key){
		return new Promise(success=>{
			wx.removeStorage({
				key: key,
				success: function(res) {
					success();
				}
			})
		})
	},
	//清除所有缓存
	clearLocalData(){
		wx.clearStorageSync();
	},


	//滚动页面到指定位置
	scrollTo(top=0,duration=300){
		wx.pageScrollTo({
			scrollTop: top,
			duration: duration
		})
	},

	//获取指定元素的实际属性
	//如果传入的是class获取的是第一个找到的class的dom的属性
	//@param:id    .class/#id
	getDomParam(id){
		return new Promise(success=>{
			let query = wx.createSelectorQuery();
			query.select(id).boundingClientRect();
			query.exec(function (res) {
				if(res[0]){
					success(res[0]);
				}
			})
		})
	}

};


Object.assign(app,fn);
module.exports = app;