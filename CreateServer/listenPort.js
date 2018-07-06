var http = require("http");
var fs = require("fs");
http.createServer(function (req, res){
    fs.readFile("./nodejsfresher.txt", function (err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(5000, function (){
    console.log("listening port 5000");
});