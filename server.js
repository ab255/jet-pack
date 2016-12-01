const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const MongoClient = require('mongodb').MongoClient;

const urls = require('./routes/urls');

const app = express();

app.set('view engine', 'ejs');

// let dbName = 'urlDB'
// let connectionString = 'mongodb://https://jetp.herokuapp.com/' + dbName;

const port_number = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port_number, () => {
    console.log(`Jet Pack is running on ${port_number}.`);
  });
}

mongoose.connect(process.env.MONGOLAB_URI, function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', urls);

module.exports = app;
