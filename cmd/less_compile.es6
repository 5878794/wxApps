// lessc --modify-var="isWxApp=true"  ./src/less/index.less ./index.css

// lessc --functions --modify-var="isWxApp=false"   ./src/less/index.less ./index.css



let lib = require('./fn.es6'),
	fs = require('fs'),
	path = require('path'),
	glob = require("glob"),
	exec = require('child_process').exec;


let lessDir = path.join(__dirname,'../src/less/'),
	wxDir = path.join(__dirname,'../trunk/');


let runExec = function(cmdText){
	exec(cmdText,function(err,stdout,stderr){
		if(err) {
			console.log(err.toString())
		} else {

		}
	})
};


let renderFn = function(projectName){

	console.log('编译 '+projectName+' 下的less');
	let projectPath = lib.getProjectDirPath(lessDir,projectName);
	console.log('------------------------------------------------------------------------');


	let entryFiles = glob.sync(projectPath+"*.less");

	entryFiles.map(filePath=>{
		let fileName = filePath.replace(projectPath,"").split('.')[0],
			outPath = path.join(wxDir,'/'+projectName+'/pages/'+projectName+'/'+fileName+'.wxss'),
			cmdText = 'lessc '+filePath+' ' +outPath;

		runExec(cmdText);

		console.log('ok  ' +filePath);
	});

	console.log('------------------------------------------------------------------------');
	console.log('less compile end');
};


var arguments = process.argv.splice(2);
arguments.map(pp=>{
	renderFn(pp);
});

