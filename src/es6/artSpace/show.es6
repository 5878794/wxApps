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
		this.allInit('show');

	}
});