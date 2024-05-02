const http = require("http"); // pakage import


const port = 8081; // port num

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/html"});
    response.write("<h1>Hello World!- hi</h1>");
    response.end();

})
.listen(port, ()=>{
    console.log(`NodeJS server is op and running successfully on port ${port}`)
})


// http://localhost:8081