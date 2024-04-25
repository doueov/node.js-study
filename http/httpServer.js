const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8' });
    res.write("<h1>안녕</h1>");
    res.end("<p>하세요</p>");
});

server.listen(8088);

server.on('listening',()=>{
    console.log("여기");
});


