'use strict';

var categorias = ['Acción','Terror','Comedia','Romance'];

var peliculas = ['La verdad duele','La vida es bella','Gran torino','Tiburon', 'El gran escape'];

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);


// Convertir un array a un string
var peliculas_string = peliculas.join();
console.log(peliculas_string);

//CONVERTIR UN TEXTO A UN ARRAY
var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(',');
console.log(cadena_array);

