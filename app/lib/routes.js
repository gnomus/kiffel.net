module.exports = function(server) {
  'use strict';

  //Dashboard
  server.get('/', function(req, res) {
    res.render('dashboard');
  });

};