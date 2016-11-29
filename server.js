const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const shortid = require('shortid');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.locals.title = 'Jet Pack';
app.locals.urls = [];

// SET
app.set('port', process.env.PORT || 3000);

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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});