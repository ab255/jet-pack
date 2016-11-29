const express = require('express');
const bodyParser = require('body-parser');
const mongoose = rewuire ('mongoose');
const MongoClient =require('mongodb').MongoClient

const urls = require('./routes/urls');

const app = express();
app.set('view engine', 'ejs');

const dbName = 'urlDB'
const connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/jetpack', urls);

const port_number = process.env.PORT || 3000;

app.listen(port_number, () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
