const regeneratorRuntime = require('./include/runtime');
const jq = require('./include/jq');
const wxApp = require('./include/wxApp');
const data = require('./include/art_space_data');


wxApp.ready({
	onLoad:function(){
		console.log(123)
	}
});