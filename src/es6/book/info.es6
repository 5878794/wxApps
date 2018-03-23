
const regeneratorRuntime = require('regenerator-runtime');

let app = require('./include/init'),
	resolve = require('./include/resolve');


let page = {
	data:{
		bookId:'',
		url:'',
		bookInfo:[],
		showSet:'none',
		showSetFont:'none',
		fontSize:30,
		showSetBg:'none',
		background:'#fff',
		bgColors:[
			'rgb(145, 175, 132)',
			'rgb(191, 191, 181)',
			'rgb(148, 122, 122)',
			'rgb(103, 157, 204)',
			'rgb(255, 255, 255)'
		]
	},
	async init(opt){
		this.setData({bookId:opt.bookId});
		this.setData({url:opt.url});

		await this.getCacheReadSet();


		app.loading.show('极速加载');
		this.getInfoA().then(rs=>{
			app.loading.hide();
		}).catch(rs=>{
			console.log(rs)
			app.alert(rs);
			app.loading.hide();
		});



	},
	//获取页面缓存设置
	async getCacheReadSet(){
		let set = await app.getLocalData('pageReadSet') || {};

		let bg = set.background || '#fff',
			fs = set.fontSize || '30';

		this.setData({
			background:bg,
			fontSize:fs
		})
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

	},

	//显示设置
	showSet(){
		this.setData({
			showSetFont:'none',
			showSetBg:'none',
			showSet:(this.data.showSet == 'none')? 'flex': 'none'
		});
	},

	//显示字体设置
	showFontSet(){
		this.setData({
			showSetBg:'none',
			showSetFont:(this.data.showSetFont == 'none')? 'flex': 'none'
		});
	},

	//显示背景色设置
	showBgSet(){
		this.setData({
			showSetFont:'none',
			showSetBg:(this.data.showSetBg == 'none')? 'flex' : 'none'
		})
	},

	//下一章
	showNext(){
		this.setData({
			showSetFont:'none',
			showSetBg:'none'
		});

		//TODO

	},

	//减小字体
	fontLess(){
		let fs = this.data.fontSize - 1;
		fs = (fs<30)? 30 : fs;
		fs = (fs>50)? 50 : fs;

		this.setData({
			fontSize:fs
		});

		app.setLocalData('pageReadSet',{
			background:this.data.background,
			fontSize:fs
		});
	},

	//增加字体
	fontAdd(){
		let fs = this.data.fontSize + 1;
		fs = (fs<30)? 30 : fs;
		fs = (fs>50)? 50 : fs;

		this.setData({
			fontSize:fs
		});

		app.setLocalData('pageReadSet',{
			background:this.data.background,
			fontSize:fs
		});
	},

	//设置背景
	changeBg(e){
		let target = e.currentTarget,
			bg = target.dataset.bg;

		this.setData({
			background:bg
		});

		app.setLocalData('pageReadSet',{
			background:bg,
			fontSize:this.data.fontSize
		});
	}
};

app.run(page);