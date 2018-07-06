var http = require("http");
var fs = require("fs");

var moduleObj = require("./moduleObj");
http.createServer(function (req, res){
    res.writeHead(200, {'Content-type':'text/html'});
    // res.write(`information is : name`+moduleObj.Student.student1.name+ ` ,age : `+moduleObj.Student.student1.age);
    // res.write("information student 2 : name : "+moduleObj.Student.student2.name+", age : "+moduleObj.Student.student2.age);
    fs.readFile("./Information_student.html", 'utf-8', function (err, data){
        if(err) {
            res.writeHead(404, function (){
               console.log("404 not found"); 
            });
        }
        data = data.replace("{name1}", moduleObj.Student.student1.name);
        data = data.replace("{age1}", moduleObj.Student.student1.age);
        data = data.replace("{class1}", moduleObj.Student.student1.class);

        data = data.replace("{name2}", moduleObj.Student.student2.name);
        data = data.replace("{age2}", moduleObj.Student.student2.age);
        data = data.replace("{class2}", moduleObj.Student.student2.class);

        data = data.replace("{name3}", moduleObj.Student.student3.name);
        data = data.replace("{age3}", moduleObj.Student.student3.age);
        data = data.replace("{class3}", moduleObj.Student.student3.class);
       
        data = data.replace("{name4}", moduleObj.Student.student4.name);
        data = data.replace("{age4}", moduleObj.Student.student4.age);
        data = data.replace("{class4}", moduleObj.Student.student4.class);
    
        res.write(data);
    });
}).listen(3000, function () {
    console.log("app listening port 3000");
});