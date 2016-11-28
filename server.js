const express = require('express');
const app = express();

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

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});
