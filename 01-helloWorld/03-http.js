//使用Node 非常轻松的构建一个 Web服务器

let http = require('http');
//使用http.createServer() 方法创建一个Web服务器
let server = http.createServer();
//request 请求事件处理函数，接受两个参数
server.on('request', (request, response) => {
    console.log('收到客户端请求了'+ request.url)
    // response对象有一个方法：为write 可以用来给客户端发送响应数据
    // write 可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待


    // response.write('hello response');
    // response.write(' Node.js');
    // response.end();

    if(request.url === '/login'){
        response.end('login');
    }else if(request.url === '/product') {
        let productList = [
            {
                name: '苹果X',
                price: 9888
            },
            {
                name: '三星S8',
                price: 9888
            },
            {
                name: 'MacBook Pro',
                price: 32432
            }
        ]
        response.end(JSON.stringify(productList))
    }
    //希望当请求不同的路径的时候响应不同结果
    // index 
    //login     登陆
    // hahaha   哈哈哈
})

//绑定端口号启动服务器
  server.listen(3000, () => {
      console.log('服务器启动成功了 可以通过http://127.0.0.1:3000进行访问')
  })