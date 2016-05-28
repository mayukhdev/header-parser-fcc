var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  var obj = {};
  obj.ipaddress = req.ip;
  obj.language = req.headers['accept-language'].split(',')[0];
  var re = /\((.*?)\)/
  obj.os = req.headers['user-agent'].match(re)[1];
  res.type('application/json');
  res.send(obj);
});

app.listen(app.get('port'),function () {
  console.log('Node running on ' + app.get('port'));
});
