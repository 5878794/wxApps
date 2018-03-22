
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init');

let page = {
	data:{
		bookList:[],
		bookId:''
	},
	async init(opt){
		let id = opt.id,
			data = app.globalData[id];

		this.setData({bookId:id});

		//设置顶部头
		app.setTitle(data.bookInfo.bookName);

		this.setData({
			bookList:data.bookList
		})


	},
	showInfo(e){
		let url = e.currentTarget.dataset.url,
			bookId = this.data.bookId;

		app.openUrl('../info/index?bookId='+bookId+'&url='+url);
		// console.log(url,bookId)
	}
};

app.run(page);