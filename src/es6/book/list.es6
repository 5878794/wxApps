
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init');

let page = {
	data:{
		pageIsRun:false,
		bookList:[],
		bookId:''
	},
	async init(opt){
		let id = opt.id,
			data = app.globalData[id];

		this.setData({bookId:id});
		this.setData({pageIsRun:true});

		await this.handlerReadedList(data,id);

		//设置顶部头
		app.setTitle(data.bookInfo.bookName);




	},
	showInfo(e){
		let url = e.currentTarget.dataset.url,
			bookId = this.data.bookId;

		app.openUrl('../info/index?bookId='+bookId+'&url='+url);
		// console.log(url,bookId)
	},

	onShow(){

		if(this.data.pageIsRun){
			let id = this.data.bookId,
				data = app.globalData[id];
			this.handlerReadedList(data,id).then().catch();
		}
	},

	async handlerReadedList(data,id){
		//获取已读的缓存列表
		let nowCatch = await app.getLocalData('readList') || {};
		let nowReadUrl = nowCatch[id] || '';

		let isFind = false,
			n = 0;
		data.bookList.map((rs,i)=>{
			if(!isFind){
				if(rs.url == nowReadUrl){
					isFind = true;
					n = i;
					rs.color = '#ccc';
				}else{
					rs.color = '#ccc';
				}
			}else{
				rs.color = '#333';
			}
		});


		this.setData({
			bookList:data.bookList
		});


		let domParam = await app.getDomParam('.list'),
			domHeight = domParam.height;
		//
		app.scrollTo((n-2)*domHeight,0);
	}
};

app.run(page);