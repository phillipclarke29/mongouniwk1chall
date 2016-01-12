var express = require('express'),
  app = express(),
  engines = require('consolidate'),
  bodyParser = require('body-parser');
  MongoClient = require('mongodb').MongoClient,
  assert = require('assert');


  app.engine('html', engines.nunjucks);
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');
  app.use(bodyParser.urlencoded({ extended: true }));

  MongoClient.connect('mongodb://localhost:27017/video', function(err, db){


  function errorHandler(err, req, res, next){
   console.error(err.message);
   console.error(err.stack);
   res.status(500).render('error_template', { error: err });

  }

app.get('/', function(req, res, next) {
  res.render('MovieForm', { 'fruits' : ['apple', 'orange', 'banana', 'peach' ] });
});

app.post('/add_movie', function(req, res, next) {
    var title = req.body.title;
    var year = req.ddoby.year;
    var imdb = req.body.imdb;
    if (typeof title == 'undefined' || typeof year == 'undefined' || typeof imdb == 'undefined' ) {
        next('Please enter a value for each field');
    }
    else {
        res.send("Your favorite fruit is " + favorite);
    }
});

app.use(errorHandler);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});

});
