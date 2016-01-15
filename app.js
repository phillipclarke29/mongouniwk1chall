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

app.get('/add_movie', function(req, res, next) {
  res.render('MovieForm');
});

app.get('/all_movies', function(req, res, next) {
   db.collection('videos').find({}).toArray(function(err, docs) {
     console.log(docs);
    res.render('all_movies', { 'videos': docs });
    });
});


app.post('/add_movie', function(req, res, next) {
  console.log(req.body);

    var title = req.body.title;
    var year = req.body.year;
    var imdb = req.body.imdb;
    if (title == '' || year == '' || imdb == '') {
        next('Please enter a value for each field');
    }
    else {
      var collection = db.collection("videos");
      // Insert a single document
      collection.insert({
        title : req.body.title,
        year : req.body.year,
        imdb : req.body.imdb,
      });
      res.send("Thank you for adding a movie");
    }
});

app.use(errorHandler);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});

});
