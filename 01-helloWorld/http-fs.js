const fs = require('fs');
const http = require('http');

const serve = http.createServer();

serve.on('request', (req, res) => {
    let url = req.url;

    if( url === '/') {
        fs.readFile('./recourse/index.html', ( error, data ) => {
            if ( error ) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('资源错误');
            }else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
            }
        })
    } else if( url === '/ab'){
        fs.readFile('./recourse/选中.png', ( error, data ) => {
            if ( error ) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('资源错误');
            }else {
                // res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        })
    }else if( url === '/a.json') {
        fs.readFile('/Users/cuijiuhe/Documents/Study/Node_Hm/nodemon.json', ( error, data) => {
            if (error) {
                return res.end('cuowu')
            } else {
                res.end (data);
            }
        })
    }

})

serve.listen(3001, () => {
    console.log('Server is running');
})