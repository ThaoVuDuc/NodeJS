var http = require("http");
var fs = require("fs");
http.createServer(function (req, res){
    fs.readFile("Object.js", function (err, data){
        if(err) {
            res.writeHead(404, {'Content-type':'text/html'});
            res.end("404 not found");
        }
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(""+data);
        res.end();
    });
}).listen(3000, function (){
    console.log("listening port 3000");
});