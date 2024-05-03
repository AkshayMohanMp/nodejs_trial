const http = require("http"); // pakage import


const port = 8081; // port num

const toDoList =["Akshay","ashak","aiswarya"];

http.createServer((request, response)=>{
    const {method, url}= request;
    // console.log(method, url)

    if(url === "/todos"){
        if(method === "GET"){
            response.writeHead(200);
            response.write(toDoList.toString())
        }else if(method =="POST"){
            let body ="";
            request.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{
                body +=chunk
                console.log("chunk:",chunk)
            }).on('end',()=>{
                body =JSON.parse(body)
                console.log("body:",body)
            })
        }
        else{
            response.writeHead(501)
        }

    }else if(url === "/"){
    }
    // response.writeHead(200, {"Content-Type":"text/html"});
    // response.write("<h1>Hello World!- hi</h1>");


    response.end();

})
.listen(port, ()=>{
    console.log(`NodeJS server is op and running successfully on port ${port}`)
})


// http://localhost:8081