const express = require('express');

//创建你的服务器应用程序
const app = express();

//公开制定目录
app.use('/public/', express.static('./public/'));
app.get('/', function(req, res) {
  res.send('Hello Express!')
})
app.get('/about', function(req, res) {
  res.send('关于我')
})

app.listen(3000, function() {
  console.log('app is running at port 3000')
})