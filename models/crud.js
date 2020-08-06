var mongoose = require('mongoose');

var crudSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('crud', crudSchema);