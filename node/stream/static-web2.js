// 使用内置的流来实现静态 web 服务器
//
// 用流的代码

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  console.log('method:' + req.method + ', url:' + req.url);
  fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(8000);

