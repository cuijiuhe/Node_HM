const express = require('express');
// const  
const app = express();

app.use('/public/', express.static('./public/'))
//第一个参数表示，当渲染以 .html结尾的文件的时候，使用 art-template 模版引擎
app.engine('html', require('express-art-template'))

app.get('/', function (req, res) {
  res.render('404.html')
})
//默认去vievs目录下去找
//如果想修改 使用 app.set('views','想要的目录')
app.get('/admin', function (req, res) {
  res.render('admin/index.html', {
    title: '我是admin tit'
  })
})
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, function () {
  console.log('Express is Running');
})