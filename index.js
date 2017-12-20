var linebot = require('linebot');
var express = require('express');
//使用套件

var bot = linebot({
  channelId: '1552347114',
  channelSecret: 'b76d2078d71935667f27238d8da103c1',
  channelAccessToken: 'vDHD4iL1z8k1RzzvACAVl2y6fhH22jD2XOfEUGXd9F4J3BbaWAB44eBZAXhuyDF0T0GDaBh1Hsk/Zi4kXyty57Y45JzbdEL+IrAXjmfqLs5VRWKy93vUUCND+jpJ0a3JEaBuhPQtz6owsd+vapPmewdB04t89/1O/w1cDnyilFU='  
});

bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });