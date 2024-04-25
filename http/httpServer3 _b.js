const http = require('http');
const fs = require('fs').promises;
const url = require('url');

const server = http.createServer();

server.on('request', async(req,res)=>{
    // console.log("method : ",req.method);
    // console.log("url1",req.url);
    // console.log("url2",url.parse(req.url));
     console.log("url2-1",url.parse(req.url).pathname);
    // console.log("url3",url.parse(req.url).query);
    

    try{
        let pathFileName = url.parse(req.url).pathname;

        if(pathFileName != "/favicon.ico"){
            pathFileName = pathFileName=="/"? "/base": pathFileName;
            const data = await fs.readFile(`.${pathFileName}.html`);
            res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        }
            
    }catch(err){
        console.error(err);
        res.writeHead(500,{ 'Content-Type': 'text/plain; charset=utf-8' });
        res.end("err : ",err.message);
    };
});

server.listen(8080,()=>{
    console.log("여기");
});



