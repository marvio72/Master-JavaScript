'use strict';

var categorias = ['Acción','Terror','Comedia','Romance'];

var peliculas = ['La verdad duele','La vida es bella','Gran torino'];

var cine = [categorias,peliculas];

// console.log(cine[0][1]);
// console.log(cine[1][2]);

/**************************
 * OPERACIONES CON ARRAYS *
 **************************/

//Introducir datos a un array
var agrega = "";

do {
    agrega = prompt("¿Qué pelicula deseas agregar?");
    peliculas.push(agrega);
} while (agrega != 'SALIR');
    
//ELIMINA EL ULTIMO REGISTRO DE UN ARRAY
peliculas.pop();

console.log(peliculas);

//ELIMINAR UN REGISTRO SELECTIVAMENTE
var indice = peliculas.indexOf('Gran torino');
if (indice -1) {
    peliculas.splice(indice,1);
}
console.log(peliculas);

// Convertir un array a un string
var peliculas_string = peliculas.join();

console.log(peliculas_string);