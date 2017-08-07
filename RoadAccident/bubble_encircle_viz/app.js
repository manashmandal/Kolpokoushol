var express = require('express');

var app = express();

var port = 4000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/accident_count_district.html');
});

app.listen(port, function(req, res) {
    console.log("Magic happens at localhost: " + port);
});