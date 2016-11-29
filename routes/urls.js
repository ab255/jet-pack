const Url = require('../models/url');
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const app = express();
const shortid = require('shortid');

app.locals.title = 'Jet Pack';
app.locals.urls = [];

// GET
app.get('/', (request, response) => {
  response.send({ urls: app.locals.urls });
});

app.get('/:id', (request, response) => {
  const id = request.params;

  if(!id) {return response.sendStatus(404);}
  return response.redirect('http://google.com');
});

// POST
app.post('/', (request, response) => {
  const id = shortid.generate();
  const { url } = request.body;
  const date = Date.now();
  const clicks = 0;

  if(!url) {
    return response.sendStatus(404).send({
      error: 'No URL provided'
    });
  }
  app.locals.urls.push({ id, url, date, clicks });
  response.status(201).json({ id, url, date, clicks });
});

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
