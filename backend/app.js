'use strict';


// Cargamos las dependencias en las variables
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// cargar archivos rutas
var project_routes = require('./rutes/project');

// Middleware 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS  


//rutas
app.use('/api', project_routes);

//Exportar
module.exports = app;
