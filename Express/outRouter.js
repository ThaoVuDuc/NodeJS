module.exports = (app) => {
    app.route('/user')
    .get(function (req, res){
        res.send('hello world');
    })
    .post(function (req, res){
        res.send('got a post request');
    })
    .put(function (req, res){
        res.send('got a put request at  /user');
    })
    .delete(function (req, res){
        res.send('got a delete request at /user');
    });
}