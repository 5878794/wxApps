//index.js
//获取应用实例
const app = getApp();

Page({
	data: {
		//顶部书信息
		book:[],
		//目录
		list:[],
		//喜欢
		love:[]

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
			author:'阿迪风景啊'
		};

		let list2 = [];
		list2.push(JSON.parse(JSON.stringify(bookData)));
		this.setData({
			book:list2
		});

		let list1 = [];
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		list1.push(JSON.parse(JSON.stringify(bookData)));
		this.setData({
			list:list1
		});


		let list3 = [];
		list3.push(JSON.parse(JSON.stringify(bookData)));
		list3.push(JSON.parse(JSON.stringify(bookData)));
		list3.push(JSON.parse(JSON.stringify(bookData)));
		this.setData({
			love:list3
		});
	}
});
