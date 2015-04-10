var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.set('port', process.env.PORT || 8000);

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ping', require('./handlers/ping'));
app.post('/echo', require('./handlers/echo'));
app.post('/apero', require('./handlers/apero'));
app.post('/hodor', require('./handlers/hodor')(false));
app.post('/hodor/scan', require('./handlers/hodor')(true));

app.get('/', function(req, res){
  res.send('OK');
});

app.listen(app.get('port'));
