//兼容es7
const regeneratorRuntime = require('regenerator-runtime');
const app = getApp();

let fn = {
	alert(){

	}
};


Object.assign(app,fn);
module.exports = app;