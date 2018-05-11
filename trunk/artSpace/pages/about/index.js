const regeneratorRuntime = require('./../include/runtime');
const jq = require('./../include/jq');
const wxApp = require('./../include/wxApp');
const data = require('./../include/art_space_data');
const all = require('./../include/art_space_all');


wxApp.ready({
	data:{



		banner:[],
		text:[]
	},
	onLoad:function(){
		Object.assign(this,all);
		this.allInit('about');

		let data = this.getData();
		this.setData({
			banner:data.banner,
			text:data.text
		});

		// let newMenuData = [];
		// this.data.menu1.map(rs=>{
		// let new2Menu = [];
		//    newMenuData.push(new2Menu);
		//    rs.split('').map(text=>{
		//    	new2Menu.push(text);
		//    });
		// });
		// console.log(newMenuData)
		// this.setData({menu:newMenuData});
	},
	getData(){
		return data.about;
	}
});