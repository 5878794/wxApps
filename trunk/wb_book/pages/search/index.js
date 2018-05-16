//index.js
//获取应用实例
const app = getApp();

Page({
	data: {
		//搜索框
		search:'',
		//书列表
		list:[],
		//搜索记录
		history:[
			'阿道夫','阿道夫','阿道夫','阿道夫','阿道夫','阿道夫','阿道夫','阿道夫',
			'阿道夫3','阿道夫3','阿道夫5','阿道夫打发','阿道夫','阿道夫','阿道夫'
		]


	},
	onLoad: function () {
		let bookData = {
			id:'1',
			//书的图片
			img:'https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3545401083,2251952841&fm=77&w_h=121_75&cs=2008984878,1171842780',
			//书名
			name:'书名1书名1书名1书名1',
			//类别名
			typeName:'穿越古装',
			//是否免费
			isFree:true,
			//是否vip
			isVIP:true,
			//所属类别  没有传空数组
			types:['军事','历史'],
			//状态
			states:['免费','限免'],
			//最新的章节
			lastChapter:'阿迪看风景啊看大家发健康的肌肤轮廓将阿飞阿道夫',
			//更新时间
			updateTime:'2018-12-12 12:12:12',
			//简介
			info:'阿迪看风景啊看大家疯狂垃圾地方阿迪看风景啊看大家疯狂垃圾地方阿迪看风景啊看大家疯狂垃圾地方阿迪看风景啊看大家疯狂垃圾地方',
			//作者
			author:'阿迪风景啊看就地方阿迪风景啊看就地方阿迪风景啊看就地方'
		};


		let list1 = [];
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		this.setData({
			list:list1
		});




	},
	searchInput:function(e){
		let val = e.detail.value;

		//this 指向page对象
		this.setData({
			'search':val
		});
	}
});
