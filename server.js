const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const MongoClient =require('mongodb').MongoClient

const urls = require('./routes/urls');

const app = express();

app.set('view engine', 'ejs');

let dbName = 'urlDB'
let connectionString = 'mongodb://localhost:27017/' + dbName;


const port_number = process.env.PORT || 3000;

if (!module.parent) {
  let dbName = 'urlDBTest'
  let connectionString = 'mongodb://localhost:27017/' + dbName;
  app.listen(port_number, () => {
    console.log(`Jet Pack is running on ${port_number}.`);
  });
}

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', urls);

module.exports = app;
