'use strict';

// condicional if
// Si A es igual(diferente, mayor, menor) a B entonces haz algo

var edad1 = 30;
var edad2 = 12;

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


/* Operadores Lógicos
AND(Y): &&
OR(O): ||
NEGACIÓN: !
*/

//NEGACIÓN
var year = 2018;
if (year != 2016) {
    console.log("El año no es 2016 realmente es: "+year);
}

//AND
if (year >= 2000 && year <= 2020) {
    console.log('Estamos en la era actual');
}else{
    console.log('Estamos en la era pos Moderna');
}

//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log('El año acaba en 8');
}else{
    console.log('AÑO NO REGISTRADO');
}