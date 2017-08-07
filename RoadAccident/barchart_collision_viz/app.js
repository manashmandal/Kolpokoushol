var express = require('express');

var app = express();

var port = 3000;

app.get('/', function(req, res) {
    console.log("VISITED root");
    console.log(__dirname);
    res.sendFile(__dirname + '/public/barchart.html');
});

app.listen(port, function(req, res) {
    console.log("App started at localhost:" + port);
});