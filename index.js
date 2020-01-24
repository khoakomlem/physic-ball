var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    var express = require('express');
    app.use(express.static(path.join(__dirname, 'static')));
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

http.listen(port, () => {
    console.log('Server started on port:  *' + port);
    console.log('Go localhost:' + port + ' and check!');
})