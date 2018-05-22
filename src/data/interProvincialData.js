var cityBusList = [
  {
    lineName: '天津线',
    name: 'line1'
  },
  {
    lineName: '秦皇岛线',
    name: 'line2'
  },
  {
    lineName: '塘沽线',
    name: 'line3'
  },
  {
    lineName: '廊坊线',
    name: 'line4'
  },
  {
    lineName: '保定线',
    name: 'line5'
  },
  {
    lineName: '唐山线',
    name: 'line6'
  },
  {
    lineName: '沧州线',
    name: 'line7'
  },
  {
    lineName: '赤峰线',
    name: 'line8'
  },
]


var line1 = {
    "lineName": "天津线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "天津天环站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"82元（单程）"
        },
        {
            "platform":"天津天环站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"天津天环站",
            "price":"82元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":["6:30","7:30","8:30","09:30","10:30","11:15","12:15","13:00","13:45","14:30","15:15","16:00","16:45","17:30","18:15","19:00","20:00","21:00","22:00","23:00"],
    "backRunTime":["04:30","05:00","6:00","07:00","07:30","08:00","09:00","10:00","10:30","11:00","12:00","13:00","13:30","14:00","15:00","16:00","17:00","17:30","18:00","18:30"]
};

var line2 = {
    "lineName": "秦皇岛线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "秦皇岛站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"140元（单程）"
        },
        {
            "platform":"秦皇岛站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"秦皇岛站",
            "price":"140元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":["09:30","11:00","12:00","13:00","14:00","15:00","16:30","18:00","19:30","21:00"],
    "backRunTime":["05:00","06:00","07:00","08:00","09:00","10:00","12:00","13:00","15:00","17:00"]
};

var line3 = {
    "lineName": "塘沽线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "塘沽站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"94元（单程）"
        },
        {
            "platform":"塘沽站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"塘沽站",
            "price":"94元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":"具体发车时刻请咨询 010-64558718",
    "backRunTime":"具体发车时刻请咨询 010-64558718"
};

var line4 = {
    "lineName": "廊坊线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "廊坊站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"40元（单程）"
        },
        {
            "platform":"廊坊站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"廊坊站",
            "price":"40元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":["10:30","12:00","13:45","15:00","16:30","18:00","19:30","20:45"],
    "backRunTime":["6:30","8:00","10:00","12:00","13:30","15:00","16:30","18:00"]
};

var line5 = {
    "lineName": "保定线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "保定站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"100元（单程）"
        },
        {
            "platform":"保定站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"保定站",
            "price":"100元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":["10:10","11:40","14:10","16:10","18:30","20:30"],
    "backRunTime":["05:00","07:00","09:00","10:30","14:00","16:00"]
};

var line6 = {
    "lineName": "唐山线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "唐山站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"80元（单程）"
        },
        {
            "platform":"唐山站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"唐山站",
            "price":"80元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime": ["7:30", "9:00", "10:30", "12:00", "13:30", "14:45", "16:00", "17:15", "18:30", "20:00", "21:30", "23:00"],
    "backRunTime": ["6:00", "7:00", "8:10", "9:20", "10:00", "11:00", "13:00", "14:00", "15:00", "17:00"]


};

var line7 = {
    "lineName": "沧州线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "沧州客运西站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"100元（单程）"
        },
        {
            "platform":"沧州客运西站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"沧州客运西站",
            "price":"100元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime":["14:45","19:45"],
    "backRunTime":["8:00","14:00"]
};

var line8 = {
    "lineName": "赤峰线",
    "toDesDirec": "北京首都机场站",
    "toAirportDirec": "赤峰汽车站",
    "toDesArr": [
        {
            "platform":"北京首都机场站",
            "price":"150元（单程）"
        },
        {
            "platform":"赤峰汽车站",
            "price":"——"
        },
    ],
    "toAirportArr": [
        {
            "platform":"赤峰汽车站",
            "price":"150元（单程）"
        },
        {
            "platform":"北京首都机场站",
            "price":"——"
        },

    ],
    "toRunTime": ["12:00", "15:30"],
    "backRunTime": ["8:30", "14:00"]
};

var buyPosList = ["T2航站楼：一层13号门内省际机场巴士售票处","T3航站楼：一层1号门内省际机场巴士售票处"];

var cityPhoneList = ["010-64558718"];

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
}