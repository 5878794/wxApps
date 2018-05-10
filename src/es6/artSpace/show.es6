const regeneratorRuntime = require('./include/runtime');
const jq = require('./include/jq');
const wxApp = require('./include/wxApp');
const data = require('./include/art_space_data');
const all = require('./include/art_space_all');

global.app = wxApp;


wxApp.ready({
	data:{
		listTopData:[],
		listClassData:[]
	},
	domTop:[],
	onLoad(){
		Object.assign(this,all);
		this.allInit('show');
	},
	loadedOk(){
		let device = wxApp.device();
		this.winHeight = device.windowHeight;

		this.bindData();
		this.bindEvent();
		this.addEffect().then(rs=>console.log(rs)).catch(rs=>console.log(rs));
	},
	bindData(){
		let listData = data.show;
		this.setData({
			list:listData
		});

		let length = listData.length,
			classData = [];
		for(let i=0,l=length;i<l;i++){
			classData.push('');
		}
		this.setData({
			listClassData:classData
		});

	},
	async addEffect(){
		await this.getDomOffsetTop();
		jq(this,'list').addClass('show_list_down11');
		await wxApp.sleep(500);

		this.showDom(0);

	},
	async getDomOffsetTop(){
		let listData = data.show,
			listLength = listData.length;

		for(let i=0;i<listLength;i++){
			let p = await wxApp.getDomParam('#list_'+i);
			this.domTop.push(p.top);
		}
	},
	showDom(n){
		let data = this.data.listTopData;
		data[n] = 'opacity:1;transform:translateY(0);';

		let classData = this.data.listClassData;
		classData = classData.map(rs=>{
			return '';
		});
		classData[n] = 'select';

		this.setData({
			listTopData:data,
			listClassData:classData
		})
	},
	async scollerScroll(){
		let {top} = await wxApp.getScrollState();
		let	line_height = top + this.winHeight*3/4;

		let newDomTop = this.domTop.map(rs=>{
			return rs-line_height;
		});

		newDomTop.map((rs,i)=>{
			if(rs<=0){
				this.showDom(i);
			}
		})



	},
	bindEvent(){
		jq(this,'list').tap(function(e){
			let id = e.currentTarget.dataset.id;
			wxApp.openUrl('../show_info/index?id='+id)
		})
	}
});