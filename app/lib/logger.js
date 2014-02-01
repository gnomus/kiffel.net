var config = require('../../config.js');
var log4js = require('log4js');

//Loading File Appender
log4js.loadAppender('file');

//Create Logger
log4js.addAppender(log4js.appenders.file(config.logger.file), config.logger.name);

//Get Logger
var l = log4js.getLogger(config.logger.name);

//Set Logger Level
l.setLevel(config.logger.loglevel);

//Return Logger
module.exports = l;