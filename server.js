var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', function(req, res) {
   var retJSON = {
       ipaddress: req.headers['x-forwarded-for'],
       language: req.headers['accept-language'].split(',')[0],
       software: req.headers['user-agent'].split(/[\(\)]/)[1]
   };
   res.json(retJSON);
   console.log(req.headers);
   res.end();
});

app.listen(8080, function(path, info) {
    console.log('new connection: ' + info);
});