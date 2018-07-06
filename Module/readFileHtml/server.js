var http = require("http");
var fs = require("fs");

function start () {
    function onRequest (req, res){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.readFile("./hello.html", 'utf-8', function (err, data){
            if(err) throw err;
            data = data.replace("{name}", "Thao");
            res.write(data);
            res.end();
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started !");
}

exports.start = start;