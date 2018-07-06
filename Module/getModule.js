var http = require("http");
var dt = require("./myModule");
http.createServer(function (req, res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("the date and time are currently : "+dt.myDatetime());
    res.write("sum two number is :"+dt.sum(4, 5));
    res.end();

}).listen(3000);
