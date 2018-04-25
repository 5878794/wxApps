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
		//正则解析html中含id的标签头
		let ids = html.match(/(?<=\bid\s*=\s*[\'\"]\s*)[a-z0-9_-]+(?=[\'\"])/ig);

		//给带id的元素自动添加变量
		addJQ($,ids);

		//获取添加变量后的html
		html = $('body').html();

		//闭合input标签
		// '<img src="1.jpg">'.replace(/(<img.*?)>/gi ,"$1 />")
		html = html.replace(/(<input.*?)>/gi ,"$1 />");

		//闭合image
		html = html.replace(/<img(.*?)>/gi ,"<image $1 />");



		//生成目录
		let createPath = path.join(wxDir,'/'+projectName+'/pages/'+fileName+'/');

		if(!fs.existsSync(createPath)){
			let pPath = path.join(wxDir,'/'+projectName+'/pages/');
			if(!fs.existsSync(pPath)){
				fs.mkdirSync(pPath, '0777');
			}
			fs.mkdirSync(createPath, '0777');
		}



		//根据微信app结构生成 wxml文件
		let wxFilePath = path.join(wxDir,'/'+projectName+'/pages/'+fileName+'/'+'index.wxml');
		fs.writeFileSync(wxFilePath,html,function(err){
			if(err){
				console.log(filePath+'    err!');
				console.log(err);
			}
		});


		//根据ids生成jq需要的附加data文件
		// let jqFilePath = path.join(wxDir,'/'+projectName+'/pages/'+fileName+'/'+'jq_data.js'),
		// 	jq_data_text = createDataText(ids);
		// fs.writeFileSync(jqFilePath,jq_data_text,function(err){
		// 	if(err){
		// 		console.log(filePath+'    err!');
		// 		console.log(err);
		// 	}
		// });


		//提取title中的标题 生成json文件
		let jsonText = {navigationBarTitleText:titleName};
		jsonText = JSON.stringify(jsonText);
		//json地址路径
		let jsonFileName = path.join(wxDir,'/'+projectName+'/pages/'+fileName+'/'+'index.json');

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


var addJQ = function($,ids){


	ids.map(id=>{
		let obj = $('#'+id),
			_class = obj.attr('class') || '',
			_style = obj.attr('style') || '';

		obj.attr({
			class:_class+' {{__jq.'+id+'.class}}',
			style:_style+' {{__jq.'+id+'.style}}',
			data:'{{__jq.'+id+'.data}}',
			animation:'{{__jq.'+id+'.animation}}',
		});
	});



};

var createDataText = function(ids){
	let data = {};
	ids.map(id=>{
		data[id] = {
			animation:'',
			class:'',
			style:'',
			data:'',
		};
	});
	let tt = {__jq:data};
	let text = 'module.exports='+JSON.stringify(tt)+'';

	return text;
};


var arguments = process.argv.splice(2);
arguments.map(pp=>{
	renderFn(pp);
});



