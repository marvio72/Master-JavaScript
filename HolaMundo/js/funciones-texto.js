'use strict';

//Transformación de Textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

//convierte cualquier dato a un string
var dato = numero.toString(); 
console.log(typeof dato);
//convertir todos los caracteres en Mayusculas
dato = texto1.toUpperCase();
console.log(dato);
//A minusculas
dato = texto1.toLowerCase();
console.log(dato);

//Calcular longitud
var nombre = "Marco Ruvalcaba";
console.log(nombre.length);

var arreglo = ["Ola","Hola"];
console.log(arreglo.length);

//Concatenar texto Unir
var textoTotal = texto1+" "+texto2;
console.log(textoTotal);
//Usando la funcion concat para unir un texto
var textoTotal = texto1.concat(" "+texto2);
console.log(textoTotal);