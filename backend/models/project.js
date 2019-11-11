'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Modelo base de datos MongoDB
var ProjectSchema = Schema({
  name: String,
  description: String,
  category: String,
  year: Number,
  langs: [String]
});

module.exports = mongoose.model('Project', ProjectSchema);
// projects --> guarda los documents en la coleccion