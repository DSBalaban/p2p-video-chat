var express = require('express'),
    app = express();

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(3030, function() {
    console.log('Client listening on 3030');
});