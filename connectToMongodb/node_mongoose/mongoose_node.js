const mongoose = require("mongoose");
const db = mongoose.connection;

db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", function () {
    //make a connection to connection, schema, models here
    //create schema 
    var studentSchema = new mongoose.Schema({
        name: String,
        birthday: Date,
        avgScore: Number
    });
    //create a model using moviesSchema as the structure 
    var Student = mongoose.model('Student', studentSchema);
    // var thor = new Student({
    //     name: "thor", birthday: "1996/4/16", avgScore: 5

    // });
    // thor.save((err, thor) => {
    //     if(err) return console.error(err);
    //     console.dir(thor);
    // })
    //get all documents in the students collection
    //find all
    Student.find((err, data) => {
        if(err) throw err;
        console.dir(data);
    });
    //find one
    Student.findOne({name: "Vu Duc Thao"},  (err, data) => {
        if(err) return console.error(err);
        console.dir(data);
    });
    //find with conditions
    Student.find({avgScore: 7}, (err, data) => {
        if(err) console.error(err);
        console.dir(data);
    });
    //
    //Student.find({avgScore: 8.5}).where('createDate').gt(oneYearAgo).exec(callback);
    Student.remove({avgScore: "5"}, (err) => {
        if(err) return handleError(err);
    });
    //Update 
    var query = {name: "Pham Thi Khue"};
    Student.findOneAndUpdate(query, {$set: {birthday: "2000/10/24"}});
});

mongoose.connect("mongodb://localhost:27017/studentmanager");
