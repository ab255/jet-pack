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
  Url.find((error, Urls) => {
    if(error) {
      response.send(error)
    }
    response.render('index.ejs', { urls: Urls });
  });
});

router.post('/', (request, resolution) => {
  var url = new Url(request.body);

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

//
//
//
//
//
//
//
//
//
// app.get('/:id', (request, response) => {
//   const id = request.params;
//
//   if(!id) {return response.sendStatus(404);}
//   return response.redirect('http://google.com');
// });
//
// // POST
// app.post('/', (request, response) => {
//   const id = shortid.generate();
//   const { url } = request.body;
//   const date = Date.now();
//   const clicks = 0;
//
//   if(!url) {
//     return response.sendStatus(404).send({
//       error: 'No URL provided'
//     });
//   }
//   app.locals.urls.push({ id, url, date, clicks });
//   response.status(201).json({ id, url, date, clicks });
// });

// PUT METHOD
// app.put('/:id', (request, response) => {
//   const { id } = request.params;
//   const { message } = request.body
//
//   if (!id){ return response.status(404);}
//
//   app.locals.urls[id] = clicks++;
//
//   response.json({ id, clicks});
// });
