var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = req.query;
  if (query.code) {
    var callback_uri = req.cookies['callback_uri'];
    res.redirect(callback_uri + '?code=' + query.code + "&state=" + query.state);
  } else {
    res.cookie('callback_uri', query.callback_uri, { maxAge: 900000, httpOnly: true });
    var options = [
      'https://open.weixin.qq.com/connect/oauth2/authorize',
      '?appid=' + query.appid,
      '&redirect_uri=http://192.168.1.136:8080/oauth',
      '&response_type=code',
      '&scope=snsapi_userinfo',
      '&state=' + query.state,
      '#wechat_redirect'
    ];
    res.redirect(options.join(''))
  }
});

module.exports = router;
