let lib = require('./fn.es6'),
	pug = require('pug'),
	fs = require('fs'),
	path = require('path'),
	glob = require("glob"),
	cheerio = require("cheerio");

let pugDir = '../src/pug/',
	wxDir = '../trunk/';

pugDir = path.join(__dirname,pugDir);
wxDir  = path.join(__dirname,wxDir);


let renderFn = function(projectName){
	//获取pug目录下跟目录中的文件夹
	console.log('编译 '+projectName+' 下的pug');
	let projectPath = lib.getProjectDirPath(pugDir,projectName);
	// console.log(projectPath);
	// console.log('------------------------');



	//获取项目下的要编译的文件
	// console.log('获取'+projectName+'项目下的pug文件');
	let files = glob.sync(projectPath+"*.pug");
	// files.map(rs=>{
	// 	console.log(rs);
	// });
	console.log('------------------------------------------------------------------------');


	files.map(filePath=>{
			//获取文件名 文件名不带后缀
		let fileName = filePath.replace(projectPath,"").split('.')[0],
			//获取源码,并根据全局参数编译
			html = pug.renderFile(
				filePath,
				{
					pretty:true
				}
			);

		//提取body中的内容
		let $ = cheerio.load(html,{decodeEntities: false}),
			titleName = $('title').text();
		$('title').remove();
		html = $('body').html();

		//根据微信app结构生成 wxml文件
		let wxFilePath = path.join(wxDir,'/'+projectName+'/pages/'+projectName+'/'+fileName+'.wxml');
		fs.writeFileSync(wxFilePath,html,function(err){
			if(err){
				console.log(filePath+'    err!');
				console.log(err);
			}
		});

		//提取title中的标题 生成json文件
		let jsonText = {navigationBarTitleText:titleName};
		jsonText = JSON.stringify(jsonText);
		//json地址路径
		let jsonFileName = path.join(wxDir,'/'+projectName+'/pages/'+projectName+'/'+fileName+'.json');
		fs.writeFileSync(jsonFileName,jsonText,function(err){
			if(err){
				console.log(filePath+'    err!');
				console.log(err);
			}
		});


		console.log('ok  '+ titleName+'   '+filePath);

	});

	console.log('------------------------------------------------------------------------');
	console.log('pug compile end');
};




var arguments = process.argv.splice(2);
arguments.map(pp=>{
	renderFn(pp);
});



