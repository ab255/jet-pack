const Url = require('../models/url');
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const app = express();
const shortid = require('shortid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

// GET
router.get('/', (request, response) => {
  // Url.remove({ __v: 0 }, error => {
  //   if (error) return handleError(error);
  // })
  Url.find((error, Urls) => {
    if(error) {
      response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});

router.post('/', (request, resolution) => {
  var url = new Url(request.body);
  url.id = shortid.generate();
  url.date = new Date;
  url.count = 0;

  url.save((error) => {
    if(error) {
      resolution.send(error)
    }
    Url.find((error, Urls) => {
      resolution.render('index.ejs', {urls: Urls });
    });
  });
});

module.exports = router;
