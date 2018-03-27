
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init');

let page = {
	data:{
		pageIsRun:false,
		bookList:[],
		bookId:'',
		search:'none',
		bookName:'',
		bookInfo:''
	},
	async init(opt){
		let id = opt.id,
			data = app.globalData[id],
			isFromSearch = opt.search || 0;
		isFromSearch = (isFromSearch == 1);

		//判断是否显示添加按钮
		if(isFromSearch){
			this.checkIsShowAddBtn(id);
		}

		this.setData({bookId:id});




		//设置顶部头
		this.setData({
			bookInfo:data.bookInfo,
			bookName:data.bookInfo.bookName
		});
		app.setTitle(data.bookInfo.bookName);

		await this.handlerReadedList(data,id);

		//判断是否是非正常关闭
		let readCatch = await app.getLocalData('readUrlCatch');
		if(readCatch){
			let id = readCatch.id,
				url = readCatch.url;
			app.openUrl('../info/index?bookId='+id+'&url='+url);
		}

	},
	async checkIsShowAddBtn(bookId){
		let allBook = await app.getLocalData('bookList') || [],
			isFind = false;

		allBook.map(rs=>{
			if(rs.id == bookId){
				isFind = true;
			}
		});

		let isShow = (isFind)? 'none' : 'block';
		this.setData({search:isShow});
	},
	showInfo(e){
		let url = e.currentTarget.dataset.url,
			bookId = this.data.bookId;

		app.openUrl('../info/index?bookId='+bookId+'&url='+url);
		// console.log(url,bookId)
	},

	async onShow(){
		if(this.data.pageIsRun){
			let id = this.data.bookId,
				data = app.globalData[id];
			this.handlerReadedList(data,id).then().catch();
			app.delLocalData('readUrlCatch');
		}else{
			this.setData({pageIsRun:true});
		}


	},

	async handlerReadedList(data,id){
		//获取已读的缓存列表
		let nowCatch = await app.getLocalData('readList') || {};
		let nowReadUrl = nowCatch[id] || '';

		let isFind = false,
			n = 0;
		data.bookList.map((rs,i)=>{
			if(!nowReadUrl){
				rs.color = '#333';
			}else{
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
			}
		});


		this.setData({
			bookList:data.bookList
		});


		setTimeout(async function(){
			let domParam = await app.getDomParam('.list'),
				domHeight = domParam.height;
			//

			app.scrollTo((n-2)*domHeight,100);
		},500)



	},

	//添加书籍到书架
	addBook(){
		this.addBook_().then(rs=>{
			//隐藏添加按钮
			this.setData({
				search:'none'
			});
			app.info.show('数据添加成功');
		}).catch(rs=>{
			console.log(rs);
			app.info.show(rs);
		});
	},
	async addBook_(){
		let old = await app.getLocalData('bookList') || [];
		old.push({
			id:this.data.bookId,
			bookList:this.data.bookList,
			name:this.data.bookName,
			bookInfo:this.data.bookInfo,
			refreshTime:new Date().getTime()
		});

		await app.setLocalData('bookList',old);
	}
};

app.run(page);