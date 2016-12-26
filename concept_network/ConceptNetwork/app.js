var express = require('express');

const port = 3000;

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function (req, res) {
    console.log("Magic happens @" + port);
});