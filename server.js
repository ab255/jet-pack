const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const MongoClient =require('mongodb').MongoClient

const urls = require('./routes/urls');

const app = express();

app.set('view engine', 'ejs');

const dbName = 'urlDB'
const connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/jetpack', urls);

const port_number = process.env.PORT || 3000;

if (!module.parent) {
  app.listen(port_number, () => {
    console.log(`Jet Pack is running on ${port_number}.`);
  });
};

module.exports = app;
