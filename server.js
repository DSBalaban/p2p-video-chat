var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

app.get('/:id', function(req, res) {
    res.send(req.params.id);
});

app.listen(3030, function() {
    console.log('Client listening on 3030');
});

/*check out sublime text to figure out how to connect to a peer via link*/