var env = process.env.NODE_ENV || 'development';

var config = {
  'development': {
    // urlBase: 'https://cloud.umetrip.com/gateway/api/web/ffp/' //  生产地址
    urlBase: '/gateway/api/web/checkin/'
  },

  'production': {
    urlBase: 'http://119.254.233.175/gateway/api/web/checkin/' // 测试地址
    // urlBase: 'http://119.254.233.174/gateway/api/web/checkin/' // 灰度地址
    // urlBase: 'https://cloud.umetrip.com/gateway/api/web/checkin/' // 生产地址
  }
};

module.exports = config[env];
