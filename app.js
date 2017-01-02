var express = require('express');
var app = express();

var port = 4000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function(req, res) {
    console.log("Listening to: " + port);
});