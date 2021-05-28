const express = require('express');

const app = express();

app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

app.engine('html', require('express-art-template'));
app.get('/', function (req, res) {
  //express默认会去项目中 views 目录去找index.html
  res.render('index.html', {
    title: 'hello template',
    fruits: ['苹果', '香蕉', '橘子', '菠萝']
  })
})

app.listen(3000, function () {
  console.log('Server is Running');
})