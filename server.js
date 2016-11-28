const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.locals.title = 'Jet Pack';
app.locals.urlName = {
  url: 'http://google.com/'
};

// SET
app.set('port', process.env.PORT || 3000);

// GET
app.get('/', (request, response) => {
  response.send('testing');
});

app.get('/api/:id', (request, response) => {
  const { id } = request.params;
  const url = app.locals.urlName[id];

  if(!url) {return response.sendStatus(404);}

  response.json({ id, url });
});

// POST

app.post('/', (request, response) => {
  const { url } = request.body;
  const id = Date.now();

  if(!url) {return response.sendStatus(404).send({
    error: 'No URL provided'
  });
  }

  app.locals.urlName[id] = url;

  response.status(201).json({ id, url });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
