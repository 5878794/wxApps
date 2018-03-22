
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init'),
	resolve = require('./include/resolve');

let page = {
	data:{
		bookId:'',
		url:'',
		bookInfo:[]
	},
	async init(opt){
		this.setData({bookId:opt.bookId});
		this.setData({url:opt.url});

		app.loading.show('极速加载');
		this.getInfoA().then(rs=>{
			app.loading.hide();
		}).catch(rs=>{
			console.log(rs)
			app.alert(rs);
			app.loading.hide();
		});



	},
	async getInfoA(){
		let html = await app.ajax({
			url:resolve.apiUrl,
			data:{
				url:resolve.wwwUrl+this.data.url
			}
		});


		let	{bookName,bookInfo} = resolve.getBookChapter(html);


		this.setData({
			bookInfo:bookInfo
		});
		app.setTitle(bookName);

	}
};

app.run(page);