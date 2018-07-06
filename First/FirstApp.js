var http = require("http");
http.createServer(function (req, res) {
    //send http header 
    //http status : 200
    //Content type : text/plain
    res.writeHead(200, {'Content-type' : 'text/plain'});
    //send the response body as "hello world"
    res.end("hello world !\n");
}).listen(8080);
console.log("sever running at http://127.0.0.1:8080/");