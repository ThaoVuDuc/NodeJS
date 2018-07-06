const http = require('http'),
mongoClient = require('mongodb').MongoClient;

http.createServer(function (req,res) {

    mongoClient.connect('mongodb://localhost:27017/studentmanager', function(err, db) {
        if (err) throw err;
        var students = db.db.collection('students');
        products.find({}).toArray(function (err,results) {
            if (err) throw err;
            data = '<table border="1" style="border-collapse:collapse" cellspacing="5" cellpadding="15">';
            data += '<tr><th>Name</th><th>Price</th><th>Category</th></tr>';
            results.forEach(function (row) {
                data += '<tr>';
                data += '<td>' + row.name + '</td>';
                data += '<td>' + row.birthday + '</td>';
                data += '<td>' + row.avgScore + '</td>';
                data += '</tr>';
            });
            data += '</table>';
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
        db.close();
    });

}).listen(3001, function () {
    console.log("listening port 3001");
});