'use strict';


//Cargamos las dependencias en las variables
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Archivos de rutas

// Middleware es software que se sitúa entre un sistema operativo y las aplicaciones que se ejecutan en él.Básicamente, funciona como una capa de traducción oculta para permitir la comunicación y la administración de datos en aplicaciones distribuidas.A veces, se le denomina“ plumbing”(tuberías), porque conecta dos aplicaciones para que se puedan pasar fácilmente datos y bases de datos por una“ canalización”.El uso de middleware permite a los usuarios hacer solicitudes como el envío de formularios en un explorador web o permitir que un servidor web devuelva páginas web dinámicas en función del perfil de un usuario.
app.use(bodyParser.urlencoded({extended:false}));
// Convierte todo lo que enviamos a json
app.use(bodyParser.json());


//CORS 


//rutas

app.get('/', (req, res) => {
  res.status(200).send(
    "<h1>Página de Inicio</h1>"
  );
});

app.post('/test/:id', (req, res) => {
  //body
  console.log(req.body.nombre);
  //query
  console.log(req.query.web);
  //params corresponde al valor del parametro despues de la ruta
  console.log(req.params.id);
  res.status(200).send({
    message: "Hola Mundo desde mi API desde Node Js"
  });
});


//Exportar
module.exports = app;
