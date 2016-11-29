const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let urlSchema = new Schema ({
  id: String,
  url: String,
  date: { type: Date, default: Date.now },
  count: Number
});

module.exports = mongoose.model('Url', urlSchema);
