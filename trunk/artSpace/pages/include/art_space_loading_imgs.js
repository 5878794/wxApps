let data = require('./art_space_data');

let aa = {
	'index':[
		'../../image/arrow.png',
		'../../image/close.png',
		'../../image/logo.png',
		'../../image/menu.png',
		'../../image/index/title.png',
		'http://bensxu.duapp.com/h5/artSpace/image/index/bg.png'
	],
	'show':[
		'http://bensxu.duapp.com/h5/artSpace/image/show/1.jpg'
	]
};


module.exports = function(page,id){
	if(page == 'show_info'){
		let src = '';
		data.show.map(rs=>{
			if(rs.id == id){
				src = 'http://bensxu.duapp.com/h5/artSpace/'+rs.img;
			}
		});
		return [src];

	}else if(page == 'artist_info') {
		let src = [];
		data.artist.map(rs=> {
			if (rs.id == id) {
				src = JSON.parse(JSON.stringify(rs.works));
				src.push(rs.image);
			}
		});

		return src;

	}else if(page == 'artist'){
		let src = [];
		data.artist.map(rs=>{
			src.push('http://bensxu.duapp.com/h5/artSpace/'+rs.image)
		});

		return src;

	}else{
		return aa[page];
	}
};



