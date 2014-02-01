var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var config = require(__dirname + '/config.js');
var logger = require(__dirname + '/app/lib/logger.js');

logger.info('Starting up...');
logger.info('Running in Directory: ', __dirname);

app.use('/static', express.static(__dirname + '/app/static'));

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');

app.use(express.bodyParser());
app.use(express.cookieParser());

app.use(express.session({
	secret: config.server.secret
}));


require('./app/lib/routes.js')(app);
require('./app/lib/socket.js')(io);

server.listen(config.server.port);
logger.info('Server Up and running');