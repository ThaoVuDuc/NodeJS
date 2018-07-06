var http = require("http");
var fs = require("fs");
http.createServer(function (req, res){
     fs.readFile("./nodejsfresher.txt", function (err, data){
         if(err){
             res.writeHead(404, {'Content-type':'text/html'});
             return res.end("404 not found");
         }
         res.writeHead(200, {'Content-type':'text/html'});
         res.write(data);
         res.end();
     });
}).listen(3000);