var express = require("express");
var app = express();
var fs = require("fs");

var user = {
    "user4": {
        "name"      : "mohit",
        "password"  : "password4",
        "profession": "teacher",
        "id"        : 4
    }
};
//add new user
app.post('/addUser', function (req, res) {
    console.log(111)
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        data["user4"] = user["user4"];
        console.log( data );
        res.end( JSON.stringify(data));
    });
 });
 
// //get User from Id
app.get("/:id", function (req, res) {
    //read existing users
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        users = JSON.parse(data);
        var user = users["user" + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});
// //get list User
app.get("/listUser", function (req, res) {
    fs.readFile(__dirname+ "/" + "users.json", "utf-8", function (err, data){
        console.log(data);
        res.end(data);
    });
});
// //delete user
// var id = 2;
app.delete("/deleteUser", function (req, res) {
    //read file
    fs.readFile(__dirname + "/" + "users.json", 'utf-8', function (err, data){
        data = JSON.parse(data);
        delete data["user"+ 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(3000,function (){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http:/%s%s", host,  port);
});