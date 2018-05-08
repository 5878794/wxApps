const regeneratorRuntime = require('./include/runtime');
const jq = require('./include/jq');
const wxApp = require('./include/wxApp');
const data = require('./include/art_space_data');
const all = require('./include/art_space_all');


wxApp.ready({
	data:{

	},
	onLoad:function(){
		Object.assign(this,all);
		this.allInit('index');

		this.addEvent();
	},
	addEvent(){
		let _this = this;
		jq(_this,'open').tap(function(){
			jq(_this,'menu').css({
				display:'block'
			});

			setTimeout(function(){
				jq(_this,'menu').cssAnimate({
					background:'rgba(0,0,0,0.5)'
				},500,'linear',function(){
					jq(_this,'menu_body').cssAnimate({
						transform:'translateX(0)'
					},500,'linear')
				});
			},10)


		});
	}
});