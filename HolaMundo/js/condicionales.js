'use strict';

// condicional if
// Si A es igual(diferente, mayor, menor) a B entonces haz algo

var edad1 = 30;
var edad2 = 12

// Si pasa esto
if (edad1 > edad2) {
    //Ejecuta esto
    console.log('Edad uno es mayor que Edad dos');
}else{
    console.log('La edad uno es inferior');
}
/*
//Operadores relacionales
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

var edad = 47;
var nombre = 'Marco Ruvalcaba';

if (edad >= 18) {
    console.log('Eres mayor de edad tienes '+edad+' años, y tu nombre es: ' + nombre);
    if (edad <= 33) {
        console.log('Todavia eres millenial');
     } else if (edad >= 70) {
        console.log('Eres anciano');
    }else{
        console.log('Ya no eres millenial');}
    }else{
    console.log('Eres menor de edad');
    }


