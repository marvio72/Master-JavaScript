'use strict';

//Transformación de Textos
var numero = 444;
var texto1 = "     Bienvenido al curso de JavaScript de Victor Robles    ";
var texto2 = "es muy buen curso";

//Remplaza un texto por otro
var busqueda = texto1.replace('JavaScript', 'Symfony');
console.log(busqueda);

//Elimina lo anterior al caracter que le indiquemos y si le damos un segundo parametro es como hacer un rango
var busqueda = texto1.slice(14,22);
console.log(busqueda);

//Con respecto al caracter que le indiquemos, nos crea un arreglo separando cada palabra
var busqueda = texto1.split(' ');
console.log(busqueda);

//Limpia los espacios vacios por delante y por detras de la cadena de caracteres
var busqueda = texto1.trim();
console.log(busqueda);