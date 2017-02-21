# wexin-oauth-domains
一种微信多域名下的登陆验证的方法

### Warn
	
	不可以直接用于生产环境，请根据实际情况修改参数后使用，这里只是一种方法


### Usage

`meteor add devqin:accounts-wechats-mp`

then

```
  Meteor.loginWithWeChatMP({ oauthServer: 'oauthServer', callback_uri: 'callback_uri' }, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log("登陆成功！");
    }
  });
```
