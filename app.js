var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var config = require('config.js');
//var io = require('socket.io').listen(server);


var logger = require('./app/lib/logger.js');
//require('./app/lib/routes.js')(app);
//require('./app/lib/sockets.js')(io);

server.listen(config.server.port);
logger.info('Server Up and running');