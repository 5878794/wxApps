
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init');



let page = {
	data:{
		bookList:[
			{id:1,name:'aa',notReadNumber:10,url:''},
			{id:2,name:'bb',notReadNumber:33,url:''}
		]
	},
	async init(){
		await this.createBookList();


	},
	async createBookList(){
		let data = await app.getLocalData('bookList') || [];
		this.setData({
			bookList:data
		})
	},
	async search(){
		app.openUrl('../search/index')
	},
	async refresh(){

	}
};



app.run(page);


