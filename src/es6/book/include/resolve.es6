
let cheerio = require('cheerio');



module.exports = {
	apiUrl:'https://bensxu.duapp.com/book/api/getHtml',
	wwwUrl:'http://www.biquge.tw/',
	getBookInfo(html){
		let $ = cheerio.load(html,{decodeEntities: false});

		let bookName = $('#info').find('h1').text(),
			author = $('#info').find('p').eq(0).text().replace(/ /ig,'').replace(/\n/ig,''),
			info = $('#intro').text().replace(/[\n\r]/ig,'');

		let bookList = [];

		$('#list').find('dd').each(function(){
			bookList.push({
				name:$(this).text(),
				url:$(this).find('a').attr('href')
			});
		});




		return {
			bookData:{
				bookName,author,info
			},
			bookList
		};
	}
};