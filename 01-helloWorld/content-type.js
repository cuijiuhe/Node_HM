const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    let url = req.url;
    if(url === '/'){
        res.end('Index');
    }else if(url === '/world') {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Hello δΈη');
    }else if( url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(`<p>Hello ηζ</p>`)
    }
    
})

server.listen(3000, () => {
    console.log('Server is running');
})


