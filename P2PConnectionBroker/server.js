var express = require('express'),
    app = express(),
    ExpressPeerServer = require('peer').ExpressPeerServer,
    allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

app.get('/', function(req, res) { res.send("NodeJS: Connecting people."); });
var server = app.listen(9000, function() {
    console.log('Listening on port 9000');
});
var options = {
    allow_discovery: true,
    debug: true
};
app.use('/app', ExpressPeerServer(server, options));
app.use(allowCrossDomain);