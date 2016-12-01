const Url = require('../models/url');
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const app = express();
const shortid = require('shortid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

router.get('/', (request, response) => {
  Url.find().sort('date').exec((error, Urls) => {
        if(error) {
      return response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});

router.post('/', (request, response) => {
  var url = new Url(request.body);
  url.id = shortid.generate();
  url.date = new Date;
  url.count = 0;

  url.save((error) => {
    if(error) {
      return response.status(400).send(error)
    }
    Url.find((error, Urls) => {
      response.render('index.ejs', {urls: Urls });
    });
  });
});

router.get('/oldest', (request, response) => {
  Url.find().sort('-date').exec((error, Urls) => {
    if(error) {
      return response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});

router.get('/popular', (request, response) => {
  Url.find().sort( '-count' ).exec((error, Urls) => {
    if(error) {
      return response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});

router.get('/unpopular', (request, response) => {
  Url.find().sort( 'count' ).exec((error, Urls) => {
    if(error) {
      return response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});


router.get('/:id', (request, response) => {
  Url.findOne({ id: request.params.id }, (error, url) => {
    if ( error || !url ) {
      return response.status(404).send(error);
    }
    url.count++;
    url.save(error => {
      if (error) {
        return response.send(error);
      }
      response.redirect(url.url);
    });
  });
});

module.exports = router;
