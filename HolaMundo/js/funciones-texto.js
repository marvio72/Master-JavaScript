'use strict';

//Transformación de Textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de curso Victor Robles";
var texto2 = "es muy buen curso";

//Nos indica en que numero de caracter se encuentra la palabra que estamos buscando
//podemos usar tambien search en lugar de indexOf
var busqueda = texto1.indexOf('curso');
console.log(busqueda);

//Nos indica en que numero de caracter se encuentra la ultima coincidencia de la busqueda
var busqueda = texto1.lastIndexOf('curso');
console.log(busqueda);

//Nos entrega la información en un array
var busqueda = texto1.match('curso');
console.log(busqueda);

var busqueda = texto1.match(/curso/g);
console.log(busqueda);

//Extrae los caracteres que le indiquemos
var busqueda = texto1.substr(23,10);
console.log(busqueda);

//Nos entrega la letra que se encuentra en la posicion que le indiquemos
var busqueda = texto1.charAt(44);
console.log(busqueda);

//Nos indica true o false si los caracteres que indicamos estan al inicio de la cadena de texto
var busqueda = texto1.startsWith('Bienvenido');
console.log(busqueda);

//Al final
var busqueda = texto1.endsWith('Robles');
console.log(busqueda);

//En cualquier parte
var busqueda = texto1.includes('curso');
console.log(busqueda);