var airportBusList = [
  {
		lineName: '空港1路',
		name: 'airLine1'
  },
  {
    lineName: '空港2路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine2'
  },
  {
    lineName: '空港3路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine3'
  },
  {
    lineName: '空港5路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine5'
  },
  {
    lineName: '空港6路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine6'
  },
  {
    lineName: '空港7路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine7'
  },
  {
    lineName: '空港8路(可换乘15号线)',
    tips: '可换乘15号线',
    name: 'airLine8'
  },
  {
    lineName: '空港9路',
    name: 'airLine9'
  },
  {
    lineName: '空港1路(中转摆渡车)',
    tips: '中转摆渡车',
    name: 'airLine1trans'
  }
]

var locationList = [
  {
    location: 'T2航站楼：一层1-3号门外'
  },
  {
    location: 'T3航站楼：一层1号门外'
  }
]

var airLine1 = {
  'lineName': '空港1路',
  'toDesDirec': '樱花园',
  'toAirportDirec': 'T2',
  'toDesFirstTime': '5:25',
  'toDesLastTime': '22:30',
  'toAirportFirstTime': '4:40',
  'toAirportLastTime': '21:50',
  'intervalTime': '不超过10分钟',
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: '塔台'
  	},
  	{
  		platform: '武警总队'
  	},
  	{
  		platform: '飞行总队'
  	},
  	{
  		platform: '航安路'
  	},
  	{
  		platform: '机场道口'
  	},
  	{
  		platform: '北平里'
  	},
  	{
  		platform: '花园路口'
  	},
  	{
  		platform: '第九十四中学'
  	},
  	{
  		platform: '南平里'
  	},
  	{
  		platform: '国泰广场'
  	},
  	{
  		platform: '二号门'
  	},
  	{
  		platform: '经路'
  	},
  	{
  		platform: '管头'
  	},
  	{
  		platform: '六区'
  	},
  	{
  		platform: '樱花园'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '樱花园'
  	},
  	{
  		platform: '六区'
  	},
  	{
  		platform: '管头'
  	},
  	{
  		platform: '二号门'
  	},
  	{
  		platform: '国泰广场'
  	},
  	{
  		platform: '南平里'
  	},
  	{
  		platform: '第九十四中学'
  	},
  	{
  		platform: '花园路口'
  	},
  	{
  		platform: '北平里'
  	},
  	{
  		platform: '机场道口'
  	},
  	{
  		platform: '航安路'
  	},
  	{
  		platform: '飞行总队'
  	},
  	{
  		platform: '武警总队'
  	},
  	{
  		platform: 'T2航站楼'
  	}
  ]
}

var airLine2 = {
  'lineName': '空港2路',
  'toDesDirec': '职业技能培训学校',
  'toAirportDirec': 'T2',
  'toDesFirstTime': '6:00',
  'toDesLastTime': '21:00',
  'toAirportFirstTime': '5:10',
  'toAirportLastTime': '20:00',
  'intervalTime': '不超过30分钟',
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: '塔台'
  	},
  	{
  		platform: 'BGS站坪'
  	},
  	{
  		platform: '机场北库'
  	},
  	{
  		platform: '大新华'
  	},
  	{
  		platform: '保税区'
  	},
  	{
  		platform: '物流园'
  	},
  	{
  		platform: '南法信'
  	},
  	{
  		platform: '望泉桥东'
  	},
  	{
  		platform: '东风小学'
  	},
  	{
  		platform: '顺义区医院'
  	},
  	{
  		platform: '便民街东口'
  	},
  	{
  		platform: '金汉绿港'
  	},
  	{
  		platform: '金汉绿港四区'     
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '南彩工业园'
  	},
  	{
  		platform: '后俸伯'
  	},
  	{
  		platform: '职业技能培训学校'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '职业技能培训学校'
  	},
  	{
  		platform: '后俸伯'
  	},
  	{
  		platform: '南彩工业园'
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '金汉绿港四区'
  	},
  	{
  		platform: '金汉绿港'
  	},
  	{
  		platform: '便民街东口'
  	},
  	{
  		platform: '顺义区医院'
  	},
  	{
  		platform: '东风小学'
  	},
  	{
  		platform: '望泉桥东'
  	},
  	{
  		platform: '南法信'
  	},
  	{
  		platform: '物流园'
  	},
  	{
  		platform: '保税区'
  	},
  	{
  		platform: '大新华'
  	},
  	{
  		platform: '机场北库'
  	},
  	{
  		platform: 'BGS站坪'
  	},
  	{
  		platform: '塔台'
  	},
  	{
  		platform: 'T2航站楼'
  	}
  ]
}

var airLine3 = {
  'lineName': '空港3路',
  'toDesDirec': '枯柳树环岛',
  'toAirportDirec': 'T2',
  'toDesFirstTime': '5:50',
  'toDesLastTime': '20:00',
  'toAirportFirstTime': '6:00',
  'toAirportLastTime': '20:30',
  'intervalTime': '不超过30分钟',
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: '塔台'
  	},
  	{
  		platform: 'BGS'
  	},
  	{
  		platform: '国航货运'
  	},
  	{
  		platform: '天竺村'
  	},
  	{
  		platform: '天竺卫生院'
  	},
  	{
  		platform: '天竺花园'
  	},
  	{
  		platform: '临空假日酒店'
  	},
  	{
  		platform: '新国展'
  	},
  	{
  		platform: '花梨坎'
  	},
  	{
  		platform: '花梨坎地铁'
  	},
  	{
  		platform: '空港B区'
  	},
  	{
  		platform: '铁匠营'
  	},
  	{
  		platform: '万科城市花园'
  	},
  	{
  		platform: '裕祥花园'
  	},
  	{
  		platform: '东庄'
  	},
  	{
  		platform: '后沙峪政府'
  	},
  	{
  		platform: '农行'
  	},
  	{
  		platform: '华润超市'
  	},
  	{
  		platform: '火神营'
  	},
  	{
  		platform: '枯柳树环岛'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '枯柳树环岛'
  	},
  	{
  		platform: '火神营'
  	},
  	{
  		platform: '华润超市'
  	},
  	{
  		platform: '农行'
  	},
  	{
  		platform: '后沙峪政府'
  	},
  	{
  		platform: '东庄'
  	},
  	{
  		platform: '裕祥花园'
  	},
  	{
  		platform: '万科城市花园'
  	},
  	{
  		platform: '铁匠营'
  	},
  	{
  		platform: '空港B区'
  	},
  	{
  		platform: '花梨坎地铁'
  	},
  	{
  		platform: '花梨坎'
  	},
  	{
  		platform: '新国展'
  	},
  	{
  		platform: '临空假日酒店'
  	},
  	{
  		platform: '天竺花园'
  	},
  	{
  		platform: '天竺卫生院'
  	},
  	{
  		platform: '天竺村'
  	},
  	{
  		platform: '国航货运'
  	},
  	{
  		platform: 'BGS'
  	},
  	{
  		platform: 'T2航站楼'
  	}
  ]
}

var airLine5 = {
  'lineName': '空港5路',
  'toDesDirec': '西绛州营村',
  'toAirportDirec': 'T3',
  'toDesFirstTime': '4:50',
  'toDesLastTime': '22:00',
  'toAirportFirstTime': '4:30',
  'toAirportLastTime': '21:10',
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T3航站楼'
  	},
  	{
  		platform: '机场集团公司'
  	},
  	{
  		platform: '机场股份公司'
  	},
  	{
  		platform: '绿港国际'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '国门商务区北'
  	},
  	{
  		platform: '头二营南'
  	},
  	{
  		platform: '头二营'
  	},
  	{
  		platform: '三四营'
  	},
  	{
  		platform: '苏活'
  	},
  	{
  		platform: '中航发动机'
  	},
  	{
  		platform: '中航复材'
  	},
  	{
  		platform: '中航国际'
  	},
  	{
  		platform: '杜杨北街'
  	},
  	{
  		platform: '澜西园二区'
  	},
  	{
  		platform: '一中附小'
  	},
  	{
  		platform: '梅沟营'
  	},
  	{
  		platform: '梅沟营北'
  	},
  	{
  		platform: '四季花城'
  	},
  	{
  		platform: '地铁石门站'
  	},
  	{
  		platform: '西辛小学'
  	},
  	{
  		platform: '庄头'
  	},
  	{
  		platform: '减河北路'
  	},
  	{
  		platform: '一中分校'
  	},
  	{
  		platform: '龙苑别墅'
  	},
  	{
  		platform: '大营'
  	},
  	{
  		platform: '乡村赛马场'
  	},
  	{
  		platform: '金宝花园'
  	},
  	{
  		platform: '马坡花园'
  	},
  	{
  		platform: '香悦四季'
  	},
  	{
  		platform: '花溪渡'
  	},
  	{
  		platform: '顺丰大街'
  	},
  	{
  		platform: '西丰乐'
  	},
  	{
  		platform: '乔波滑雪场'
  	},
  	{
  		platform: '龙湖别墅'
  	},
  	{
  		platform: '牛栏山小区'
  	},
  	{
  		platform: '牛栏山东口'
  	},
  	{
  		platform: '牛栏山'
  	},
  	{
  		platform: '牛栏山路口'
  	},
    {
      platform: '西陈各庄'
    },    
  	{
  		platform: '赵全营'
  	},
  	{
  		platform: '北郎中'
  	},
  	{
  		platform: '北郎中西口'
  	},
  	{
  		platform: '电木厂'
  	},
  	{
  		platform: '西绛州营村'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '西绛州营村'
  	},
  	{
  		platform: '电木厂'
  	},
  	{
  		platform: '北郎中西口'
  	},
  	{
  		platform: '北郎中'
  	},
  	{
  		platform: '赵全营'
  	},
  	{
  		platform: '西陈各庄'
  	},
  	{
  		platform: '牛栏山路口'
  	},
  	{
  		platform: '牛栏山'
  	},
  	{
  		platform: '牛栏山东口'
  	},
  	{
  		platform: '牛栏山小区'
  	},
  	{
  		platform: '龙湖别墅'
  	},
  	{
  		platform: '乔波滑雪场'
  	},
  	{
  		platform: '西丰乐'
  	},
  	{
  		platform: '顺丰大街'
  	},
  	{
  		platform: '花溪渡'
  	},
  	{
  		platform: '香悦四季'
  	},
  	{
  		platform: '马坡花园'
  	},
  	{
  		platform: '金宝花园'
  	},
  	{
  		platform: '乡村赛马场'
  	},
  	{
  		platform: '大营'
  	},
  	{
  		platform: '龙苑别墅'
  	},
  	{
  		platform: '一中分校'
  	},
  	{
  		platform: '减河北路'
  	},
  	{
  		platform: '庄头'
  	},
  	{
  		platform: '西辛小学'
  	},
  	{
  		platform: '地铁石门站'
  	},
  	{
  		platform: '四季花城'
  	},
  	{
  		platform: '梅沟营北'
  	},
  	{
  		platform: '梅沟营'
  	},
  	{
  		platform: '一中附小'
  	},
  	{
  		platform: '澜西园二区'
  	},
  	{
  		platform: '杜杨北街'
  	},
  	{
  		platform: '中航国际'
  	},
  	{
  		platform: '中航复材'
  	},
  	{
  		platform: '中航发动机'
  	},
  	{
  		platform: '苏活'
  	},
  	{
  		platform: '三四营'
  	},
  	{
  		platform: '头二营'
  	},
  	{
  		platform: '头二营南'
  	},
  	{
  		platform: '国门商务区北'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '绿港国际'
  	},
  	{
  		platform: '机场股份公司'
  	},
  	{
  		platform: '机场集团公司'
  	},
  	{
  		platform: 'T3航站楼'
  	}
  ]
}

var airLine6 = {
  'lineName': '空港6路',
  'toDesDirec': '李家史山',
  'toAirportDirec': 'T2',
  'toDesRunTime': ['21:00、21:30'],
  'toAirRunTime': ['4:40、5:00'],
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: 'BGS货运站'
  	},
  	{
  		platform: '天竺卫生院'
  	},
  	{
  		platform: '天竺花园'
  	},
  	{
  		platform: '空港A区'
  	},
  	{
  		platform: '地铁花梨坎站'
  	},
  	{
  		platform: '空港B区'
  	},
    {
      platform: '空港医院'
    },    
  	{
  		platform: '清岚小镇'
  	},
  	{
  		platform: '西马各庄'
  	},
  	{
  		platform: '张喜庄路口'
  	},
  	{
  		platform: '万万树小区'
  	},
  	{
  		platform: '前渠河'
  	},
  	{
  		platform: '闫家营'
  	},
  	{
  		platform: '高丽营'
  	},
  	{
  		platform: '西水泉'
  	},
  	{
  		platform: '河庄营'
  	},
  	{
  		platform: '后营'
  	},
  	{
  		platform: '下西市村'
  	},
  	{
  		platform: '范各庄'
  	},
  	{
  		platform: '良善庄'
  	},
  	{
  		platform: '南石槽'
  	},
  	{
  		platform: '北石槽'
  	},
  	{
  		platform: '北石槽镇政府'
  	},
  	{
  		platform: '寺上'
  	},
  	{
  		platform: '李家史山'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '李家史山'
  	},
  	{
  		platform: '寺上'
  	},
  	{
  		platform: '北石槽镇政府'
  	},
  	{
  		platform: '北石槽'
  	},
  	{
  		platform: '南石槽'
  	},
  	{
  		platform: '良善庄'
  	},
  	{
  		platform: '范各庄'
  	},
  	{
  		platform: '下西市村'
  	},
  	{
  		platform: '后营'
  	},
  	{
  		platform: '河庄营'
  	},
  	{
  		platform: '西水泉'
  	},
  	{
  		platform: '高丽营'
  	},
  	{
  		platform: '闫家营'
  	},
  	{
  		platform: '前渠河'
  	},
  	{
  		platform: '万万树小区'
  	},
  	{
  		platform: '张喜庄路口'
  	},
  	{
  		platform: '西马各庄'
  	},
  	{
  		platform: '清岚小镇'
  	},
  	{
  		platform: '空港医院'
  	},
  	{
  		platform: '空港B区'
  	},
  	{
  		platform: '地铁花梨坎站'
  	},
  	{
  		platform: '空港A区'
  	},
  	{
  		platform: '天竺花园'
  	},
  	{
  		platform: '天竺卫生院'
  	},
  	{
  		platform: 'BGS货运站'
  	},
  	{
  		platform: 'T2航站楼'
  	}
  ]
}

var airLine7 = {
  'lineName': '空港7路',
  'toDesDirec': '小曹庄',
  'toAirportDirec': 'T3',
  'toDesRunTime': ['晚班T3发车：20:30、20:50', '晚班途径T2发车：20:45、21:05'],
  'toAirRunTime': ['早班发车：4:30、4:50'],
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T3航站楼'
  	},
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: '综合保税区'
  	},
  	{
  		platform: '物流园'
  	},
  	{
  		platform: '检测场'
  	},
  	{
  		platform: '南法信'
  	},
  	{
  		platform: '梅沟营'
  	},
  	{
  		platform: '地铁石门站'
  	},
  	{
  		platform: '交通局'
  	},
  	{
  		platform: '地铁顺义站'
  	},
  	{
  		platform: '东大桥环岛'
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '俸伯'
  	},
  	{
  		platform: '河北村'
  	},
  	{
  		platform: '南彩车站'
  	},
  	{
  		platform: '于辛庄'
  	},
  	{
  		platform: '东江头'
  	},
  	{
  		platform: '菜园子'
  	},
  	{
  		platform: '下营'
  	},
  	{
  		platform: '下坡'
  	},
  	{
  		platform: '杨镇三街'
  	},
  	{
  		platform: '双阳小区'
  	},
    {
      platform: '现代三厂'
    },    
  	{
  		platform: '杜庄'
  	},
  	{
  		platform: '焦各庄'
  	},
  	{
  		platform: '沙岭'
  	},
  	{
  		platform: '行宫'
  	},
  	{
  		platform: '赵各庄'
  	},
  	{
  		platform: '小曹庄'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '小曹庄'
  	},
  	{
  		platform: '赵各庄'
  	},
  	{
  		platform: '行宫'
  	},
  	{
  		platform: '沙岭'
  	},
  	{
  		platform: '焦各庄'
  	},
  	{
  		platform: '杜庄'
  	},
  	{
  		platform: '现代三厂'
  	},
  	{
  		platform: '双阳小区'
  	},
  	{
  		platform: '杨镇三街'
  	},
  	{
  		platform: '下坡'
  	},
  	{
  		platform: '下营'
  	},
  	{
  		platform: '菜园子'
  	},
  	{
  		platform: '东江头'
  	},
  	{
  		platform: '于辛庄'
  	},
  	{
  		platform: '南彩车站'
  	},
  	{
  		platform: '河北村'
  	},
  	{
  		platform: '俸伯'
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '东大桥环岛'
  	},
  	{
  		platform: '地铁顺义站'
  	},
  	{
  		platform: '交通局'
  	},
  	{
  		platform: '地铁石门站'
  	},
  	{
  		platform: '梅沟营'
  	},
  	{
  		platform: '南法信'
  	},
  	{
  		platform: '检测场'
  	},
  	{
  		platform: '物流园'
  	},
  	{
  		platform: '综合保税区'
  	},
  	{
  		platform: 'T2航站楼'
  	},
  	{
  		platform: 'T3航站楼'
  	}
  ]
}

var airLine8 = {
  'lineName': '空港8路',
  'toDesDirec': '山里辛庄',
  'toAirportDirec': 'T3',
  'toDesRunTime': ['20:30、21:00、21:30'],
  'toAirRunTime': ['4:20、4:35、4:50'],
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T3航站楼'
  	},
  	{
  		platform: '六经路口'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '头二营'
  	},
  	{
  		platform: '三四营'
  	},
  	{
  		platform: '苏活小区'
  	},
  	{
  		platform: '吴家营'
  	},
  	{
  		platform: '林河路口'
  	},
  	{
  		platform: '石园南大街'
  	},
  	{
  		platform: '仓上小区'
  	},
  	{
  		platform: '顺义区医院'
  	},
  	{
  		platform: '东大桥'
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '后俸伯'
  	},
  	{
  		platform: '北彩'
  	},
  	{
  		platform: '柳行'
  	},
  	{
  		platform: '黄家场'
  	},
  	{
  		platform: '马辛庄'
  	},
  	{
  		platform: '前礼务'
  	},
  	{
  		platform: '北小营'
  	},
  	{
  		platform: '上辇'
  	},
  	{
  		platform: '魏家店'
  	},
  	{
  		platform: '东沿头'
  	},
  	{
  		platform: '木林'
  	},
  	{
  		platform: '龙湾屯镇政府'
  	},
  	{
  		platform: '焦庄户地道战遗址纪念馆'
  	},
  	{
  		platform: '龙湾屯'
  	},
  	{
  		platform: '柳庄户'
  	},
  	{
  		platform: '七连庄村'
  	},
  	{
  		platform: '山里辛庄'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '山里辛庄'
  	},
  	{
  		platform: '七连庄村'
  	},
  	{
  		platform: '柳庄户'
  	},
  	{
  		platform: '龙湾屯'
  	},
  	{
  		platform: '焦庄户地道战遗址纪念馆'
  	},
  	{
  		platform: '龙湾屯镇政府'
  	},
  	{
  		platform: '木林'
  	},
  	{
  		platform: '东沿头'
  	},
  	{
  		platform: '魏家店'
  	},
  	{
  		platform: '上辇'
  	},
  	{
  		platform: '北小营'
  	},
  	{
  		platform: '前礼务'
  	},
  	{
  		platform: '马辛庄'
  	},
  	{
  		platform: '黄家场'
  	},
  	{
  		platform: '柳行'
  	},
  	{
  		platform: '北彩'
  	},
  	{
  		platform: '后俸伯'
  	},
  	{
  		platform: '地铁俸伯站'
  	},
  	{
  		platform: '东大桥'
  	},
  	{
  		platform: '顺义区医院'
  	},
  	{
  		platform: '仓上小区'
  	},
  	{
  		platform: '石园南大街'
  	},
  	{
  		platform: '林河路口'
  	},
  	{
  		platform: '吴家营'
  	},
  	{
  		platform: '苏活小区'
  	},
  	{
  		platform: '三四营'
  	},
  	{
  		platform: '头二营'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '六经路口'
  	},
  	{
  		platform: 'T3航站楼'
  	}
  ]
}

var airLine9 = {
  'lineName': '空港9路',
  'toDesDirec': '吴雄寺',
  'toAirportDirec': 'T3',
  'toDesRunTime': ['晚班发车（暂定）：20:20、21:20'],
  'toAirRunTime': ['早班发车：04:40、05:00'],
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T3航站楼'
  	},
  	{
  		platform: '六经路口'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '馨港庄园'
  	},
  	{
  		platform: '李桥'
  	},
  	{
  		platform: '后桥'
  	},
  	{
  		platform: '窑坡'
  	},
  	{
  		platform: '陶家坟'
  	},
  	{
  		platform: '林河开发区'
  	},
  	{
  		platform: '啤酒厂'
  	},
  	{
  		platform: '河南村'
  	},
  	{
  		platform: '东方太阳城'
  	},
  	{
  		platform: '苏庄'
  	},
  	{
  		platform: '崇国庄'
  	},
  	{
  		platform: '李庄'
  	},
  	{
  		platform: '闫家渠'
  	},
  	{
  		platform: '王各庄'
  	},
  	{
  		platform: '道口'
  	},
  	{
  		platform: '陈辛庄'
  	},
  	{
  		platform: '郭家务'
  	},
  	{
  		platform: '尹家府'
  	},
  	{
  		platform: '大孙各庄'
  	},
  	{
  		platform: '西辛庄'
  	},
  	{
  		platform: '宗家店'
  	},
  	{
  		platform: '柴家林'
  	},
  	{
  		platform: '顾家庄'
  	},
  	{
  		platform: '小塘村'
  	},
  	{
  		platform: '吴雄寺'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '吴雄寺'
  	},
  	{
  		platform: '小塘村'
  	},
  	{
  		platform: '顾家庄'
  	},
  	{
  		platform: '柴家林'
  	},
  	{
  		platform: '宗家店'
  	},
  	{
  		platform: '西辛庄'
  	},
  	{
  		platform: '大孙各庄'
  	},
  	{
  		platform: '尹家府'
  	},
  	{
  		platform: '郭家务'
  	},
  	{
  		platform: '陈辛庄'
  	},
  	{
  		platform: '道口'
  	},
  	{
  		platform: '王各庄'
  	},
  	{
  		platform: '闫家渠'
  	},
  	{
  		platform: '李庄'
  	},
  	{
  		platform: '崇国庄'
  	},
  	{
  		platform: '苏庄'
  	},
  	{
  		platform: '东方太阳城'
  	},
  	{
  		platform: '河南村'
  	},
  	{
  		platform: '啤酒厂'
  	},
  	{
  		platform: '林河开发区'
  	},
  	{
  		platform: '陶家坟'
  	},
  	{
  		platform: '窑坡'
  	},
  	{
  		platform: '后桥'
  	},
  	{
  		platform: '李桥'
  	},
  	{
  		platform: '馨港庄园'
  	},
  	{
  		platform: '国门商务区'
  	},
  	{
  		platform: '六经路口'
  	},
  	{
  		platform: 'T3航站楼'
  	}
  ]
}

var airLine1trans = {
  'lineName': '空港9路',
  'toDesDirec': '吴雄寺',
  'toAirportDirec': 'T3',
  'toDesFirstTime': '4:40',
  'toDesLastTime': '次日1:00',
  'toAirportFirstTime': '4:20',
  'toAirportLastTime': '0:30',
  'intervalTime': '不超过20分钟',
  'location': ['T2一层1-3号门外', 'T3一层1号门外'],
  'toDesArr': [
  	{
  		platform: 'T3航站楼'
  	},
  	{
  		platform: '集团公司'
  	},
  	{
  		platform: '中国服务大厦'
  	},
  	{
  		platform: '二号门'
  	},
  	{
  		platform: '樱花园'
  	}
  ],
  'toAirportArr': [
  	{
  		platform: '樱花园'
  	},
  	{
  		platform: '二号门'
  	},
  	{
  		platform: '中国服务大厦'
  	},
  	{
  		platform: '集团公司'
  	},
  	{
  		platform: 'T3航站楼'
  	}
  ]
}

module.exports = {
  airportBusList: airportBusList,
  locationList: locationList,
  airLine1: airLine1,
  airLine2: airLine2,
  airLine3: airLine3,
  airLine5: airLine5,
  airLine6: airLine6,
  airLine7: airLine7,
  airLine8: airLine8,
  airLine9: airLine9,
  airLine1trans: airLine1trans
}
