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
	],
	'about':[
		'http://bensxu.duapp.com/h5/artSpace/image/about/p1.png',
		'http://bensxu.duapp.com/h5/artSpace/image/about/p2.png',
		'http://bensxu.duapp.com/h5/artSpace/image/about/p3.png',
		'http://bensxu.duapp.com/h5/artSpace/image/about/img.png'
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
		let object;

		data.artist.map(rs=> {
			if (rs.id == id) {
				object = rs;
			}
		});

		let aa = [];
		for(let i=0,l=object.works.length;i<l;i++){
			aa.push('http://bensxu.duapp.com/h5/artSpace/'+object.works[i]);
		}
		aa.push('http://bensxu.duapp.com/h5/artSpace/'+object.image);

		return aa;

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



