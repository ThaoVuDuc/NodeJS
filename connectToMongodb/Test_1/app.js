MongoClient = require('mongodb').MongoClient;
const http = require("http");
http.createServer(function (req, res){

MongoClient.connect('mongodb://localhost:27017/studentmanager', (err, client) => {
    if(err) throw err;
    console.log("connect success");
    var db = client.db('studentmanager')
    var students = db.collection('students');
    students.find({}).toArray(function (err, results) {
        if (err) throw err;        
        console.log(results);
        data = '<table border= "1" style="border-collapse:collapse;width:600px;" cellspacing= "10" cellpaddding="20">';
        data += '<tr><th>name</th><th>birthday</th><th>avgScore</th></tr>';
        results.forEach(function (row){
            data += '<tr>'
            data += '<td>'+ row.name + '</td>';
            data += '<td>'+ row.birthday + '</td>';
            data += '</tr>';
            data += '<td>'+ row.avgScore + '</td>';
        });
        data += '</table>';
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    });
    client.close(); 
});
}).listen(3001, () => {
    console.log("listening port 3001");
});

// var url = 'mongodb://localhost:27017/studentmanager';

// var findDocuments = function(db, callback) {
//     var collection = db.collection('students');

//     collection.find().toArray(function(err,docs){
//         if (err) throw err;
//         console.log(docs);
//         callback;
//     })

// }

// MongoClient.connect(url, function(err, client){
//     if (err) throw err;
//     // console.log("it is working");
//     // db.close();
//     findDocuments(client.db('studentmanager'), function(){
//         db.close();
//     });
// })