var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type':'text/html'});
    fs.readFile("./hello.html", 'utf-8', function (err, data){
        if(err) throw err;
        data = data.replace("{name}", "Thao");
        res.write(data);
        //data = data.replace("{name}", "Thao");
        res.end();
    });
}).listen(3000, function () {console.log("listening port 3000")});