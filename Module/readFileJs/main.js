var http = require("http");
var dt = require("./number.js");
http.createServer(function (req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write("total elements of array is : "+dt.totalElement());
    res.write("\ninformation student : name : "+dt.information.name+", age: "+dt.information.age);
    res.write("\nsum of two number is : "+dt.calculation.sum(4, 6));
    res.write("\nsub of two number is : "+dt.calculation.sub(4, 6));
    res.write("\ndiv of two number is : "+dt.calculation.div(4, 6));
    res.write("\nmul of two number is : "+dt.calculation.mul(4, 6));
    res.end();
}).listen(3000, function (){console.log("listening port 3000")});
