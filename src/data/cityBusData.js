var cityBusList = [
  {
    lineName: '方庄线',
    name: 'line1'
  },
  {
    lineName: '西单线',
    name: 'line2'
  },
  {
    lineName: '北京站线',
    name: 'line3'
  },
  {
    lineName: '公主坟线',
    name: 'line4'
  },
  {
    lineName: '中关村线',
    name: 'line5'
  },
  {
    lineName: '上地、奥运村线',
    name: 'line6'
  },
  {
    lineName: '北京西站线',
    name: 'line7'
  },
  {
    lineName: '回龙观线',
    name: 'line8'
  },
  {
    lineName: '通州线',
    name: 'line9'
  },
  {
    lineName: '北京南站线',
    name: 'line10'
  },
  {
    lineName: '亦庄线',
    name: 'line11'
  },
  {
    lineName: '四惠线',
    name: 'line12'
  },
  {
    lineName: '王府井、金宝街线',
    name: 'line13'
  },
  {
    lineName: '望京线',
    name: 'line14'
  },
  {
    lineName: '南苑机场线',
    name: 'line15'
  },
  {
    lineName: '石景山线',
    name: 'line16'
  },
  {
    lineName: '燕郊线',
    name: 'line17'
  },
  {
    lineName: '昌平线',
    name: 'line18'
  },
  {
    lineName: '西单线（夜间）',
    name: 'line19'
  },
  {
    lineName: '公主坟线（夜间）',
    name: 'line20'
  }
]

var line1 = {
    "lineName": "方庄线",
    "toDesDirec": "方庄",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"三元桥",
            "price":"15元"
        },
        {
            "platform":"亮马桥",
            "price":"18元"
        },
        {
            "platform":"白家庄",
            "price":"18元"
        },
        {
            "platform":"国贸",
            "price":"21元"
        },
        {
            "platform":"潘家园",
            "price":"24元"
        },
        {
            "platform":"十里河",
            "price":"24元"
        },
        {
            "platform":"方庄桥",
            "price":"24元"
        },
        {
            "platform":"方庄",
            "price":"24元"
        }
    ],
    "toAirportArr": [
        {
            "platform":"方庄",
            "price":"24元"
        },
        {
            "platform":"国贸",
            "price":"21元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:00",
    "toDesLastTime":"1:00",
    "toAirportFirstTime":"5:00",
    "toAirportLastTime":"21:00",
    "intervalTime":"不超过30分钟",
};

var line2 = {
    "lineName": "西单线",
    "toDesDirec": "西单",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"雍和宫",
            "price":"18元"
        },
        {
            "platform":"安定门",
            "price":"21元"
        },
        {
            "platform":"积水潭",
            "price":"21元"
        },
        {
            "platform":"西直门桥南",
            "price":"24元"
        },
        {
            "platform":"复兴门",
            "price":"24元"
        },
        {
            "platform":"西单路口南",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"西单",
            "price":"24元"
        },
        {
            "platform":"车公庄",
            "price":"24元"
        },
        {
            "platform":"雍和宫",
            "price":"18元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:00",
    "toDesLastTime":"0:00",
    "toAirportFirstTime":"5:00",
    "toAirportLastTime":"21:00",
    "intervalTime":"不超过30分钟",
};

var line3 = {
    "lineName": "北京站线",
    "toDesDirec": "北京站",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"东直门",
            "price":"21元"
        },
        {
            "platform":"东四十条",
            "price":"21元"
        },
        {
            "platform":"朝阳门",
            "price":"21元"
        },
        {
            "platform":"雅宝路",
            "price":"21元"
        },
        {
            "platform":"国际饭店",
            "price":"24元"
        },
        {
            "platform":"北京站",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"北京站东街",
            "price":"24元"
        },
        {
            "platform":"国际饭店",
            "price":"24元"
        },
        {
            "platform":"东直门",
            "price":"21元"
        },
        {
            "platform":"亮马桥",
            "price":"18元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:00",
    "toDesLastTime":"0:00",
    "toAirportFirstTime":"5:00",
    "toAirportLastTime":"21:00",
    "intervalTime":"不超过30分钟",
};

var line4 = {
    "lineName": "公主坟线",
    "toDesDirec": "公主坟",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"三元西桥",
            "price":"15元"
        },
        {
            "platform":"西坝河",
            "price":"18元"
        },
        {
            "platform":"安贞桥",
            "price":"21元"
        },
        {
            "platform":"马甸桥",
            "price":"21元"
        },
        {
            "platform":"北太平庄",
            "price":"21元"
        },
        {
            "platform":"蓟门桥",
            "price":"21元"
        },
        {
            "platform":"友谊宾馆",
            "price":"24元"
        },
        {
            "platform":"紫竹桥",
            "price":"24元"
        },
        {
            "platform":"航天桥",
            "price":"24元"
        },
        {
            "platform":"公主坟",
            "price":"24元"
        },

    ],
    "toAirportArr": [
        {
            "platform":"公主坟",
            "price":"24元"
        },
        {
            "platform":"友谊宾馆",
            "price":"24元"
        },
        {
            "platform":"北太平庄",
            "price":"21元"
        },
        {
            "platform":"安贞桥",
            "price":"21元"
        },
        {
            "platform":"西坝河",
            "price":"18元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"6:50",
    "toDesLastTime":"0:00",
    "toAirportFirstTime":"4:30",
    "toAirportLastTime":"22:00",
    "backRunTime":["21:00后不经停安贞桥、西坝河"],
    "intervalTime":"不超过30分钟",
};

var line5 = {
    "lineName": "中关村线",
    "toDesDirec": "中关村",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"望和桥",
            "price":"18元"
        },
        {
            "platform":"小营",
            "price":"18元"
        },
        {
            "platform":"亚运村（安慧桥）",
            "price":"21元"
        },
        {
            "platform":"学院桥",
            "price":"24元"
        },
        {
            "platform":"中关村（保福寺桥）",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"中关村（保福寺桥）",
            "price":"24元"
        },
        {
            "platform":"北航（北门）",
            "price":"24元"
        },
        {
            "platform":"惠新西街",
            "price":"18元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"6:50",
    "toDesLastTime":"01:00（旺季） 0:00（淡季）",
    "toAirportFirstTime":"5:10",
    "toAirportLastTime":"22:00",
    "toRunTime":["广顺北大街、湖光中街为 21:00、24:00经停"],
    "intervalTime":"不超过30分钟",
};

var line6 = {
    "lineName": "上地、奥运村线",
    "toDesDirec": "奥运村",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"北苑路大屯东",
            "price":"21元"
        },
        {
            "platform":"大屯",
            "price":"21元"
        },
        {
            "platform":"奥运村",
            "price":"24元"
        },
        {
            "platform":"亚奥国际酒店",
            "price":"24元"
        },
        {
            "platform":"上地智选假日酒店",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"上地智选假日酒店",
            "price":"24元"
        },
        {
            "platform":"亚奥国际酒店",
            "price":"24元"
        },
        {
            "platform":"中科院地理所",
            "price":"24元"
        },
        {
            "platform":"大屯",
            "price":"21元"
        },
        {
            "platform":"北苑路大屯东",
            "price":"21元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:20",
    "toDesLastTime":"22:00",
    "toAirportFirstTime":"5:20",
    "toAirportLastTime":"20:00",
    "intervalTime":"不超过40分钟",
};

var line7 = {
    "lineName": "北京西站线",
    "toDesDirec": "北京西站",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"广渠门",
            "price":"24元"
        },
        {
            "platform":"磁器口",
            "price":"24元"
        },
        {
            "platform":"前门大街南口",
            "price":"24元"
        },
        {
            "platform":"菜市口",
            "price":"24元"
        },
        {
            "platform":"广安门外",
            "price":"24元"
        },
        {
            "platform":"北京西站（南广场）",
            "price":"24元"
        }
    ],
    "toAirportArr": [
        {
            "platform":"北京西站（南广场）",
            "price":"24元"
        },
        {
            "platform":"广安门",
            "price":"24元"
        },
        {
            "platform":"磁器口",
            "price":"24元"
        },
        {
            "platform":"广渠门",
            "price":"24元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"6:00",
    "toDesLastTime":"01:00（旺季） 0:00（淡季）",
    "toAirportFirstTime":"4:50",
    "toAirportLastTime":"22:00",
    "intervalTime":"不超过30分钟",
};

var line8 = {
    "lineName": "回龙观线",
    "toDesDirec": "回龙观",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"未来科技城",
            "price":"24元"
        },
        {
            "platform":"白坊",
            "price":"24元"
        },
        {
            "platform":"天通西苑一区（北门）",
            "price":"24元"
        },
        {
            "platform":"回龙观东大街（矩阵小区）",
            "price":"24元"
        },
        {
            "platform":"回龙观西大街（龙华园）",
            "price":"24元"
        },
        {
            "platform":"回龙观（龙泽）",
            "price":"24元"
        }
    ],
    "toAirportArr": [
        {
            "platform":"回龙观（龙泽）",
            "price":"24元"
        },
        {
            "platform":"回龙观西大街（龙华园）",
            "price":"24元"
        },
        {
            "platform":"回龙观东大街（矩阵小区）",
            "price":"24元"
        },
        {
            "platform":"天通西苑一区（北门）",
            "price":"24元"
        },
        {
            "platform":"白坊",
            "price":"24元"
        },
        {
            "platform":"未来科技城",
            "price":"24元"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:30",
    "toDesLastTime":"22:30",
    "toAirportFirstTime":"5:30",
    "toAirportLastTime":"20:30",
    "intervalTime":"不超过30分钟",
};

var line9 = {
    "lineName": "通州线",
    "toDesDirec": "通州",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"北关",
            "price":"21元"
        },
        {
            "platform":"西大街",
            "price":"24元"
        },
        {
            "platform":"北苑",
            "price":"24元"
        },
        {
            "platform":"翠屏北里",
            "price":"24元"
        },
        {
            "platform":"太阳花酒店",
            "price":"24元"
        },
        {
            "platform":"亚太花园酒店",
            "price":"24元"
        }
    ],
    "toAirportArr": [
        {
            "platform":"亚太花园酒店",
            "price":"24元"
        },
        {
            "platform":"太阳花酒店",
            "price":"24元"
        },
        {
            "platform":"翠屏北里",
            "price":"24元"
        },
        {
            "platform":"北苑",
            "price":"24元"
        },
        {
            "platform":"北关",
            "price":"21元"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:00",
    "toDesLastTime":"0:00",
    "toAirportFirstTime":"5:15",
    "toAirportLastTime":"20:45",
    "intervalTime":"不超过30分钟",
};

var line10 = {
    "lineName": "北京南站线",
    "toDesDirec": "北京南站",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"广渠门桥",
            "price":"21元"
        },
        {
            "platform":"肿瘤医院",
            "price":"24元"
        },
        {
            "platform":"玉蜓桥",
            "price":"24元"
        },
        {
            "platform":"陶然桥（中海地产广场）",
            "price":"24元"
        },
        {
            "platform":"北京南站",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"北京南站",
            "price":"24元"
        },
        {
            "platform":"陶然桥（中海地产广场）",
            "price":"24元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"8:30",
    "toDesLastTime":"22:30",
    "toAirportFirstTime":"6:30",
    "toAirportLastTime":"20:00",
    "intervalTime":"不超过30分钟",
};

var line11 = {
    "lineName": "亦庄线",
    "toDesDirec": "亦庄",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"窑洼湖",
            "price":"24元"
        },
        {
            "platform":"小武基",
            "price":"24元"
        },
        {
            "platform":"北环西路",
            "price":"24元"
        },
        {
            "platform":"兴基铂尔曼饭店",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"兴基铂尔曼饭店",
            "price":"24元"
        },
        {
            "platform":"北环西路",
            "price":"24元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"18:00",
    "toDesLastTime":"-",
    "toAirportFirstTime":"8:00",
    "toAirportLastTime":"-",
    "intervalTime":"全天仅一班",
};

var line12 = {
    "lineName": "四惠线",
    "toDesDirec": "四惠",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"管庄路（常营）",
            "price":"25元"
        },
        {
            "platform":"青年路（大悦城）",
            "price":"25元"
        },
        {
            "platform":"八里庄（石佛营）",
            "price":"25元"
        },
        {
            "platform":"四惠交通枢纽",
            "price":"25元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"四惠交通枢纽",
            "price":"25元"
        },
        {
            "platform":"青年路（大悦城）",
            "price":"25元"
        },
        {
            "platform":"管庄路（常营）",
            "price":"25元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"9:30",
    "toDesLastTime":"20:30",
    "toAirportFirstTime":"7:30",
    "toAirportLastTime":"18:30",
    "intervalTime": "不超过60分钟（客满发车）",
};

var line13 = {
    "lineName": "王府井、金宝街线",
    "toDesDirec": "王府井",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"金宝街（丽晶酒店）",
            "price":"24元"
        },
        {
            "platform":"金鱼胡同（和平宾馆）",
            "price":"24元"
        },
        {
            "platform":"王府井大街（天伦王朝酒店）",
            "price":"24元"
        },
        {
            "platform":"华侨大厦",
            "price":"24元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"金宝街（丽晶酒店）",
            "price":"24元"
        },
        {
            "platform":"金鱼胡同（和平宾馆）",
            "price":"24元"
        },
        {
            "platform":"王府井大街（天伦王朝酒店）",
            "price":"24元"
        },
        {
            "platform":"华侨大厦",
            "price":"24元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"9:00",
    "toDesLastTime":"21:00",
    "toAirportFirstTime":"7:00",
    "toAirportLastTime":"19:00",
    "intervalTime":"不超过60分钟",
};

var line14 = {
    "lineName": "望京线",
    "toDesDirec": "望京",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"广顺桥南",
            "price":"18元"
        },
        {
            "platform":"广顺北大街",
            "price":"18元"
        },
        {
            "platform":"湖光中街",
            "price":"18元"
        },
        {
            "platform":"南湖",
            "price":"18元"
        },
                {
            "platform":"花家地",
            "price":"18元"
        },
        {
            "platform":"望京医院",
            "price":"18元"
        },
        {
            "platform":"望京新世界",
            "price":"18元"
        },
        {
            "platform":"中国民航管理干部学院",
            "price":"18元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"中国民航管理干部学院",
            "price":"18元"
        },
        {
            "platform":"望京西园四区A门",
            "price":"18元"
        },
        {
            "platform":"望京花园西区",
            "price":"18元"
        },
        {
            "platform":"华彩商业中心",
            "price":"18元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"8:00",
    "toDesLastTime":"21:00",
    "toAirportFirstTime":"6:00",
    "toAirportLastTime":"19:00",
    "intervalTime":"不超过60分钟",
};

var line15 = {
    "lineName": "南苑机场线",
    "toDesDirec": "南苑机场",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"南苑机场",
            "price":"200元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"南苑机场",
            "price":"200元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"16:00",
    "toDesLastTime":"国内航班结束",
    "toAirportFirstTime":"6:00",
    "toAirportLastTime":"19:00",
    "intervalTime":"不超过60分钟",
};

var line16 = {
    "lineName": "石景山线",
    "toDesDirec": "石景山",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"五棵松桥北",
            "price":"30元"
        },
        {
            "platform":"鲁谷（远洋山水）",
            "price":"30元"
        },
        {
            "platform":"万达嘉华酒店",
            "price":"30元"
        },
        {
            "platform":"石景山（万商花园酒店）",
            "price":"30元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"石景山（万商花园酒店）",
            "price":"30元"
        },
        {
            "platform":"万达嘉华酒店",
            "price":"30元"
        },
        {
            "platform":"鲁谷（远洋山水）",
            "price":"30元"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"11:00",
    "toDesLastTime":"20:00",
    "toAirportFirstTime":"5:30",
    "toAirportLastTime":"20:00",
    "intervalTime":"不超过30分钟",
};

var line17 = {
    "lineName": "燕郊线",
    "toDesDirec": "燕郊",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"首尔甜城（诸葛店)",
            "price":"30元"
        },
        {
            "platform":"美林小区",
            "price":"30元"
        },
        {
            "platform":"星河皓月小区",
            "price":"30元"
        },
        {
            "platform":"燕京新城小区",
            "price":"30元"
        },
                {
            "platform":"意华小区",
            "price":"30元"
        },
        {
            "platform":"交通干部管理学院",
            "price":"30元"
        },
        {
            "platform":"东贸广场",
            "price":"30元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"东贸广场",
            "price":"30元"
        },
        {
            "platform":"意华小区",
            "price":"30元"
        },
        {
            "platform":"燕京新城小区",
            "price":"30元"
        },
        {
            "platform":"星河皓月小区",
            "price":"30元"
        },
        {
            "platform":"首尔甜城（诸葛店）",
            "price":"30元"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:40",
    "toDesLastTime":"23:00",
    "toAirportFirstTime":"5:30",
    "toAirportLastTime":"20:40",
    "intervalTime":"不超过40分钟",
};

var line18 = {
    "lineName": "昌平线",
    "toDesDirec": "昌平",
    "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"北控科技大厦",
            "price":"30元"
        },
        {
            "platform":"京科苑东",
            "price":"30元"
        },
        {
            "platform":"水关新村北",
            "price":"30元"
        },
                {
            "platform":"昌平中心公园",
            "price":"30元"
        },
        {
            "platform":"昌平北站",
            "price":"30元"
        },
    ],
    "toAirportArr": [
        {
            "platform":"昌平北站",
            "price":"30元"
        },
        {
            "platform":"水关新村北",
            "price":"30元"
        },
        {
            "platform":"石油化工科学院",
            "price":"30元"
        },
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        }
    ],
    "toDesFirstTime":"7:00",
    "toDesLastTime":"22:00",
    "toAirportFirstTime":"5:00",
    "toAirportLastTime":"20:00",
    "intervalTime":"不超过60分钟",
};

var line19 = {
    "lineName": "西单线（夜间）",
    "toDesDirec": "积水潭",
    // "toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"三元桥",
            "price":"21元"
        },
        {
            "platform":"东直门",
            "price":"30元"
        },
        {
            "platform":"东四十条",
            "price":"30元"
        },
        {
            "platform":"朝阳门",
            "price":"30元"
        },
        {
            "platform":"雅宝路",
            "price":"30元"
        },
        {
            "platform":"北京站",
            "price":"30元"
        },
        {
            "platform":"国际饭店",
            "price":"30元"
        },
        {
            "platform":"西单",
            "price":"30元"
        },
        {
            "platform":"复兴门",
            "price":"30元"
        },
        {
            "platform":"官园",
            "price":"30元"
        },
        {
            "platform":"积水潭",
            "price":"30元"
        },
    ],
    "toDesFirstTime":"0:00",
    "toDesLastTime":"国内航班结束",
    "intervalTime":"2:00前，每30分钟一班，2:00后，随航班发车",
};

var line20 = {
    "lineName": "公主坟线（夜间）",
    "toDesDirec": "公主坟",
    //"toAirportDirec": "首都机场",
    "toDesArr": [
        {
            "platform":"T3航站楼",
            "price":"——"
        },
        {
            "platform":"T2航站楼",
            "price":"——"
        },
        {
            "platform":"T1航站楼",
            "price":"——"
        },
        {
            "platform":"三元西桥",
            "price":"21元"
        },
        {
            "platform":"西坝河",
            "price":"30元"
        },
        {
            "platform":"安贞桥",
            "price":"30元"
        },
        {
            "platform":"马甸桥",
            "price":"30元"
        },
        {
            "platform":"北太平庄",
            "price":"30元"
        },
        {
            "platform":"蓟门桥",
            "price":"30元"
        },
        {
            "platform":"友谊宾馆",
            "price":"30元"
        },
        {
            "platform":"紫竹桥",
            "price":"30元"
        },
        {
            "platform":"航天桥",
            "price":"30元"
        },
        {
            "platform":"公主坟",
            "price":"30元"
        },
    ],
    "toDesFirstTime":"0:00",
    "toDesLastTime":"6:00",
    "intervalTime":"24:00至当日国内航班结束，发车间隔不超过30分钟；国内航班结束至次日6:00发车间隔不超过1小时，客满发车。",
};

var buyPosList = ["T1航站楼:一层7号门内巴士售票处","T2航站楼:一层11号门外巴士售票处","T3航站楼:一层7号或9号门外巴士售票处"];

var cityPhoneList = ["010-64573891","010-64594376","010-64594375"];

var alert = ["线路、站点、时刻的调整以首都国际机场巴士售票处公布信息为准","旅客乘坐首都机场省际巴士时需携带有效身份证件购票和乘车","乘坐省际机场巴士前往首都机场乘机的乘客请注意登机时间国内航班乘客建议提前6个小时乘坐巴士，国际航班乘客建议提前7个小时乘坐巴士"];

module.exports = {
    cityBusList:cityBusList,
    buyPosList:buyPosList,
    cityPhoneList:cityPhoneList,
    alert:alert,
    line1: line1,
    line2: line2,
    line3: line3,
    line4: line4,
    line5: line5,
    line6: line6,
    line7: line7,
    line8: line8,
    line9: line9,
    line10: line10,
    line11: line11,
    line12: line12,
    line13: line13,
    line14: line14,
    line15: line15,
    line16: line16,
    line17: line17,
    line18: line18,
    line19: line19,
    line20: line20
}
