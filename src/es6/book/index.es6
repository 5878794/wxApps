
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init'),
	resolve = require('./include/resolve');



let page = {
	data:{
		pageIsRun:false,
		bookList:[
			// {id:1,name:'aa',notReadNumber:10,url:''},
			// {id:2,name:'bb',notReadNumber:33,url:''}
		]
	},
	async init(){
		await this.createBookList();
		this.setData({
			pageIsRun:true
		});


	},
	onShow(){
		if(this.data.pageIsRun){
			this.createBookList();
		}
	},
	async createBookList(){
		//获取列表
		let data = await app.getLocalData('bookList') || [];
		//获取未读数
		data = await this.getNotRead(data);

		//数据存缓存
		data.map(rs=>{
			app.globalData[rs.id] = {
				bookId:rs.id,
				bookInfo:rs.bookInfo,
				bookList:rs.bookList
			};
		});

		this.setData({
			bookList:data
		})
	},
	async getNotRead(data){
		let readList = await app.getLocalData('readList') || {};

		data.map(rs=>{
			let id = rs.id,
				list = rs.bookList,
				readed = readList[id];

			if(readed){
				let n = 0;
				for(let i=0,l=list.length;i<l;i++){
					if(list[i].url == readed){
						n = i+1;
						break;
					}
				}
				rs.notReadNumber = list.length - n;
			}else{
				rs.notReadNumber = rs.bookList.length;
			}
		});

		return data;
	},
	async search(){
		app.openUrl('../search/index')
	},
	refresh(){
		app.loading.show('极速加载中');
		this._refresh().then(rs=>{
			app.loading.hide();
			app.info.show('更新成功');
		}).catch(rs=>{
			app.loading.hide();
			console.log(rs);
			app.alert(rs);
		});

	},
	async _refresh(){
		let data = await app.getLocalData('bookList') || [],
			nowTime = new Date().getTime();

		for(let i=0,l=data.length;i<l;i++){
			//更新30分钟内未更新的
			if(nowTime - data[i].refreshTime > 30*60*1000){
				let id = data[i].id;

				await this.updateBook(id);
			}
		}

		await this.createBookList();

	},

	async updateBook(search){
		let html = await app.ajax({
				url:resolve.apiUrl,
				data:{
					url:resolve.wwwUrl+search+'/'
				}
			}),
			{bookList} = resolve.getBookInfo(html);

		let old = await app.getLocalData('bookList') || [];

		old.map(rs=>{
			if(rs.id == search){
				rs.bookList = bookList;
				rs.refreshTime = new Date().getTime();
			}
		});

		await app.setLocalData('bookList',old);

		return true;
	},


	openList(e){
		let target = e.currentTarget,
			id = target.dataset.id;

		app.openUrl('../list/index?id='+id);
	}
};



app.run(page);


