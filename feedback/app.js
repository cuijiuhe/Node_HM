const http = require('http');
const fs = require('fs');
const urlss = require('url');
const template = require('art-template');

let comments = [
  {
    name: 'Durant',
    message: '上号Solo',
    dateTime: '2021-3-15'
  },
  {
    name: 'James',
    message: '人设立起来',
    dateTime: '2003-6'
  },
  {
    name: 'Tatum',
    message: '淦',
    dateTime: '1998'
  }
]



http
  .createServer(function (req, res) {
    let url = req.url;
    if (url === '/') {
      fs.readFile('./views/index.html', function (err, data) {
        if (err) {
          return res.end('404 Note Found.')
        }
        let htmlStr = template.render(data.toString(), {
          comments
        })
        res.end(htmlStr);
      })
    } else if (url.indexOf('/public/') === 0) {
      fs.readFile(`.${url}`, function (err, data) {
        if (err) {
          return res.end('404 Not Found.');
        }
        res.end(data);
      })
    } else if (url === '/post') {
      fs.readFile('./views/post.html', function (err, data) {
        if (err){
          return res.end('404 Not Found.');
        }
        res.end(data);
      })
    } else if (url.indexOf('/pinglun?') === 0) {
      let querys = urlss.parse(url, true).query;
      let temporary = {
        name: querys.name,
        message: querys.message,
        dateTime: new Date()
      }
      comments.unshift(temporary);
      res.statusCode = 302; //临时重定向状态吗
      res.setHeader('Location', '/')  //设置响应头重定向到 /
      res.end();
    } else {
      fs.readFile('./views/404.html', function (err, data) {
        res.end(data);
      })
    }
})
  .listen(3000, function() {
    console.log('Servr is running')
  })