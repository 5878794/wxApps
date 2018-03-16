
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init'),
	resolve = require('./include/resolve');

let page = {
	data:{
		search:'',
		bookData:{},
		bookList:[],
		showBookList:false
	},
	onShow(){
		app.setTitle('aaa');
	},
	async init(){



	},
	searchVal(){
		app.loading.show('加载中');
		this.searchVal_().then(rs=>{
			app.loading.hide();
		}).catch(rs=>{
			app.loading.hide();
			console.log('err');
			app.alert(rs);
		})
	},
	async searchVal_(){
		let search = this.data.search,
			html = await app.ajax({
				url:resolve.apiUrl,
				data:{
					url:resolve.wwwUrl+search+'/'
				}
			}),
			{bookData,bookList} = resolve.getBookInfo(html);

		if(bookList.length != 0){
			this.setData({
				showBookList:true,
				bookData:bookData,
				bookList:bookList
			})
		}else{
			this.setData({
				showBookList:false,
				bookData:{},
				bookList:[]
			})
		}


		app.globalData[search] = {
			bookId:search,
			bookInfo:bookData,
			bookList:bookList
		};

		return true;
	},

	showList(e){
		let id = e.currentTarget.dataset.bookid;
		app.openUrl('../list/index?id='+id);
	}
};


app.run(page);