//数据文件


module.exports = {
	//展馆图片  大小 2000*1333
	pavilion:[
		'image/pavilion/p1.jpg',
		'image/pavilion/p2.jpg',
		'image/pavilion/p3.jpg',
		'image/pavilion/p4.jpg'
	],
	//关于我们
	about:{
		//图片大小 881*588
		banner:[
			'image/about/p1.png',
			'image/about/p2.png',
			'image/about/p3.png'
		],
		text:[
			'Founded in 2014, Aura Art Space is engaging in promoting oversea artists; discovering new artists in China and foreign countries; integrating art resources at both home and abroad; staging diverse exhibitions of paintings and collections; chairing salons of art appreciation.',
			"AURA SPACE represents famous artists such as,Lin Yue, portrait artist Ming Qin, Russian artist pokidishev Pavel and so on. AURA SPACE has held a series of Chinese and foreign artists' exhibitions since founded: , “Neva Memory Russian Contemporary Masters Exhibition”， “Vero la luce” Italy Giuseppe Carta exhibition,  “Pang Mao Kun individual exhibition”，'Xing Zhe Wu Jiang' Jun Leng Chinese traditional painting, “Qing Min portrait painting exhibition ”，providing unique and classic works for collectors and art lovers."
		]
	},
	//活动
	show:[
		//id不能重复
		{
			id:1,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
					//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		},
		{
			id:2,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
			//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		},
		{
			id:3,
			img:'image/show/1.jpg',

			//列表上显示
			year:2018,
			name:'Garden of Maria',
			msg:'Chengdu,April.2018',

			//详情内的属性
			info:'Anna Silivonchik/Maria Peshkun/Tatyana Borisova',
			//地址换行显示的
			address:[
				'Cheng Du Global Center',
				'W1.1119'
			],
			organizer:'AURA SPACE',
			time:'(2018.4.22-5.10)',
			text:[
				'In 1980, she was born in Gemel, in 2008, joined the Belarus artist union, in 2009 won the international peace artist union "gifts and talents" award,works are on display in each big famous museum, In 2013, 2014 and 2016,she held a painting exhibition at the national contemporary art center of the republic of Belarus, and held a personal exhibition at the "Kunstwerk Winkler" gallery in Berlin in 2017. Her works have been exhibited in Estonia, Latvia, Ukraine, Russia, Germany, the United States and other famous art galleries. Anna Silivonchik is famous for her boundless imagination and distinctive personality to create her own artistic style.',
				'Her work by children, animals, figures and various roles to convey to all sorts of profound thinking, emotion and interpersonal relationship in life, ordinary things profound meaning, In her traditional painting techniques, the works show us a magical world of lyrical fantasy.'
			]
		}
	],
	//作家
	artist:[
		//id不能重复
		{
			id:2,
			//名字   安娜
			name1:'Anna Silivonchik',
			name2:'Belarus',
			//列表图片地址
			image:'image/artist/2/2.jpg',
			//介绍
			text:[
				'西里沃契克 安娜 德米特里耶夫娜',
				'1980年生于戈梅利市，2008年，加入了白俄罗斯艺术家联盟，2009年荣获国际和平艺术家联盟“天赋与才能”奖，作品在各大著名博物馆均有展出，2013年，2014，2016年在白俄罗斯共和国国家当代艺术中心举办画展、2017年在柏林“Kunstwerk Winkler”画廊举办个人画展等。其作品走出国外，在爱沙尼亚、拉脱维亚、乌克兰、俄罗斯、德国、美国等著名画展画廊均有所展出。Anna Silivonchik凭借无限的想象力和鲜明的个性打造专属于自己的艺术风格而备受瞩目，其作品通过儿童、动物、人物以等各种角色来传达对各种人生、情感和人际关系的深刻思考，赋予平凡事物深刻的意义，在其传统油画技法所绘制的作品中为我们展现出极具抒情梦幻色彩的魔法世界。'
			],
			//作品图片地址
			works:[
				'image/artist/2/2_1.jpg',
				'image/artist/2/2_4.jpg',
				'image/artist/2/2_3.jpg',
				'image/artist/2/2_2.jpg',
				'image/artist/2/2_5.jpg',
				'image/artist/2/2_6.jpg',
				'image/artist/2/2_7.jpg',
				'image/artist/2/2_8.jpg',
				'image/artist/2/2_9.jpg',
				'image/artist/2/2_10.jpg',
				'image/artist/2/2_11.jpg',
				'image/artist/2/2_12.jpg',
				'image/artist/2/2_13.jpg',
				'image/artist/2/2_14.jpg',
				'image/artist/2/2_15.jpg',
				'image/artist/2/2_16.jpg',
				'image/artist/2/2_17.jpg',
				'image/artist/2/2_18.jpg',
				'image/artist/2/2_19.jpg',
				'image/artist/2/2_20.jpg',
				'image/artist/2/2_23.jpg',
				'image/artist/2/2_24.jpg',
				'image/artist/2/2_25.jpg',
				'image/artist/2/2_26.jpg'
			]
		},
		{
			//安德烈
			id:1,
			name1:'Andre Briok',
			name2:'Russia',
			image:'image/artist/1/1.jpg',
			text:[
				'“俄罗斯人民艺术家、艺术科学院院士”称号； 列宾美院教授；圣彼得堡油画家协会主席；圣彼得堡美术家协会副主席；俄罗斯艺术科学院以及国外大师班毕业论文答辩委员会主席；俄罗斯当代杰出的现实主义绘画大师；',
				'在漫长的艺术生涯里，安德烈·布里奥克将诚实、率真的个性深深地融入他的艺术创作之中，以意境深邃、强烈和谐的色彩和严谨的造型表现着光、色、形，把人物与美景的诗情画意以独特的神韵传达给观众。他的画作中的奔跑的马跟海中起舞的波浪交相呼应，动感十足，通过将海岸线处理在画作的最上方，从而拉伸了空间感，使得大海更加宽广。然而《倒影》中塔楼的黄色和雪的白色暖暖交融，使得整个画面的亮度在各自固有色的基础上进一步加强，同时在构图上画家借用了一些物理手法，增加了图画的观赏性。这幅图的静与另一幅的动形成了鲜明的对比，动静结合，让我们更丰富的体会画家的内心之作。'
			],
			works:[
				'image/artist/1/1_2.jpg',
				'image/artist/1/1_3.jpg'
			]
		},
		{
			//朱纸
			id:8,
			name1:'Giuseppe Carta',
			name2:'Italy',
			image:'image/artist/8/8.jpg',
			text:[
				'',
				''
			],
			works:[
				'image/artist/8/8_2.jpg',
				'image/artist/8/8_4.jpg',
				'image/artist/8/8_6.jpg',
				'image/artist/8/8_7.jpg',
				'image/artist/8/8_8.jpg',
				'image/artist/8/8_9.jpg',
				'image/artist/8/8_10.jpg',
				'image/artist/8/8_11.jpg',
				'image/artist/8/8_12.jpg',
				'image/artist/8/8_3.jpg',
				'image/artist/8/8_13.jpg',
				'image/artist/8/8_19.jpg',
				'image/artist/8/8_14.jpg',
				'image/artist/8/8_15.jpg',
				'image/artist/8/8_16.jpg',
				'image/artist/8/8_18.jpg',
				'image/artist/8/8_20.jpg',
				'image/artist/8/8_17.jpg',
				'image/artist/8/8_21.jpg',
				'image/artist/8/8_5.jpg'

			]
		},
		{
			//秦明
			id:7,
			name1:'Ming Qin',
			name2:'China',
			image:'image/artist/7/7.jpg',
			text:[
				'',
				''
			],
			works:[
				'image/artist/7/7_2.jpg',
				'image/artist/7/7_3.jpg',
				'image/artist/7/7_4.jpg',
				'image/artist/7/7_5.jpg',
				'image/artist/7/7_6.jpg',
				'image/artist/7/7_7.jpg',
				'image/artist/7/7_8.jpg'
			]
		},
		{
			//巴维尔
			id:3,
			name1:'Pokidyshev Pavel',
			name2:'Russia',
			image:'image/artist/3/3.jpg',
			text:[
				'波基德舍夫·巴维尔，1965年出生于奔萨市，1987年考入列宾美术学院，毕业后在列宾美术学院油画与造型艺术教研室读研，曾参加在俄罗斯国内外举办的各类美术作品展，2000年成为俄罗斯艺术家协会成员，现在列宾美术学院绘画系高年级班任教。',
				'巴维尔画作的主要内容一般是用甜蜜的童年梦想和痛苦的日常现实世界形成鲜明的对比。他创造出一个完美近似天堂般的空间，来衬托现实世界中的不足和缺陷。复合结构的绘画和多重元素的结合让观赏者生出各种各样的疑问，而得到的答案又各不相同。画中的人物到底是谁？儿童还是成年人？摆在我们面前的到底是什么：是游戏还是现实，梦想还是幻想，是神秘的花园还是戏剧舞台？'
			],
			works:[
				'image/artist/3/3_2.jpg',
				'image/artist/3/3_3.jpg',
				'image/artist/3/3_4.jpg',
				'image/artist/3/3_7.jpg',
				'image/artist/3/3_6.jpg',
				'image/artist/3/3_5.jpg',
				'image/artist/3/3_8.jpg',
				'image/artist/3/3_9.jpg',
				'image/artist/3/3_10.jpg',
				'image/artist/3/3_11.jpg'
			]
		},
		{
			//曹卫国
			id:4,
			name1:'Weiguo Cao',
			name2:'China',
			image:'image/artist/4/4.jpg',
			text:[
				'曹卫国',
				'1984生于湖南衡阳，2007年毕业于四川师范大学美术学院版画系，曾任教于阿坝师范学院 ，现任教于成都大学 ，北京巴蜀书画艺术院特聘艺术家，四川当代青年画院副秘书长，现工作生活于成都。'
			],
			works:[

				'image/artist/4/4_4.jpg',
				'image/artist/4/4_5.jpg',

				'image/artist/4/4_7.jpg',
				'image/artist/4/4_2.jpg',
				'image/artist/4/4_6.jpg',
				'image/artist/4/4_3.jpg'

			]
		},
		{
			//林跃
			id:5,
			name1:'Yue Lin',
			name2:'China',
			image:'image/artist/5/5.png',
			text:[
				'林跃，1961年出生，四川省广安市人，1987年四川美术学院绘画系毕业。现任四川省美术家协会副主席、四川省古玩收藏协会会长。',
				'林跃专以藏獒为创作题材，他的作品曾多次在国内外展出并获奖，被誉为“中国藏獒画家第一人”、“东方画獒大师”、“守望东方生灵的艺术使者”。其作品先后在世界顶级美术殿堂法国卢浮宫、巴黎大皇宫、俄罗斯列宾美术学院科研博物馆以及伦敦奥林匹克油画大展、巴西奥林匹克美术大会等展出。被美国哈弗大学、耶鲁大学和日本早稻田大学，巴西国家博物馆收藏。世界传媒大亨默多克、世界犹太人协会主席杰克·罗森、世界著名投资家吉姆·罗杰斯、著名华人侦探李昌钰等国际名流也珍藏其作品；受到日本前首相鸠山由纪夫、尼泊尔前总理贾拉·纳特·卡纳尔和国际主流社会的高度评价和一致赞誉。'
			],
			works:[
				'image/artist/5/5_2.jpg',
				'image/artist/5/5_3.jpg',
				'image/artist/5/5_7.jpg',
				'image/artist/5/5_5.jpg',
				'image/artist/5/5_6.jpg',
				'image/artist/5/5_4.jpg',
				'image/artist/5/5_8.jpg'
			]
		}
	]
};