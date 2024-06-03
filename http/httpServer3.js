const http = require('http');
const fs = require('fs').promises;

const server = http.createServer();

server.on('request', async (req, res) => {
    // console.log("method: ", req.method);
    // console.log("url1", req.url);
    // console.log("url2", url.parse(req.url));
    console.log("url2=1", url.parse(req.url).pathname);
    // console.log("url3", url.parse(req.url).query);
    try {
        let pathFileName = url.parse(req.url).pathname;

        if (pathFileName != "/favicon.ico") {
            pathFileName = pathFileName == "/" ? "/base" : pathFileName;
            const data = await fs.readFile("./server2.html");
            res.writeHead(200, { 'Count-type': 'text/html; charset=utf-8' });
            res.end(data);
        }
    } catch (err) {
        console.error(err);
        res.writeHad(200, { 'Count-type': 'text/html; charset=utf-8' });
        res.end("err : ", err.message);
    }
});

server.listen(8088, () => {
    console.log("여기");
});